"use client";

import { useRef, useEffect } from "react";
import { Text, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Desktop({ position = [0, 0, 0] as [number, number, number] }) {
  const group = useRef<THREE.Group>(null);
  const textRef = useRef<THREE.Object3D>(null);
  const { scene } = useGLTF("/models/machintosh.glb");

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.type === "Mesh" && "material" in child) {
          const mesh = child as THREE.Mesh;
          if (mesh.material && "emissive" in mesh.material) {
            const material = mesh.material as THREE.MeshStandardMaterial;
            material.emissive.setScalar(0.035);
          }
        }
      });
    }
  }, [scene]);

  useFrame((state) => {
    if (textRef.current && "material" in textRef.current) {
      const time = state.clock.elapsedTime;
      const flicker =
        Math.sin(time * 12) * 0.3 +
        Math.sin(time * 25.7) * 0.2 +
        Math.sin(time * 8.3) * 0.15 +
        Math.random() * 0.1;

      const opacity = 0.8 + flicker;

      const strongFlash = Math.sin(time * 2.3) > 0.95 ? 0.4 : 0;

      const material = (textRef.current as { material?: THREE.Material })
        .material;
      if (material) {
        material.opacity = Math.max(0.1, Math.min(1.0, opacity + strongFlash));
      }
    }
  });

  return (
    <>
      <group
        ref={group}
        position={position}
        scale={0.015}
        rotation={[0, Math.PI, 0]}
        dispose={null}
      >
        <primitive object={scene} />
        <Text
          ref={textRef}
          position={[-20, 24, -31.9]}
          rotation={[-0.12, 0, 0]}
          fontSize={2}
          color="#00FF00"
          letterSpacing={0.001}
          lineHeight={1.2}
          font="/fonts/Doto-ExtraBold.ttf"
          // @ts-expect-error - curveRadius is a valid prop for Text
          curveRadius={-90}
        >
          {`Is junior \ndeveloper job \njust a myth?`}
        </Text>
      </group>
    </>
  );
}
