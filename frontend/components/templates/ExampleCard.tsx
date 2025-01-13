import { Example } from '@/types';
import { PencilIcon } from 'lucide-react';
// example card css using gpt
interface ExampleCardProps {
  example: Example;
  onEdit: (example: Example) => void;
}

const ExampleCard = ({ example, onEdit }: ExampleCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">
        {example.title}
      </h3>
      <p className="text-gray-600 text-sm whitespace-pre-line mb-8">
        {example.text}
      </p>
      <button 
        className="absolute bottom-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        onClick={() => onEdit(example)}
      >
        <PencilIcon className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
};

export default ExampleCard;