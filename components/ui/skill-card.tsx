"use client";

import { useEffect, useRef, cloneElement, isValidElement } from "react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import { Skill } from "@/data/skills";
import { SkillTooltip } from "./skill-tooltip";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.set(card, { opacity: 0, y: 30 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            });
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  // Clone icon and apply color based on theme
  const getColoredIcon = () => {
    if (!skill.icon) return null;

    // In light mode, apply brand colors
    if (currentTheme === "light" && skill.color) {
      // Check if it's a valid React element
      if (isValidElement(skill.icon)) {
        // Check if it's a custom placeholder div
        if (skill.icon.type === "div") {
          return cloneElement(
            skill.icon as React.ReactElement<
              React.HTMLAttributes<HTMLDivElement>
            >,
            {
              style: {
                backgroundColor: skill.color + "20",
                color: skill.color,
              },
            }
          );
        }
        // For regular icons, apply color style
        return cloneElement(
          skill.icon as React.ReactElement<React.SVGAttributes<SVGElement>>,
          {
            style: { color: skill.color },
          }
        );
      }
    }

    // In dark mode or if no color, return original icon
    return skill.icon;
  };

  return (
    <SkillTooltip skillName={skill.name}>
      <div
        ref={cardRef}
        className="group relative bg-card/30 backdrop-blur-sm border border-border rounded-lg p-3 hover:shadow-lg transition-all duration-300 hover:scale-105"
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <div
            className={cn(
              "p-2 rounded-lg transition-colors duration-300",
              currentTheme === "light"
                ? "bg-background/50"
                : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
            )}
          >
            {getColoredIcon()}
          </div>
        </div>
      </div>
    </SkillTooltip>
  );
}
