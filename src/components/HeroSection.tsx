"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [text, setText] = useState("IT'S OVER");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => (prev === "IT'S OVER" ? "WE'RE BACK" : "IT'S OVER"));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b border-gray-800">
      {/* Background Grid/Noise (Optional, can be added via CSS) */}
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10 pointer-events-none"></div>

      <div className="z-10 text-center space-y-8 px-4">
        <motion.h1
          key={text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1.5 }}
          className="text-6xl md:text-9xl font-bold tracking-tighter glitch"
          data-text={text}
        >
          {text}
        </motion.h1>

        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto">
          The Dev faded. The market crashed. But the memes remained.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gray-800 border-2 border-gray-600 text-white font-bold text-xl shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          BUY $DOOM
        </motion.button>
      </div>

      {/* Wojak Image Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-50 grayscale pointer-events-none"
      >
        <img
          src="/DOOMER.jpg"
          alt="DOOMER"
          className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        />
      </motion.div>
    </section>
  );
}
