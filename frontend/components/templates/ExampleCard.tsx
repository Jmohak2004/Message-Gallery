import { Example } from '@/types';
import { ClipboardCopy, Check } from 'lucide-react';
import { useState } from 'react';

interface ExampleCardProps {
  example: Example;
}

const ExampleCard = ({ example }: ExampleCardProps) => {
  const [isCopied, setIsCopied] = useState(false);

  // Function to handle copying text to the clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(example.text).then(() => {
      setIsCopied(true);
      // Reset the icon back to the copy icon after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

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
        onClick={handleCopy}
        aria-label="Copy text"
      >
        {isCopied ? (
          <Check className="w-5 h-5 text-green-600" />
        ) : (
          <ClipboardCopy className="w-5 h-5 text-gray-600" />
        )}
      </button>
    </div>
  );
};

export default ExampleCard;