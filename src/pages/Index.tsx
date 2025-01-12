import { GitHubSearch } from "@/components/GitHubSearch";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full fade-in">
        <GitHubSearch />
      </div>
    </div>
  );
};

export default Index;