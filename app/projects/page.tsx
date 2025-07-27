"use client";

import NavDock from "@/components/nav-dock";
import GridBackground from "@/components/ui/grid-background";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";
import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";
import Image from "next/image";
import SplitText from "@/components/ui/split-text";
import { cn } from "@/lib/utils";
import { projects, Project } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <GridBackground cellSize={50} borderWidth={0.5} crossWidth={0.6} />

      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="relative z-10 min-h-screen pt-16 pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground pointer-events-none text-shadow-[8px_8px_10px_rgba(0,0,0,0.2)] transform  translate-y-4 font-doto">
              <SplitText text="Projects" ease="power3.out" />
            </h1>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project: Project, index: number) => (
              <div
                key={index}
                className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col"
              >
                {/* Project Image */}
                <div className="w-full h-48 bg-background border border-border rounded-xl mb-6 overflow-hidden flex items-center justify-center">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-contain p-4"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-4">
                      <span
                        className={cn(
                          "text-muted-foreground font-doto font-bold text-center leading-tight break-words",
                          project.title.length > 15
                            ? "text-xl sm:text-2xl md:text-3xl"
                            : project.title.length > 10
                            ? "text-2xl sm:text-3xl md:text-4xl"
                            : "text-3xl sm:text-4xl md:text-5xl"
                        )}
                      >
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-auto space-y-6">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map(
                        (tech: Project["tech"][0], techIndex: number) => (
                          <div
                            key={techIndex}
                            className="flex items-center gap-2 bg-secondary/70 px-3 py-2 rounded-md text-sm font-medium text-secondary-foreground"
                          >
                            {tech.icon}
                            <span>{tech.name}</span>
                          </div>
                        )
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                        >
                          <IoLogoGithub className="w-4 h-4" />
                          Code
                        </Link>
                      )}
                      {project.demo && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors font-medium"
                        >
                          <IoOpenOutline className="w-4 h-4" />
                          Demo
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NavDock />
    </>
  );
}
