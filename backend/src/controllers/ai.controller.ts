import { Request, Response } from 'express';
import * as AiService from '../services/ai.service';
import * as UserService from '../services/user.service';
import { AuthRequest } from '../middlewares/auth.middleware';

export const generate = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { prompt, tone } = req.body;
    const userId = req.user!.id;
    
    const message = await AiService.generateMessage(prompt, tone);
    
    // Save to history
    await UserService.addHistory(userId, prompt, message);
    
    res.status(200).json({ result: message });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
};
