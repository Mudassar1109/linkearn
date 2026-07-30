import { HeroSection } from "@/components/hero/hero-section";
import { StatisticsSection } from "@/components/statistics/statistics-section";
import { FeaturesSection } from "@/components/features/features-section";
import { HowItWorksSection } from "@/components/how-it-works/how-it-works-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <FeaturesSection />
      <HowItWorksSection />
    </>
  );
}
