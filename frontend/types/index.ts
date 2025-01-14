export interface Example {
    id: string;
    title: string;
    text: string;
  }
  
  export interface Category {
    id: string;
    category: string;
    examples: Example[];
  }
  
  export interface CategoryResponse {
    category: string;
    examples: Example[];
  }
