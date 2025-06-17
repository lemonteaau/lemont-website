import NavDock from "@/components/nav-dock";
import DiamondGrid from "@/components/ui/diamond-grid";
import Link from "next/link";
import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
} from "react-icons/si";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with modern UI and secure payment processing.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
    ],
    github: "https://github.com/lemonteaau/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
    image: "/api/placeholder/400/250",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    tech: [
      { name: "React", icon: <SiReact className="w-5 h-5" /> },
      { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
    ],
    github: "https://github.com/lemonteaau/task-manager",
    demo: "https://task-manager-demo.vercel.app",
    image: "/api/placeholder/400/250",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "An interactive dashboard for visualizing complex data sets with beautiful charts.",
    tech: [
      { name: "Python", icon: <SiPython className="w-5 h-5" /> },
      { name: "React", icon: <SiReact className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
    ],
    github: "https://github.com/lemonteaau/data-dashboard",
    demo: "https://analytics-demo.vercel.app",
    image: "/api/placeholder/400/250",
  },
  {
    title: "AI Chat Assistant",
    description:
      "An intelligent chat assistant powered by modern AI with natural conversation flow.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
    ],
    github: "https://github.com/lemonteaau/ai-chat",
    demo: "https://ai-chat-demo.vercel.app",
    image: "/api/placeholder/400/250",
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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my skills in modern web
              development, from full-stack applications to AI-powered solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-muted rounded-xl mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-muted-foreground font-medium">
                      {project.title}
                    </span>
                  </div>
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
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-6">
                I&apos;m always open to discussing new opportunities and
                exciting projects.
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
