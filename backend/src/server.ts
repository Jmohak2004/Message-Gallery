import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import connectDB from './utils/db';

import dataRoutes from './routes/data.routes';
import categoryRoutes from './routes/category.routes';
import exampleRoutes from './routes/example.routes';
import authRoutes from './routes/auth.routes';
import { errorHandler } from './middlewares/error.middleware';
import { morganMiddleware } from './middlewares/morgan.middleware';
import { logger } from './utils/logger';

dotenv.config();

const app = express();
const port: number = Number(process.env.PORT) || 5050;

// Connect to MongoDB
connectDB().catch(err => logger.error(`MongoDB connection error: ${err}`));

// Security Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
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
  res.send('Welcome to Valueye Technologies!');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/examples', exampleRoutes);

// Global Error Handler
app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
