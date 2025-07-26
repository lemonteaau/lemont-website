"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Desktop } from "./Desktop";
import { Ground } from "./Ground";
import { Lights } from "./Lights";
import { Chair } from "./Chair";
import { Character } from "./Character";
import { Desk } from "./Desk";

export function CodingScene() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{
          position: [3, 2, 3],
          fov: 30,
        }}
        gl={{ antialias: true }}
        onDragStart={(e) => e.preventDefault()}
      >
        <Lights />

        <Desk position={[0, 0, 0.19]} />
        <Chair position={[0, 0, -0.7]} />
        <Character position={[0, -0.08, -0.82]} />
        <Desktop position={[-0.3, 0.82, -0.43]} />
        <Ground />

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={8}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          target={[0, 1, 0]}
        />
      </Canvas>

      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "#ffffff",
          fontFamily: "monospace",
          fontSize: "14px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ffffff",
        }}
      >
        <p>🖱️ Drag mouse to rotate</p>
        <p>🔍 Scroll to zoom</p>
      </div>
    </div>
  );
}
