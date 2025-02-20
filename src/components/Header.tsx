
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-semibold text-primary">
              EthioStartup Connect
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/events" className="text-gray-600 hover:text-primary transition-colors">
              Events
            </a>
            <a href="/resources" className="text-gray-600 hover:text-primary transition-colors">
              Resources
            </a>
            <a href="/jobs" className="text-gray-600 hover:text-primary transition-colors">
              Jobs
            </a>
            <Button variant="ghost" className="text-gray-600 hover:text-primary">
              Sign In
            </Button>
            <Button>Join Now</Button>
          </nav>

          <button className="md:hidden p-2">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};
