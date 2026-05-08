import { z } from 'zod';

export const createExampleSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }).min(3, 'Title must be at least 3 characters'),
    text: z.string({
      required_error: 'Text is required',
    }).min(5, 'Text must be at least 5 characters'),
    categoryId: z.string({
      required_error: 'CategoryId is required',
    }).regex(/^[0-9a-fA-F]{24}$/, 'Invalid category ID format'),
  }),
});
