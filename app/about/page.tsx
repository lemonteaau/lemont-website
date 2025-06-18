"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import NavDock from "@/components/nav-dock";
import DiamondGrid from "@/components/ui/diamond-grid";
import Image from "next/image";

export default function AboutPage() {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      [imageRef.current, titleRef.current, subtitleRef.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      }
    ).fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
      }
    );
  }, []);

  return (
    <>
      <DiamondGrid
        fadeOutDuration={1}
        crossColor="#999999"
        borderColor="#E8E8E8"
        cellSize={30}
        hoverColor={"#60BE60"}
        borderWidth={0.5}
        crossWidth={0.6}
      />
      <div className="container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-border">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div ref={imageRef} className="w-48 h-48 relative flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Profile picture"
                fill
                className="object-cover rounded-full shadow-md"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 ref={titleRef} className="text-4xl font-bold text-foreground">
                About Terry
              </h1>
              <p
                ref={subtitleRef}
                className="mt-2 text-lg text-muted-foreground"
              >
                Full-Stack Developer & Tech Enthusiast
              </p>
            </div>
          </div>
          <div
            ref={contentRef}
            className="mt-8 space-y-4 text-foreground/80 leading-relaxed"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim, sem vitae consequat volutpat, libero ex bibendum
              sapien, ac iaculis mi nunc et sem. Suspendisse potenti. Nunc nec
              quam ac turpis tincidunt tincidunt. Vivamus nec magna in nunc
              feugiat cursus.
            </p>
            <p>
              Integer in elit eget sapien pulvinar commodo. Curabitur
              vestibulum, odio sit amet bibendum faucibus, turpis elit elementum
              mi, et imperdiet nunc mi nec erat. Phasellus dignissim, felis eget
              laoreet pretium, justo sem lacinia dolor, a pulvinar est nisl vel
              lectus. Nullam vel semper justo, a varius magna.
            </p>
            <p>
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
      </div>
      <NavDock />
    </>
  );
}
