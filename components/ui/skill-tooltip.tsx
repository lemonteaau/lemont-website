"use client";

import { useState, useRef, useEffect } from "react";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

interface SkillTooltipProps {
  children: React.ReactNode;
  skillName: string;
  activeSkill: string | null;
  setActiveSkill: (name: string | null) => void;
}

export function SkillTooltip({
  children,
  skillName,
  activeSkill,
  setActiveSkill,
}: SkillTooltipProps) {
  const [showDesktopTooltip, setShowDesktopTooltip] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
      // If switching to desktop view, close any active mobile tooltips
      if (!isMobileDevice) {
        setActiveSkill(null);
      }
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [setActiveSkill]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !tooltipRef.current) return;
    const tooltip = tooltipRef.current;
    const rect = tooltip.getBoundingClientRect();
    let x = e.clientX + 10;
    let y = e.clientY - 10;
    if (x + rect.width > window.innerWidth) {
      x = e.clientX - rect.width - 10;
    }
    if (y + rect.height > window.innerHeight) {
      y = e.clientY - rect.height - 10;
    }
    x = Math.max(10, x);
    y = Math.max(10, y);
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setShowDesktopTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowDesktopTooltip(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setActiveSkill(activeSkill === skillName ? null : skillName);
    }
  };

  const isTooltipVisible = isMobile
    ? activeSkill === skillName
    : showDesktopTooltip;

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
      {isTooltipVisible && (
        <div
          ref={tooltipRef}
          className={cn(
            "z-50 pointer-events-none",
            isMobile
              ? "absolute bottom-full left-1/2 -translate-x-1/2 mb-2"
              : "fixed"
          )}
          style={
            !isMobile
              ? {
                  left: position.x - 10,
                  top: position.y - 75,
                }
              : {}
          }
        >
          <div
            className={cn(
              "flex items-start gap-1",
              isMobile ? "flex-col items-center" : ""
            )}
          >
            {!isMobile && <div className="h-20 w-[2px] bg-[#7C7C7C]" />}
            <Badge
              className={cn(
                "text-sm font-medium border-1 whitespace-nowrap",
                isMobile
                  ? "border-gray-300 dark:border-border -mt-1 text-foreground bg-card/80 dark:bg-card/80 backdrop-blur-sm"
                  : "border-gray-300 dark:border-[#FAFAFA] -mt-1 text-black dark:text-[#FAFAFA] bg-white/50 dark:bg-black/30 backdrop-blur-sm"
              )}
            >
              {skillName}
            </Badge>
            {isMobile && (
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-card/80" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
