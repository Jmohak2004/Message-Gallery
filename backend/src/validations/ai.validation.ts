import { z } from 'zod';

export const generateSchema = z.object({
  body: z.object({
    prompt: z.string({ message: 'Prompt is required' }).min(5, 'Prompt must be at least 5 characters'),
    tone: z.string().optional(),
  }),
});
