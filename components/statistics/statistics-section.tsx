"use client";

import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/shared/container";
import { Users, Coins, ShieldCheck, Star } from "lucide-react";

interface StatCard {
  icon: typeof Users;
  value: string;
  label: string;
  description: string;
}

const stats: StatCard[] = [
  { icon: Users, value: "50K+", label: "Registered Users", description: "Players using LinkEarn" },
  { icon: Coins, value: "2.5M+", label: "Coins Earned", description: "Rewards distributed" },
  { icon: ShieldCheck, value: "18K+", label: "Secure Trades", description: "Successful marketplace trades" },
  { icon: Star, value: "4.9/5", label: "Community Rating", description: "Based on user feedback" },
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

        const hasDecimal = target.includes("/");
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

function StatCardView({ icon: Icon, value, label, description }: StatCard) {
  const [ref, displayValue] = useCountUp(value);

  return (
    <div
      className="group relative rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
    >
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-[#2563eb]" />
      <div className="flex size-12 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316] transition-transform duration-300 group-hover:scale-110 sm:size-14">
        <Icon className="size-6 sm:size-7" />
      </div>
      <p
        ref={ref}
        className="mt-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:mt-5 sm:text-4xl"
      >
        {displayValue}
      </p>
      <p className="mt-1 text-sm font-semibold text-[#0f172a] sm:text-base">{label}</p>
      <p className="mt-0.5 text-sm text-[#64748b]">{description}</p>
    </div>
  );
}

function StatisticsSection() {
  return (
    <section
      className="border-b border-[#e2e8f0] bg-[#f8faff] py-16 sm:py-20 lg:py-24"
      aria-labelledby="stats-heading"
    >
      <Container>
        <h2 id="stats-heading" className="sr-only">
          LinkEarn Statistics
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCardView key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export { StatisticsSection };
