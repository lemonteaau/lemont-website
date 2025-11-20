"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { RoundedBox, Text } from "@react-three/drei";

function FloatingZ({ delay = 0 }) {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = (state.clock.elapsedTime + delay) % 3;
      const alpha = t / 3;
      ref.current.position.y = 0.4 + alpha * 0.4;
      ref.current.position.x = Math.sin(alpha * 4) * 0.05;
      ref.current.scale.setScalar(1 - alpha * 0.3);
      if (ref.current.children[0]) {
        const material = (ref.current.children[0] as any).material;
        if (material) {
          material.opacity = Math.max(0, 1 - alpha);
          material.transparent = true;
        }
      }
    }
  });

  return (
    <group ref={ref} position={[0, 0.4, 0.2]}>
      <Text fontSize={0.1} color="white" font="/fonts/Doto-Bold.ttf">
        Z
      </Text>
    </group>
  );
}

export function ShibaInu({
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
  isSleeping = true,
}: {
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
  isSleeping?: boolean;
}) {
  const group = useRef<Group>(null);
  const bodyRef = useRef<Group>(null);

  useFrame((state) => {
    if (bodyRef.current) {
      // Subtle breathing animation
      bodyRef.current.scale.y =
        1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.02;
      bodyRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 1.5) * 0.002;
    }
  });

  const orange = "#e39c52";
  const white = "#f5f5f5";
  const noseColor = "#2a2a2a";

  return (
    <group ref={group} position={position} scale={scale} rotation={rotation}>
      <group ref={bodyRef}>
        {/* Body Main */}
        <RoundedBox
          args={[0.35, 0.25, 0.5]}
          radius={0.05}
          position={[0, 0.125, 0]}
        >
          <meshStandardMaterial color={orange} />
        </RoundedBox>

        {/* White Belly/Chest */}
        <RoundedBox
          args={[0.34, 0.15, 0.4]}
          radius={0.05}
          position={[0, 0.08, 0.02]}
        >
          <meshStandardMaterial color={white} />
        </RoundedBox>

        {/* Neck/Collage Area (White) */}
        <RoundedBox
          args={[0.28, 0.2, 0.1]}
          radius={0.05}
          position={[0, 0.15, 0.22]}
        >
          <meshStandardMaterial color={white} />
        </RoundedBox>

        {/* Tail (Simple white sphere - attached to body group to move with breathing) */}
        <mesh position={[0, 0.22, -0.22]}>
          <sphereGeometry args={[0.06]} />
          <meshStandardMaterial color={white} />
        </mesh>
      </group>

      {/* Head Group - Resting on floor/paws */}
      <group position={[0, 0.18, 0.35]} rotation={[0.2, 0, 0]}>
        {/* Head Main */}
        <RoundedBox args={[0.22, 0.22, 0.22]} radius={0.04}>
          <meshStandardMaterial color={orange} />
        </RoundedBox>

        {/* Face Mask (White) */}
        <RoundedBox
          args={[0.18, 0.12, 0.1]}
          radius={0.02}
          position={[0, -0.04, 0.08]}
        >
          <meshStandardMaterial color={white} />
        </RoundedBox>

        {/* Snout */}
        <RoundedBox
          args={[0.08, 0.08, 0.1]}
          radius={0.02}
          position={[0, -0.02, 0.12]}
        >
          <meshStandardMaterial color={white} />
        </RoundedBox>

        {/* Nose */}
        <RoundedBox
          args={[0.04, 0.03, 0.02]}
          radius={0.01}
          position={[0, 0.01, 0.17]}
        >
          <meshStandardMaterial color={noseColor} />
        </RoundedBox>

        {/* Eyes */}
        {isSleeping ? (
          // Closed eyes (Sleeping)
          <>
            <mesh position={[-0.05, 0.02, 0.11]} rotation={[0, 0, -0.1]}>
              <boxGeometry args={[0.03, 0.005, 0.01]} />
              <meshStandardMaterial color={noseColor} />
            </mesh>
            <mesh position={[0.05, 0.02, 0.11]} rotation={[0, 0, 0.1]}>
              <boxGeometry args={[0.03, 0.005, 0.01]} />
              <meshStandardMaterial color={noseColor} />
            </mesh>
          </>
        ) : (
          // Open eyes (Awake)
          <>
            <mesh position={[-0.05, 0.02, 0.11]}>
              <sphereGeometry args={[0.015]} />
              <meshStandardMaterial color={noseColor} />
            </mesh>
            <mesh position={[0.05, 0.02, 0.11]}>
              <sphereGeometry args={[0.015]} />
              <meshStandardMaterial color={noseColor} />
            </mesh>
          </>
        )}

        {/* Ears */}
        <group position={[-0.08, 0.11, 0]}>
          <mesh rotation={[0, 0, 0.2]}>
            <coneGeometry args={[0.04, 0.08, 4]} />
            <meshStandardMaterial color={orange} />
          </mesh>
          <mesh position={[0, -0.01, 0.01]} rotation={[0, 0, 0.2]}>
            <coneGeometry args={[0.025, 0.05, 4]} />
            <meshStandardMaterial color={white} />
          </mesh>
        </group>

        <group position={[0.08, 0.11, 0]}>
          <mesh rotation={[0, 0, -0.2]}>
            <coneGeometry args={[0.04, 0.08, 4]} />
            <meshStandardMaterial color={orange} />
          </mesh>
          <mesh position={[0, -0.01, 0.01]} rotation={[0, 0, -0.2]}>
            <coneGeometry args={[0.025, 0.05, 4]} />
            <meshStandardMaterial color={white} />
          </mesh>
        </group>
      </group>

      {/* Paws - Front */}
      <group position={[-0.1, 0.05, 0.3]} rotation={[0, 0.2, 0]}>
        <RoundedBox args={[0.08, 0.08, 0.15]} radius={0.03}>
          <meshStandardMaterial color={white} />
        </RoundedBox>
      </group>
      <group position={[0.1, 0.05, 0.3]} rotation={[0, -0.2, 0]}>
        <RoundedBox args={[0.08, 0.08, 0.15]} radius={0.03}>
          <meshStandardMaterial color={white} />
        </RoundedBox>
      </group>

      {/* Paws - Back (Tucked) */}
      <group position={[-0.15, 0.05, -0.2]} rotation={[0, -0.5, 0]}>
        <RoundedBox args={[0.1, 0.1, 0.2]} radius={0.04}>
          <meshStandardMaterial color={orange} />
        </RoundedBox>
        <RoundedBox
          args={[0.08, 0.06, 0.05]}
          radius={0.02}
          position={[0, -0.02, 0.1]}
        >
          <meshStandardMaterial color={white} />
        </RoundedBox>
      </group>
      <group position={[0.15, 0.05, -0.2]} rotation={[0, 0.5, 0]}>
        <RoundedBox args={[0.1, 0.1, 0.2]} radius={0.04}>
          <meshStandardMaterial color={orange} />
        </RoundedBox>
        <RoundedBox
          args={[0.08, 0.06, 0.05]}
          radius={0.02}
          position={[0, -0.02, 0.1]}
        >
          <meshStandardMaterial color={white} />
        </RoundedBox>
      </group>

      {/* Sleeping Zzzs */}
      {isSleeping && (
        <>
          <FloatingZ delay={0} />
          <FloatingZ delay={1} />
          <FloatingZ delay={2} />
        </>
      )}
    </group>
  );
}
