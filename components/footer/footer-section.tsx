import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Link as LinkIcon, Mail, Send, ShieldCheck, Zap, BadgeCheck, Users, Heart, Sparkles } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "Community", href: "/community" },
  { label: "Dashboard", href: "/dashboard" },
];

const platformLinks = [
  { label: "Daily Rewards", href: "/rewards" },
  { label: "Spinner", href: "/spinner" },
  { label: "Mystery Box", href: "/mystery-box" },
  { label: "Wallet", href: "/wallet" },
  { label: "Withdraw", href: "/withdraw" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Discord", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "X", href: "#" },
  { label: "Facebook", href: "#" },
];

const socialColors: Record<string, string> = {
  Discord: "hover:bg-[#5865F2]/10 hover:text-[#5865F2] hover:border-[#5865F2]/20",
  YouTube: "hover:bg-[#FF0000]/10 hover:text-[#FF0000] hover:border-[#FF0000]/20",
  X: "hover:bg-[#000]/10 hover:text-[#000] hover:border-[#000]/20",
  Facebook: "hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:border-[#1877F2]/20",
};

const trustBadges = [
  { icon: ShieldCheck, label: "Secure Marketplace" },
  { icon: Zap, label: "Fast Withdrawals" },
  { icon: BadgeCheck, label: "Verified Sellers" },
  { icon: Users, label: "Community Driven" },
];

function FooterColumn({ heading, links }: { heading: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#0f172a]">{heading}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-[#64748b] transition-all duration-200 hover:translate-x-0.5 hover:text-[#2563eb]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialButton({ label }: { label: string }) {
  return (
    <a
      href="#"
      className={`flex size-10 items-center justify-center rounded-xl border border-[#e2e8f0] bg-white text-xs font-semibold text-[#64748b] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.95] ${socialColors[label]}`}
      aria-label={label}
    >
      {label}
    </a>
  );
}

function TrustBadge({ icon: Icon, label }: { icon: typeof ShieldCheck; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white/70 px-3.5 py-1.5 shadow-sm backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2563eb]/20 hover:shadow-md">
      <Icon className="size-3.5 text-[#2563eb]" />
      <span className="text-[11px] font-medium text-[#0f172a]">{label}</span>
    </div>
  );
}

function FooterSection() {
  return (
    <footer className="relative overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[#f8faff]/30 to-white"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-1/3 size-96 rounded-full bg-[#2563eb]/[0.03] blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/3 size-64 rounded-full bg-[#f97316]/[0.02] blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div
          className="-mx-4 rounded-t-3xl border-x border-t border-[#e2e8f0] bg-white/80 px-4 shadow-sm backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{ animation: "fade-up 0.5s ease-out both" }}
        >
          <div className="py-12 lg:py-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-8">
              <div className="lg:col-span-2">
                <Link href="/" className="inline-flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-white shadow-md">
                    <LinkIcon className="size-5" />
                  </div>
                  <span className="text-lg font-bold tracking-tight text-[#0f172a]">
                    LinkEarn
                  </span>
                </Link>
                <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
                  LinkEarn is a modern gaming rewards platform where users earn coins, trade Clash of
                  Clans accounts securely, complete daily activities, and grow together.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {socials.map((social) => (
                    <SocialButton key={social.label} label={social.label} />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                <FooterColumn heading="Quick Links" links={quickLinks} />
              </div>
              <div className="lg:col-span-2">
                <FooterColumn heading="Platform" links={platformLinks} />
              </div>
              <div className="lg:col-span-2">
                <FooterColumn heading="Legal" links={legalLinks} />
              </div>
            </div>
          </div>

          <div className="border-t border-[#e2e8f0] py-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-md">
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f172a]">
                  <Sparkles className="size-4 text-[#f97316]" />
                  Stay Updated
                </div>
                <p className="mt-1 text-xs text-[#64748b]">
                  Get the latest LinkEarn updates and feature announcements.
                </p>
              </div>
              <form className="flex w-full max-w-sm gap-2" action="#">
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#64748b]" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-11 w-full rounded-xl border border-[#e2e8f0] bg-white pl-10 pr-3 text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-all duration-200 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10"
                    aria-label="Email for newsletter"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-5 text-sm font-semibold text-white shadow-md shadow-[#2563eb]/15 transition-all duration-200 hover:shadow-lg hover:shadow-[#2563eb]/25 active:scale-[0.97]"
                >
                  <Send className="size-4" />
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 border-t border-[#e2e8f0] py-6">
            {trustBadges.map((badge) => (
              <TrustBadge key={badge.label} icon={badge.icon} label={badge.label} />
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 border-t border-[#e2e8f0] py-6 sm:flex-row sm:justify-between">
            <p className="text-xs text-[#94a3b8]">
              &copy; 2026 LinkEarn. Built with <Heart className="inline-block size-3 text-[#f97316]" />{" "}
              for gamers.
            </p>
            <span className="rounded-full border border-[#e2e8f0] bg-white px-3 py-1 text-[10px] font-medium text-[#64748b] shadow-sm">
              v2.0
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { FooterSection };
