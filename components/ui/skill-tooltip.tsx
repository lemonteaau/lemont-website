"use client";

import { useState, useRef } from "react";
import { Badge } from "./badge";

interface SkillTooltipProps {
  children: React.ReactNode;
  skillName: string;
}

export function SkillTooltip({ children, skillName }: SkillTooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Handle mouse move for desktop
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!tooltipRef.current) return;

    const tooltip = tooltipRef.current;
    const rect = tooltip.getBoundingClientRect();

    // Calculate position with offset to avoid tooltip going off screen
    let x = e.clientX + 10; // 10px offset from cursor
    let y = e.clientY - 10; // 10px offset above cursor

    // Adjust if tooltip would go off the right edge
    if (x + rect.width > window.innerWidth) {
      x = e.clientX - rect.width - 10;
    }

    // Adjust if tooltip would go off the bottom edge
    if (y + rect.height > window.innerHeight) {
      y = e.clientY - rect.height - 10;
    }

    // Ensure tooltip doesn't go off the left or top edge
    x = Math.max(10, x);
    y = Math.max(10, y);

    setPosition({ x, y });
  };

  // Handle touch for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!tooltipRef.current) return;

    const tooltip = tooltipRef.current;
    const rect = tooltip.getBoundingClientRect();

    let x = touch.clientX + 10;
    let y = touch.clientY - 10;

    // Adjust if tooltip would go off screen
    if (x + rect.width > window.innerWidth) {
      x = touch.clientX - rect.width - 10;
    }
    if (y + rect.height > window.innerHeight) {
      y = touch.clientY - rect.height - 10;
    }

    x = Math.max(10, x);
    y = Math.max(10, y);

    setPosition({ x, y });
    setShowTooltip(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setShowTooltip(false), 2000);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}

      {showTooltip && (
        <div
          ref={tooltipRef}
          className="fixed z-50 pointer-events-none"
          style={{
            left: position.x - 10,
            top: position.y - 75,
          }}
        >
          <div className="flex items-start gap-1">
            <div className="h-20 w-[2px] bg-[#7C7C7C]" />
            <Badge className="text-sm font-medium border-1 border-gray-300 dark:border-[#FAFAFA] -mt-1 text-black dark:text-[#FAFAFA] bg-white/50 dark:bg-black/30 backdrop-blur-sm">
              {skillName}
            </Badge>
          </div>
        </div>
      )}
    </div>
  );
}
