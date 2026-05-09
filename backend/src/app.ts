import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import dataRoutes from './routes/data.routes';
import categoryRoutes from './routes/category.routes';
import exampleRoutes from './routes/example.routes';
import authRoutes from './routes/auth.routes';
import aiRoutes from './routes/ai.routes';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middlewares/error.middleware';
import { morganMiddleware } from './middlewares/morgan.middleware';

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Logging Middleware
app.use(morganMiddleware);

// Body parsing Middleware
app.use(express.json());

// Root route
app.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to MessageMate API!');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/data', dataRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/examples', exampleRoutes);
app.use('/api/ai', aiRoutes);

// Global Error Handler
app.use(errorHandler);

export default app;
