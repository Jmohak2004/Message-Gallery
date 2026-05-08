import { z } from 'zod';

export const createCategorySchema = z.object({
  body: z.object({
    name: z.string({
      message: 'Category name is required',
    }).min(2, 'Name must be at least 2 characters'),
    description: z.string().optional(),
  }),
});

export const categoryIdSchema = z.object({
  params: z.object({
    categoryId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid category ID format'),
  }),
});
