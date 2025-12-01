"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function AboutSection() {
  const [copied, setCopied] = useState(false);
  const CA = "AYZ4eB6toDd1hLXy7CvYUv36BtHd3VqiaHicG6ddpump";

  const handleCopy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-4 border-b border-gray-800 bg-black">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-100 border-l-4 border-gray-600 pl-4">
            THE NARRATIVE
          </h2>
          <div className="text-xl text-gray-400 font-mono space-y-4 leading-relaxed">
            <p>
              &gt; The Dev sold everything.
              <br />
              &gt; The chart looked like a cliff.
              <br />
              &gt; Everyone said it was over.
            </p>
            <p className="text-white">
              But we didn't leave. We took over. This is a pure Community Takeover (CTO).
              No roadmap, no promises, just vibes and memes.
            </p>
          </div>
        </div>

        <div className="p-6 border border-gray-700 bg-gray-900/50 rounded-lg">
          <p className="text-sm text-gray-500 mb-2">CA (Solana):</p>
          <div className="flex items-center justify-between bg-black border border-gray-800 p-4 rounded font-mono text-sm md:text-base break-all">
            <span className="text-gray-300">{CA}</span>
            <button
              onClick={handleCopy}
              className="ml-4 p-2 hover:bg-gray-800 rounded transition-colors text-gray-400 hover:text-white"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
