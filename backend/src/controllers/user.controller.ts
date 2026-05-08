import { Request, Response } from 'express';
import * as UserService from '../services/user.service';
import { AuthRequest } from '../middlewares/auth.middleware';

export const addFavorite = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const { exampleId, customText } = req.body;
    const favorite = await UserService.addFavorite(userId, exampleId, customText);
    res.status(201).json(favorite);
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Internal server error' });
  }
};

export const getFavorites = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const favorites = await UserService.getFavorites(userId);
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const removeFavorite = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const { favoriteId } = req.params;
    await UserService.removeFavorite(userId, favoriteId);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getHistory = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const history = await UserService.getHistory(userId);
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
