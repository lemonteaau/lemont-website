"use client";

import { motion } from "framer-motion";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none gap-16">
      <div
        className="text-center pointer-events-none"
        style={{
          transform: "skewX(-48deg) skewY(14deg)",
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
      </div>
      <div
        className="text-center"
        style={{
          transform: "skewX(-48deg) skewY(14deg)",
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
            layout="responsive"
          />
        </motion.div>
      </div>
    </div>
  );
}
