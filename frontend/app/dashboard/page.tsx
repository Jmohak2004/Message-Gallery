"use client";

import React, { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { Heart, History, Trash2, Copy, Check, User as UserIcon } from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'favorites' | 'history'>('favorites');
  const [favorites, setFavorites] = useState<any[]>([]);
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { user, isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    fetchData();
  }, [isAuthenticated]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [favs, hist] = await Promise.all([
        api.getFavorites(),
        api.getHistory()
      ]);
      setFavorites(favs);
      setHistory(hist);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDeleteFavorite = async (id: string) => {
    try {
      await api.removeFavorite(id);
      setFavorites(favorites.filter(f => f._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg">
            <UserIcon className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>

        <div className="mb-8 flex gap-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('favorites')}
            className={`flex items-center gap-2 pb-4 text-sm font-semibold transition-all ${
              activeTab === 'favorites' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Heart className="h-4 w-4" />
            Favorites
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex items-center gap-2 pb-4 text-sm font-semibold transition-all ${
              activeTab === 'history' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <History className="h-4 w-4" />
            History
          </button>
        </div>

        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid gap-6">
            {activeTab === 'favorites' ? (
              favorites.length > 0 ? (
                favorites.map((fav) => (
                  <div key={fav._id} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between group">
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium">{fav.exampleId?.text || fav.customText}</p>
                      <p className="mt-1 text-xs text-gray-400">Added on {new Date(fav.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center gap-2 self-end md:self-center">
                      <button
                        onClick={() => handleCopy(fav.exampleId?.text || fav.customText, fav._id)}
                        className="p-2 rounded-xl hover:bg-gray-50 transition-all text-gray-400 hover:text-indigo-600"
                      >
                        {copiedId === fav._id ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                      </button>
                      <button
                        onClick={() => handleDeleteFavorite(fav._id)}
                        className="p-2 rounded-xl hover:bg-red-50 transition-all text-gray-400 hover:text-red-600"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20 text-gray-500">No favorites yet. Start hearting messages!</div>
              )
            ) : (
              history.length > 0 ? (
                history.map((item) => (
                  <div key={item._id} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 group">
                    <div className="mb-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1">Prompt</p>
                      <p className="text-sm text-gray-600 italic">"{item.prompt}"</p>
                    </div>
                    <div className="relative rounded-xl bg-gray-50 p-4 border border-gray-100">
                      <p className="text-gray-800">{item.response}</p>
                      <button
                        onClick={() => handleCopy(item.response, item._id)}
                        className="absolute top-2 right-2 p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        {copiedId === item._id ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-indigo-600" />}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20 text-gray-500">No history yet. Try the AI Generator!</div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
