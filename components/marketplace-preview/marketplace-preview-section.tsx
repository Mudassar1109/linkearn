import Link from "next/link";
import { Container } from "@/components/shared/container";
import { ROUTES } from "@/constants";
import { Home, Shield, Star, ArrowRight, Eye } from "lucide-react";

interface Listing {
  townHall: string;
  price: string;
  level: number;
  heroes: string;
  status: "Verified" | "Featured";
}

const listings: Listing[] = [
  { townHall: "Town Hall 11", price: "$25", level: 145, heroes: "AQ 50 / BK 45", status: "Verified" },
  { townHall: "Town Hall 13", price: "$55", level: 198, heroes: "AQ 75 / BK 75", status: "Verified" },
  { townHall: "Town Hall 16", price: "$180", level: 256, heroes: "Max Heroes", status: "Featured" },
];

function ListingCard({ townHall, price, level, heroes, status, index }: Listing & { index: number }) {
  const isFeatured = status === "Featured";

  return (
    <div
      className="group relative rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
      style={{ animation: `fade-up 0.5s ease-out ${index * 0.1}s both` }}
    >
      {isFeatured && (
        <div className="absolute -right-2 -top-2 flex items-center gap-1 rounded-full bg-[#f97316] px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
          <Star className="size-3" />
          Featured
        </div>
      )}

      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-[#2563eb]" />

      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-xl bg-[#2563eb]/10 text-[#2563eb] sm:size-14">
          <Home className="size-6 sm:size-7" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#0f172a]">{townHall}</p>
          <div className="mt-0.5 flex items-center gap-1">
            {isFeatured ? (
              <Star className="size-3 fill-[#f97316] text-[#f97316]" />
            ) : (
              <Shield className="size-3 text-[#22c55e]" />
            )}
            <span className={`text-xs font-medium ${isFeatured ? "text-[#f97316]" : "text-[#22c55e]"}`}>
              {status}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-[#0f172a]">{price}</span>
      </div>

      <div className="mt-5 space-y-2.5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#64748b]">Level</span>
          <span className="font-semibold text-[#0f172a]">{level}</span>
        </div>
        <div className="h-px bg-[#e2e8f0]" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#64748b]">Heroes</span>
          <span className="font-semibold text-[#0f172a]">{heroes}</span>
        </div>
        <div className="h-px bg-[#e2e8f0]" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#64748b]">Status</span>
          <span className={`font-semibold ${isFeatured ? "text-[#f97316]" : "text-[#22c55e]"}`}>
            {status}
          </span>
        </div>
      </div>

      <Link
        href={ROUTES.marketplace}
        className="mt-6 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-[#e2e8f0] bg-white text-sm font-semibold text-[#0f172a] transition-all duration-200 hover:bg-[#f8fafc] hover:border-[#cbd5e1] hover:shadow-sm active:scale-[0.97]"
      >
        <Eye className="size-4" />
        View Details
      </Link>
    </div>
  );
}

function MarketplacePreviewSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="marketplace-heading">
      <Container>
        <div
          className="mx-auto max-w-2xl text-center"
          style={{ animation: "fade-up 0.5s ease-out both" }}
        >
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#2563eb]/15 bg-[#2563eb]/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#2563eb]">
            <span className="size-1.5 rounded-full bg-[#2563eb]" />
            Marketplace
          </div>
          <h2
            id="marketplace-heading"
            className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl"
          >
            Buy &amp; Sell
            <br />
            <span className="text-[#f97316]">Clash of Clans Accounts</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#64748b] sm:text-lg">
            Trade Clash of Clans accounts safely through LinkEarn&apos;s admin verification system.
            Every listing is reviewed before it becomes available.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing, index) => (
            <ListingCard key={listing.townHall} {...listing} index={index} />
          ))}
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animation: "fade-up 0.5s ease-out 0.4s both" }}
        >
          <Link
            href={ROUTES.marketplace}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-7 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition-all duration-200 hover:bg-[#1d4ed8] hover:shadow-xl hover:shadow-[#2563eb]/25 active:scale-[0.97] sm:w-auto"
          >
            Browse Marketplace
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/sell"
            className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-[#e2e8f0] bg-white px-7 text-sm font-semibold text-[#0f172a] shadow-sm transition-all duration-200 hover:bg-[#f8fafc] hover:border-[#cbd5e1] hover:shadow-md active:scale-[0.97] sm:w-auto"
          >
            Sell Your Account
          </Link>
        </div>
      </Container>
    </section>
  );
}

export { MarketplacePreviewSection };
