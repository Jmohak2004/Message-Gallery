import { Router } from 'express';
import * as AiController from '../controllers/ai.controller';
import { validate } from '../middlewares/validate.middleware';
import { generateSchema } from '../validations/ai.validation';
import { requireAuth } from '../middlewares/auth.middleware';

const router = Router();

// Protect the AI route so only logged-in users can use it
router.post('/generate', requireAuth, validate(generateSchema), AiController.generate);

export default router;
