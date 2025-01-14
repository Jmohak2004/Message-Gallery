import express, { Request, Response } from 'express';
var cors = require('cors')
import dotenv from 'dotenv';
import data from './data/data';

dotenv.config();

const app = express();
const port: number = Number(process.env.PORT) || 5050;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to Valueye Technologies!');
});

// Endpoint to fetch all categories
app.get('/api/data', (_req: Request, res: Response) => {
  try {
    const categories = data.map(item => ({
      id: item.id,
      category: item.category
    }));
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to fetch a specific category's examples
app.get('/api/data/:categoryId', (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const category = data.find(item => item.id === categoryId);

    if (category) {
      res.status(200).json({
        category: category.category,
        examples: category.examples
      });
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



