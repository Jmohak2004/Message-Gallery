import express, { Request, Response } from 'express';
var cors = require('cors')
import dotenv from 'dotenv';
import connectDB from './utils/db';
import Category from './models/Category';
import Example from './models/Example';

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

// Endpoint to fetch all categories
app.get('/api/data', (_req: Request, res: Response) => {
  const handler = async () => {
    try {
      const categories = await Category.find().select('_id name');
      const formattedCategories = categories.map(category => ({
        id: category._id.toString(),
        category: category.name
      }));
      res.status(200).json(formattedCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  handler();
});

// Endpoint to fetch a specific category's examples
app.get('/api/data/:categoryId', (req: Request, res: Response) => {
  const handler = async () => {
    try {
      const { categoryId } = req.params;
      
      // Validate categoryId format
      if (!categoryId.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ error: 'Invalid category ID format' });
      }

      const category = await Category.findById(categoryId);
      
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }

      const examples = await Example.find({ categoryId }).select('title text');
      
      const formattedExamples = examples.map(example => ({
        id: example._id.toString(),
        title: example.title,
        text: example.text
      }));

      res.status(200).json({
        category: category.name,
        examples: formattedExamples
      });
    } catch (error) {
      console.error('Error fetching category data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  handler();
});

// Endpoint to create a new category
app.post('/api/categories', (req: Request, res: Response) => {
  const handler = async () => {
    try {
      const { name, description } = req.body;
      
      if (!name) {
        return res.status(400).json({ error: 'Category name is required' });
      }

      const existingCategory = await Category.findOne({ name });
      if (existingCategory) {
        return res.status(400).json({ error: 'Category already exists' });
      }

      const category = new Category({
        name,
        description: description || ''
      });

      await category.save();
      
      res.status(201).json({
        id: category._id.toString(),
        name: category.name,
        description: category.description
      });
    } catch (error) {
      console.error('Error creating category:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  handler();
});

// Endpoint to create a new example
app.post('/api/examples', (req: Request, res: Response) => {
  const handler = async () => {
    try {
      const { title, text, categoryId } = req.body;
      
      if (!title || !text || !categoryId) {
        return res.status(400).json({ error: 'Title, text, and categoryId are required' });
      }

      // Validate categoryId format
      if (!categoryId.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ error: 'Invalid category ID format' });
      }

      const category = await Category.findById(categoryId);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }

      const example = new Example({
        title,
        text,
        categoryId
      });

      await example.save();
      
      res.status(201).json({
        id: example._id.toString(),
        title: example.title,
        text: example.text,
        categoryId: example.categoryId
      });
    } catch (error) {
      console.error('Error creating example:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  handler();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



