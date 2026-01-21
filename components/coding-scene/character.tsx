"use client";
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group } from "three";

export function Character({
  position = [0, 0, 0] as [number, number, number],
}) {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF("/models/hoodie_guy.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Enable shadows for all meshes in the scene
    scene.traverse((child) => {
      if ((child as any).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    if (actions?.["CharacterArmature|Sitting"]) {
      actions["CharacterArmature|Sitting"].play();
    }
  }, [actions, scene]);

  return (
    <group ref={group} position={position} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/hoodie_guy.glb");
