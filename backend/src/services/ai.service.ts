import OpenAI from 'openai';
import { logger } from '../utils/logger';

const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY || '';

const openai = new OpenAI({
  apiKey: NVIDIA_API_KEY,
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

export const generateMessage = async (prompt: string, tone: string = 'professional') => {
  try {
    if (!NVIDIA_API_KEY) {
      throw new Error('NVIDIA_API_KEY is not configured');
    }

    const systemPrompt = `You are an expert copywriter. Generate a message with a ${tone} tone based on the following prompt. Keep it concise, clear, and ready to be copied. Output ONLY the message, no extra text.`;

    const completion = await openai.chat.completions.create({
      model: 'google/gemma-2-9b-it', // Using a generic Gemma model supported by NIM
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
    });

    return completion.choices[0]?.message?.content?.trim() || '';
  } catch (error) {
    logger.error(`AI Generation Error: ${error}`);
    throw new Error('Failed to generate message from AI');
  }
};
