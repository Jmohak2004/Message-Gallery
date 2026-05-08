import { Router } from 'express';
import * as ExampleController from '../controllers/example.controller';
import { validate } from '../middlewares/validate.middleware';
import { createExampleSchema } from '../validations/example.validation';

const router = Router();

router.post('/', validate(createExampleSchema), ExampleController.createExample);

export default router;
