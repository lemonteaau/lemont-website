import NavDock from "@/components/nav-dock";
import DiamondGrid from "@/components/ui/diamond-grid";
import Link from "next/link";
import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPython,
} from "react-icons/si";
import Image from "next/image";
import snapsnap from "@/public/snapsnappro_logo.svg";

const projects = [
  {
    title: "Snapsnap.pro Bundle Calculator",
    description:
      "A Next.js app for Marvel Snap players with ~250 daily active users. Features responsive UI, internationalization with Chinese support, and smooth animations.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
    ],
    github: "https://github.com/lemonteaau/snapsnap.pro",
    demo: "https://snapsnap.pro/",
    image: snapsnap,
  },
  {
    title: "Personal Website",
    description:
      "Just a simple personal website which you are looking at right now.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
    ],
    github: "https://github.com/lemonteaau",
    demo: "https://lemontea.xyz/",
    image: "",
  },
  {
    title: "Lab Management Tool",
    description:
      "A scheduling tool for University of Adelaide labs. Features efficient data structures, RESTful API integration, and comprehensive test coverage.",
    tech: [
      { name: "React", icon: <SiReact className="w-5 h-5" /> },
      { name: "Python", icon: <SiPython className="w-5 h-5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
    ],
    github: "https://github.com/lemonteaau",
    demo: "#",
    image: "",
  },
  {
    title: "Enterprise Event Management System",
    description:
      "MVP for enterprise event management with robust event planning workflows. Built using Phoenix/Elixir architecture with modern UI components.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
    ],
    github: "#",
    demo: "#",
    image: "",
  },
];

export default function Projects() {
  return (
    <>
      <DiamondGrid
        fadeOutDuration={1}
        crossColor="#999999"
        borderColor="#E8E8E8"
        cellSize={30}
        hoverColor={"#60BE60"}
        borderWidth={0.5}
        crossWidth={0.6}
      />
      <div className="relative z-10 min-h-screen pt-20 pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Projects
            </h1>

            {/* WIP Banner */}
            <div className="mt-6 mb-4 mx-auto max-w-2xl">
              <div className="bg-orange-100 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-center gap-2 text-orange-800 dark:text-orange-200">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-sm sm:text-base">
                    🚧 This page is still a work in progress
                  </span>
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="w-full h-48 bg-muted rounded-xl mb-6 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-muted-foreground font-medium">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full text-sm font-medium text-secondary-foreground"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                      <IoLogoGithub className="w-4 h-4" />
                      Code
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors font-medium"
                    >
                      <IoOpenOutline className="w-4 h-4" />
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let&apos;s Work Together
              </h3>
              <p className="text-muted-foreground mb-6">
                I&apos;m currently available for immediate employment and open
                to discussing new opportunities. Let&apos;s build something
                amazing together!
              </p>
              <Link
                href="mailto:terrycheng2k@outlook.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      <NavDock />
    </>
  );
}
