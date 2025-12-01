"use client";

import { motion } from "framer-motion";

export default function MemeBotSection() {
  return (
    <section className="py-24 px-4 border-b border-gray-800 bg-black overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <h2 className="text-4xl font-bold text-gray-100 glitch" data-text="MEME BOT">
          MEME BOT
        </h2>

        <div className="space-y-4">
            <p className="text-xl text-gray-400">
            Our AI is waking up. It hates everything.
            </p>
            <p className="text-sm text-gray-600 font-mono">
            STATUS: COMPILING...
            </p>
        </div>

        <div className="w-full max-w-md mx-auto h-4 bg-gray-900 border border-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "99%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="h-full bg-gray-500"
          ></motion.div>
        </div>

        <p className="text-xs text-gray-700 font-mono animate-pulse">
            ERROR: 404 HOPE NOT FOUND
        </p>
      </div>
    </section>
  );
}
