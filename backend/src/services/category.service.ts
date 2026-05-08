import Category from '../models/Category';

export const getAllCategories = async () => {
  return await Category.find().select('_id name');
};

export const getCategoryById = async (id: string) => {
  return await Category.findById(id);
};

export const createCategory = async (name: string, description: string) => {
  const existingCategory = await Category.findOne({ name });
  if (existingCategory) {
    throw new Error('Category already exists');
  }

  const category = new Category({ name, description: description || '' });
  return await category.save();
};
