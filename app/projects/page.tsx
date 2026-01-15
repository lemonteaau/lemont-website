import GridBackground from "@/components/ui/grid-background";
import { ProjectsContent } from "@/components/projects-content";

export default function Projects() {
  return (
    <>
      <GridBackground cellSize={50} borderWidth={0.5} crossWidth={0.6} />
      <main className="relative z-10 min-h-screen pt-16 pb-32">
        <ProjectsContent />
      </main>
    </>
  );
}
