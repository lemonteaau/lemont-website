"use client";

export function Lights() {
  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
    </>
  );
}
