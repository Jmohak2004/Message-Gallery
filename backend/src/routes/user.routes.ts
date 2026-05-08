import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
import { requireAuth } from '../middlewares/auth.middleware';

const router = Router();

router.use(requireAuth);

router.post('/favorites', UserController.addFavorite);
router.get('/favorites', UserController.getFavorites);
router.delete('/favorites/:favoriteId', UserController.removeFavorite);
router.get('/history', UserController.getHistory);

export default router;
