export default function TokenomicsSection() {
  return (
    <section className="py-24 px-4 border-b border-gray-800 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold text-gray-100">TOKENOMICS</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left font-mono">
            <div className="p-4 border border-gray-800 bg-black hover:border-gray-600 transition-colors">
              <h3 className="text-gray-500 text-sm">TOTAL SUPPLY</h3>
              <p className="text-2xl text-white">1,000,000,000</p>
            </div>
            <div className="p-4 border border-gray-800 bg-black hover:border-gray-600 transition-colors">
              <h3 className="text-gray-500 text-sm">LIQUIDITY</h3>
              <p className="text-2xl text-white">BURNED</p>
            </div>
            <div className="p-4 border border-gray-800 bg-black hover:border-gray-600 transition-colors">
              <h3 className="text-gray-500 text-sm">TAX</h3>
              <p className="text-2xl text-white">0/0</p>
            </div>
          </div>

          <div className="flex justify-center">
            {/* CSS Pie Chart */}
            <div className="relative w-64 h-64 rounded-full border-4 border-gray-700 bg-gray-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gray-800" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)' }}></div>
                <div className="absolute inset-0 bg-gray-700" style={{ clipPath: 'polygon(50% 50%, 0 0, 50% 0)' }}></div>
                <div className="z-10 text-center">
                    <p className="text-xs text-gray-400">100%</p>
                    <p className="text-white font-bold">COMMUNITY</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
