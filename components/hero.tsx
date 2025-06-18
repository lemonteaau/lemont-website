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
    gsap.set([titleRef.current, subtitleRef.current, logoRef.current], {
      force3D: true,
      willChange: "transform, opacity",
    });

    const tl = gsap.timeline();

    tl.to([titleRef.current, subtitleRef.current, logoRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power1.out",
      stagger: 0.1,
      force3D: true,
      onComplete: () => {
        gsap.set([titleRef.current, subtitleRef.current, logoRef.current], {
          willChange: "auto",
        });
      },
    });
  }, []);

  return (
    <div className="fixed inset-0 z-10 flex flex-col sm:flex-row items-center justify-center pointer-events-none gap-20">
      <div className="order-1 sm:order-2 pointer-events-none cursor-pointer">
        <div className="transform -skew-x-24 skew-y-7 translate-x-22 -translate-y-7 sm:translate-y-16 sm:translate-x-0">
          <div
            ref={logoRef}
            style={{ opacity: 0, transform: "translate3d(0, 50px, 0)" }}
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

      <div className="order-2 sm:order-1 text-center pointer-events-none cursor-pointer font-doto">
        <div className="transform -skew-x-24 skew-y-7 -translate-y-18.5 translate-x-2 sm:translate-y-4 sm:translate-x-0">
          <h1
            ref={titleRef}
            style={{
              textShadow: "8px 8px 10px rgba(0, 0, 0, 0.2)",
              opacity: 0,
              transform: "translate3d(0, 50px, 0)",
            }}
            className="text-9xl lg:text-[12rem] font-bold text-foreground mb-6 pointer-events-none"
          >
            <span>Terry</span>
          </h1>
          <p
            ref={subtitleRef}
            style={{
              textShadow: "8px 8px 10px rgba(0, 0, 0, 0.2)",
              opacity: 0,
              transform: "translate3d(0, 50px, 0)",
            }}
            className="text-2xl max-w-2xl mx-auto leading-relaxed pointer-events-none"
          >
            Full-Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
}
