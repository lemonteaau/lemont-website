"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import GridBackground from "@/components/ui/grid-background";
import Image from "next/image";
import profile from "@/public/images/logo.png";
import { SkillCard } from "@/components/ui/skill-card";
import { skills } from "@/data/skills";
import { FaLocationDot, FaGitAlt } from "react-icons/fa6";
import { SiFramer } from "react-icons/si";
import { HiCodeBracket, HiUserGroup } from "react-icons/hi2";
import TimelineComponent from "@/app/about/timeline";

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  useEffect(() => {
    // Hero animation
    const hero = heroRef.current;
    if (hero) {
      gsap.fromTo(
        hero.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }

    // Intro animation
    const intro = introRef.current;
    if (intro) {
      gsap.fromTo(
        intro,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.4,
          ease: "power2.out",
        }
      );
    }

    // Timeline animation
    const timeline = timelineRef.current;
    if (timeline) {
      gsap.fromTo(
        timeline,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <>
      <GridBackground cellSize={50} borderWidth={0.5} crossWidth={0.6} />

      <main className="container mx-auto px-4 py-12 mb-20">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-6">
          <div ref={heroRef} className="w-full max-w-xl mx-auto mb-8 lg:mb-16">
            <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-md rounded-2xl border border-border p-6 sm:p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                <div className="relative group">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-background">
                    <Image
                      src={profile}
                      alt="Profile picture"
                      fill
                      placeholder="blur"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-center md:text-left flex-1">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                    Terry Cheng
                  </h1>
                  <p className="text-lg sm:text-xl text-muted-foreground mb-4">
                    Full-Stack Developer & Software Engineer
                  </p>
                  <div className="flex items-center gap-2 justify-center md:justify-start text-muted-foreground text-sm sm:text-base">
                    <FaLocationDot className="text-primary" />
                    <span>Adelaide, SA 5000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Education Timeline */}
          <div ref={timelineRef} className="max-w-4xl mx-auto mb-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                My Journey
              </h2>
              <div className="w-24 h-1 bg-gray-700 dark:bg-green-400 mx-auto rounded-full"></div>
            </div>
            <div className="flex justify-center">
              <TimelineComponent />
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div ref={introRef} className="max-w-4xl mx-auto mb-14">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gray-700 dark:bg-green-400 mx-auto rounded-full"></div>
          </div>
          <figure className="relative overflow-hidden bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm rounded-2xl pl-12 px-10 md:px-16 py-6 md:py-8 border border-border">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1 left-2 md:-top-1 md:left-1 text-8xl md:text-9xl leading-none font-serif text-primary/20 select-none"
            >
              “
            </div>
            <blockquote className="relative text-lg md:text-2xl text-foreground/90 leading-relaxed text-left">
              I'm a full‑stack engineer who believes tech should serve everyone.
              I build simple, accessible tools that turn complex ideas into
              everyday usefulness.
            </blockquote>
          </figure>
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gray-700 dark:bg-green-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {/* Programming Languages */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <HiCodeBracket className="text-primary" />
                Languages & Databases
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {skills.languages.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    activeSkill={activeSkill}
                    setActiveSkill={setActiveSkill}
                  />
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <SiFramer className="text-primary" />
                Frameworks & Libraries
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {skills.frameworks.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    activeSkill={activeSkill}
                    setActiveSkill={setActiveSkill}
                  />
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <FaGitAlt className="text-primary" />
                Tools & Platforms
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {skills.tools.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    activeSkill={activeSkill}
                    setActiveSkill={setActiveSkill}
                  />
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <HiUserGroup className="text-primary" />
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.soft.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    activeSkill={activeSkill}
                    setActiveSkill={setActiveSkill}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
