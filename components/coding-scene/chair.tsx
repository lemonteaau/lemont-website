"use client";

export function Chair({ position = [0, 0, 0] as [number, number, number] }) {
  return (
    <group position={position}>
      {/* seat */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.5, 0.05, 0.5]} />
        <meshStandardMaterial color="#C38850" />
      </mesh>

      {/* back */}
      <mesh position={[0, 0.77, -0.22]}>
        <boxGeometry args={[0.5, 0.5, 0.05]} />
        <meshStandardMaterial color="#C38850" />
      </mesh>

      {/* legs */}
      {[
        [-0.2, -0.2],
        [0.2, -0.2],
        [-0.2, 0.2],
        [0.2, 0.2],
      ].map((pos, i) => (
        <mesh key={i} position={[pos[0], 0.25, pos[1]]}>
          <cylinderGeometry args={[0.02, 0.02, 0.5, 6]} />
          <meshStandardMaterial color="#C38850" />
        </mesh>
      ))}
    </group>
  );
}
