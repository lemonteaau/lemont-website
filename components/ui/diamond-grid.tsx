"use client";

import { memo } from "react";

interface DiamondGridProps {
  hoverColor?: string;
  tileColor?: string;
  borderColor?: string;
  crossColor?: string;
  fadeOutDuration?: number;
  cellSize?: number;
  borderWidth?: number;
  crossWidth?: number;
}

const DiamondGrid: React.FC<DiamondGridProps> = ({
  hoverColor = "#3498DB",
  tileColor = "#FFFFFF",
  borderColor = "#F0F0F0",
  crossColor = "#A4A4A4",
  fadeOutDuration = 0.5,
  cellSize = 50,
  borderWidth = 0.5,
  crossWidth = 0.5,
}) => {
  const totalGroups = 4000;
  const cols = 80;

  const getCellBorders = (cellIndex: number, groupIndex: number) => {
    const groupRow = Math.floor(groupIndex / cols);
    const groupCol = groupIndex % cols;

    const cellRow = Math.floor(cellIndex / 2);
    const cellCol = cellIndex % 2;

    return {
      borderLeft: `${borderWidth}px solid ${borderColor}`,
      borderBottom: `${borderWidth}px solid ${borderColor}`,
      borderRight:
        groupCol === cols - 1 && cellCol === 1
          ? `${borderWidth}px solid ${borderColor}`
          : "none",
      borderTop:
        groupRow === 0 && cellRow === 0
          ? `${borderWidth}px solid ${borderColor}`
          : "none",
    };
  };

  return (
    <>
      <style>{`
        .diamond-cell {
          position: relative;
          cursor: pointer;
          transition: background-color ${fadeOutDuration}s ease-out;
        }
        
        .diamond-cell:hover {
          background-color: ${hoverColor} !important;
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
            linear-gradient(${crossColor}, ${crossColor}) center/${crossWidth}px 100% no-repeat,
            linear-gradient(${crossColor}, ${crossColor}) center/100% ${crossWidth}px no-repeat;
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
          background: tileColor,
        }}
      >
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            width: "200vw",
            height: "200vh",
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, ${cellSize * 2}px)`,
            gridTemplateRows: `repeat(50, ${cellSize * 2}px)`,
            transform:
              "translate(-50%, -50%) skewX(-48deg) skewY(14deg) scaleX(1.8) scale(0.8)",
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
