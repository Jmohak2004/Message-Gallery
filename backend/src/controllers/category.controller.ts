import { Request, Response } from 'express';
import * as CategoryService from '../services/category.service';
import * as ExampleService from '../services/example.service';

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await CategoryService.getAllCategories();
    const formattedCategories = categories.map((category: any) => ({
      id: category._id.toString(),
      category: category.name
    }));
    res.status(200).json(formattedCategories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getCategoryData = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    
    if (!categoryId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid category ID format' });
    }

    const category = await CategoryService.getCategoryById(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const examples = await ExampleService.getExamplesByCategoryId(categoryId);
    const formattedExamples = examples.map((example: any) => ({
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

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    
    if (!name) {
      return res.status(400).json({ error: 'Category name is required' });
    }

    const category = await CategoryService.createCategory(name, description);
    
    res.status(201).json({
      id: category._id.toString(),
      name: category.name,
      description: category.description
    });
  } catch (error: any) {
    if (error.message === 'Category already exists') {
       return res.status(400).json({ error: error.message });
    }
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
