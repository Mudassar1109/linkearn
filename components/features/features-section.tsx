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
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface Feature {
  icon: typeof CalendarDays;
  title: string;
  description: string;
  badge: string;
}

const features: Feature[] = [
  { icon: CalendarDays, title: "Daily Reward", description: "Claim rewards every day by maintaining your login streak.", badge: "Rewards" },
  { icon: RefreshCcw, title: "Lucky Spinner", description: "Spin once daily for a chance to earn bonus coins.", badge: "Games" },
  { icon: Gift, title: "Mystery Box", description: "Unlock surprise coin rewards and rare bonuses.", badge: "Bonuses" },
  { icon: UserPlus, title: "Referral Program", description: "Invite friends and earn coins from successful referrals.", badge: "Social" },
  { icon: Shield, title: "Secure Marketplace", description: "Buy and sell Clash of Clans accounts securely through admin verification.", badge: "Trading" },
  { icon: MessageSquare, title: "Community Chat", description: "Join the global gaming community and interact safely.", badge: "Social" },
  { icon: Rocket, title: "Fast Withdrawals", description: "Withdraw your earned rewards quickly and securely.", badge: "Finance" },
  { icon: Wallet, title: "Wallet", description: "Track coins, rewards, referrals, and withdrawals from one place.", badge: "Finance" },
];

function FeatureCard({ icon: Icon, title, description, badge, index }: Feature & { index: number }) {
  return (
    <div
      className="group relative rounded-2xl border border-[#e2e8f0] bg-white/90 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#2563eb]/20 hover:shadow-xl hover:shadow-[#2563eb]/5 sm:p-8"
      style={{ animation: `fade-up 0.5s ease-out ${index * 0.08}s both` }}
    >
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8]" />

      <div className="flex items-start justify-between">
        <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f97316]/10 to-[#f97316]/5 text-[#f97316] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-4deg] sm:size-14">
          <Icon className="size-6 sm:size-7" />
        </div>
        <span className="rounded-full border border-[#e2e8f0] bg-white px-2.5 py-0.5 text-[10px] font-semibold text-[#64748b] sm:text-[11px]">
          {badge}
        </span>
      </div>

      <h3 className="mt-5 text-base font-semibold text-[#0f172a] sm:text-lg">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[#64748b]">
        {description}
      </p>

      <div className="mt-5 flex items-center gap-1 text-sm font-medium text-[#2563eb] opacity-0 transition-all duration-200 group-hover:opacity-100">
        Learn More
        <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" aria-labelledby="features-heading">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[#f8faff]/50 to-white"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 size-96 rounded-full bg-[#2563eb]/[0.03] blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 size-80 rounded-full bg-[#f97316]/[0.03] blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/4 top-20 size-3 rounded-full bg-[#2563eb]/[0.06] blur-sm"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/3 top-40 size-2 rounded-full bg-[#f97316]/[0.06] blur-sm"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-32 left-1/3 size-4 rounded-full bg-[#2563eb]/[0.04] blur-sm"
        aria-hidden="true"
      />

      <Container className="relative">
        <div
          className="mx-auto max-w-2xl text-center"
          style={{ animation: "fade-up 0.5s ease-out both" }}
        >
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#2563eb]/15 bg-[#2563eb]/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#2563eb]">
            <Sparkles className="size-3.5" />
            Core Features
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
            one modern gaming platform.
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
