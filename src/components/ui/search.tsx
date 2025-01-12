import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "./input"
import { Search as SearchIcon, X } from "lucide-react"
import { Button } from "./Button/button"

export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void
  onClear?: () => void
  className?: string
  value?: string
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, onSearch, onClear, value, ...props }, ref) => {
    const [searchValue, setSearchValue] = React.useState(value || "")

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setSearchValue(newValue)
      onSearch?.(newValue)
    }

    const handleClear = () => {
      setSearchValue("")
      onClear?.()
    }

    React.useEffect(() => {
      if (value !== undefined) {
        setSearchValue(value)
      }
    }, [value])

    return (
      <div className={cn("relative w-full", className)}>
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        <Input
          ref={ref}
          value={searchValue}
          onChange={handleSearch}
          className="w-full pl-10 pr-10"
          placeholder="Search..."
          {...props}
        />
        {searchValue && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2 p-1 hover:bg-transparent"
            onClick={handleClear}
          >
            <X className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </div>
    )
  }
)

Search.displayName = "Search"

export { Search }
