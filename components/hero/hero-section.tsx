"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { ROUTES } from "@/constants";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Wallet,
  Gift,
  RefreshCw,
  Trophy,
  Coins,
  ChevronRight,
  UserCheck,
  Sparkles,
  Shield,
} from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "Secure Marketplace" },
  { icon: Zap, label: "Fast Withdrawals" },
  { icon: Users, label: "Active Community" },
  { icon: UserCheck, label: "Verified Accounts" },
  { icon: Shield, label: "Admin Protection" },
] as const;

const statsData = [
  { value: "50K+", label: "Users" },
  { value: "2M+", label: "Coins Earned" },
  { value: "18K+", label: "Trades" },
  { value: "5.0", label: "Rating", suffix: true },
];

interface StatBoxProps {
  value: string;
  label: string;
  suffix?: boolean;
  index: number;
}

function StatBox({ value, label, suffix, index }: StatBoxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const raw = parseFloat(value.replace(/[^0-9.]/g, ""));
        const suffixStr = value.replace(/[0-9.]/g, "");
        const duration = 1200;
        const start = performance.now();

        function animate(now: number) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - (1 - progress) * (1 - progress);

          if (suffix) {
            setDisplay(`${(eased * raw).toFixed(1)}`);
          } else {
            setDisplay(`${Math.floor(eased * raw).toLocaleString()}${suffixStr}`);
          }

          if (progress < 1) requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return (
    <div
      className="text-center"
      style={{ animation: `fade-up-light 0.4s ease-out ${0.3 + index * 0.1}s both` }}
    >
      <p ref={ref} className="text-2xl font-bold text-[#2563eb] sm:text-3xl">
        {display}{suffix ? "/5" : ""}
      </p>
      <p className="mt-0.5 text-xs text-[#64748b] sm:text-sm">{label}</p>
    </div>
  );
}

function FloatingCard({
  className,
  style,
  children,
  index,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  index?: number;
}) {
  const anim = index !== undefined ? `float-${(index % 3) + 1} ${4 + (index % 3)}s ease-in-out ${index * 0.3}s infinite` : undefined;
  return (
    <div
      className={className}
      style={{ ...(anim ? { animation: anim } : {}), ...style }}
    >
      {children}
    </div>
  );
}

const dashboardCards = [
  {
    icon: Wallet,
    color: "#2563eb",
    bg: "#2563eb",
    label: "Wallet",
    value: "12,450",
    sub: "Available coins",
    badge: "+12%",
    badgeColor: "#22c55e",
    top: "4%",
    left: "0%",
    width: "48%",
  },
  {
    icon: Trophy,
    color: "#f59e0b",
    bg: "#f59e0b",
    label: "Leaderboard",
    value: "#42",
    sub: "Top 10% rank",
    top: "4%",
    right: "0%",
    width: "40%",
  },
  {
    icon: RefreshCw,
    color: "#2563eb",
    bg: "#2563eb",
    label: "Daily Spin",
    value: "3x",
    sub: "Spins left today",
    top: "40%",
    left: "6%",
    width: "38%",
  },
  {
    icon: Coins,
    color: "#f59e0b",
    bg: "#f59e0b",
    label: "Coins Earned",
    value: "6,230",
    sub: "This month",
    badge: "+18%",
    badgeColor: "#22c55e",
    top: "37%",
    right: "5%",
    width: "44%",
  },
  {
    icon: Gift,
    color: "#f97316",
    bg: "#f97316",
    label: "Mystery Box",
    value: "3",
    sub: "Unopened boxes",
    top: "68%",
    left: "0%",
    width: "42%",
  },
  {
    icon: Users,
    color: "#2563eb",
    bg: "#2563eb",
    label: "Referrals",
    value: "+48",
    sub: "This month",
    top: "65%",
    right: "0%",
    width: "46%",
  },
];

function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] overflow-hidden bg-gradient-to-b from-white via-[#f0f4ff] to-white lg:min-h-[700px]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-32 -top-32 size-[500px] rounded-full bg-[#2563eb]/[0.06] blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 size-[400px] rounded-full bg-[#f97316]/[0.05] blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 size-[300px] rounded-full bg-[#2563eb]/[0.03] blur-[80px]"
        aria-hidden="true"
      />

      <Container className="relative py-20 md:py-28 lg:py-32">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">
          <div
            className="flex-1 text-center lg:text-left"
            style={{ animation: "fade-up 0.7s ease-out both" }}
          >
            <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#2563eb]/15 bg-[#2563eb]/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#2563eb]">
              <Sparkles className="size-3.5" />
              Trusted Gaming Marketplace
            </div>

            <h1
              id="hero-heading"
              className="text-4xl font-bold leading-[1.1] tracking-tight text-[#0f172a] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="block">Earn Coins.</span>
              <span className="block text-[#2563eb]">Trade Accounts.</span>
              <span className="block text-[#f97316]">Grow Together.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#475569] sm:text-lg lg:mx-0">
              Join the LinkEarn community to earn rewards, complete daily activities, buy &amp; sell
              Clash of Clans accounts securely, and compete with players worldwide.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href={ROUTES.signup}
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-7 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#2563eb]/30 active:scale-[0.97] sm:w-auto"
                style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
              >
                Get Started
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={ROUTES.marketplace}
                className="inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-xl border border-[#e2e8f0] bg-white/80 px-7 text-sm font-semibold text-[#0f172a] shadow-sm backdrop-blur transition-all duration-200 hover:border-[#cbd5e1] hover:bg-white hover:shadow-md active:scale-[0.97] sm:w-auto"
              >
                Explore Marketplace
                <ChevronRight className="size-4" />
              </Link>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-start"
              style={{ animation: "fade-up-light 0.5s ease-out 0.25s both" }}
            >
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-1.5 text-sm text-[#475569]">
                  <item.icon className="size-4 text-[#22c55e]" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative hidden h-[560px] w-full max-w-[520px] shrink-0 lg:block"
            aria-hidden="true"
          >
            <div
              className="pointer-events-none absolute -inset-8 rounded-[40px] bg-gradient-to-b from-[#2563eb]/[0.03] to-transparent blur-xl"
              aria-hidden="true"
            />
            <div className="relative h-full w-full">
              {dashboardCards.map((card, i) => (
                <FloatingCard
                  key={card.label}
                  index={i}
                  className="absolute rounded-2xl border border-[#e2e8f0]/80 bg-white/90 p-4 shadow-lg shadow-black/[0.03] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.06]"
                  style={{
                    top: card.top,
                    left: card.left,
                    right: card.right,
                    width: card.width,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="flex size-9 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${card.color}12`, color: card.color }}
                    >
                      <card.icon className="size-[18px]" />
                    </div>
                    {"badge" in card && card.badge && (
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                        style={{ backgroundColor: `${card.badgeColor}12`, color: card.badgeColor }}
                      >
                        {card.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-[#64748b]">
                    {card.label}
                  </p>
                  <p className="mt-0.5 text-lg font-bold text-[#0f172a]">
                    {card.icon === Coins && (
                      <Coins className="mr-0.5 inline size-[14px] text-[#f59e0b]" />
                    )}
                    {card.value}
                  </p>
                  <p className="text-[11px] text-[#64748b]">{card.sub}</p>
                </FloatingCard>
              ))}
            </div>
          </div>

          <div
            className="grid w-full grid-cols-2 gap-3 sm:gap-4 lg:hidden"
            style={{ animation: "fade-up 0.5s ease-out 0.3s both" }}
          >
            {[
              { icon: Wallet, color: "#2563eb", label: "Wallet", value: "12,450", sub: "Available coins", badge: "+12%" },
              { icon: Trophy, color: "#f59e0b", label: "Leaderboard", value: "#42", sub: "Top 10%" },
              { icon: RefreshCw, color: "#2563eb", label: "Daily Spin", value: "3x", sub: "Spins left" },
              { icon: Coins, color: "#f59e0b", label: "Coins Earned", value: "6,230", sub: "This month", badge: "+18%" },
              { icon: Gift, color: "#f97316", label: "Mystery Box", value: "3", sub: "Unopened" },
              { icon: Users, color: "#2563eb", label: "Referrals", value: "+48", sub: "This month" },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex size-9 items-center justify-center rounded-lg sm:size-10"
                    style={{ backgroundColor: `${card.color}12`, color: card.color }}
                  >
                    <card.icon className="size-4 sm:size-5" />
                  </div>
                  {"badge" in card && card.badge && (
                    <span className="rounded-full bg-[#22c55e]/10 px-2 py-0.5 text-[10px] font-semibold text-[#22c55e]">
                      {card.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-[#64748b] sm:mt-3 sm:text-[11px]">
                  {card.label}
                </p>
                <p className="mt-0.5 text-base font-bold text-[#0f172a] sm:text-lg">
                  {card.label === "Coins Earned" && (
                    <Coins className="mr-0.5 inline size-3.5 text-[#f59e0b] sm:size-4" />
                  )}
                  {card.value}
                </p>
                <p className="text-[11px] text-[#64748b] sm:text-xs">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mx-auto mt-20 flex max-w-2xl items-center justify-center gap-8 divide-x divide-[#e2e8f0] rounded-2xl border border-[#e2e8f0] bg-white px-6 py-5 shadow-sm sm:gap-12 sm:px-10 sm:py-6 lg:mx-0 lg:max-w-none"
          style={{ animation: "fade-up 0.6s ease-out 0.4s both" }}
        >
          {statsData.map((stat, i) => (
            <StatBox key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export { HeroSection };
