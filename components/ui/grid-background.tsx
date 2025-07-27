"use client";

import { memo, useMemo } from "react";
import { useTheme } from "next-themes";

interface GridBackgroundProps {
  tileColor?: string;
  borderColor?: string;
  crossColor?: string;
  cellSize?: number;
  borderWidth?: number;
  crossWidth?: number;
}

const GridBackground: React.FC<GridBackgroundProps> = ({
  tileColor,
  borderColor,
  crossColor,
  cellSize = 50,
  borderWidth = 0.5,
  crossWidth = 0.5,
}) => {
  const { theme } = useTheme();

  const colors = useMemo(() => {
    const isDark = theme === "dark";
    return {
      tile: tileColor || (isDark ? "#0F0F0F" : "#FFFFFF"),
      border: borderColor || (isDark ? "#2A2A2A" : "#E8E8E8"),
      cross: crossColor || (isDark ? "#555555" : "#999999"),
    };
  }, [theme, tileColor, borderColor, crossColor]);
  const { cols, rows, totalGroups } = useMemo(() => {
    const viewportWidth =
      typeof window !== "undefined" ? window.innerWidth : 1920;
    const viewportHeight =
      typeof window !== "undefined" ? window.innerHeight : 1080;

    const neededCols = Math.ceil(viewportWidth / cellSize);
    const neededRows = Math.ceil(viewportHeight / cellSize);

    const cols = neededCols % 2 === 0 ? neededCols + 1 : neededCols;
    const rows = neededRows % 2 === 0 ? neededRows + 1 : neededRows;

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
        .grid-cell {
          position: relative;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
        }

        /* Cross */
        .grid-cross {
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
          .grid-cross { 
            width: ${cellSize * 0.3}px; 
            height: ${cellSize * 0.3}px; 
          }
        }
        
        @media (max-width: 480px) {
          .grid-cross { 
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
          backgroundColor: colors.tile,
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
            transform: `translate(-50%, -50%)`,
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
                  className="grid-cell"
                  style={getCellBorders(cellIndex, groupIndex)}
                />
              ))}
              <div className="grid-cross" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(GridBackground);
