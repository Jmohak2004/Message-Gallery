import { Request, Response } from 'express';
import * as ExampleService from '../services/example.service';
import * as CategoryService from '../services/category.service';

export const createExample = async (req: Request, res: Response) => {
  try {
    const { title, text, categoryId } = req.body;
    
    if (!title || !text || !categoryId) {
      return res.status(400).json({ error: 'Title, text, and categoryId are required' });
    }

    if (!categoryId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid category ID format' });
    }

    const category = await CategoryService.getCategoryById(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const example = await ExampleService.createExample(title, text, categoryId);
    
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
