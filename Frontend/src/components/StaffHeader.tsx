import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const staffNav = [
  { label: "Dashboard", to: "/staff" },
  { label: "Schedules", to: "/staff/schedule" },
  { label: "Reports", to: "/staff/reports" },
  { label: "Events", to: "/staff/events" },
];

const StaffHeader = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/staff" className="text-xl font-bold text-primary">
          Staff Console
        </Link>
        <div className="hidden md:flex items-center gap-2">
          {staffNav.map((item) => (
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

export default StaffHeader;

