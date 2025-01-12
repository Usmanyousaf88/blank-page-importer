import React, { useState } from 'react';
import CategoryMenu from './CategoryMenu';

const FilterableNavigation: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterToggle = (item: string) => {
    setSelectedFilters(prev => 
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  return (
    <nav className="w-full bg-gray-900 shadow-lg">
      <CategoryMenu
        onSelect={handleFilterToggle}
        selectedItems={selectedFilters}
      />
    </nav>
  );
};

export default FilterableNavigation;
