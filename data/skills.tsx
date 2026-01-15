import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaPhp,
  FaLaravel,
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
  SiExpo,
  SiGithub,
  SiGithubactions,
  SiTrpc,
  SiWebpack,
  SiShadcnui,
  SiVite,
  SiI18Next,
  SiJira,
  SiCplusplus,
  SiHtml5,
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
    { name: "PHP", icon: <FaPhp className="w-6 h-6" />, color: "#777BB4" },
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
      name: "WXT",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M348.608 492C384.905 492 414.329 462.576 414.329 426.279V360.557H426.279C462.576 360.557 492 331.132 492 294.835C492 258.538 462.576 229.114 426.279 229.114H414.329V163.392C414.329 127.095 384.905 97.6709 348.608 97.6709H282.886V85.7215C282.886 49.4245 253.462 20 217.165 20C180.868 20 151.443 49.4245 151.443 85.7215V97.6709H85.7215C49.4245 97.6709 20 127.095 20 163.392V229.114H31.9494C68.2464 229.114 97.6709 258.538 97.6709 294.835C97.6709 331.132 68.2464 360.557 31.9494 360.557H20V492H151.443V480.051C151.443 443.754 180.868 414.329 217.165 414.329C253.462 414.329 282.886 443.754 282.886 480.051V492H348.608Z" stroke="currentColor" strokeWidth="40"/>
        </svg>
      ),
      color: "#67D55E",
    },
    {
      name: "Cypress",
      icon: <SiCypress className="w-6 h-6" />,
      color: "#04C38E",
    },
    {
      name: "Laravel",
      icon: <FaLaravel className="w-6 h-6" />,
      color: "#FF2D20",
    },
    {
      name: "shadcn/ui",
      icon: <SiShadcnui className="w-6 h-6" />,
      color: "#000000",
    },
    {
      name: "Expo",
      icon: <SiExpo className="w-6 h-6" />,
      color: "#000020",
    },
    {
      name: "React Native",
      icon: <FaReact className="w-6 h-6" />,
      color: "#61DAFB",
    },
    {
      name: "Framer Motion",
      icon: <SiFramer className="w-6 h-6" />,
      color: "#0055FF",
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
