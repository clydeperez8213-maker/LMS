import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">BLUEBOOK</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-1">
          <Link to="/">
            <Button 
              variant="ghost" 
              className={isActive("/") ? "text-primary" : "text-foreground hover:text-primary"}
            >
              Dashboard
            </Button>
          </Link>
          <Link to="/books">
            <Button 
              variant="ghost" 
              className={isActive("/books") ? "text-primary" : "text-foreground hover:text-primary"}
            >
              Books
            </Button>
          </Link>
          <Link to="/my-books">
            <Button 
              variant="ghost" 
              className={isActive("/my-books") ? "text-primary" : "text-foreground hover:text-primary"}
            >
              My Books
            </Button>
          </Link>
          <Link to="/profile">
            <Button 
              variant="ghost" 
              className={isActive("/profile") ? "text-primary" : "text-foreground hover:text-primary"}
            >
              Profile
            </Button>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild className="gradient-hero text-hero-text hover:opacity-90 border-0">
            <Link to="/login">Switch Role</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
