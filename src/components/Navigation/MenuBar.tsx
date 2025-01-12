import React from 'react';
import { cn } from "@/lib/utils";
import { Search as SearchInput } from '../ui/search';

interface MenuItem {
  label: string;
  items: string[];
}

interface MenuBarProps {
  className?: string;
  onFilterChange?: (selectedFilters: string[]) => void;
  searchValue?: string;
  onSearch?: (value: string) => void;
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

const MenuBar: React.FC<MenuBarProps> = ({ 
  className, 
  onFilterChange,
  searchValue = '',
  onSearch
}) => {
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);

  const handleFilterToggle = (item: string) => {
    const newFilters = selectedFilters.includes(item)
      ? selectedFilters.filter(i => i !== item)
      : [...selectedFilters, item];
    
    setSelectedFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Search Input */}
      <div className="mb-6">
        <SearchInput
          value={searchValue}
          onSearch={onSearch}
          onClear={() => onSearch?.('')}
          placeholder="Search designs..."
        />
      </div>

      {/* Filter Categories */}
      <div className="space-y-6">
        {menuCategories.map((category) => (
          <div key={category.label} className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">
              {category.label}
            </h3>
            <div className="space-y-1.5">
              {category.items.map((item) => (
                <button
                  key={item}
                  className={cn(
                    "w-full text-left px-3 py-1.5 text-sm rounded-md",
                    "hover:bg-accent/50 transition-colors",
                    selectedFilters.includes(item)
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-foreground"
                  )}
                  onClick={() => handleFilterToggle(item)}
                >
                  <span className="flex items-center">
                    <span className={cn(
                      "w-2 h-2 rounded-full mr-2",
                      selectedFilters.includes(item)
                        ? "bg-primary"
                        : "bg-muted"
                    )} />
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Filters */}
      {selectedFilters.length > 0 && (
        <div className="mt-6 pt-6 border-t">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">Active Filters</span>
            <button
              onClick={() => onFilterChange?.([])}
              className="text-xs text-primary hover:text-primary/80"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedFilters.map((filter) => (
              <span
                key={filter}
                className="group inline-flex items-center px-2 py-1 rounded-md
                  text-xs font-medium bg-primary/10 text-primary"
              >
                {filter}
                <button
                  className="ml-1.5 opacity-60 group-hover:opacity-100"
                  onClick={() => handleFilterToggle(filter)}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuBar;
