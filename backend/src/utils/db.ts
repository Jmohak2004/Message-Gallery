import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || '';

if (!MONGO_URL) {
  throw new Error('Please define the MONGO_URL environment variable in .env file');
}

let cached = global as any;

if (!cached.mongoose) {
  cached.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.mongoose.conn) {
    return cached.mongoose.conn;
  }

  if (!cached.mongoose.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.mongoose.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.mongoose.conn = await cached.mongoose.promise;
    console.log('MongoDB connected successfully');
    return cached.mongoose.conn;
  } catch (error) {
    cached.mongoose.promise = null;
    throw error;
  }
}

export default connectDB;