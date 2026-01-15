"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

interface TerrainSceneProps {
  ringCount?: number;
  segmentsPerRing?: number;
  innerRadius?: number;
  maxRadius?: number;
  noiseStrength?: number;
  pulseSpeed?: number;
  baseColor?: string;
  minOpacity?: number;
  maxOpacity?: number;
}

export function TerrainScene({
  ringCount = 60,
  segmentsPerRing = 128,
  innerRadius = 12, // Reduced to ensure overlap with Ground (fade=20)
  maxRadius = 140, // Extended range for distance
  noiseStrength = 2.5, // Reduced noise for smoother look
  pulseSpeed = 1.0,
  baseColor = "#00ff00",
  minOpacity = 0.1,
  maxOpacity = 0.8,
}: TerrainSceneProps) {
  // Generate terrain data as concentric rings
  const lines = useMemo(() => {
    const noise2D = createNoise2D();
    const generatedLines = [];

    const radiusRange = maxRadius - innerRadius;
    const radiusStep = radiusRange / ringCount;

    for (let i = 0; i <= ringCount; i++) {
      const radius = innerRadius + i * radiusStep;
      const points: [number, number, number][] = [];

      // Normalized distance (0 at inner edge, 1 at outer edge)
      const t = i / ringCount;

      // Generate a closed loop for each ring
      for (let j = 0; j <= segmentsPerRing; j++) {
        const theta = (j / segmentsPerRing) * Math.PI * 2;
        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;

        // Base profile:
        // Flat at start (t=0) to match ground level
        // Rises as we go out
        // Reduced height multiplier to keep it low/horizon-like
        const baseHeight = Math.pow(t, 2.0) * 8; 

        // Noise
        const n = noise2D(x * 0.04, z * 0.04); 
        
        // Scale noise by 't' so the inner ring is perfectly flat (noise=0)
        // This ensures seamless connection with the flat ground grid
        const noiseScale = Math.max(0, t - 0.05); // Start noise slightly after the very edge
        const noiseEffect = n * noiseStrength * noiseScale * 2;

        // Optional deep cuts/canyons further out
        const canyonDrop = 0;
        // if (n < -0.3 && t > 0.2) canyonDrop = -5 * t;

        // Final Y
        // Start exactly at -0.05 (just above occlusion) to be visible immediately
        const y = -0.05 + baseHeight + noiseEffect + canyonDrop;

        points.push([x, y, z]);
      }
      generatedLines.push(points);
    }
    return generatedLines;
  }, [ringCount, segmentsPerRing, innerRadius, maxRadius, noiseStrength]);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    groupRef.current.children.forEach((child, i) => {
      // Skip occlusion mesh
      if (child.type !== 'Line2' && child.type !== 'Line') return;

      const line = child as THREE.Line;
      if (line.material) {
        const normalizedIndex = i / ringCount; 
        
        // Pulse moves outwards
        const phase = (normalizedIndex * 10 - t * pulseSpeed) % (Math.PI * 2);
        const pulse = Math.sin(phase);
        const normalizedPulse = (pulse + 1) / 2;
        
        const intensity = Math.pow(normalizedPulse, 8); 
        
        // Fade in logic:
        // inner ring (0) -> full opacity (no fade out), or slight fade in?
        // We want it to blend with ground grid.
        // Ground grid fades OUT at 20.
        // Terrain starts at 12.
        // So at 12, opacity should be low? Or high?
        // If terrain is meant to extend the grid, it should probably start visible.
        const startFade = Math.min(1, normalizedIndex * 8 + 0.2);
        
        const endFade = 1 - Math.pow(normalizedIndex, 4);
        
        const currentOpacity = (minOpacity + (maxOpacity - minOpacity) * intensity) * startFade * endFade;
        
        const material = line.material as THREE.LineBasicMaterial;
        material.opacity = currentOpacity;
      }
    });
  });

  return (
    <group position={[0, 0, 0]} ref={groupRef}>
      <fog attach="fog" args={['#050505', 20, 100]} />
      
      {/* Occlusion Plane: 
          Blocks lines that dip below the ground.
          y = -0.1 ensures the starting rings at -0.05 are VISIBLE.
      */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
         <circleGeometry args={[maxRadius * 1.1, 64]} />
         <meshBasicMaterial color="#050505" />
      </mesh>

      {lines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color={baseColor}
          lineWidth={2}
          transparent
          opacity={0.3}
          depthWrite={false}
          depthTest={true} 
          toneMapped={false}
        />
      ))}
    </group>
  );
}
