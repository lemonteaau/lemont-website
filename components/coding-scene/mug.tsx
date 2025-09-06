"use client";

export function Mug({ position = [0, 0, 0] as [number, number, number] }) {
  return (
    <group position={position} scale={0.85}>
      {/* Top Rim */}
      <mesh
        position={[0, 0.085, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        renderOrder={4}
      >
        <ringGeometry args={[0.054, 0.062, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.7}
          roughness={1.0}
          metalness={0.0}
          depthWrite={false}
        />
      </mesh>

      {/* Outer Wall */}
      <mesh position={[0, 0, 0]} renderOrder={3}>
        <cylinderGeometry args={[0.062, 0.052, 0.169, 16, 1, true]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.3}
          roughness={1.0}
          metalness={0.0}
          side={0}
          depthWrite={false}
        />
      </mesh>

      {/* Inner Wall */}
      <mesh position={[0, 0, 0]} renderOrder={1}>
        <cylinderGeometry args={[0.053, 0.042, 0.169, 16, 1, true]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.3}
          roughness={1.0}
          metalness={0.0}
          side={1}
          depthWrite={false}
        />
      </mesh>

      {/* Tea */}
      <mesh position={[0, -0.024, 0]} renderOrder={2}>
        <cylinderGeometry args={[0.0515, 0.0405, 0.15, 16, 1, false]} />
        <meshStandardMaterial
          color="#8f5f1b"
          transparent={true}
          opacity={0.8}
          roughness={0.4}
          metalness={0.0}
          depthWrite={false}
        />
      </mesh>

      {/* Bottom */}
      <mesh
        position={[0, -0.086, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        renderOrder={0}
      >
        <circleGeometry args={[0.0415, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.7}
          roughness={1.0}
          metalness={0.0}
          side={0}
          depthWrite={false}
        />
      </mesh>

      {/* Bottom Rim */}
      <mesh position={[0, -0.086, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.044, 0.052, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={1}
          roughness={1.0}
          metalness={0.0}
        />
      </mesh>

      {/* Straw */}
      <mesh
        position={[-0.018, 0.03, -0.026]}
        rotation={[-0.2, 0, 0.25]}
        renderOrder={6}
      >
        <cylinderGeometry args={[0.005, 0.005, 0.22, 16]} />
        <meshStandardMaterial color="#ffe000" roughness={0.4} metalness={0.1} />
      </mesh>

      {/* Lemon Slice */}
      <group
        position={[0.042, 0.085, 0.032]}
        rotation={[Math.PI / 2, 0, 0.76]}
        scale={0.8}
      >
        {/* Rind */}
        <mesh>
          <cylinderGeometry args={[0.032, 0.032, 0.006, 24]} />
          <meshStandardMaterial
            color="#ffd000"
            roughness={0.5}
            metalness={0.0}
            polygonOffset={true}
            polygonOffsetFactor={1}
            polygonOffsetUnits={1}
          />
        </mesh>
        {/* Pulp */}
        <mesh>
          <cylinderGeometry args={[0.028, 0.028, 0.006, 24]} />
          <meshStandardMaterial
            color="#fff3a3"
            roughness={0.6}
            metalness={0.0}
          />
        </mesh>
      </group>
    </group>
  );
}
