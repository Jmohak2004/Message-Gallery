'use client';
// dynamically routed pages 
import { useEffect, useState } from 'react';
import { Example, CategoryResponse } from '@/types';
import ExampleGrid from '@/components/templates/ExampleGrid';

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  const [categoryData, setCategoryData] = useState<CategoryResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`http://localhost:5050/api/data/${params.categoryId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch category data');
        }
        
        const data = await response.json();
        setCategoryData(data);
      } catch (error) {
        console.error('Error:', error);
        setError('Failed to load category data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryData();
  }, [params.categoryId]);

  const handleEdit = (example: Example) => {
    
    console.log('Editing example:', example);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto mt-24 p-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto mt-24 p-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  if (!categoryData) {
    return (
      <div className="container mx-auto mt-24 p-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg text-gray-600">Category not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-24 p-4">
      <h1 className="text-2xl font-bold mb-6">{categoryData.category}</h1>
      <ExampleGrid 
        examples={categoryData.examples} 
        onEdit={handleEdit}
      />
    </div>
  );
}