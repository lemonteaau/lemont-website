"use client";

import { Grid } from "@react-three/drei";

export function Ground() {
  const gridConfig = {
    infiniteGrid: true,
    cellSize: 0.5,
    cellThickness: 0.5,
    cellColor: "#6f6f6f",
    sectionSize: 2,
    sectionThickness: 1,
    sectionColor: "#00F000",
    fadeDistance: 20,
    fadeStrength: 1,
  };

  return <Grid position={[0, -0.01, 0]} args={[10, 10]} {...gridConfig} />;
}
