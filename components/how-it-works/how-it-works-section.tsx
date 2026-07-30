import Link from "next/link";
import { Container } from "@/components/shared/container";
import { ROUTES } from "@/constants";
import { UserPlus, Coins, ArrowRightLeft, ArrowRight } from "lucide-react";

interface Step {
  icon: typeof UserPlus;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: UserPlus,
    number: "01",
    title: "Create Your Account",
    description: "Sign up for free and join the LinkEarn gaming community.",
  },
  {
    icon: Coins,
    number: "02",
    title: "Earn Coins",
    description: "Complete daily rewards, referrals, spinner, and community activities.",
  },
  {
    icon: ArrowRightLeft,
    number: "03",
    title: "Trade or Withdraw",
    description: "Use your earned coins for secure marketplace purchases or withdrawals.",
  },
];

interface StepCardProps {
  icon: Step["icon"];
  number: string;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}

function StepCard({ icon: Icon, number, title, description, index, isLast }: StepCardProps) {
  return (
    <div className="relative flex flex-1 flex-col items-center text-center">
      <div
        className="relative flex flex-col items-center"
        style={{ animation: `fade-up 0.5s ease-out ${index * 0.15}s both` }}
      >
        <div className="flex size-20 items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:size-24">
          <div className="flex size-14 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316] transition-transform duration-300 group-hover:scale-110 sm:size-16">
            <Icon className="size-7 sm:size-8" />
          </div>
        </div>
        <span className="mt-4 text-sm font-semibold text-[#2563eb]">{number}</span>
        <h3 className="mt-2 text-lg font-semibold text-[#0f172a]">{title}</h3>
        <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-[#64748b]">
          {description}
        </p>
      </div>

      {!isLast && (
        <div className="hidden h-0.5 w-full max-w-[6rem] self-center bg-[#e2e8f0] lg:block" />
      )}
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section className="bg-[#f8faff] py-16 sm:py-20 lg:py-24" aria-labelledby="how-it-works-heading">
      <Container>
        <div
          className="mx-auto max-w-2xl text-center"
          style={{ animation: "fade-up 0.5s ease-out both" }}
        >
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#2563eb]/15 bg-[#2563eb]/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#2563eb]">
            <span className="size-1.5 rounded-full bg-[#2563eb]" />
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
            Create your account, earn coins through daily activities, and use your rewards for
            withdrawals or marketplace trading.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-0">
          {steps.map((step, index) => (
            <StepCard key={step.number} {...step} index={index} isLast={index === steps.length - 1} />
          ))}
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animation: "fade-up 0.5s ease-out 0.5s both" }}
        >
          <Link
            href={ROUTES.signup}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-7 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition-all duration-200 hover:bg-[#1d4ed8] hover:shadow-xl hover:shadow-[#2563eb]/25 active:scale-[0.97] sm:w-auto"
          >
            Start Earning Now
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href={ROUTES.about}
            className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-[#e2e8f0] bg-white px-7 text-sm font-semibold text-[#0f172a] shadow-sm transition-all duration-200 hover:bg-[#f8fafc] hover:border-[#cbd5e1] hover:shadow-md active:scale-[0.97] sm:w-auto"
          >
            Learn More
          </Link>
        </div>
      </Container>
    </section>
  );
}

export { HowItWorksSection };
