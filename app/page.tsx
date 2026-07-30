import { HeroSection } from "@/components/hero/hero-section";
import { StatisticsSection } from "@/components/statistics/statistics-section";
import { FeaturesSection } from "@/components/features/features-section";
import { HowItWorksSection } from "@/components/how-it-works/how-it-works-section";
import { MarketplacePreviewSection } from "@/components/marketplace-preview/marketplace-preview-section";
import { LeaderboardPreviewSection } from "@/components/leaderboard-preview/leaderboard-preview-section";
import { FaqSection } from "@/components/faq/faq-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <MarketplacePreviewSection />
      <LeaderboardPreviewSection />
      <FaqSection />
    </>
  );
}
