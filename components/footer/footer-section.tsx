import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Link as LinkIcon, Mail, Send } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Marketplace: [
    { label: "Buy Accounts", href: "/marketplace" },
    { label: "Sell Accounts", href: "/sell" },
    { label: "Safety", href: "/safety" },
    { label: "Verified Sellers", href: "/verified-sellers" },
  ],
  Resources: [
    { label: "Help Center", href: "/help" },
    { label: "Community", href: "/community" },
    { label: "Leaderboard", href: "/leaderboard" },
    { label: "Daily Rewards", href: "/rewards" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Community Guidelines", href: "/guidelines" },
  ],
} as const;

const socials = [
  { label: "Discord", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
];

function FooterSection() {
  return (
    <footer className="border-t border-[#e2e8f0] bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-6">
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-[#2563eb] text-white">
                  <LinkIcon className="size-5" />
                </div>
                <span className="text-lg font-bold tracking-tight text-[#0f172a]">
                  LinkEarn
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#64748b]">
                LinkEarn is the modern platform for gamers to earn rewards, trade Clash of Clans
                accounts, and grow with the community.
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold text-[#0f172a]">Stay Updated</p>
                <form
                  className="mt-3 flex gap-2"
                  action="#"
                >
                  <div className="relative flex-1">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#64748b]" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="h-10 w-full rounded-xl border border-[#e2e8f0] bg-white pl-10 pr-3 text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-colors duration-200 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/10"
                      aria-label="Email for newsletter"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-[#2563eb] px-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1d4ed8] active:scale-[0.97]"
                  >
                    <Send className="size-4" />
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-sm font-semibold text-[#0f172a]">{heading}</h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#64748b] transition-colors duration-200 hover:text-[#2563eb]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#e2e8f0] py-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-[#94a3b8]">
              &copy; 2026 LinkEarn. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-xs font-medium text-[#64748b] transition-colors duration-200 hover:text-[#2563eb]"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { FooterSection };
