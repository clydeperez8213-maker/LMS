import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const adminNav = [
  { label: "Overview", to: "/admin" },
  { label: "Approvals", to: "/admin/approvals" },
  { label: "Reports", to: "/admin/reports" },
  { label: "Borrowed Books", to: "/admin/borrowed-books" },
  { label: "Settings", to: "/admin/settings" },
];

const AdminHeader = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/admin" className="text-xl font-bold text-primary">
          Admin Console
        </Link>
        <div className="hidden md:flex items-center gap-2">
          {adminNav.map((item) => (
            <Link key={item.to} to={item.to}>
              <Button
                variant="ghost"
                className={isActive(item.to) ? "text-primary" : "text-foreground hover:text-primary"}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/login">
            <Button variant="outline">Switch Role</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;

