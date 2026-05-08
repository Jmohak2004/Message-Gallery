import { Router } from 'express';
import * as ExampleController from '../controllers/example.controller';

const router = Router();

router.post('/', ExampleController.createExample);

export default router;
