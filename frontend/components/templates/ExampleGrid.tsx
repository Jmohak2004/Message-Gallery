import { Example } from '@/types';
import ExampleCard from './ExampleCard';

interface ExampleGridProps {
  examples: Example[];
  onEdit: (example: Example) => void;
}

const ExampleGrid = ({ examples, onEdit }: ExampleGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {examples.map((example) => (
        <ExampleCard
          key={example.id}
          example={example}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ExampleGrid;
