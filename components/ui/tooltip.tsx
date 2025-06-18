"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 60,
  children,
  lineHeight = 50,
  lineColor = "rgb(59 130 246)",
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> & {
  lineHeight?: number;
  lineColor?: string;
}) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        side="top"
        align="start"
        className={cn(
          "relative z-50 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          className
        )}
        {...props}
      >
        {/* Line */}
        <div
          className="absolute bottom-0 left-0 pointer-events-none"
          style={{
            width: 2,
            height: lineHeight,
            backgroundColor: lineColor,
            transform: "translateY(100%)",
          }}
        />

        {/* Text content */}
        <div className="bg-background border border-border rounded-md shadow-lg px-2 py-1 text-sm whitespace-nowrap text-foreground ml-2">
          {children}
        </div>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
