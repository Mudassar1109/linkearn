import Link from "next/link";
import { Container } from "@/components/shared/container";
import { ROUTES } from "@/constants";
import { ArrowRight, ShieldCheck, Zap, Users, Wallet, Gift, RefreshCw, Trophy, Coins } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "Secure Marketplace" },
  { icon: Zap, label: "Fast Withdrawals" },
  { icon: Users, label: "Active Community" },
] as const;

interface FloatingCardProps {
  className?: string;
  style?: React.CSSProperties;
  animation: string;
  children: React.ReactNode;
}

function FloatingCard({ className, style, animation, children }: FloatingCardProps) {
  return (
    <div
      className={className}
      style={{ animation, ...style }}
    >
      {children}
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f8faff] to-white"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -top-24 right-1/4 size-96 rounded-full bg-[#2563eb]/[0.04] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/3 size-80 rounded-full bg-[#f97316]/[0.04] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 top-1/3 size-64 rounded-full bg-[#2563eb]/[0.03] blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative py-16 md:py-20 lg:py-24">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div
            className="flex-1 text-center lg:text-left"
            style={{ animation: "fade-up 0.6s ease-out both" }}
          >
            <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#2563eb]/15 bg-[#2563eb]/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#2563eb]">
              <span className="size-1.5 rounded-full bg-[#2563eb] animate-pulse" />
              Trusted Gaming Marketplace
            </div>

            <h1
              id="hero-heading"
              className="text-4xl font-bold leading-[1.15] tracking-tight text-[#0f172a] sm:text-5xl md:text-6xl"
            >
              <span className="block">Earn Coins.</span>
              <span className="block text-[#2563eb]">Trade Accounts.</span>
              <span className="block text-[#f97316]">Grow Together.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#64748b] sm:text-lg lg:mx-0">
              Join the LinkEarn community to earn rewards, complete daily activities, buy &amp; sell
              Clash of Clans accounts securely, and compete with players worldwide.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href={ROUTES.signup}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-7 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition-all duration-200 hover:bg-[#1d4ed8] hover:shadow-xl hover:shadow-[#2563eb]/25 active:scale-[0.97] sm:w-auto"
              >
                Get Started
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={ROUTES.marketplace}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#e2e8f0] bg-white px-7 text-sm font-semibold text-[#0f172a] shadow-sm transition-all duration-200 hover:bg-[#f8fafc] hover:border-[#cbd5e1] hover:shadow-md active:scale-[0.97] sm:w-auto"
              >
                Explore Marketplace
              </Link>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-start"
              style={{ animation: "fade-up 0.6s ease-out 0.2s both" }}
            >
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-[#64748b]">
                  <item.icon className="size-4 text-[#22c55e]" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative hidden h-[520px] w-full max-w-lg shrink-0 lg:block"
            aria-hidden="true"
          >
            <FloatingCard
              className="absolute left-0 top-4 w-52 rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-lg shadow-black/[0.03] transition-shadow duration-300 hover:shadow-xl hover:shadow-black/[0.06]"
              animation="float-1 5s ease-in-out infinite"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[#2563eb]/10 text-[#2563eb]">
                  <Wallet className="size-5" />
                </div>
                <span className="rounded-full bg-[#22c55e]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#22c55e]">+12%</span>
              </div>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-wider text-[#64748b]">Wallet</p>
              <p className="mt-0.5 text-xl font-bold text-[#0f172a]">
                <Coins className="mr-1 inline size-4 text-[#f59e0b]" />
                12,450
              </p>
              <p className="text-xs text-[#64748b]">Available coins</p>
            </FloatingCard>

            <FloatingCard
              className="absolute right-0 top-8 w-48 rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-lg shadow-black/[0.03] transition-shadow duration-300 hover:shadow-xl hover:shadow-black/[0.06]"
              animation="float-2 4.5s ease-in-out infinite 0.5s"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316]">
                <Users className="size-5" />
              </div>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-wider text-[#64748b]">Referrals</p>
              <p className="mt-0.5 text-xl font-bold text-[#0f172a]">+48</p>
              <p className="text-xs text-[#64748b]">This month</p>
            </FloatingCard>

            <FloatingCard
              className="absolute left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-[#2563eb]/10 bg-white p-5 shadow-lg shadow-[#2563eb]/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-[#2563eb]/10"
              animation="float-3 4s ease-in-out infinite 1s"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#2563eb]/10 text-[#2563eb]">
                <RefreshCw className="size-5" />
              </div>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-wider text-[#64748b]">Daily Spin</p>
              <p className="mt-0.5 text-xl font-bold text-[#0f172a]">3x</p>
              <p className="text-xs text-[#64748b]">Spins left today</p>
            </FloatingCard>

            <FloatingCard
              className="absolute bottom-12 left-4 w-44 rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-lg shadow-black/[0.03] transition-shadow duration-300 hover:shadow-xl hover:shadow-black/[0.06]"
              animation="float-1 5.5s ease-in-out infinite 0.3s"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316]">
                <Gift className="size-5" />
              </div>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-wider text-[#64748b]">Mystery Box</p>
              <p className="mt-0.5 text-lg font-bold text-[#0f172a]">Unlock</p>
              <p className="text-xs text-[#64748b]">3 boxes available</p>
            </FloatingCard>

            <FloatingCard
              className="absolute bottom-16 right-4 w-48 rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-lg shadow-black/[0.03] transition-shadow duration-300 hover:shadow-xl hover:shadow-black/[0.06]"
              animation="float-2 4.8s ease-in-out infinite 1.5s"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#f59e0b]/10 text-[#f59e0b]">
                <Trophy className="size-5" />
              </div>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-wider text-[#64748b]">Leaderboard</p>
              <p className="mt-0.5 text-xl font-bold text-[#0f172a]">#42</p>
              <p className="text-xs text-[#64748b]">Top 10% rank</p>
            </FloatingCard>
          </div>

          <div
            className="grid w-full grid-cols-2 gap-3 sm:gap-4 lg:hidden"
            style={{ animation: "fade-up 0.6s ease-out 0.3s both" }}
          >
            {[
              { icon: Wallet, color: "#2563eb", label: "Wallet", value: "12,450", sub: "Available coins", change: "+12%" },
              { icon: Users, color: "#f97316", label: "Referrals", value: "+48", sub: "This month" },
              { icon: RefreshCw, color: "#2563eb", label: "Daily Spin", value: "3x", sub: "Spins left" },
              { icon: Gift, color: "#f97316", label: "Mystery Box", value: "Unlock", sub: "3 available" },
              { icon: Trophy, color: "#f59e0b", label: "Leaderboard", value: "#42", sub: "Top 10%" },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex size-9 items-center justify-center rounded-lg sm:size-10"
                    style={{ backgroundColor: `${card.color}10`, color: card.color }}
                  >
                    <card.icon className="size-4 sm:size-5" />
                  </div>
                  {"change" in card && card.change && (
                    <span className="rounded-full bg-[#22c55e]/10 px-2 py-0.5 text-[10px] font-semibold text-[#22c55e] sm:text-[11px]">
                      {card.change}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-[#64748b] sm:mt-3 sm:text-[11px]">
                  {card.label}
                </p>
                <p className="mt-0.5 text-base font-bold text-[#0f172a] sm:text-lg">
                  {card.label === "Wallet" && (
                    <Coins className="mr-0.5 inline size-3.5 text-[#f59e0b] sm:size-4" />
                  )}
                  {card.value}
                </p>
                <p className="text-[11px] text-[#64748b] sm:text-xs">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export { HeroSection };
