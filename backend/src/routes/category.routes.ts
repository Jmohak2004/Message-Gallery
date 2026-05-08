import { Router } from 'express';
import * as CategoryController from '../controllers/category.controller';
import { validate } from '../middlewares/validate.middleware';
import { createCategorySchema } from '../validations/category.validation';

const router = Router();

router.post('/', validate(createCategorySchema), CategoryController.createCategory);

export default router;
