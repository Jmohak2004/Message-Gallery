import Favorite from '../models/Favorite';
import History from '../models/History';

export const addFavorite = async (userId: string, exampleId?: string, customText?: string) => {
  if (!exampleId && !customText) {
    throw new Error('Either exampleId or customText is required');
  }
  const favorite = new Favorite({ userId, exampleId, customText });
  return await favorite.save();
};

export const getFavorites = async (userId: string) => {
  return await Favorite.find({ userId }).populate('exampleId').sort({ createdAt: -1 });
};

export const removeFavorite = async (userId: string, favoriteId: string) => {
  return await Favorite.findOneAndDelete({ _id: favoriteId, userId });
};

export const addHistory = async (userId: string, prompt: string, response: string) => {
  const history = new History({ userId, prompt, response });
  return await history.save();
};

export const getHistory = async (userId: string) => {
  return await History.find({ userId }).sort({ createdAt: -1 }).limit(50);
};
