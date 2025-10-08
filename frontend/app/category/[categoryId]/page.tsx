'use client';

import { useEffect, useState, use } from 'react';
import { Example, CategoryResponse } from '@/types';
import ExampleGrid from '@/components/templates/ExampleGrid';

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>; // params is now a Promise
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Use React.use() to unwrap the promise
  const { categoryId } = use(params);

  const [categoryData, setCategoryData] = useState<CategoryResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`https://message-gallery-1.onrender.com/api/data/${categoryId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch category data');
        }

        const data = await response.json();
        setCategoryData(data);
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to load category data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryData();
  }, [categoryId]); // use the unwrapped categoryId

  const handleEdit = (example: Example) => {
    console.log('Editing example:', example);
  };

  if (isLoading) return <div className="text-center mt-24">Loading...</div>;
  if (error) return <div className="text-center mt-24 text-red-600">{error}</div>;
  if (!categoryData) return <div className="text-center mt-24">Category not found</div>;

  return (
    <div className="container mx-auto mt-24 p-4">
      <h1 className="text-2xl font-bold mb-6">{categoryData.category}</h1>
      <ExampleGrid examples={categoryData.examples} onEdit={handleEdit} />
    </div>
  );
}
