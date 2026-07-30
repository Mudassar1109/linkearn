"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  LogIn,
  Search,
  Bell,
  ChevronDown,
  Globe,
  User,
  LayoutDashboard,
  Wallet,
  Settings,
  LogOut,
  Gift,
  RefreshCw,
  Trophy,
  Users,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { NAV_LINKS, ROUTES } from "@/constants";

const marketplaceDropdown = [
  { label: "Buy Accounts", href: "/marketplace" },
  { label: "Sell Account", href: "/sell" },
  { label: "Verified Sellers", href: "/verified-sellers" },
  { label: "Recently Added", href: "/marketplace?sort=newest" },
];

const userMenuItems = [
  { label: "Profile", href: "/profile", icon: User },
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Wallet", href: "/wallet", icon: Wallet },
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Logout", href: ROUTES.login, icon: LogOut },
];

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "Community", href: "/community" },
  { label: "Wallet", href: "/wallet", icon: Wallet },
  { label: "Daily Reward", href: "/rewards", icon: Gift },
  { label: "Spinner", href: "/spinner", icon: RefreshCw },
  { label: "Mystery Box", href: "/mystery-box", icon: Trophy },
  { label: "Referral", href: "/referral", icon: Users },
];

const mobileBottomLinks = [
  { label: "Profile", href: "/profile", icon: User },
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Logout", href: ROUTES.login, icon: LogOut },
];

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > threshold);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

function useBodyLock(lock: boolean) {
  useEffect(() => {
    document.body.style.overflow = lock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lock]);
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div className="relative group">
      <Link
        href={href}
        className={cn(
          "relative px-3.5 py-2 text-sm font-medium transition-colors duration-200",
          isActive ? "text-[#2563eb]" : "text-[#64748b] hover:text-[#0f172a]"
        )}
      >
        {label}
        <span
          className={cn(
            "absolute -bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-[#2563eb] transition-all duration-200",
            isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
          )}
        />
      </Link>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [marketplaceOpen, setMarketplaceOpen] = useState(false);
  const scrolled = useScrolled(8);
  const pathname = usePathname();

  useBodyLock(open);

  const close = useCallback(() => setOpen(false), []);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const marketplaceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
      if (marketplaceRef.current && !marketplaceRef.current.contains(e.target as Node)) {
        setMarketplaceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur shadow-[0_1px_3px_0_rgb(0_0_0_/_0.08)]"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main navigation">
          <Logo />

          <div className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => {
              if (link.label === "Marketplace") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    ref={marketplaceRef}
                    onMouseEnter={() => setMarketplaceOpen(true)}
                    onMouseLeave={() => setMarketplaceOpen(false)}
                  >
                    <button
                      onClick={() => setMarketplaceOpen(!marketplaceOpen)}
                      className={cn(
                        "relative flex items-center px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                        marketplaceOpen || pathname.startsWith("/marketplace")
                          ? "text-[#2563eb]"
                          : "text-[#64748b] hover:text-[#0f172a]"
                      )}
                      aria-expanded={marketplaceOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown className={cn("ml-1 size-3.5 transition-transform duration-200", marketplaceOpen && "rotate-180")} />
                      <span
                        className={cn(
                          "absolute -bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-[#2563eb] transition-all duration-200",
                          pathname.startsWith("/marketplace") ? "w-4/5" : "w-0"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-2xl border border-[#e2e8f0] bg-white p-2 shadow-lg transition-all duration-200",
                        marketplaceOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-1 opacity-0"
                      )}
                      role="menu"
                    >
                      {marketplaceDropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block rounded-lg px-4 py-2.5 text-sm text-[#334155] transition-colors duration-150 hover:bg-[#f8fafc] hover:text-[#0f172a]"
                          role="menuitem"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return <NavLink key={link.href} href={link.href} label={link.label} />;
            })}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              className="flex size-9 items-center justify-center rounded-lg text-[#64748b] transition-colors duration-200 hover:bg-[#f1f5f9] hover:text-[#0f172a]"
              aria-label="Search"
            >
              <Search className="size-4" />
            </button>

            <button
              className="relative flex size-9 items-center justify-center rounded-lg text-[#64748b] transition-colors duration-200 hover:bg-[#f1f5f9] hover:text-[#0f172a]"
              aria-label="Notifications"
            >
              <Bell className="size-4" />
              <span className="absolute right-2 top-2 flex size-4 items-center justify-center rounded-full bg-[#ef4444] text-[10px] font-bold text-white">
                3
              </span>
            </button>

            <button
              className="flex h-9 items-center gap-1 rounded-lg px-3 text-sm font-medium text-[#64748b] transition-colors duration-200 hover:bg-[#f1f5f9] hover:text-[#0f172a]"
              aria-label="Language"
            >
              <Globe className="size-4" />
              EN
              <ChevronDown className="size-3" />
            </button>

            <div className="mx-2 h-5 w-px bg-[#e2e8f0]" />

            <Link
              href={ROUTES.login}
              className="inline-flex h-9 items-center justify-center rounded-lg px-4 text-sm font-medium text-[#0f172a] transition-colors duration-200 hover:bg-[#f1f5f9]"
            >
              Log In
            </Link>
            <Link
              href={ROUTES.signup}
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md hover:from-[#1d4ed8] hover:to-[#1e40af] active:scale-[0.97]"
            >
              Sign Up
              <ArrowRight className="size-3.5" />
            </Link>

            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex size-9 items-center justify-center rounded-lg text-[#64748b] transition-colors duration-200 hover:bg-[#f1f5f9] hover:text-[#0f172a]"
                aria-label="User menu"
                aria-expanded={userMenuOpen}
              >
                <User className="size-4" />
              </button>

              {userMenuOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-52 rounded-2xl border border-[#e2e8f0] bg-white p-2 shadow-lg"
                  role="menu"
                >
                  {userMenuItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm text-[#334155] transition-colors duration-150 hover:bg-[#f8fafc] hover:text-[#0f172a]"
                      role="menuitem"
                    >
                      <item.icon className="size-4 text-[#64748b]" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href={ROUTES.login}
              className="inline-flex size-9 items-center justify-center rounded-lg text-[#64748b] transition-colors duration-200 hover:bg-[#f1f5f9] hover:text-[#0f172a]"
              aria-label="Log In"
            >
              <LogIn className="size-5" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="relative flex size-9 items-center justify-center rounded-lg text-[#64748b] transition-colors duration-200 hover:bg-[#f1f5f9] hover:text-[#0f172a]"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </Container>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={close}
        aria-hidden="true"
      />

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-80 flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-[#e2e8f0] px-5 h-16">
          <Logo />
          <button
            onClick={close}
            className="flex size-9 items-center justify-center rounded-lg text-[#64748b] transition-colors duration-200 hover:bg-[#f1f5f9] hover:text-[#0f172a]"
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4">
          <div className="flex flex-col gap-1">
            <p className="px-3.5 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]">
              Navigation
            </p>
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors duration-200",
                  pathname === link.href
                    ? "bg-[#eff6ff] text-[#2563eb]"
                    : "text-[#334155] hover:bg-[#f8fafc] hover:text-[#0f172a]"
                )}
              >
                {link.icon && <link.icon className="size-4 text-[#64748b]" />}
                {link.label}
              </Link>
            ))}
          </div>

          <hr className="my-4 border-[#e2e8f0]" />

          <div className="flex flex-col gap-1">
            <p className="px-3.5 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-widest text-[#94a3b8]">
              Account
            </p>
            {mobileBottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={close}
                className="flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm font-medium text-[#334155] transition-colors duration-200 hover:bg-[#f8fafc] hover:text-[#0f172a]"
              >
                <link.icon className="size-4 text-[#64748b]" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-[#e2e8f0] p-5">
          <Link
            href={ROUTES.signup}
            onClick={close}
            className="inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md active:scale-[0.97]"
          >
            Get Started
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export { Navbar };
