'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/lib/api';

interface Category {
  id: string;
  category: string;
}

const LowerNav = () => {
  const pathname = usePathname();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchCategories = async () => {
      try {
        const data = await api.getCategories();
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
    if (categoryId && categoryId !== '') {
      setSelectedCategory(categoryId);
    }
  }, [pathname]);

  if (!mounted) return null;

  return (
    <div className="fixed top-16 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto py-3 space-x-2 md:space-x-4 no-scrollbar scroll-smooth">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              onClick={() => setSelectedCategory(category.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200
                ${selectedCategory === category.id 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105' 
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
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
