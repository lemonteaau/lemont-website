"use client";

export function Desk({ position = [0, 0, 0] as [number, number, number] }) {
  return (
    <group position={position}>
      {/* desktop */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[2, 0.05, 1.2]} />
        <meshStandardMaterial color="#F5F5DA" />
      </mesh>

      {/* legs */}
      {[
        [-0.9, -0.5],
        [0.9, -0.5],
        [-0.9, 0.5],
        [0.9, 0.5],
      ].map((pos, i) => (
        <mesh key={i} position={[pos[0], 0.4, pos[1]]}>
          <cylinderGeometry args={[0.03, 0.03, 0.8, 8]} />
          <meshStandardMaterial color="#A9A9A9" />
        </mesh>
      ))}
    </group>
  );
}
