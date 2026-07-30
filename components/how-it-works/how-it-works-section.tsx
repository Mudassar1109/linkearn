import Link from "next/link";
import { Container } from "@/components/shared/container";
import { ROUTES } from "@/constants";
import { UserPlus, Coins, ArrowRightLeft, ArrowRight, Sparkles } from "lucide-react";

interface Step {
  icon: typeof UserPlus;
  number: string;
  title: string;
  description: string;
  badge: string;
}

const steps: Step[] = [
  {
    icon: UserPlus,
    number: "01",
    title: "Create Your Account",
    description: "Sign up for free and join the LinkEarn gaming community.",
    badge: "Account",
  },
  {
    icon: Coins,
    number: "02",
    title: "Earn Coins",
    description: "Complete Daily Rewards, Spinner, Mystery Box, Referrals, and Community activities.",
    badge: "Rewards",
  },
  {
    icon: ArrowRightLeft,
    number: "03",
    title: "Trade or Withdraw",
    description: "Use your earned coins to buy accounts, sell accounts, or request withdrawals.",
    badge: "Marketplace",
  },
];

function DesktopTimeline() {
  return (
    <div className="relative hidden w-full lg:block" aria-hidden="true">
      <div className="absolute left-0 right-0 top-7 h-0.5 bg-[#e2e8f0]">
        <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(to right, #2563eb, #f97316, #2563eb)",
            backgroundSize: "200% 100%",
            animation: "shimmer-x 3s linear infinite",
          }}
        />
      </div>
    </div>
  );
}

interface TimelineCardProps {
  icon: Step["icon"];
  number: string;
  title: string;
  description: string;
  badge: string;
  index: number;
}

function TimelineCard({ icon: Icon, number, title, description, badge, index }: TimelineCardProps) {
  return (
    <div className="relative flex flex-1 flex-col items-center">
      <div
        className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-lg font-bold text-white shadow-lg shadow-[#2563eb]/20 transition-transform duration-300 hover:scale-110"
        style={{ animation: "fade-up 0.4s ease-out both" }}
      >
        {number}
      </div>

      <div
        className="group relative mt-6 w-full rounded-2xl border border-[#e2e8f0] bg-white/90 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#2563eb]/20 hover:shadow-xl hover:shadow-[#2563eb]/5 sm:p-8"
        style={{ animation: `fade-up 0.5s ease-out ${0.1 + index * 0.15}s both` }}
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
      </div>
    </div>
  );
}

function MobileTimelineCard({ icon: Icon, number, title, description, badge, index }: TimelineCardProps) {
  return (
    <div className="relative flex items-start gap-5">
      <div
        className="relative z-10 mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-sm font-bold text-white shadow-md shadow-[#2563eb]/20"
        style={{ animation: `fade-up 0.4s ease-out ${index * 0.15}s both` }}
      >
        {number}
      </div>

      <div
        className="group relative flex-1 rounded-2xl border border-[#e2e8f0] bg-white/90 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#2563eb]/20 hover:shadow-xl hover:shadow-[#2563eb]/5 sm:p-6"
        style={{ animation: `fade-up 0.5s ease-out ${0.1 + index * 0.15}s both` }}
      >
        <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8]" />

        <div className="flex items-start justify-between">
          <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#f97316]/10 to-[#f97316]/5 text-[#f97316] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-4deg] sm:size-11">
            <Icon className="size-5 sm:size-5.5" />
          </div>
          <span className="rounded-full border border-[#e2e8f0] bg-white px-2 py-0.5 text-[10px] font-semibold text-[#64748b]">
            {badge}
          </span>
        </div>

        <h3 className="mt-4 text-sm font-semibold text-[#0f172a] sm:text-base">
          {title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-[#64748b] sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" aria-labelledby="how-it-works-heading">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f8faff]/50 via-white to-[#f8faff]/50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 size-80 rounded-full bg-[#2563eb]/[0.03] blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 size-64 rounded-full bg-[#f97316]/[0.03] blur-[100px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[15%] top-20 size-2 rounded-full bg-[#2563eb]/[0.06] blur-[2px]"
        aria-hidden="true"
        style={{ animation: "float-1 6s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute right-[20%] top-32 size-3 rounded-full bg-[#f97316]/[0.05] blur-[2px]"
        aria-hidden="true"
        style={{ animation: "float-2 8s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute bottom-28 left-1/3 size-2.5 rounded-full bg-[#2563eb]/[0.04] blur-[2px]"
        aria-hidden="true"
        style={{ animation: "float-3 7s ease-in-out infinite" }}
      />

      <Container className="relative">
        <div
          className="mx-auto max-w-2xl text-center"
          style={{ animation: "fade-up 0.5s ease-out both" }}
        >
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#2563eb]/15 bg-[#2563eb]/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#2563eb]">
            <Sparkles className="size-3.5" />
            Simple Process
          </div>
          <h2
            id="how-it-works-heading"
            className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl"
          >
            Start Earning
            <br />
            <span className="text-[#f97316]">In Just 3 Steps</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#64748b] sm:text-lg">
            Create your account, earn rewards, and use your coins through LinkEarn&apos;s secure ecosystem.
          </p>
        </div>

        <div className="relative mt-16">
          <DesktopTimeline />

          <div className="hidden gap-6 lg:flex">
            {steps.map((step, index) => (
              <TimelineCard key={step.number} {...step} index={index} />
            ))}
          </div>

          <div className="relative flex flex-col gap-8 lg:hidden">
            <div className="absolute left-[19px] top-0 h-full w-0.5 bg-[#e2e8f0]" aria-hidden="true">
              <div
                className="h-full w-full"
                style={{
                  background: "linear-gradient(to bottom, #2563eb, #f97316, #2563eb)",
                  backgroundSize: "100% 200%",
                  animation: "shimmer-y 3s linear infinite",
                }}
              />
            </div>
            {steps.map((step, index) => (
              <MobileTimelineCard key={step.number} {...step} index={index} />
            ))}
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animation: "fade-up 0.5s ease-out 0.7s both" }}
        >
          <Link
            href={ROUTES.signup}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-7 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition-all duration-200 hover:shadow-xl hover:shadow-[#2563eb]/25 active:scale-[0.97] sm:w-auto"
            style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
          >
            Start Earning Now
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href={ROUTES.about}
            className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-[#e2e8f0] bg-white px-7 text-sm font-semibold text-[#0f172a] shadow-sm transition-all duration-200 hover:border-[#cbd5e1] hover:bg-[#f8fafc] hover:shadow-md active:scale-[0.97] sm:w-auto"
          >
            Learn More
          </Link>
        </div>
      </Container>
    </section>
  );
}

export { HowItWorksSection };
