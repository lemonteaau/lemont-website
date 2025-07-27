import React from "react";
import { StaticImageData } from "next/image";
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
  SiThreedotjs,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import snapsnap from "@/public/images/snapsnappro_logo.svg";
import artistArray from "@/public/images/artist_array_logo.png";
import ozSupermarketBillSplitter from "@/public/images/ozSupermarketBillSplitter.png";
import linkedinSeekJobAnalyzer from "@/public/images/linkedinSeekJobAnalyzer.png";
import youtubeSpeedControlButton from "@/public/images/youtubeSpeedControlButton.png";

export type Project = {
  title: string;
  description: string;
  tech: {
    name: string;
    icon: React.ReactElement;
  }[];
  github?: string;
  demo?: string;
  image: StaticImageData | string;
};

export const projects: Project[] = [
  {
    title: "Artist Array",
    description:
      "A web platform for the AI art community to share, discover, and utilise 'Artist Strings'—curated lists of artist names used to define specific art styles in AI image generation models.",
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
      { name: "Three.js", icon: <SiThreedotjs className="w-5 h-5" /> },
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
