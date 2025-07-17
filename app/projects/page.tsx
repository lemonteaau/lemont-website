"use client";

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
  SiElixir,
  SiPhoenixframework,
  SiSupabase,
  SiCloudflare,
  SiJavascript,
  SiTampermonkey,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import Image from "next/image";
import snapsnap from "@/public/snapsnappro_logo.svg";
import artistArray from "@/public/artist_array_logo.png";
import SplitText from "@/components/ui/split-text";
import ozSupermarketBillSplitter from "@/public/ozSupermarketBillSplitter.png";
import linkedinSeekJobAnalyzer from "@/public/linkedinSeekJobAnalyzer.png";
import youtubeSpeedControlButton from "@/public/youtubeSpeedControlButton.png";

const projects = [
  {
    title: "Artist Array",
    description:
      "A web platform for the AI art community to share, discover, and utilise 'Artist Strings'—curated lists of artist names used to define specific art styles in AI image generation models like NovelAI and Stable Diffusion.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
      { name: "Supabase", icon: <SiSupabase className="w-5 h-5" /> },
      { name: "AWS", icon: <FaAws className="w-5 h-5" /> },
      { name: "Cloudflare R2", icon: <SiCloudflare className="w-5 h-5" /> },
    ],
    github: "https://github.com/lemonteaau/artist-array",
    demo: "https://artistarray.com",
    image: artistArray,
  },
  {
    title: "Snapsnap.pro Bundle Calculator",
    description:
      "A Next.js app for Marvel Snap players to calculate the cost of bundles. Features responsive UI and i18n support.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
    ],
    github: "https://github.com/lemonteaau/snapsnap.pro",
    demo: "https://snap-calculator.vercel.app/",
    image: snapsnap,
  },
  {
    title: "Korral Pro",
    description:
      "A web platform for event management with robust event planning workflows. Built using Phoenix/Elixir architecture with modern UI components.",
    tech: [
      { name: "Elixir", icon: <SiElixir className="w-5 h-5" /> },
      { name: "Phoenix", icon: <SiPhoenixframework className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
    ],
    image: "",
  },
  {
    title: "OZ Supermarket Bill Splitter",
    description: "A userscript to split bill for Woolies/Coles order.",
    tech: [
      { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
      { name: "Userscript", icon: <SiTampermonkey className="w-5 h-5" /> },
    ],
    github: "https://github.com/lemonteaau/OZ-Supermarket-Bill-Splitter",
    demo: "",
    image: ozSupermarketBillSplitter,
  },
  {
    title: "LinkedIn-SEEK Job Analyzer",
    description:
      "A Tampermonkey userscript that automatically analyzes LinkedIn and SEEK job postings to extract key information and requirements.",
    tech: [
      { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
      { name: "Tampermonkey", icon: <SiTampermonkey className="w-5 h-5" /> },
    ],
    github: "https://github.com/lemonteaau/LinkedIn-SEEK-Job-Analyzer",
    demo: "",
    image: linkedinSeekJobAnalyzer,
  },
  {
    title: "YouTube Speed Control Button",
    description:
      "A simple userscript that adds a speed control button to YouTube's video player interface.",
    tech: [
      { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
      { name: "Userscript", icon: <SiTampermonkey className="w-5 h-5" /> },
    ],
    github: "https://github.com/lemonteaau/YouTube-Speed-Control-Button",
    demo: "",
    image: youtubeSpeedControlButton,
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
      <div className="relative z-10 min-h-screen pt-16 pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground pointer-events-none text-shadow-[8px_8px_10px_rgba(0,0,0,0.2)] transform -skew-x-24 skew-y-7 translate-y-4 translate-x-0 font-doto">
              <SplitText text="Projects" ease="power3.out" />
            </h1>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col"
              >
                {/* Project Image */}
                <div className="w-full h-48 bg-white dark:bg-gray-100 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-contain p-4"
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
                      {project.tech.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-center gap-2 bg-secondary/70 px-3 py-2 rounded-md text-sm font-medium text-secondary-foreground"
                        >
                          {tech.icon}
                          <span>{tech.name}</span>
                        </div>
                      ))}
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
