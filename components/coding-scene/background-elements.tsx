"use client";

import { Stars, Sparkles } from "@react-three/drei";
import { useTheme } from "next-themes";

export function BackgroundElements() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {isDark && (
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      )}

      <Sparkles
        count={50}
        scale={12}
        size={4}
        speed={0.4}
        opacity={0.5}
        color={isDark ? "#ffffff" : "#666666"}
      />
    </>
  );
}
