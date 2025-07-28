"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { useTheme } from "next-themes";
import { Desktop } from "./Desktop";
import { Ground } from "./Ground";
import { Lights } from "./Lights";
import { Chair } from "./Chair";
import { Character } from "./Character";
import { Desk } from "./Desk";
import { InteractiveGuide } from "./interactive-guide";
import { LoadingScreen } from "./loading-screen";
import { Mug } from "./Mug";

// Fallback component for Suspense
function SceneFallback() {
  return (
    <mesh>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshBasicMaterial color="#333" />
    </mesh>
  );
}

export function CodingScene() {
  const { theme } = useTheme();

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <LoadingScreen />

      <Canvas
        camera={{
          position: [3, 2, 3],
          fov: 30,
        }}
        gl={{ antialias: true }}
        onDragStart={(e) => e.preventDefault()}
      >
        <color
          attach="background"
          args={[theme === "dark" ? "#121212" : "#ffffff"]}
        />
        <Suspense fallback={<SceneFallback />}>
          <Lights />

          <Desk position={[0, 0, 0.19]} />
          <Chair position={[0, 0, -0.7]} />
          <Character position={[0, -0.08, -0.82]} />
          <Desktop position={[-0.3, 0.82, -0.43]} />
          <Ground />
          <Mug position={[0.5, 0.899, 0.13]} />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={8}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            target={[0, 1, 0]}
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>

      <InteractiveGuide />
    </div>
  );
}
