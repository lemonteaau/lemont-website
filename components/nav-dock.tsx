"use client";

import Dock from "@/components/ui/dock";
import { VscHome, VscSettingsGear } from "react-icons/vsc";
import { IoBulbOutline, IoMailOutline } from "react-icons/io5";

const items = [
  {
    icon: <VscHome size={18} className="text-white" />,
    label: "Home",
    onClick: () => alert("Home!"),
  },

  {
    icon: <IoBulbOutline size={18} className="text-white" />,
    label: "Projects",
    onClick: () => alert("Projects!"),
  },

  {
    icon: <IoMailOutline size={18} className="text-white" />,
    label: "Contact",
    onClick: () => alert("Contact!"),
  },

  {
    icon: <VscSettingsGear size={18} className="text-white" />,
    label: "Settings",
    onClick: () => alert("Settings!"),
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
