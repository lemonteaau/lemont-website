import { projects } from "@/data/projects";

export const person = {
  name: "Terry Cheng",
  alias: "lemontea",
  role: "Full-stack developer & software engineer",
  city: "Adelaide",
  region: "South Australia",
  postcode: "SA 5000",
  email: "terrycheng2k@outlook.com",
  github: "https://github.com/lemonteaau",
  linkedin: "https://www.linkedin.com/in/terry-cheng-789972274",
  site: "lemontea.xyz",
};

/** In Terry's own words, from the old About page. */
export const nameStory =
  "lemontea is my Overwatch ID I created in 2016. Vita Lemon Tea was very popular in China at that time, just like Overwatch did. Ten years have passed, I no longer play that game, and I don’t drink lemon tea much, but I still want to keep this ID and the good memories with it.";

export type CvEntry = {
  years: string;
  dates: string;
  title: string;
  place: string;
  kind: "work" | "study";
};

export const cv: CvEntry[] = [
  {
    years: "2024–25",
    dates: "Jul 2024 – Feb 2025",
    title: "Software Developer",
    place: "Morialta Software",
    kind: "work",
  },
  {
    years: "2023–24",
    dates: "Feb 2023 – Nov 2024",
    title: "Master of Computing and Innovation",
    place: "University of Adelaide",
    kind: "study",
  },
  {
    years: "2018–22",
    dates: "Sep 2018 – Jun 2022",
    title: "Bachelor of Business Administration",
    place: "Shanghai University",
    kind: "study",
  },
];

export const toolkit: { heading: string; items: string[] }[] = [
  {
    heading: "Languages & databases",
    items: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Elixir",
      "Python",
      "C++",
      "HTML",
      "CSS",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    heading: "Frameworks & libraries",
    items: [
      "React",
      "Next.js",
      "React Router",
      "Phoenix",
      "Tailwind CSS",
      "CSS Modules",
      "Cypress",
      "Preline UI",
      "shadcn/ui",
      "Material UI",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    heading: "Tools & platforms",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Cloudflare",
      "Vercel",
      "Drizzle ORM",
      "tRPC",
      "webpack",
      "Vite",
      "Shell",
      "Docker",
      "Supabase",
      "Umami",
      "react-i18next",
      "Jira",
      "Figma",
      "n8n",
    ],
  },
];

export const softSkills = [
  "problem solving",
  "teamwork",
  "communication",
  "adaptability",
];

/** Stack names in Works that should count towards a toolkit entry. */
const aliases: Record<string, string[]> = {
  Cloudflare: ["Cloudflare R2"],
};

/** How many projects in Works list this tool in their stack. */
export function usageCount(tool: string) {
  const names = [tool, ...(aliases[tool] ?? [])];
  return projects.filter((p) => p.stack.some((s) => names.includes(s)))
    .length;
}
