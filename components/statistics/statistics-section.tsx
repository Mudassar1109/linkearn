"use client";

import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/shared/container";
import {
  Users,
  Coins,
  ShieldCheck,
  Star,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface StatCardData {
  icon: typeof Users;
  value: string;
  trend: string;
  trendLabel: string;
  label: string;
  description: string;
}

const stats: StatCardData[] = [
  { icon: Users, value: "50K+", trend: "+12%", trendLabel: "Growing", label: "Registered Users", description: "Players using LinkEarn" },
  { icon: Coins, value: "2M+", trend: "+8%", trendLabel: "Rising", label: "Coins Earned", description: "Rewards distributed" },
  { icon: ShieldCheck, value: "18K+", trend: "+15%", trendLabel: "Trusted", label: "Secure Trades", description: "Successful marketplace trades" },
  { icon: Star, value: "5.0", trend: "4.9", trendLabel: "Excellent", label: "Community Rating", description: "Based on user feedback" },
];

function useCountUp(target: string, threshold = 0.3): [React.RefObject<HTMLDivElement | null>, string] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const hasDecimal = target.includes(".");
        const raw = parseFloat(target.replace(/[^0-9.]/g, ""));
        const suffix = target.replace(/[0-9.]/g, "");
        const duration = 1200;
        const start = performance.now();

        let frameId: number;

        function animate(now: number) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - (1 - progress) * (1 - progress);

          if (hasDecimal) {
            const val = eased * raw;
            setDisplay(`${val.toFixed(1)}${suffix}`);
          } else {
            const val = Math.floor(eased * raw);
            setDisplay(`${val.toLocaleString()}${suffix}`);
          }

          if (progress < 1) frameId = requestAnimationFrame(animate);
        }

        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, threshold]);

  return [ref, display];
}

function StatisticCard({ icon: Icon, value, trend, trendLabel, label, description, index }: StatCardData & { index: number }) {
  const [ref, displayValue] = useCountUp(value);

  return (
    <div
      className="group relative rounded-2xl border border-[#e2e8f0] bg-white/90 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2563eb]/5 sm:p-8"
      style={{ animation: `fade-up 0.5s ease-out ${index * 0.1}s both` }}
    >
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8]" />

      <div className="flex items-start justify-between">
        <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f97316]/10 to-[#f97316]/5 text-[#f97316] shadow-sm transition-transform duration-300 group-hover:scale-110 sm:size-14">
          <Icon className="size-6 sm:size-7" />
        </div>
        <div className="flex items-center gap-1 rounded-full bg-[#22c55e]/10 px-2.5 py-1">
          <TrendingUp className="size-3 text-[#22c55e]" />
          <span className="text-[11px] font-semibold text-[#22c55e]">{trend}</span>
        </div>
      </div>

      <p
        ref={ref}
        className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:mt-6 sm:text-4xl"
      >
        {displayValue}
      </p>
      <p className="mt-1 text-sm font-semibold text-[#0f172a] sm:text-base">{label}</p>
      <p className="mt-0.5 text-sm text-[#64748b]">{description}</p>

      <div className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-[#22c55e]">
        <Sparkles className="size-3" />
        {trendLabel}
      </div>
    </div>
  );
}

function StatisticsSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-[#e2e8f0] py-16 sm:py-20 lg:py-24"
      aria-labelledby="stats-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f8faff] via-white to-[#f8faff]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/3 size-80 rounded-full bg-[#2563eb]/[0.04] blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 size-64 rounded-full bg-[#f97316]/[0.03] blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(#2563eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div
          className="mx-auto max-w-2xl text-center"
          style={{ animation: "fade-up 0.5s ease-out both" }}
        >
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#2563eb]/15 bg-[#2563eb]/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#2563eb]">
            <Sparkles className="size-3.5" />
            Platform Statistics
          </div>
          <h2
            id="stats-heading"
            className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl"
          >
            Trusted by Thousands
            <br />
            <span className="text-[#f97316]">Every Single Day</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#64748b] sm:text-lg">
            Join thousands of gamers already earning rewards and trading safely through LinkEarn.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatisticCard key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export { StatisticsSection };
