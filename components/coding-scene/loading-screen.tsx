"use client";

import { useProgress } from "@react-three/drei";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const { active, progress, errors, loaded, total } = useProgress();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!active && progress === 100) {
      setTimeout(() => setFadeOut(true), 500);
    }
  }, [active, progress]);

  if (!active && progress === 100 && fadeOut) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center space-y-6 max-w-md w-full px-4">
        {/* Loading title */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Loading Scene...
          </h2>
        </div>

        {/* Progress bar */}
        <div className="space-y-3">
          <Progress value={progress} className="w-full h-3" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>
              {loaded} of {total} items
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Error display */}
        {errors.length > 0 && (
          <div className="text-sm text-destructive">
            Error loading some assets
          </div>
        )}
      </div>
    </div>
  );
}
