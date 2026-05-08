import { Router } from 'express';
import * as CategoryController from '../controllers/category.controller';
import { validate } from '../middlewares/validate.middleware';
import { categoryIdSchema } from '../validations/category.validation';

const router = Router();

router.get('/', CategoryController.getCategories);
router.get('/:categoryId', validate(categoryIdSchema), CategoryController.getCategoryData);

export default router;
