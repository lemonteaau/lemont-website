"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-background/80 backdrop-blur-sm shadow-lg">
        <div className="w-5 h-5 animate-pulse bg-muted rounded" />
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:bg-accent/50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      <div className="relative overflow-hidden">
        <IoSunny
          className={`w-5 h-5 text-foreground group-hover:text-primary transition-all duration-300 absolute ${
            theme === "dark"
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        />
        <IoMoon
          className={`w-5 h-5 text-foreground group-hover:text-primary transition-all duration-300 ${
            theme === "dark"
              ? "-translate-y-8 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}
