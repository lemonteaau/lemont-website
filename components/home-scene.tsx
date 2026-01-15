"use client";

import dynamic from "next/dynamic";

const CodingScene = dynamic(
  () =>
    import("@/components/coding-scene/coding-scene").then(
      (mod) => mod.CodingScene
    ),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground">Loading 3D Scene…</p>
        </div>
      </div>
    ),
  }
);

export function HomeScene() {
  return <CodingScene />;
}
