"use client";

import { motion } from "framer-motion";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="fixed inset-0 z-10 flex flex-col sm:flex-row items-center justify-center pointer-events-none gap-16">
      <div
        className="text-center pointer-events-none"
        style={{
          transform: "skewX(-24deg) skewY(7deg)",
          transformOrigin: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-foreground mb-6 drop-shadow-2xl"
        >
          Terry
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Full-Stack Developer
        </motion.p>
      </div>
      <div
        style={{
          transform: "skewX(-24deg) skewY(7deg)",
          transformOrigin: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="space-y-4 shadow-2xl"
        >
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="max-w-3xs"
            layout="responsive"
          />
        </motion.div>
      </div>
    </div>
  );
}
