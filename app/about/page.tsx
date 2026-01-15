import GridBackground from "@/components/ui/grid-background";
import { AboutContent } from "@/components/about-content";

export default function AboutPage() {
  return (
    <>
      <GridBackground cellSize={50} borderWidth={0.5} crossWidth={0.6} />
      <main className="container mx-auto px-4 py-12 mb-20">
        <AboutContent />
      </main>
    </>
  );
}
