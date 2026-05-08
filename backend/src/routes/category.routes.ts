import { Router } from 'express';
import * as CategoryController from '../controllers/category.controller';

const router = Router();

router.post('/', CategoryController.createCategory);

export default router;
