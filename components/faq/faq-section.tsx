"use client";

import { useState, useCallback } from "react";
import { Container } from "@/components/shared/container";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";

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

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const id = `faq-${item.question.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div
      className="rounded-2xl border border-[#e2e8f0] bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
      style={{ animation: "fade-up 0.5s ease-out both" }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[#0f172a] transition-colors duration-200 hover:text-[#2563eb] sm:px-6 sm:py-5 sm:text-base"
      >
        <span>{item.question}</span>
        <ChevronDown
          className={`size-4 shrink-0 text-[#64748b] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={id}
        role="region"
        className={`grid transition-all duration-200 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
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

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="faq-heading">
      <Container>
        <div
          className="mx-auto max-w-2xl text-center"
          style={{ animation: "fade-up 0.5s ease-out both" }}
        >
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#2563eb]/15 bg-[#2563eb]/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#2563eb]">
            <span className="size-1.5 rounded-full bg-[#2563eb]" />
            Frequently Asked Questions
          </div>
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl"
          >
            Everything You
            <br />
            <span className="text-[#f97316]">Need To Know</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#64748b] sm:text-lg">
            Find answers to the most common questions about LinkEarn rewards, withdrawals, referrals,
            and marketplace.
          </p>
        </div>

        <div
          className="mx-auto mt-12 flex max-w-2xl flex-col gap-3"
          style={{ animation: "fade-up 0.5s ease-out 0.1s both" }}
        >
          {faqs.map((faq, index) => (
            <FaqAccordionItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>

        <div
          className="mt-12 text-center"
          style={{ animation: "fade-up 0.5s ease-out 0.3s both" }}
        >
          <p className="text-sm text-[#64748b]">Still have questions?</p>
          <a
            href="mailto:support@linkearn.com"
            className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-7 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition-all duration-200 hover:bg-[#1d4ed8] hover:shadow-xl hover:shadow-[#2563eb]/25 active:scale-[0.97]"
          >
            <MessageCircle className="size-4" />
            Contact Support
            <ArrowRight className="size-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}

export { FaqSection };
