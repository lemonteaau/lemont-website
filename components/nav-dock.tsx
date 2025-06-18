"use client";

import Dock from "@/components/ui/dock";
import { VscHome } from "react-icons/vsc";
import {
  IoBulbOutline,
  IoMailOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoPersonOutline,
} from "react-icons/io5";

const items = [
  {
    icon: <VscHome size={24} className="text-white/90" />,
    label: "Home",
    href: "/",
  },

  {
    icon: <IoBulbOutline size={24} className="text-white/90" />,
    label: "Projects",
    href: "/projects",
  },
  {
    icon: <IoPersonOutline size={24} className="text-white/90" />,
    label: "About",
    href: "/about",
  },

  {
    icon: <IoMailOutline size={24} className="text-white/90" />,
    label: "Contact",
    isExternal: true,
    href: "mailto:terrycheng2k@outlook.com",
  },

  {
    icon: <IoLogoLinkedin size={24} className="text-white/90" />,
    label: "Linkedin",
    isExternal: true,
    href: "https://www.linkedin.com/in/terry-cheng-789972274",
  },

  {
    icon: <IoLogoGithub size={24} className="text-white/90" />,
    label: "Github",
    isExternal: true,
    href: "https://github.com/lemonteaau",
  },
];

export default function NavDock() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div className="relative pointer-events-auto">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          separators={[2]}
        />
      </div>
    </div>
  );
}
