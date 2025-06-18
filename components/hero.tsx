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
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        logoRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.in" },
        "-=0.6"
      );
  }, []);

  return (
    <div className="fixed inset-0 z-10 flex flex-col sm:flex-row items-center justify-center pointer-events-none gap-20">
      <div className="text-center pointer-events-none transform -skew-x-24 skew-y-7">
        <h1
          ref={titleRef}
          style={{ textShadow: "8px 8px 10px rgba(0, 0, 0, 0.2)" }}
          className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-foreground mb-6"
        >
          Terry
        </h1>
        <p
          ref={subtitleRef}
          style={{ textShadow: "8px 8px 10px rgba(0, 0, 0, 0.2)" }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Full-Stack Developer
        </p>
      </div>
      <div className="transform -skew-x-24 skew-y-7">
        <div ref={logoRef} className="space-y-4 shadow-2xl">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="max-w-3xs sm:max-w-2xs"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
