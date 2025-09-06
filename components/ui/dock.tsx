"use client";

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
} from "framer-motion";
import Link from "next/link";
import React, {
  Children,
  cloneElement,
  useMemo,
  useRef,
  useLayoutEffect,
  useCallback,
} from "react";

/**
 * Configuration for a single dock item
 */
export type DockItemData = {
  /** The icon element to display in the dock item */
  icon: React.ReactNode;
  /** The label text shown on hover */
  label: React.ReactNode;
  /** Next.js route href for internal links */
  href?: string;
  /** Callback function executed when the item is clicked (for external links) */
  onClick?: () => void;
  /** Whether this is an external link */
  isExternal?: boolean;
  /** Optional CSS class name for custom styling */
  className?: string;
};

/**
 * Configuration props for the Dock component
 */
export type DockProps = {
  /** Array of dock items to display */
  items: DockItemData[];
  /** Optional CSS class name for the dock container */
  className?: string;
  /** Distance threshold for magnification effect (default: 200) */
  distance?: number;
  /** Height of the dock panel in pixels (default: 64) */
  panelHeight?: number;
  /** Base size of dock items in pixels (default: 50) */
  baseItemSize?: number;
  /** Maximum height of the dock when expanded (default: 256) */
  dockHeight?: number;
  /** Maximum magnification size for hover effect (default: 70) */
  magnification?: number;
  /** Spring animation configuration for smooth transitions */
  spring?: SpringOptions;
  /** Array of item indices (0-based) after which to add vertical separators */
  separators?: number[];
  /** Height of the separator lines in pixels (default: 30) */
  separatorHeight?: number;
  /** Gap spacing around separators in pixels (default: 8) */
  separatorGap?: number;
};

/**
 * Props for individual dock item component
 */
type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  isExternal?: boolean;
  mouseX: MotionValue;
  spring: SpringOptions;
  distance: number;
  baseItemSize: number;
  magnification: number;
};

function DockItem({
  children,
  className = "",
  href,
  onClick,
  isExternal = false,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  // Cache element position to avoid getBoundingClientRect abuse
  const elementRect = useRef({ x: 0, width: baseItemSize });

  // Update cached position when layout changes
  const updateElementPosition = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      elementRect.current = { x: rect.x, width: rect.width };
    }
  }, []);

  useLayoutEffect(() => {
    updateElementPosition();

    // Update position on window resize
    const handleResize = () => updateElementPosition();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateElementPosition]);

  // Use cached values instead of getBoundingClientRect in transform
  const mouseDistance = useTransform(mouseX, (val) => {
    return val - elementRect.current.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  const itemClassName = `relative inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 shadow-md ${className}`;

  const itemContent = (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onLayoutAnimationStart={updateElementPosition}
      onAnimationStart={updateElementPosition}
      className={itemClassName}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) =>
        // @ts-expect-error - Passing isHovered to child components that expect it
        cloneElement(child as React.ReactElement, { isHovered })
      )}
    </motion.div>
  );

  if (href && !isExternal) {
    return (
      <Link href={href} className="inline-block">
        {itemContent}
      </Link>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className="inline-block cursor-pointer"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {itemContent}
    </a>
  );
}

/**
 * Props for dock item tooltip label
 */
type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
};

function DockLabel({ children, className = "", ...rest }: DockLabelProps) {
  const { isHovered } = rest as { isHovered: MotionValue<number> };

  const opacity = useTransform(isHovered, [0, 1], [0, 1]);
  const y = useTransform(isHovered, [0, 1], [0, -10]);

  return (
    <motion.div
      initial={false}
      style={{
        opacity,
        y,
        x: "-50%",
      }}
      className={`${className} absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-white/20 bg-black/90 px-2 py-1 text-xs text-white shadow-md pointer-events-none`}
      role="tooltip"
    >
      {children}
    </motion.div>
  );
}

/**
 * Props for dock item icon container
 */
type DockIconProps = {
  className?: string;
  children: React.ReactNode;
};

function DockIcon({ children, className = "" }: DockIconProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

/**
 * Props for vertical separator component
 */
type DockSeparatorProps = {
  /** Height of the separator line in pixels */
  height?: number;
  /** Horizontal spacing around the separator */
  gap?: number;
  /** Base item size for proper alignment */
  baseItemSize?: number;
};

function DockSeparator({
  height = 30,
  gap = 8,
  baseItemSize = 50,
}: DockSeparatorProps) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        paddingLeft: gap,
        paddingRight: gap,
        height: baseItemSize,
      }}
    >
      <div
        className="bg-white/30 rounded-full"
        style={{
          width: "1px",
          height: `${height}px`,
        }}
      />
    </div>
  );
}

/**
 * A macOS-style dock component with animated magnification effects and separator support
 *
 * @example
 * ```tsx
 * const items = [
 *   { icon: <HomeIcon />, label: "Home", href: "/" },
 *   { icon: <SettingsIcon />, label: "Settings", href: "/settings" },
 *   { icon: <ProfileIcon />, label: "Profile", onClick: () => {}, isExternal: true }
 * ];
 *
 * <Dock
 *   items={items}
 *   separators={[1]} // Add separator after second item
 *   magnification={80}
 *   separatorHeight={25}
 * />
 * ```
 *
 * @param props - Configuration object for the dock component
 * @returns A React component rendering an animated dock with icons and separators
 */
export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50,
  separators = [],
  separatorHeight = 30,
  separatorGap = 8,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [dockHeight, magnification]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  const renderedItems = useMemo(() => {
    const elements: React.ReactNode[] = [];

    items.forEach((item, index) => {
      elements.push(
        <DockItem
          key={`item-${index}`}
          href={item.href}
          onClick={item.onClick}
          isExternal={item.isExternal}
          className={item.className}
          mouseX={mouseX}
          spring={spring}
          distance={distance}
          magnification={magnification}
          baseItemSize={baseItemSize}
        >
          <DockIcon>{item.icon}</DockIcon>
          <DockLabel>{item.label}</DockLabel>
        </DockItem>
      );

      if (separators.includes(index)) {
        elements.push(
          <DockSeparator
            key={`separator-${index}`}
            height={separatorHeight}
            gap={separatorGap}
            baseItemSize={baseItemSize}
          />
        );
      }
    });

    return elements;
  }, [
    items,
    separators,
    mouseX,
    spring,
    distance,
    magnification,
    baseItemSize,
    separatorHeight,
    separatorGap,
  ]);

  return (
    <motion.div
      style={{ height, scrollbarWidth: "none" }}
      className="mx-2 flex max-w-full items-center"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`${className} absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-end w-fit backdrop-blur-sm gap-2 sm:gap-4 rounded-2xl bg-black/50 border border-white/10 pb-2 px-4 shadow-lg`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {renderedItems}
      </motion.div>
    </motion.div>
  );
}
