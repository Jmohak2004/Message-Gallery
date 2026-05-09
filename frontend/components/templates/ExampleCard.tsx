import { Example } from '@/types';
import { Copy, Check, Heart, Edit2 } from 'lucide-react';
import { useState } from 'react';
import { api } from '@/lib/api';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'sonner';

interface ExampleCardProps {
  example: Example;
  onEdit: (example: Example) => void;
}

const ExampleCard = ({ example, onEdit }: ExampleCardProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isFavoriting, setIsFavoriting] = useState(false);
  const { isAuthenticated } = useAuthStore();

  const handleCopy = () => {
    navigator.clipboard.writeText(example.text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
    toast.success('Copied to clipboard!');
  };

  const handleFavorite = async () => {
    if (!isAuthenticated) {
      toast.error('Please sign in to favorite messages');
      return;
    }
    setIsFavoriting(true);
    try {
      await api.addFavorite(example.id);
      toast.success('Added to favorites!');
    } catch {
      toast.error('Failed to add to favorites');
    } finally {
      setIsFavoriting(false);
    }
  };

  return (
    <div className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold text-gray-900 leading-tight pr-8">
          {example.title}
        </h3>
        <button 
          onClick={handleFavorite}
          disabled={isFavoriting}
          className={`p-2 rounded-xl transition-all ${isFavoriting ? 'animate-pulse' : 'hover:bg-pink-50 text-gray-300 hover:text-pink-500'}`}
        >
          <Heart className="w-5 h-5" />
        </button>
      </div>

      <p className="text-gray-600 text-sm whitespace-pre-line mb-8 flex-1 leading-relaxed">
        {example.text}
      </p>

      <div className="flex items-center gap-2 pt-4 border-t border-gray-50 mt-auto">
        <button 
          onClick={handleCopy}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-50 text-gray-600 font-semibold text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-all"
        >
          {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {isCopied ? 'Copied' : 'Copy'}
        </button>
        <button
          onClick={() => onEdit(example)}
          className="p-2.5 rounded-xl bg-gray-50 text-gray-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
        >
          <Edit2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ExampleCard;
