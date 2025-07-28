"use client";

export function Mug({ position = [0, 0, 0] as [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.07, 0.13, 16, 1, true]} />
        <meshStandardMaterial color="#ffffff" side={2} />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.13, 16, 1, true]} />
        <meshStandardMaterial color="#f8f8f8" side={1} />
      </mesh>

      <mesh position={[0, -0.065, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0, 0.07, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh position={[0, -0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.06, 16]} />
        <meshStandardMaterial color="#f8f8f8" />
      </mesh>

      <mesh position={[0, 0.065, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.06, 0.07, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh
        position={[0.07, 0, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1, 1.2, 1]}
      >
        <torusGeometry args={[0.035, 0.008, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}
