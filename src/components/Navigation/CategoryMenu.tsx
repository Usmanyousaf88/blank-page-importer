import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface MenuItem {
  label: string;
  items: string[];
}

interface CategoryMenuProps {
  onSelect: (item: string) => void;
  selectedItems: string[];
}

const menuCategories: MenuItem[] = [
  {
    label: "Industries",
    items: [
      "SaaS", "E-commerce", "Real Estate", "Restaurant", 
      "Business", "Health & Wellness", "Social", "Education",
      "Media", "Finance"
    ]
  },
  {
    label: "Features",
    items: ["Dashboard", "Portfolio", "Blog", "Search", "Map", "Menu"]
  },
  {
    label: "Technologies",
    items: ["React", "TypeScript", "Firebase", "Node.js", "Supabase", "OpenAI"]
  },
  {
    label: "Design",
    items: ["Modern", "Creative", "Personal"]
  }
];

const CategoryMenu: React.FC<CategoryMenuProps> = ({ onSelect, selectedItems }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="relative">
      <div className="flex space-x-4 p-4 bg-gray-900">
        {menuCategories.map((category) => (
          <div key={category.label} className="relative">
            <button
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md",
                "hover:bg-gray-800 transition-colors",
                activeCategory === category.label ? "bg-gray-800" : "bg-transparent"
              )}
              onClick={() => setActiveCategory(
                activeCategory === category.label ? null : category.label
              )}
            >
              {category.label}
            </button>
            
            {activeCategory === category.label && (
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu">
                  {category.items.map((item) => (
                    <button
                      key={item}
                      className={cn(
                        "block w-full text-left px-4 py-2 text-sm",
                        "hover:bg-gray-700 transition-colors",
                        selectedItems.includes(item) 
                          ? "bg-gray-700 text-white" 
                          : "text-gray-300"
                      )}
                      onClick={() => onSelect(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Selected items display */}
      {selectedItems.length > 0 && (
        <div className="flex flex-wrap gap-2 p-4">
          {selectedItems.map((item) => (
            <span
              key={item}
              className="inline-flex items-center px-3 py-1 rounded-full 
                text-sm font-medium bg-gray-700 text-white"
            >
              {item}
              <button
                className="ml-2 text-gray-400 hover:text-white"
                onClick={() => onSelect(item)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;
