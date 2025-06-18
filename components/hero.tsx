"use client";

import { motion } from "framer-motion";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="fixed inset-0 z-10 flex flex-col sm:flex-row items-center justify-center pointer-events-none gap-20">
      <div className="text-center pointer-events-none transform -skew-x-24 skew-y-7">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textShadow: "8px 8px 10px rgba(0, 0, 0, 0.2)" }}
          className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-foreground mb-6"
        >
          Terry
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textShadow: "8px 8px 10px rgba(0, 0, 0, 0.2)" }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Full-Stack Developer
        </motion.p>
      </div>
      <div className="transform -skew-x-24 skew-y-7">
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
            className="max-w-3xs sm:max-w-2xs"
            layout="responsive"
          />
        </motion.div>
      </div>
    </div>
  );
}
