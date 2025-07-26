"use client";

import { cn } from "@/lib/utils";
import { LuMouse, LuZoomIn } from "react-icons/lu";
import { useEffect, useState } from "react";

export function InteractiveGuide({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      <div
        className={cn(
          "absolute top-20 left-6 z-50 transition-all duration-1000 ease-in-out pointer-events-none select-none hidden sm:block",
          isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2"
        )}
      >
        <div className="relative bg-black/80 dark:bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 shadow-2xl">
          <div className="space-y-2 text-white dark:text-white">
            <div className="flex items-center gap-2">
              <LuMouse className="text-lg" />
              <span className="text-sm font-medium">Drag to rotate</span>
            </div>
            <div className="flex items-center gap-2">
              <LuZoomIn className="text-lg" />
              <span className="text-sm font-medium">Scroll to zoom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
