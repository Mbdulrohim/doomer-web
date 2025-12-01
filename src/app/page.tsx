import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ChartSection from "@/components/ChartSection";
import MemeBotSection from "@/components/MemeBotSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-300 selection:bg-gray-800 selection:text-white">
      <div className="scanlines"></div>
      <HeroSection />
      <AboutSection />
      <ChartSection />
      <MemeBotSection />
      <TokenomicsSection />
      <Footer />
    </main>
  );
}
