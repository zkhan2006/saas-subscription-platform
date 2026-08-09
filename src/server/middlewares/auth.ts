import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../lib/prisma';
import { Role } from '@prisma/client';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: Role;
  };
}

export const authenticate = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const userId = req.headers['x-user-id'] as string;

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized: Missing User Identification' });
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized: User not found' });
  }

  req.user = { id: user.id, email: user.email, role: user.role };
  next();
};

export const requireRole = (roles: Role[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden: Insufficient privileges' });
    }
    next();
  };
};