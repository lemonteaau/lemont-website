"use client";

import logo from "@/public/logo.png";
import Image from "next/image";
import SplitText from "@/components/ui/split-text";

export default function Hero() {
  return (
    <div className="fixed inset-0 z-10 flex flex-col sm:flex-row items-center justify-center pointer-events-none gap-20">
      <div className="order-1 sm:order-2 pointer-events-none cursor-pointer">
        <div className="transform -skew-x-24 skew-y-7 translate-x-22 -translate-y-7 sm:translate-y-16 sm:translate-x-0">
          <div className="w-48 sm:w-64 aspect-[1/1] relative shadow-2xl pointer-events-none">
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

      <div className="order-2 sm:order-1 text-right pointer-events-none cursor-pointer font-doto">
        <div className="transform -skew-x-24 skew-y-7 -translate-y-18.5 translate-x-2 sm:translate-y-4 sm:translate-x-0">
          <h1 className="text-8xl lg:text-[12rem] font-bold text-foreground mb-4 sm:mb-6 pointer-events-none text-shadow-[8px_8px_10px_rgba(0,0,0,0.2)]">
            <SplitText text="Terry" ease="power3.out" />
          </h1>
          <div className="text-xl sm:text-2xl max-w-2xl mx-auto flex flex-col items-end leading-relaxed pointer-events-none font-bold -translate-x-0 sm:-translate-x-5 text-shadow-[8px_8px_10px_rgba(0,0,0,0.4)]">
            <SplitText
              text="Full-Stack Developer"
              className="inline-block"
              ease="power3.out"
            />
            <div className="flex gap-3 items-center">
              <SplitText text="🟢" ease="power3.out" className="text-sm" />
              <SplitText text="Available for opportunities" ease="power3.out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
