import dotenv from 'dotenv';
import connectDB from './utils/db';
import { logger } from './utils/logger';
import app from './app';

dotenv.config();

const port: number = Number(process.env.PORT) || 5050;

connectDB().then(() => {
  app.listen(port, () => {
    logger.info(`Server is running on http://localhost:${port}`);
  });
}).catch(err => logger.error(`MongoDB connection error: ${err}`));
