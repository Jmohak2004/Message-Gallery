import Example from '../models/Example';

export const getExamplesByCategoryId = async (categoryId: string) => {
  return await Example.find({ categoryId }).select('title text');
};

export const createExample = async (title: string, text: string, categoryId: string) => {
  const example = new Example({ title, text, categoryId });
  return await example.save();
};
