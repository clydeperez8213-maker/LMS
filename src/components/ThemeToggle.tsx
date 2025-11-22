import * as React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const resolvedTheme = theme === "system" ? systemTheme : theme;
  const isDark = resolvedTheme === "dark";
  const Icon = isDark ? Sun : Moon;

  if (!mounted) {
    return (
      <Button variant="ghost" className="h-10 w-10 p-0" disabled>
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      className="h-10 w-10 p-0"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
};

export default ThemeToggle;

