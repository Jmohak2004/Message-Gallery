'use client';
//lower nav , used gpt for css
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface Category {
  id: string;
  category: string;
}

const LowerNav = () => {
  const pathname = usePathname();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5050/api/data');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        setCategories(data);
        if (data.length > 0 && !selectedCategory) {
          setSelectedCategory(data[0].id);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [selectedCategory]);

  useEffect(() => {
    const categoryId = pathname.split('/').pop();
    if (categoryId) {
      setSelectedCategory(categoryId);
    }
  }, [pathname]);

  return (
    <div className="fixed top-16 left-0 right-0 bg-white shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto py-3 space-x-4 no-scrollbar">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {category.category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LowerNav;
