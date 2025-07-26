import NavDock from "@/components/nav-dock";
// import DiamondGrid from "@/components/ui/diamond-grid";
// import Hero from "@/components/hero";
import { CodingScene } from "@/components/coding-scene/coding-scene";

export default function Home() {
  return (
    <>
      {/* <DiamondGrid
        fadeOutDuration={1}
        crossColor="#999999"
        borderColor="#E8E8E8"
        cellSize={30}
        hoverColor={"#60BE60"}
        borderWidth={0.5}
        crossWidth={0.6}
      />
      <Hero /> */}
      <CodingScene />
      <NavDock />
    </>
  );
}
