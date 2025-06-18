"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      [titleRef.current, subtitleRef.current, logoRef.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div className="fixed inset-0 z-10 flex flex-col sm:flex-row items-center justify-center pointer-events-none gap-20">
      <div className="text-center transform -skew-x-24 skew-y-7">
        <div className="pointer-events-auto cursor-pointer">
          <h1
            ref={titleRef}
            style={{ textShadow: "8px 8px 10px rgba(0, 0, 0, 0.2)" }}
            className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-foreground mb-6 pointer-events-none"
          >
            Terry
          </h1>
          <p
            ref={subtitleRef}
            style={{ textShadow: "8px 8px 10px rgba(0, 0, 0, 0.2)" }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed pointer-events-none"
          >
            Full-Stack Developer
          </p>
        </div>
      </div>
      <div className="transform -skew-x-24 skew-y-7">
        <div className="pointer-events-auto cursor-pointer">
          <div
            ref={logoRef}
            className="w-48 sm:w-64 aspect-[1/1] relative shadow-2xl pointer-events-none"
          >
            <Image
              src={logo}
              alt="logo"
              fill
              placeholder="blur"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
