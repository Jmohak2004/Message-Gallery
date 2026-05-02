const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5050';

export const api = {
  // Fetch all categories
  getCategories: async () => {
    const response = await fetch(`${API_URL}/api/data`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json();
  },

  // Fetch category by ID
  getCategory: async (categoryId: string) => {
    const response = await fetch(`${API_URL}/api/data/${categoryId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch category data');
    }
    return response.json();
  },

  // Create a new category
  createCategory: async (name: string, description?: string) => {
    const response = await fetch(`${API_URL}/api/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    });
    if (!response.ok) {
      throw new Error('Failed to create category');
    }
    return response.json();
  },

  // Create a new example
  createExample: async (title: string, text: string, categoryId: string) => {
    const response = await fetch(`${API_URL}/api/examples`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, text, categoryId }),
    });
    if (!response.ok) {
      throw new Error('Failed to create example');
    }
    return response.json();
  },
};