export default function ChartSection() {
  return (
    <section className="py-24 px-4 border-b border-gray-800 bg-[#050505]">
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-gray-100 text-center mb-12">
          THE CHART
        </h2>

        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] border-4 border-gray-800 rounded-lg overflow-hidden bg-black shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 pointer-events-none border border-white/5 z-10 rounded-lg"></div>
          <iframe
            src="https://dexscreener.com/solana/7qdnJCW4JcCDqkgnK8FDdi3GHrJtWihoKSSrAxT4CDZm?embed=1&theme=dark"
            className="w-full h-full"
            title="DexScreener Chart"
          ></iframe>
        </div>

        <div className="text-center">
            <a
                href="https://dexscreener.com/solana/7qdnJCW4JcCDqkgnK8FDdi3GHrJtWihoKSSrAxT4CDZm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-gray-500 hover:text-white underline decoration-dashed underline-offset-4"
            >
                View on DexScreener ↗
            </a>
        </div>
      </div>
    </section>
  );
}
