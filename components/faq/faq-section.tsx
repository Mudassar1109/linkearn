"use client";

import { useState, useCallback } from "react";
import { Container } from "@/components/shared/container";
import {
  ChevronDown,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Headphones,
  Clock,
  Users,
  Mail,
  MessageSquare,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How do I earn coins?",
    answer:
      "Earn coins through Daily Rewards, Spinner, Mystery Boxes, Referrals, and Marketplace activity.",
  },
  {
    question: "How can I withdraw rewards?",
    answer:
      "Once you reach the minimum withdrawal limit, you can request a withdrawal through your dashboard.",
  },
  {
    question: "Is the marketplace safe?",
    answer:
      "Yes. Every Clash of Clans account is reviewed and verified by the LinkEarn admin before being listed.",
  },
  {
    question: "How do referrals work?",
    answer:
      "Invite friends using your referral link and earn bonus rewards when they become active.",
  },
  {
    question: "Can I use LinkEarn on mobile?",
    answer:
      "Yes. LinkEarn is fully responsive and works perfectly on desktop, tablet, and mobile devices.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const id = `faq-${item.question.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div
      className="group rounded-2xl border border-[#e2e8f0] bg-white/90 shadow-sm backdrop-blur transition-all duration-200 hover:border-[#2563eb]/20 hover:shadow-md"
      style={{ animation: `fade-up 0.4s ease-out ${index * 0.08}s both` }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[#0f172a] transition-colors duration-200 hover:text-[#2563eb] sm:px-6 sm:py-5 sm:text-base"
      >
        <span>{item.question}</span>
        <ChevronDown
          className={`size-4 shrink-0 text-[#64748b] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={id}
        role="region"
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-[#e2e8f0] px-5 py-4 text-sm leading-relaxed text-[#64748b] sm:px-6 sm:py-5">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function SupportCard() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-gradient-to-br from-[#2563eb]/[0.03] to-[#1d4ed8]/[0.03] p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2563eb]/5 sm:p-8"
      style={{ animation: "fade-up 0.5s ease-out 0.3s both" }}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-[#2563eb]/[0.06] blur-[40px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-8 -left-8 size-24 rounded-full bg-[#f97316]/[0.05] blur-[40px]"
        aria-hidden="true"
      />

      <div className="flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-white shadow-lg shadow-[#2563eb]/20 sm:size-16">
        <Headphones className="size-7 sm:size-8" />
      </div>

      <h3 className="mt-5 text-lg font-bold text-[#0f172a] sm:text-xl">Need Help?</h3>
      <p className="mt-1 text-sm leading-relaxed text-[#64748b]">
        Our community and support team are ready to assist you.
      </p>

      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-white/80 p-3 transition-colors duration-200 hover:border-[#2563eb]/20 sm:p-3.5">
          <div className="flex size-10 items-center justify-center rounded-lg bg-[#2563eb]/10 text-[#2563eb] sm:size-11">
            <MessageSquare className="size-4 sm:size-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#0f172a] sm:text-sm">Discord</p>
            <p className="text-[10px] text-[#64748b] sm:text-xs">24/7 Community Chat</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-white/80 p-3 transition-colors duration-200 hover:border-[#2563eb]/20 sm:p-3.5">
          <div className="flex size-10 items-center justify-center rounded-lg bg-[#f97316]/10 text-[#f97316] sm:size-11">
            <Mail className="size-4 sm:size-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#0f172a] sm:text-sm">Email</p>
            <p className="text-[10px] text-[#64748b] sm:text-xs">support@linkearn.com</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-4 rounded-xl border border-[#e2e8f0] bg-white/80 px-3.5 py-3 sm:px-4">
        <div className="flex items-center gap-2">
          <Clock className="size-4 text-[#2563eb]" />
          <div>
            <p className="text-[10px] font-semibold text-[#0f172a] sm:text-xs">&lt; 2 Hours</p>
            <p className="text-[9px] text-[#64748b] sm:text-[10px]">Response Time</p>
          </div>
        </div>
        <div className="h-8 w-px bg-[#e2e8f0]" />
        <div className="flex items-center gap-2">
          <Users className="size-4 text-[#f97316]" />
          <div>
            <p className="text-[10px] font-semibold text-[#0f172a] sm:text-xs">18K+</p>
            <p className="text-[9px] text-[#64748b] sm:text-[10px]">Community</p>
          </div>
        </div>
      </div>

      <a
        href="mailto:support@linkearn.com"
        className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-sm font-semibold text-white shadow-md shadow-[#2563eb]/15 transition-all duration-200 hover:shadow-lg hover:shadow-[#2563eb]/25 active:scale-[0.97]"
      >
        <MessageCircle className="size-4" />
        Contact Support
        <ArrowRight className="size-4" />
      </a>
    </div>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" aria-labelledby="faq-heading">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[#f8faff]/50 to-white"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 size-80 rounded-full bg-[#2563eb]/[0.04] blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/3 size-64 rounded-full bg-[#f97316]/[0.03] blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[12%] top-20 size-2 rounded-full bg-[#2563eb]/[0.06] blur-sm"
        aria-hidden="true"
        style={{ animation: "float-1 6s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute right-[18%] bottom-32 size-3 rounded-full bg-[#f97316]/[0.05] blur-sm"
        aria-hidden="true"
        style={{ animation: "float-3 8s ease-in-out infinite" }}
      />

      <Container className="relative">
        <div
          className="mx-auto max-w-2xl text-center"
          style={{ animation: "fade-up 0.5s ease-out both" }}
        >
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#2563eb]/15 bg-[#2563eb]/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#2563eb]">
            <Sparkles className="size-3.5" />
            Help Center
          </div>
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl"
          >
            Frequently Asked
            <br />
            <span className="text-[#f97316]">Questions</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#64748b] sm:text-lg">
            Find answers to the most common questions about LinkEarn rewards, referrals, marketplace,
            and withdrawals.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div
            className="flex flex-col gap-3 lg:col-span-3"
            style={{ animation: "fade-up 0.5s ease-out 0.1s both" }}
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                item={faq}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
                index={index}
              />
            ))}
          </div>

          <div className="lg:col-span-2">
            <SupportCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

export { FaqSection };
