import Link from "next/link";
import { Container } from "@/components/shared/container";
import { ROUTES } from "@/constants";
import {
  Home,
  Star,
  ArrowRight,
  Eye,
  Sparkles,
  Gem,
  Swords,
  Zap,
  MapPin,
  BadgeCheck,
  Users,
} from "lucide-react";

interface MarketplaceListing {
  townHall: string;
  townHallLabel: string;
  builderHall?: string;
  level: number;
  heroes: string;
  gems: number;
  price: string;
  status: "Verified" | "Featured";
  sellerRating: number;
  isOnline: boolean;
}

const listings: MarketplaceListing[] = [
  {
    townHall: "TH11",
    townHallLabel: "Town Hall 11",
    builderHall: "BH7",
    level: 145,
    heroes: "AQ 50 / BK 45 / GW 20",
    gems: 2800,
    price: "$25",
    status: "Verified",
    sellerRating: 4.8,
    isOnline: true,
  },
  {
    townHall: "TH13",
    townHallLabel: "Town Hall 13",
    builderHall: "BH8",
    level: 198,
    heroes: "AQ 75 / BK 75 / GW 50",
    gems: 5200,
    price: "$55",
    status: "Verified",
    sellerRating: 4.9,
    isOnline: true,
  },
  {
    townHall: "TH16",
    townHallLabel: "Town Hall 16",
    builderHall: "BH10",
    level: 256,
    heroes: "Max Heroes",
    gems: 12100,
    price: "$180",
    status: "Featured",
    sellerRating: 5.0,
    isOnline: false,
  },
];

const filters = [
  "All",
  "TH11",
  "TH12",
  "TH13",
  "TH14",
  "TH15",
  "TH16",
  "Featured",
  "Verified",
];

function FilterPill({ label, active = false, index }: { label: string; active?: boolean; index: number }) {
  return (
    <button
      className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.97] ${
        active
          ? "border-[#2563eb] bg-[#2563eb] text-white shadow-sm"
          : "border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#2563eb]/30 hover:text-[#2563eb]"
      }`}
      aria-label={`Filter by ${label}`}
      style={{ animation: `fade-up 0.3s ease-out ${index * 0.04}s both` }}
    >
      {label}
    </button>
  );
}

interface MarketplaceCardProps extends MarketplaceListing {
  index: number;
}

function MarketplaceCard({
  townHall,
  townHallLabel,
  builderHall,
  level,
  heroes,
  gems,
  price,
  status,
  sellerRating,
  isOnline,
  index,
}: MarketplaceCardProps) {
  const isFeatured = status === "Featured";

  return (
    <div
      className="group relative rounded-2xl border border-[#e2e8f0] bg-white/90 p-0 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#2563eb]/20 hover:shadow-xl hover:shadow-[#2563eb]/5"
      style={{ animation: `fade-up 0.5s ease-out ${index * 0.1}s both` }}
    >
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8]" />

      {isFeatured && (
        <div className="absolute -right-2 -top-2 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-[#f97316] to-[#ea580c] px-3 py-1 text-[11px] font-semibold text-white shadow-lg">
          <Star className="size-3" />
          Featured
        </div>
      )}

      <div className="relative h-40 overflow-hidden rounded-t-2xl sm:h-44">
        <div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2563eb]/5 via-[#2563eb]/10 to-[#1d4ed8]/5 transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-1 opacity-40">
            <Home className="size-10 text-[#2563eb]" />
            <span className="text-[10px] font-semibold tracking-wider text-[#2563eb]">{townHall}</span>
          </div>
        </div>

        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-md border border-[#2563eb]/20 bg-white/90 px-2 py-0.5 text-[10px] font-bold text-[#2563eb] shadow-sm backdrop-blur">
            <MapPin className="size-2.5" />
            {townHall}
          </span>
          {builderHall && (
            <span className="inline-flex items-center gap-1 rounded-md border border-[#f97316]/20 bg-white/90 px-2 py-0.5 text-[10px] font-bold text-[#f97316] shadow-sm backdrop-blur">
              <Swords className="size-2.5" />
              {builderHall}
            </span>
          )}
        </div>

        <div className="absolute bottom-3 right-3">
          {isOnline ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#22c55e]/15 px-2 py-0.5 text-[10px] font-medium text-[#22c55e] backdrop-blur">
              <span className="size-1.5 rounded-full bg-[#22c55e]" />
              Online
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#64748b]/15 px-2 py-0.5 text-[10px] font-medium text-[#64748b] backdrop-blur">
              <span className="size-1.5 rounded-full bg-[#64748b]" />
              Offline
            </span>
          )}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-[#0f172a] sm:text-base">{townHallLabel}</h3>
            <div className="mt-0.5 flex items-center gap-1">
              {isFeatured ? (
                <Star className="size-3 fill-[#f97316] text-[#f97316]" />
              ) : (
                <BadgeCheck className="size-3 text-[#22c55e]" />
              )}
              <span
                className={`text-[11px] font-medium ${isFeatured ? "text-[#f97316]" : "text-[#22c55e]"}`}
              >
                {status}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Users className="size-3 text-[#f97316]" />
            <span className="text-xs font-semibold text-[#0f172a]">{sellerRating.toFixed(1)}</span>
          </div>
        </div>

        <div className="mt-4">
          <span className="text-2xl font-bold tracking-tight text-[#0f172a] transition-colors duration-200 group-hover:text-[#2563eb] sm:text-3xl">
            {price}
          </span>
        </div>

        <div className="mt-4 space-y-2.5">
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
            <span className="text-[#64748b]">Gems</span>
            <span className="flex items-center gap-1 font-semibold text-[#0f172a]">
              <Gem className="size-3.5 text-[#2563eb]" />
              {gems.toLocaleString()}
            </span>
          </div>
        </div>

        <Link
          href={ROUTES.marketplace}
          className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-sm font-semibold text-white shadow-md shadow-[#2563eb]/15 transition-all duration-200 hover:shadow-lg hover:shadow-[#2563eb]/25 active:scale-[0.97]"
        >
          <Eye className="size-4" />
          View Details
        </Link>
      </div>
    </div>
  );
}

function MarketplacePreviewSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" aria-labelledby="marketplace-heading">
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
        className="pointer-events-none absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: "radial-gradient(#2563eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[10%] top-16 size-2 rounded-full bg-[#2563eb]/[0.06] blur-sm"
        aria-hidden="true"
        style={{ animation: "float-1 6s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute right-[15%] top-28 size-3 rounded-full bg-[#f97316]/[0.05] blur-sm"
        aria-hidden="true"
        style={{ animation: "float-2 8s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute bottom-20 left-1/4 size-2.5 rounded-full bg-[#2563eb]/[0.04] blur-sm"
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
            Marketplace
          </div>
          <h2
            id="marketplace-heading"
            className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl"
          >
            Buy &amp; Sell
            <br />
            <span className="text-[#f97316]">Verified Clash Accounts</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#64748b] sm:text-lg">
            Browse premium Clash of Clans accounts verified by LinkEarn admins for safe and secure trading.
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          style={{ animation: "fade-up 0.4s ease-out 0.2s both" }}
          role="group"
          aria-label="Filter listings"
        >
          {filters.map((filter, index) => (
            <FilterPill key={filter} label={filter} active={filter === "All"} index={index} />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing, index) => (
            <MarketplaceCard key={listing.townHall} {...listing} index={index} />
          ))}
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animation: "fade-up 0.5s ease-out 0.5s both" }}
        >
          <Link
            href={ROUTES.marketplace}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-7 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition-all duration-200 hover:shadow-xl hover:shadow-[#2563eb]/25 active:scale-[0.97] sm:w-auto"
            style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
          >
            Browse Marketplace
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/sell"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#e2e8f0] bg-white px-7 text-sm font-semibold text-[#0f172a] shadow-sm transition-all duration-200 hover:border-[#cbd5e1] hover:bg-[#f8fafc] hover:shadow-md active:scale-[0.97] sm:w-auto"
          >
            <Zap className="size-4 text-[#f97316]" />
            Sell Your Account
          </Link>
        </div>
      </Container>
    </section>
  );
}

export { MarketplacePreviewSection };
