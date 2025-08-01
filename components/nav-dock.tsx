"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Dock from "@/components/ui/dock";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { VscHome } from "react-icons/vsc";
import {
  IoBulbOutline,
  IoMailOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoPersonOutline,
} from "react-icons/io5";
import { cn } from "@/lib/utils";

const baseItems = [
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
  const [isDockVisible, setIsDockVisible] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const lastScrollY = useRef(0);
  const { theme, setTheme } = useTheme();

  const themeToggleItem = {
    icon: <ThemeToggle variant="dock" />,
    label: "Theme",
    onClick: () => {
      setTheme(theme === "dark" ? "light" : "dark");
    },
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    checkScreenSize();

    const handleResize = () => {
      checkScreenSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsDockVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsDockVisible(false);
      } else {
        setIsDockVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = isLargeScreen ? [...baseItems, themeToggleItem] : baseItems;
  const separators = isLargeScreen ? [2, 5] : [2];

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 pointer-events-none transition-transform duration-300 ease-in-out",
        { "translate-y-full": !isDockVisible }
      )}
    >
      <div className="relative pointer-events-auto">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          separators={separators}
          separatorGap={1}
          distance={150}
        />
      </div>
    </div>
  );
}
