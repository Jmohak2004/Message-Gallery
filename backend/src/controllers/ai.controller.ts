import { Request, Response } from 'express';
import * as AiService from '../services/ai.service';

export const generate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { prompt, tone } = req.body;
    
    const message = await AiService.generateMessage(prompt, tone);
    
    res.status(200).json({ result: message });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
};
