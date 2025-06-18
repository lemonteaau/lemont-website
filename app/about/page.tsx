"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import NavDock from "@/components/nav-dock";
import DiamondGrid from "@/components/ui/diamond-grid";
import Image from "next/image";
import profile from "@/public/logo.png";

export default function AboutPage() {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRef = useRef(null);
  const subtitleRef2 = useRef(null);

  useEffect(() => {
    gsap.set(
      [
        imageRef.current,
        titleRef.current,
        subtitleRef.current,
        subtitleRef2.current,
        contentRef.current,
      ],
      {
        force3D: true,
        willChange: "transform, opacity",
      }
    );

    const tl = gsap.timeline();

    tl.to(
      [
        imageRef.current,
        titleRef.current,
        subtitleRef.current,
        subtitleRef2.current,
      ],
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power1.out",
        stagger: 0.2,
        force3D: true,
      }
    ).to(
      contentRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power1.out",
        force3D: true,
        onComplete: () => {
          gsap.set(
            [
              imageRef.current,
              titleRef.current,
              subtitleRef.current,
              subtitleRef2.current,
              contentRef.current,
            ],
            {
              willChange: "auto",
            }
          );
        },
      },
      "-=0.4"
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
        <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-sm p-8 shadow-lg border border-border">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div
              ref={imageRef}
              style={{ opacity: 0, transform: "translate3d(0, 50px, 0)" }}
              className="w-48 h-48 relative flex-shrink-0"
            >
              <Image
                src={profile}
                alt="Profile picture"
                fill
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1
                ref={titleRef}
                style={{ opacity: 0, transform: "translate3d(0, 50px, 0)" }}
                className="text-4xl font-bold text-foreground"
              >
                Terry Cheng
              </h1>
              <p
                ref={subtitleRef}
                style={{ opacity: 0, transform: "translate3d(0, 50px, 0)" }}
                className="mt-2 text-lg text-muted-foreground"
              >
                Full-Stack Developer & Software Engineer
              </p>
              <div
                ref={subtitleRef2}
                style={{ opacity: 0, transform: "translate3d(0, 50px, 0)" }}
                className="mt-4 space-y-2 text-sm text-muted-foreground"
              >
                <p>📍 Adelaide, SA 5000</p>
                <p>💼 485 Visa - Full Working Rights</p>
                <p>🟢 Available for immediate employment</p>
              </div>
            </div>
          </div>
          <div
            ref={contentRef}
            style={{ opacity: 0, transform: "translate3d(0, 30px, 0)" }}
            className="mt-8 space-y-6 text-foreground/80 leading-relaxed"
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                About Me
              </h3>
              <p>
                Diligent and adaptive software engineer specialised in front-end
                development. With hands-on experience in JavaScript/TypeScript,
                React, Next.js, Elixir, Phoenix, and Tailwind CSS, I&apos;m
                actively expanding my skillset to meet the strictest
                requirements from the job market. Eager to dedicate my passion
                and skills in software engineering to contribute to the business
                growth of my employers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-foreground">
                    Master of Computing and Innovation
                  </h4>
                  <p className="text-muted-foreground">
                    University of Adelaide • Feb 2023 – Nov 2024
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">
                    Bachelor of Business Administration
                  </h4>
                  <p className="text-muted-foreground">
                    Shanghai University • Sep 2018 – Jun 2022
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    Languages
                  </h4>
                  <p className="text-sm">
                    JavaScript, TypeScript, Node.js, Elixir, Python, C++, HTML,
                    CSS, SQL
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    Frameworks & Libraries
                  </h4>
                  <p className="text-sm">
                    React, Next.js, React Router, Phoenix, Tailwind CSS, CSS
                    Modules, Cypress, Preline UI, shadcn/ui, Material UI, Framer
                    Motion, GSAP
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    Tools & Platforms
                  </h4>
                  <p className="text-sm">
                    Git, GitHub, GitHub Actions, Cloudflare, Vercel, Drizzle
                    ORM, tRPC, RESTful, Fly.io, webpack, Vite, Shell, Docker,
                    Umami, react-i18next, Jira, Figma, n8n
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    Soft Skills
                  </h4>
                  <p className="text-sm">
                    Problem solving, teamwork, communication, stakeholder
                    management, adaptability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavDock />
    </>
  );
}
