import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder_key';

export const stripe = new Stripe(apiKey, {
  apiVersion: '2023-10-16',
  typescript: true,
});