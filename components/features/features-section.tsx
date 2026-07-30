import { Container } from "@/components/shared/container";
import {
  CalendarDays,
  RefreshCcw,
  Gift,
  UserPlus,
  Shield,
  MessageSquare,
  Rocket,
  Wallet,
} from "lucide-react";

interface Feature {
  icon: typeof CalendarDays;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: CalendarDays, title: "Daily Reward", description: "Claim rewards every day by maintaining your login streak." },
  { icon: RefreshCcw, title: "Lucky Spinner", description: "Spin once daily for a chance to earn bonus coins." },
  { icon: Gift, title: "Mystery Box", description: "Unlock surprise coin rewards and rare bonuses." },
  { icon: UserPlus, title: "Referral Program", description: "Invite friends and earn coins from successful referrals." },
  { icon: Shield, title: "Secure Marketplace", description: "Buy and sell Clash of Clans accounts securely through admin verification." },
  { icon: MessageSquare, title: "Community Chat", description: "Join the global gaming community and interact safely." },
  { icon: Rocket, title: "Fast Withdrawals", description: "Withdraw your earned rewards quickly and securely." },
  { icon: Wallet, title: "Wallet", description: "Track coins, rewards, referrals, and withdrawals from one place." },
];

interface FeatureCardProps {
  icon: Feature["icon"];
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <div
      className="group relative rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
      style={{ animation: `fade-up 0.5s ease-out ${index * 0.08}s both` }}
    >
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-[#2563eb]" />
      <div className="flex size-12 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316] transition-transform duration-300 group-hover:scale-110 sm:size-14">
        <Icon className="size-6 sm:size-7" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-[#0f172a] sm:mt-5 sm:text-lg">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[#64748b]">
        {description}
      </p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="features-heading">
      <Container>
        <div
          className="mx-auto max-w-2xl text-center"
          style={{ animation: "fade-up 0.5s ease-out both" }}
        >
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#2563eb]/15 bg-[#2563eb]/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#2563eb]">
            <span className="size-1.5 rounded-full bg-[#2563eb]" />
            Everything You Need
          </div>
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl"
          >
            Everything You Need
            <br />
            <span className="text-[#f97316]">To Earn More</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#64748b] sm:text-lg">
            LinkEarn combines rewards, referrals, marketplace trading, and community features into
            one modern platform designed for gamers.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export { FeaturesSection };
