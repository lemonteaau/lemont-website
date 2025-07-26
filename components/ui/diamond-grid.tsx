"use client";

import { memo, useMemo } from "react";
import { useTheme } from "next-themes";

interface DiamondGridProps {
  hoverColor?: string;
  tileColor?: string;
  borderColor?: string;
  crossColor?: string;
  fadeOutDuration?: number;
  cellSize?: number;
  borderWidth?: number;
  crossWidth?: number;
  themeAware?: boolean;
  skewX?: number;
  skewY?: number;
  scaleX?: number;
  scaleY?: number;
}

const DiamondGrid: React.FC<DiamondGridProps> = ({
  hoverColor,
  tileColor,
  borderColor,
  crossColor,
  fadeOutDuration = 0.5,
  cellSize = 50,
  borderWidth = 0.5,
  crossWidth = 0.5,
  themeAware = true,
  skewX = -24,
  skewY = 7,
  scaleX = 1.8,
  scaleY = 0.8,
}) => {
  const { theme } = useTheme();

  const colors = useMemo(() => {
    if (!themeAware) {
      return {
        hover: hoverColor || "#3498DB",
        tile: tileColor || "#FFFFFF",
        border: borderColor || "#F0F0F0",
        cross: crossColor || "#A4A4A4",
      };
    }

    const isDark = theme === "dark";
    return {
      hover: hoverColor || (isDark ? "#4A90E2" : "#60BE60"),
      tile: tileColor || (isDark ? "#0F0F0F" : "#FFFFFF"),
      border: borderColor || (isDark ? "#2A2A2A" : "#E8E8E8"),
      cross: crossColor || (isDark ? "#555555" : "#999999"),
    };
  }, [theme, hoverColor, tileColor, borderColor, crossColor, themeAware]);
  const { cols, rows, totalGroups } = useMemo(() => {
    const viewportWidth =
      typeof window !== "undefined" ? window.innerWidth : 1920;
    const viewportHeight =
      typeof window !== "undefined" ? window.innerHeight : 1080;

    const neededCols = Math.ceil(viewportWidth / cellSize);
    const neededRows = Math.ceil(viewportHeight / cellSize);

    // Ensure it's an odd number, so that the center can be used as the origin for symmetric distribution
    const cols = neededCols % 2 === 0 ? neededCols + 1 : neededCols;
    const rows = neededRows % 2 === 0 ? neededRows + 1 : neededRows;

    // Limit the number of columns and rows to avoid performance issues
    return {
      cols: Math.min(cols, 36),
      rows: Math.min(rows, 14),
      totalGroups: Math.min(cols * rows, 1500),
    };
  }, [cellSize]);

  const getCellBorders = useMemo(
    () => (cellIndex: number, groupIndex: number) => {
      const groupRow = Math.floor(groupIndex / cols);
      const groupCol = groupIndex % cols;

      const cellRow = Math.floor(cellIndex / 2);
      const cellCol = cellIndex % 2;

      return {
        borderLeft: `${borderWidth}px solid ${colors.border}`,
        borderBottom: `${borderWidth}px solid ${colors.border}`,
        borderRight:
          groupCol === cols - 1 && cellCol === 1
            ? `${borderWidth}px solid ${colors.border}`
            : "none",
        borderTop:
          groupRow === 0 && cellRow === 0
            ? `${borderWidth}px solid ${colors.border}`
            : "none",
      };
    },
    [cols, borderWidth, colors.border]
  );

  return (
    <>
      <style>{`
        .diamond-cell {
          position: relative;
          cursor: pointer;
          transition: background-color ${fadeOutDuration}s ease-out;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
        }
        
        .diamond-cell:hover {
          background-color: ${colors.hover} !important;
          transition: none !important;
        }

        /* Cross */
        .diamond-cross {
          position: absolute;
          top: 50%;
          left: 50%;
          width: ${cellSize * 0.4}px;
          height: ${cellSize * 0.4}px;
          transform: translate(-50%, -50%);
          background: 
            linear-gradient(${colors.cross}, ${
        colors.cross
      }) center/${crossWidth}px 100% no-repeat,
            linear-gradient(${colors.cross}, ${
        colors.cross
      }) center/100% ${crossWidth}px no-repeat;
          opacity: 0.6;
          pointer-events: none;
          z-index: 10;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .diamond-cross { 
            width: ${cellSize * 0.3}px; 
            height: ${cellSize * 0.3}px; 
          }
        }
        
        @media (max-width: 480px) {
          .diamond-cross { 
            width: ${cellSize * 0.3}px; 
            height: ${cellSize * 0.3}px; 
          }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          zIndex: -1,
          background: colors.tile,
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, ${cellSize * 2}px)`,
            gridTemplateRows: `repeat(${rows}, ${cellSize * 2}px)`,
            transform: `translate(-50%, -50%) skewX(${skewX}deg) skewY(${skewY}deg) scaleX(${scaleX}) scale(${scaleY})`,
            transformOrigin: "center",
          }}
        >
          {Array.from({ length: totalGroups }, (_, groupIndex) => (
            <div
              key={groupIndex}
              style={{
                position: "relative",
                width: `${cellSize * 2}px`,
                height: `${cellSize * 2}px`,
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridTemplateRows: "repeat(2, 1fr)",
              }}
            >
              {[0, 1, 2, 3].map((cellIndex) => (
                <div
                  key={cellIndex}
                  className="diamond-cell"
                  style={getCellBorders(cellIndex, groupIndex)}
                />
              ))}
              <div className="diamond-cross" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(DiamondGrid);
