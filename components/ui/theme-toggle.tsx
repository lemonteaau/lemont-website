"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

interface ThemeToggleProps {
  variant?: "default" | "dock";
  onClick?: () => void;
}

export function ThemeToggle({
  variant = "default",
  onClick,
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  if (!mounted) {
    if (variant === "dock") {
      return <div className="w-6 h-6 animate-pulse bg-white/20 rounded" />;
    }
    return (
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/50 border border-white/10 shadow-lg">
        <div className="w-5 h-5 animate-pulse bg-white/20 rounded" />
      </div>
    );
  }

  if (variant === "dock") {
    return (
      <div className="relative flex items-center justify-center w-6 h-6">
        <IoSunny
          className={`w-5 h-5 text-white/90 absolute transition-all duration-300 ${
            theme === "dark"
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        />
        <IoMoon
          className={`w-5 h-5 text-white/90 transition-all duration-300 ${
            theme === "dark"
              ? "-translate-y-8 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        />
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="relative flex items-center justify-center w-12 h-12 rounded-full bg-black/50 border border-white/10 hover:bg-black/60 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      <div className="relative overflow-hidden">
        <IoSunny
          className={`w-5 h-5 text-white/90 absolute transition-all duration-300 ${
            theme === "dark"
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        />
        <IoMoon
          className={`w-5 h-5 text-white/90 transition-all duration-300 ${
            theme === "dark"
              ? "-translate-y-8 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        />
      </div>
    </button>
  );
}
