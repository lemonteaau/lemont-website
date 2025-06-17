"use client";

import Dock from "@/components/ui/dock";
import { VscHome } from "react-icons/vsc";
import {
  IoBulbOutline,
  IoMailOutline,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";

const items = [
  {
    icon: <VscHome size={22} className="text-white" />,
    label: "Home",
    onClick: () => {
      window.location.href = "/";
    },
  },

  {
    icon: <IoBulbOutline size={22} className="text-white" />,
    label: "Projects",
    onClick: () => {
      window.location.href = "/projects";
    },
  },

  {
    icon: <IoMailOutline size={22} className="text-white" />,
    label: "Contact",
    onClick: () => {
      window.location.href = "mailto:terrycheng2k@outlook.com";
    },
  },

  {
    icon: <IoLogoLinkedin size={22} className="text-white" />,
    label: "Linkedin",
    onClick: () => {
      window.open(
        "https://www.linkedin.com/in/terry-cheng-789972274",
        "_blank"
      );
    },
  },

  {
    icon: <IoLogoGithub size={22} className="text-white" />,
    label: "Github",
    onClick: () => {
      window.open("https://github.com/lemonteaau", "_blank");
    },
  },
];

export default function NavDock() {
  return (
    <Dock
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
      separators={[2]}
    />
  );
}
