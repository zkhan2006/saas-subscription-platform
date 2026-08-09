import { Request, Response } from 'express';
import { stripe } from '../../lib/stripe';
import { prisma } from '../../lib/prisma';
import Stripe from 'stripe';

export const handleStripeWebhook = async (req: Request, res: Response) => {
  const sig = req.headers['stripe-signature'] as string;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET || '');
  } catch (err: any) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = subscription.customer as string;

      const user = await prisma.user.findUnique({ where: { stripeCustomerId: customerId } });
      if (!user) break;

      const plan = await prisma.plan.findUnique({
        where: { stripePriceId: subscription.items.data[0].price.id },
      });

      if (plan) {
        await prisma.subscription.upsert({
          where: { userId: user.id },
          create: {
            userId: user.id,
            planId: plan.id,
            stripeSubscriptionId: subscription.id,
            status: subscription.status.toUpperCase() as any,
            currentPeriodStart: new Date(subscription.current_period_start * 1000),
            currentPeriodEnd: new Date(subscription.current_period_end * 1000),
            cancelAtPeriodEnd: subscription.cancel_at_period_end,
          },
          update: {
            planId: plan.id,
            status: subscription.status.toUpperCase() as any,
            currentPeriodStart: new Date(subscription.current_period_start * 1000),
            currentPeriodEnd: new Date(subscription.current_period_end * 1000),
            cancelAtPeriodEnd: subscription.cancel_at_period_end,
          },
        });
      }
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      await prisma.subscription.deleteMany({
        where: { stripeSubscriptionId: subscription.id },
      });
      break;
    }
  }

  return res.status(200).json({ received: true });
};