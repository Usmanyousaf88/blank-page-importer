import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const GitHubSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      toast({
        title: "Please enter a repository",
        description: "Enter a repository in the format username/repository",
        variant: "destructive",
      });
      return;
    }

    // Here we'll implement the GitHub API integration in the next iteration
    console.log("Searching for:", searchQuery);
    toast({
      title: "Coming Soon",
      description: "GitHub repository import will be available in the next update",
    });
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto space-y-8">
      <div className="glass-card p-8 rounded-2xl space-y-6">
        <h2 className="text-2xl font-medium text-center">Import GitHub Repository</h2>
        <p className="text-muted-foreground text-center">
          Enter a GitHub repository URL or username/repository
        </p>
        
        <div className="flex gap-2">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="e.g. username/repository"
            className="h-12"
          />
          <Button type="submit" size="lg" className="h-12 px-6">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </form>
  );
};