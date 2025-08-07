import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaFigma,
} from "react-icons/fa6";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiElixir,
  SiCypress,
  SiSupabase,
  SiVercel,
  SiCloudflare,
  SiFramer,
  SiPhoenixframework,
  SiReactrouter,
  SiMui,
  SiGithub,
  SiGithubactions,
  SiTrpc,
  SiCssmodules,
  SiWebpack,
  SiShadcnui,
  SiVite,
  SiI18Next,
  SiJira,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiMysql,
  SiDrizzle,
  SiUmami,
  SiN8N,
} from "react-icons/si";
import { VscTerminalPowershell } from "react-icons/vsc";
import {
  HiCodeBracket,
  HiLightBulb,
  HiUserGroup,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";

export interface Skill {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

export const skills = {
  languages: [
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-6 h-6" />,
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-6 h-6" />,
      color: "#3178C6",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="w-6 h-6" />,
      color: "#339933",
    },
    {
      name: "Elixir",
      icon: <SiElixir className="w-6 h-6" />,
      color: "#4B275F",
    },
    {
      name: "Python",
      icon: <FaPython className="w-6 h-6" />,
      color: "#3776AB",
    },
    {
      name: "C++",
      icon: <SiCplusplus className="w-6 h-6" />,
      color: "#00599C",
    },
    { name: "HTML", icon: <SiHtml5 className="w-6 h-6" />, color: "#E34C26" },
    { name: "CSS", icon: <SiCss3 className="w-6 h-6" />, color: "#1572B6" },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="w-6 h-6" />,
      color: "#4169E1",
    },
    { name: "MySQL", icon: <SiMysql className="w-6 h-6" />, color: "#4479A1" },
  ],
  frameworks: [
    { name: "React", icon: <FaReact className="w-6 h-6" />, color: "#61DAFB" },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-6 h-6" />,
      color: "#333333",
    },
    {
      name: "React Router",
      icon: <SiReactrouter className="w-6 h-6" />,
      color: "#CA4245",
    },
    {
      name: "Phoenix",
      icon: <SiPhoenixframework className="w-6 h-6" />,
      color: "#FD4F00",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-6 h-6" />,
      color: "#06B6D4",
    },
    {
      name: "CSS Modules",
      icon: <SiCssmodules className="w-7 h-7" />,
      color: "#000000",
    },
    {
      name: "Cypress",
      icon: <SiCypress className="w-6 h-6" />,
      color: "#04C38E",
    },
    {
      name: "Preline UI",
      icon: (
        <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center text-xs font-bold">
          PU
        </div>
      ),
      color: "#7C3AED",
    },
    {
      name: "shadcn/ui",
      icon: <SiShadcnui className="w-6 h-6" />,
      color: "#000000",
    },
    {
      name: "Material UI",
      icon: <SiMui className="w-6 h-6" />,
      color: "#007FFF",
    },
    {
      name: "Framer Motion",
      icon: <SiFramer className="w-6 h-6" />,
      color: "#0055FF",
    },
    {
      name: "GSAP",
      icon: (
        <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center text-xs font-bold">
          GS
        </div>
      ),
      color: "#88CE02",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: <FaGitAlt className="w-6 h-6" />,
      color: "#F05032",
    },
    {
      name: "GitHub",
      icon: <SiGithub className="w-6 h-6" />,
      color: "#333333",
    },
    {
      name: "GitHub Actions",
      icon: <SiGithubactions className="w-6 h-6" />,
      color: "#2088FF",
    },
    {
      name: "Cloudflare",
      icon: <SiCloudflare className="w-6 h-6" />,
      color: "#F38020",
    },
    {
      name: "Vercel",
      icon: <SiVercel className="w-6 h-6" />,
      color: "#333333",
    },
    {
      name: "Drizzle ORM",
      icon: <SiDrizzle className="w-6 h-6" />,
      color: "#C5F74F",
    },
    {
      name: "tRPC",
      icon: <SiTrpc className="w-6 h-6" />,
      color: "#2596BE",
    },
    {
      name: "webpack",
      icon: <SiWebpack className="w-6 h-6" />,
      color: "#8DD6F9",
    },
    {
      name: "Vite",
      icon: <SiVite className="w-6 h-6" />,
      color: "#646CFF",
    },
    {
      name: "Shell",
      icon: <VscTerminalPowershell className="w-6 h-6" />,
      color: "#4EAA25",
    },
    {
      name: "Docker",
      icon: <FaDocker className="w-6 h-6" />,
      color: "#2496ED",
    },
    {
      name: "Supabase",
      icon: <SiSupabase className="w-6 h-6" />,
      color: "#3ECF8E",
    },
    {
      name: "Umami",
      icon: <SiUmami className="w-6 h-6" />,
      color: "#333333",
    },
    {
      name: "react-i18next",
      icon: <SiI18Next className="w-6 h-6" />,
      color: "#26A69A",
    },
    {
      name: "Jira",
      icon: <SiJira className="w-6 h-6" />,
      color: "#0052CC",
    },
    {
      name: "Figma",
      icon: <FaFigma className="w-6 h-6" />,
      color: "#F24E1E",
    },
    {
      name: "n8n",
      icon: <SiN8N className="w-6 h-6" />,
      color: "#EA4B71",
    },
  ],
  soft: [
    {
      name: "Problem Solving",
      icon: <HiLightBulb className="w-6 h-6" />,
      color: "#FFC107",
      displayName: true,
    },
    {
      name: "Teamwork",
      icon: <HiUserGroup className="w-6 h-6" />,
      color: "#4CAF50",
      displayName: true,
    },
    {
      name: "Communication",
      icon: <HiChatBubbleLeftRight className="w-6 h-6" />,
      color: "#2196F3",
      displayName: true,
    },
    {
      name: "Adaptability",
      icon: <HiCodeBracket className="w-6 h-6" />,
      color: "#9C27B0",
      displayName: true,
    },
  ],
};
