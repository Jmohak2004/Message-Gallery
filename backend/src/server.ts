import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db';

import dataRoutes from './routes/data.routes';
import categoryRoutes from './routes/category.routes';
import exampleRoutes from './routes/example.routes';
import { errorHandler } from './middlewares/error.middleware';

dotenv.config();

const app = express();
const port: number = Number(process.env.PORT) || 5050;

// Connect to MongoDB
connectDB().catch(console.error);

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to Valueye Technologies!');
});

// Routes
app.use('/api/data', dataRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/examples', exampleRoutes);

// Global Error Handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
