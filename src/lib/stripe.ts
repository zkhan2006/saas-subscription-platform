import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder_key';

export const stripe = new Stripe(apiKey, {
  apiVersion: '2025-02-24.acacia' as any,
  typescript: true,
});