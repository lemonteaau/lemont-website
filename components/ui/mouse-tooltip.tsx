"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface MouseTooltipProps {
  children: React.ReactNode;
  text: string;
  className?: string;
  lineHeight?: number;
  lineColor?: string;
  textClassName?: string;
  disabled?: boolean;
  offset?: { x: number; y: number };
}

export function MouseTooltip({
  children,
  text,
  className,
  lineHeight = 150,
  lineColor = "#000000",
  textClassName,
  disabled = false,
  offset = { x: 0, y: 0 },
}: MouseTooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isHovered && !disabled) {
        setMousePosition({
          x: e.clientX + offset.x,
          y: e.clientY + offset.y,
        });
      }
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isHovered, disabled, offset.x, offset.y]);

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!disabled) {
      setIsHovered(true);
      setMousePosition({
        x: e.clientX + offset.x,
        y: e.clientY + offset.y,
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const tooltipContent =
    isHovered && mounted
      ? createPortal(
          <>
            <div
              className="fixed pointer-events-none z-50"
              style={{
                left: mousePosition.x - 1,
                top: mousePosition.y - lineHeight,
                width: 2,
                height: lineHeight,
                backgroundColor: lineColor,
              }}
            />

            <div
              className={cn(
                "fixed pointer-events-none z-50 px-2 py-1 text-lg whitespace-nowrap text-black",
                textClassName
              )}
              style={{
                left: mousePosition.x - 13,
                top: mousePosition.y - lineHeight - 34,
              }}
            >
              {text}
            </div>
          </>,
          document.body
        )
      : null;

  return (
    <>
      <div
        className={cn("relative", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {tooltipContent}
    </>
  );
}

export default MouseTooltip;
