import type { StaticImageData } from "next/image";
import hex64 from "@/public/images/hex64.png";
import personalWebsite from "@/public/images/personal-website.png";
import snapsnap from "@/public/images/snapsnappro_logo.svg";
import artistArray from "@/public/images/artist_array_logo.png";
import ozSupermarketBillSplitter from "@/public/images/ozSupermarketBillSplitter.png";
import linkedinSeekJobAnalyzer from "@/public/images/linkedinSeekJobAnalyzer.png";
import youtubeSpeedControlButton from "@/public/images/youtubeSpeedControlButton.png";

/** The types Works can be filtered by. */
export type Department = "web" | "apps" | "browser" | "ai";

export const departments: { id: Department; label: string }[] = [
  { id: "web", label: "Web" },
  { id: "apps", label: "Apps" },
  { id: "browser", label: "Browser" },
  { id: "ai", label: "AI" },
];

export type Figure = {
  src: StaticImageData;
  caption: string;
  /** "cover" fills the plate like a photograph; "contain" sits inside it like a specimen. */
  fit: "cover" | "contain";
  /** CSS object-position for "cover" plates; defaults to the top centre. */
  focus?: string;
};

export type Project = {
  title: string;
  department: Department;
  /** What kind of thing it is, as printed above the title. */
  kind: string;
  /** One sentence for cover lines and teasers. */
  dek: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  figure?: Figure;
  /** Shown under Selected works on the home page. */
  featured?: boolean;
};

export type Contribution = {
  project: string;
  repo: string;
  stars: string;
  summary: string;
  url: string;
};

export const projects: Project[] = [
  {
    title: "HEX//64",
    department: "web",
    kind: "Web app",
    dek: "An I Ching divination tool that runs entirely in the browser.",
    description:
      "A cyber-styled I Ching (Liuyao) divination tool that runs entirely in the browser. Cast with virtual coins, numbers, the time or Chinese characters, get a complete traditional chart, and export it as clean text for AI interpretation. Free, open source and ad-free.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Cloudflare"],
    github: "https://github.com/lemonteaau/binary-liuyao",
    demo: "https://liuyao.lemontea.xyz/",
    figure: {
      src: hex64,
      caption:
        "The casting menu.",
      fit: "cover",
      focus: "left top",
    },
    featured: true,
  },
  {
    title: "Artist Array",
    department: "web",
    kind: "Web platform",
    dek: "A platform for sharing the artist strings that define AI art styles.",
    description:
      "A web platform for the AI art community to share, discover, and utilise ‘Artist Strings’ — curated lists of artist names used to define specific art styles in AI image generation models.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "AWS",
      "Cloudflare R2",
    ],
    github: "https://github.com/lemonteaau/artist-array",
    figure: {
      src: artistArray,
      caption: "The Artist Array wordmark.",
      fit: "contain",
    },
    featured: true,
  },
  {
    title: "DBI Backend",
    department: "apps",
    kind: "Desktop app",
    dek: "Installs Nintendo Switch games over USB, rewritten from a Python script as a native Tauri app.",
    description:
      "A cross-platform desktop app for installing Nintendo Switch games (NSP, NSZ, XCI, XCZ) over USB with DBI. Rewrites the original Python script as a native Tauri app with drag-and-drop, live transfer progress and a bilingual UI, released for macOS, Windows and Linux.",
    stack: ["Rust", "Tauri", "JavaScript"],
    github: "https://github.com/lemonteaau/dbi-backend",
    featured: true,
  },
  {
    title: "Personal Website",
    department: "web",
    kind: "Website",
    dek: "This site: an editorial layout with light and dark themes.",
    description:
      "This site. An editorial layout with light and dark themes. The previous version was an interactive 3D scene built with React Three Fiber.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/lemonteaau/lemont-website",
    demo: "https://lemontea.xyz/",
    figure: {
      src: personalWebsite,
      caption:
        "The previous version, a 3D scene built with React Three Fiber.",
      fit: "cover",
    },
  },
  {
    title: "Liuyao Interpreter Skill",
    department: "ai",
    kind: "Agent skill",
    dek: "An agent skill that reads Liuyao charts strictly by the rules of an eight-lesson course.",
    description:
      "An AI agent skill for Claude Code and OpenCode that reads Liuyao charts strictly by the rules of an eight-lesson course. It accepts chart screenshots, always opens with a jargon-free summary, keeps every judgement traceable, and stays cautious on medical, legal and financial questions.",
    stack: ["Claude Code", "Agent Skills"],
    github: "https://github.com/lemonteaau/liuyao-eight-lesson-interpreter",
  },
  {
    title: "Bili → VRC",
    department: "browser",
    kind: "Browser extension",
    dek: "Turns any Bilibili video into a VRChat-ready player link from the right-click menu.",
    description:
      "A Chrome and Firefox extension that turns any Bilibili video into a VRChat-ready player link straight from the right-click menu, defaulting to the 1440p stream, with configurable resolver sources.",
    stack: ["TypeScript", "WXT", "VRChat"],
    github: "https://github.com/lemonteaau/bili-vrc-link",
    featured: true,
  },
  {
    title: "PiliPlus Fork",
    department: "apps",
    kind: "Android & iOS app · Fork",
    dek: "A Bilibili client fork that fetches video in parallel chunks for smooth playback overseas.",
    description:
      "A fork of PiliPlus, the third-party Bilibili client, that downloads video and audio in parallel chunks from multiple CDN nodes for smooth high-bitrate playback overseas. CI merges upstream and ships Android and iOS builds automatically.",
    stack: ["Flutter", "Dart", "GitHub Actions"],
    github: "https://github.com/lemonteaau/PiliPlus",
  },
  {
    title: "Tinycast Fork",
    department: "apps",
    kind: "macOS app · Fork",
    dek: "A macOS launcher fork that understands currency shorthand like “610 aud cny”.",
    description:
      "A fork of Tinycast, the native macOS launcher, that understands currency shorthand like “610 aud cny”. It syncs upstream daily and ships tested, signed releases through a self-updating Homebrew tap.",
    stack: ["Swift", "GitHub Actions", "Homebrew"],
    github: "https://github.com/lemonteaau/tinycast",
    featured: true,
  },
  {
    title: "Nano Banana Helper",
    department: "browser",
    kind: "Userscript",
    dek: "Prompt templates and a reference-image library for Gemini’s Nano Banana.",
    description:
      "A userscript that adds reusable prompt templates and a persistent reference-image library to Google Gemini, making Nano Banana image generation much faster to iterate on.",
    stack: ["JavaScript", "Tampermonkey", "Gemini"],
    github: "https://github.com/lemonteaau/nanobanana-helper",
  },
  {
    title: "Snapsnap.pro Bundle Calculator",
    department: "web",
    kind: "Web app",
    dek: "Calculates the cost of Marvel Snap bundles.",
    description:
      "A Next.js app for Marvel Snap players to calculate the cost of bundles. Features responsive UI and i18n support.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/lemonteaau/snapsnap.pro",
    demo: "https://snap-calculator.vercel.app/",
    figure: {
      src: snapsnap,
      caption: "The snapsnap.pro logo.",
      fit: "contain",
    },
  },
  {
    title: "LinkedIn-SEEK Job Analyzer",
    department: "browser",
    kind: "Userscript",
    dek: "Extracts key requirements from LinkedIn and SEEK job ads.",
    description:
      "A Tampermonkey userscript that automatically analyzes LinkedIn and SEEK job postings to extract key information and requirements.",
    stack: ["JavaScript", "Tampermonkey"],
    github: "https://github.com/lemonteaau/LinkedIn-SEEK-Job-Analyzer",
    figure: {
      src: linkedinSeekJobAnalyzer,
      caption:
        "The extracted requirements panel.",
      fit: "contain",
    },
  },
  {
    title: "OZ Supermarket Bill Splitter",
    department: "browser",
    kind: "Userscript",
    dek: "Splits the bill for a Woolworths or Coles order.",
    description: "A userscript to split bill for Woolies/Coles order.",
    stack: ["JavaScript", "Userscript"],
    github: "https://github.com/lemonteaau/OZ-Supermarket-Bill-Splitter",
    figure: {
      src: ozSupermarketBillSplitter,
      caption: "Splitting a Coles order by item.",
      fit: "cover",
      focus: "left center",
    },
    featured: true,
  },
  {
    title: "YouTube Speed Control Button",
    department: "browser",
    kind: "Userscript",
    dek: "Adds a playback-speed button to the YouTube player.",
    description:
      "A simple userscript that adds a speed control button to YouTube's video player interface.",
    stack: ["JavaScript", "Userscript"],
    github: "https://github.com/lemonteaau/YouTube-Speed-Control-Button",
    figure: {
      src: youtubeSpeedControlButton,
      caption: "The speed button in the player controls.",
      fit: "contain",
    },
  },
  {
    title: "Korral Pro",
    department: "web",
    kind: "Web platform",
    dek: "An event management platform built on Phoenix.",
    description:
      "A web platform for event management with robust event planning workflows. Built using Phoenix/Elixir architecture with modern UI components.",
    stack: ["Elixir", "Phoenix", "Tailwind CSS"],
  },
  {
    title: "Lab Management Tool",
    department: "web",
    kind: "Web app",
    dek: "Scheduling for University of Adelaide labs.",
    description:
      "A scheduling tool for University of Adelaide labs. Features efficient data structures, RESTful API integration, and comprehensive test coverage.",
    stack: ["React", "Python", "TypeScript"],
  },
];

export const contributions: Contribution[] = [
  {
    project: "FluentRead",
    repo: "FluentRead/FluentRead",
    stars: "8.2k",
    summary:
      "Decoupled the full-page translation hotkey from the floating ball, so it keeps working when the ball is hidden.",
    url: "https://github.com/FluentRead/FluentRead/pulls?q=is%3Apr+author%3Alemonteaau+is%3Amerged",
  },
  {
    project: "Bilibili × YouTube Danmaku",
    repo: "ahaduoduoduo/bilibili-youtube-danmaku",
    stars: "641",
    summary:
      "Five merged PRs: a global on/off switch, the move to the Danmaku rendering engine, multilingual title matching and several fixes.",
    url: "https://github.com/ahaduoduoduo/bilibili-youtube-danmaku/pulls?q=is%3Apr+author%3Alemonteaau+is%3Amerged",
  },
  {
    project: "pixes",
    repo: "pixes-app/pixes",
    stars: "318",
    summary:
      "Added chapter navigation to the novel reader and fixed a startup hang for Android secondary users in this unofficial pixiv client.",
    url: "https://github.com/pixes-app/pixes/pulls?q=is%3Apr+author%3Alemonteaau+is%3Amerged",
  },
  {
    project: "CS Club Website",
    repo: "compsci-adl/website",
    stars: "30",
    summary:
      "Added tech-stack tags to the project cards on the University of Adelaide Computer Science Club's website.",
    url: "https://github.com/compsci-adl/website/pull/152",
  },
];

/** Two-digit entry number, as printed in Works. */
export function entryNumber(project: Project) {
  return String(projects.indexOf(project) + 1).padStart(2, "0");
}

/** Anchor id for an entry, e.g. "hex-64" or "bili-vrc". */
export function entrySlug(project: Project) {
  return project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
