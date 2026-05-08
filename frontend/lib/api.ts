import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5050';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const api = {
  // Fetch all categories
  getCategories: async () => {
    const { data } = await axiosInstance.get('/api/data');
    return data;
  },

  // Fetch category by ID
  getCategory: async (categoryId: string) => {
    const { data } = await axiosInstance.get(`/api/data/${categoryId}`);
    return data;
  },

  // Create a new category
  createCategory: async (name: string, description?: string) => {
    const { data } = await axiosInstance.post('/api/categories', { name, description });
    return data;
  },

  // Create a new example
  createExample: async (title: string, text: string, categoryId: string) => {
    const { data } = await axiosInstance.post('/api/examples', { title, text, categoryId });
    return data;
  },
  
  // AI Generation
  generateAI: async (prompt: string, tone?: string) => {
    const { data } = await axiosInstance.post('/api/ai/generate', { prompt, tone });
    return data;
  },
  
  // User features
  getHistory: async () => {
    const { data } = await axiosInstance.get('/api/user/history');
    return data;
  },
  
  getFavorites: async () => {
    const { data } = await axiosInstance.get('/api/user/favorites');
    return data;
  },
  
  addFavorite: async (exampleId?: string, customText?: string) => {
    const { data } = await axiosInstance.post('/api/user/favorites', { exampleId, customText });
    return data;
  },
  
  removeFavorite: async (favoriteId: string) => {
    const { data } = await axiosInstance.delete(`/api/user/favorites/${favoriteId}`);
    return data;
  }
};