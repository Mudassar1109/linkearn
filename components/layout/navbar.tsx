"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { NAV_LINKS, ROUTES } from "@/constants";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow duration-200",
        scrolled ? "shadow-[0_1px_3px_0_rgb(0_0_0_/_0.08)]" : "shadow-none"
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main navigation">
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                  pathname === link.href
                    ? "bg-[#f1f5f9] text-[#0f172a]"
                    : "text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={ROUTES.login}
              className="inline-flex h-9 items-center justify-center rounded-lg border border-[#e2e8f0] bg-white px-4 text-sm font-medium text-[#0f172a] transition-all duration-200 hover:bg-[#f8fafc] hover:border-[#cbd5e1] active:scale-[0.97]"
            >
              Log In
            </Link>
            <Link
              href={ROUTES.signup}
              className="inline-flex h-9 items-center justify-center rounded-lg bg-[#2563eb] px-4 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#1d4ed8] active:scale-[0.97]"
            >
              Sign Up
            </Link>
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
              className="inline-flex size-9 items-center justify-center rounded-lg text-[#64748b] transition-colors duration-200 hover:bg-[#f1f5f9] hover:text-[#0f172a]"
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
          "fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden",
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
            className="inline-flex size-9 items-center justify-center rounded-lg text-[#64748b] transition-colors duration-200 hover:bg-[#f1f5f9] hover:text-[#0f172a]"
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={cn(
                  "flex items-center rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors duration-200",
                  pathname === link.href
                    ? "bg-[#eff6ff] text-[#2563eb]"
                    : "text-[#334155] hover:bg-[#f8fafc] hover:text-[#0f172a]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-[#e2e8f0] p-5">
          <div className="flex flex-col gap-3">
            <Link
              href={ROUTES.login}
              onClick={close}
              className="inline-flex h-10 items-center justify-center rounded-lg border border-[#e2e8f0] bg-white text-sm font-medium text-[#0f172a] transition-all duration-200 hover:bg-[#f8fafc]"
            >
              Log In
            </Link>
            <Link
              href={ROUTES.signup}
              onClick={close}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-[#2563eb] text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#1d4ed8]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Navbar };
