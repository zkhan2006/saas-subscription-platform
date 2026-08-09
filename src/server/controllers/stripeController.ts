import { Response } from 'express';
import { AuthenticatedRequest } from '../middlewares/auth';
import { stripe } from '../../lib/stripe';
import { prisma } from '../../lib/prisma';

export const createCheckoutSession = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { priceId } = req.body;
    const userId = req.user!.id;

    let user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user?.stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user?.email,
        metadata: { userId: user!.id },
      });

      user = await prisma.user.update({
        where: { id: userId },
        data: { stripeCustomerId: customer.id },
      });
    }

    const session = await stripe.checkout.sessions.create({
      customer: user.stripeCustomerId!,
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: `${process.env.CLIENT_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/pricing`,
      metadata: { userId },
    });

    return res.status(200).json({ url: session.url });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const createCustomerPortal = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user!.id } });

    if (!user?.stripeCustomerId) {
      return res.status(400).json({ error: 'No active billing profile found.' });
    }

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: user.stripeCustomerId,
      return_url: `${process.env.CLIENT_URL}/dashboard`,
    });

    return res.status(200).json({ url: portalSession.url });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};