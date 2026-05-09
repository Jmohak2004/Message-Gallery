'use client';

import { useEffect, useState, use } from 'react';
import { Example, CategoryResponse } from '@/types';
import ExampleGrid from '@/components/templates/ExampleGrid';
import { api } from '@/lib/api';

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = use(params);
  const [categoryData, setCategoryData] = useState<CategoryResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await api.getCategory(categoryId);
        setCategoryData(data);
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to load category data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryData();
  }, [categoryId]);

  const handleEdit = (example: Example) => {
    console.log('Editing example:', example);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
      </div>
    );
  }

  if (error || !categoryData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <p className="text-gray-500 mb-4">{error || 'Category not found'}</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg shadow-indigo-100"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pt-32 px-4 md:px-8 pb-20">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
          {categoryData.category}
        </h1>
        <div className="h-1.5 w-20 bg-indigo-600 rounded-full" />
      </div>
      <ExampleGrid examples={categoryData.examples} onEdit={handleEdit} />
    </div>
  );
}
