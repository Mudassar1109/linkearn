import Link from "next/link";
import { Container } from "@/components/shared/container";
import { ROUTES } from "@/constants";
import { Crown, Medal, Award, ArrowRight, Sparkles, Flame, Trophy } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  username: string;
  initials: string;
  country: string;
  xp: number;
  maxXp: number;
  coins: string;
  referrals: number;
  badge: string;
}

const entries: LeaderboardEntry[] = [
  { rank: 1, username: "ShadowHunter", initials: "S", country: "🇺🇸", xp: 9200, maxXp: 10000, coins: "24,850", referrals: 185, badge: "Gold" },
  { rank: 2, username: "FireKing", initials: "F", country: "🇬🇧", xp: 8100, maxXp: 10000, coins: "21,600", referrals: 160, badge: "Silver" },
  { rank: 3, username: "NovaX", initials: "N", country: "🇩🇪", xp: 7400, maxXp: 10000, coins: "18,920", referrals: 148, badge: "Bronze" },
  { rank: 4, username: "WarLord", initials: "W", country: "🇨🇦", xp: 6800, maxXp: 10000, coins: "17,430", referrals: 132, badge: "Top 10" },
  { rank: 5, username: "GhostYT", initials: "G", country: "🇦🇺", xp: 6200, maxXp: 10000, coins: "15,950", referrals: 120, badge: "Top 10" },
];

const filters = ["Weekly", "Monthly", "All Time", "Referrals", "Marketplace"];

const rankMedal: Record<number, { icon: typeof Crown; color: string; bg: string } | null> = {
  1: { icon: Crown, color: "#f59e0b", bg: "#f59e0b15" },
  2: { icon: Medal, color: "#94a3b8", bg: "#94a3b815" },
  3: { icon: Award, color: "#d97706", bg: "#d9770615" },
};

const topRowBg: Record<number, string> = {
  1: "bg-gradient-to-r from-[#f59e0b]/[0.04] via-[#f59e0b]/[0.02] to-transparent",
  2: "bg-gradient-to-r from-[#94a3b8]/[0.04] via-[#94a3b8]/[0.02] to-transparent",
  3: "bg-gradient-to-r from-[#d97706]/[0.04] via-[#d97706]/[0.02] to-transparent",
};

const badgeConfig: Record<string, { badgeBg: string; badgeText: string; badgeBorder: string }> = {
  Gold: { badgeBg: "#f59e0b1a", badgeText: "#f59e0b", badgeBorder: "#f59e0b33" },
  Silver: { badgeBg: "#94a3b81a", badgeText: "#94a3b8", badgeBorder: "#94a3b833" },
  Bronze: { badgeBg: "#d977061a", badgeText: "#d97706", badgeBorder: "#d9770633" },
  "Top 10": { badgeBg: "#2563eb1a", badgeText: "#2563eb", badgeBorder: "#2563eb33" },
};

function FilterPill({ label, active = false, index }: { label: string; active?: boolean; index: number }) {
  return (
    <button
      className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.97] ${
        active
          ? "border-[#2563eb] bg-[#2563eb] text-white shadow-sm"
          : "border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#2563eb]/30 hover:text-[#2563eb]"
      }`}
      aria-label={`Filter by ${label}`}
      style={{ animation: `fade-up 0.3s ease-out ${index * 0.05}s both` }}
    >
      {label}
    </button>
  );
}

function XPBar({ xp, maxXp }: { xp: number; maxXp: number }) {
  const pct = (xp / maxXp) * 100;
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e2e8f0]">
      <div
        className="h-full rounded-full bg-gradient-to-r from-[#2563eb] to-[#f97316] transition-all duration-700 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

interface LeaderboardRowProps {
  entry: LeaderboardEntry;
  index: number;
}

function LeaderboardRow({ entry, index }: LeaderboardRowProps) {
  const medal = rankMedal[entry.rank] ?? null;
  const rowBg = topRowBg[entry.rank] ?? "";
  const { badgeBg, badgeText, badgeBorder } = badgeConfig[entry.badge];
  const MedalIcon = medal?.icon;

  return (
    <div
      className={`group flex items-center gap-2 rounded-xl px-3 py-3 transition-all duration-200 hover:bg-[#f8fafc] sm:gap-3 sm:px-5 sm:py-3.5 ${rowBg}`}
      style={{ animation: `fade-up 0.4s ease-out ${index * 0.08}s both` }}
    >
      <div className="flex w-7 items-center justify-center sm:w-8">
        {medal && MedalIcon ? (
          <div
            className="flex size-7 items-center justify-center rounded-full sm:size-8"
            style={{ backgroundColor: medal.bg }}
          >
            <MedalIcon className="size-3.5 sm:size-4" style={{ color: medal.color }} />
          </div>
        ) : (
          <span className="text-xs font-bold text-[#64748b] sm:text-sm">{entry.rank}</span>
        )}
      </div>

      <div className="relative shrink-0">
        <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-xs font-bold text-white shadow-sm transition-shadow duration-200 group-hover:shadow-md group-hover:shadow-[#2563eb]/20 sm:size-10 sm:text-sm">
          {entry.initials}
        </div>
        <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-white bg-[#22c55e]" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[#0f172a] sm:text-base">{entry.username}</p>
        <div className="mt-0.5 flex items-center gap-1.5">
          <span className="text-xs leading-none">{entry.country}</span>
          <span className="text-[10px] text-[#94a3b8]">•</span>
          <XPBar xp={entry.xp} maxXp={entry.maxXp} />
        </div>
      </div>

      <div className="hidden text-right sm:block">
        <p className="flex items-center justify-end gap-1 text-sm font-semibold text-[#0f172a]">
          <Flame className="size-3.5 text-[#f97316]" />
          {entry.coins}
        </p>
        <p className="text-[10px] text-[#64748b]">Coins</p>
      </div>

      <div className="hidden text-right sm:block">
        <p className="text-sm font-semibold text-[#0f172a]">{entry.referrals}</p>
        <p className="text-[10px] text-[#64748b]">Refs</p>
      </div>

      <div
        className="flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold sm:px-2.5 sm:py-1 sm:text-xs"
        style={{ backgroundColor: badgeBg, color: badgeText, borderColor: badgeBorder }}
      >
        {entry.badge === "Gold" && <Trophy className="size-2.5 sm:size-3" />}
        {entry.badge === "Top 10" && <Award className="size-2.5 sm:size-3" />}
        {entry.badge}
      </div>
    </div>
  );
}

function LeaderboardPreviewSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" aria-labelledby="leaderboard-heading">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f8faff]/50 via-white to-[#f8faff]/50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/3 size-80 rounded-full bg-[#2563eb]/[0.04] blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 size-64 rounded-full bg-[#f97316]/[0.03] blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[20%] top-16 size-2 rounded-full bg-[#2563eb]/[0.06] blur-sm"
        aria-hidden="true"
        style={{ animation: "float-2 7s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute right-[25%] bottom-24 size-3 rounded-full bg-[#f97316]/[0.05] blur-sm"
        aria-hidden="true"
        style={{ animation: "float-1 6s ease-in-out infinite" }}
      />

      <Container className="relative">
        <div
          className="mx-auto max-w-2xl text-center"
          style={{ animation: "fade-up 0.5s ease-out both" }}
        >
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#2563eb]/15 bg-[#2563eb]/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#2563eb]">
            <Sparkles className="size-3.5" />
            Community Leaderboard
          </div>
          <h2
            id="leaderboard-heading"
            className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl"
          >
            Top Earners
            <br />
            <span className="text-[#f97316]">This Week</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#64748b] sm:text-lg">
            See the most active LinkEarn members earning rewards through referrals, marketplace trading,
            and daily activities.
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          style={{ animation: "fade-up 0.4s ease-out 0.2s both" }}
          role="group"
          aria-label="Filter leaderboard"
        >
          {filters.map((filter, index) => (
            <FilterPill key={filter} label={filter} active={filter === "Weekly"} index={index} />
          ))}
        </div>

        <div
          className="mx-auto mt-8 max-w-4xl"
          style={{ animation: "fade-up 0.5s ease-out 0.25s both" }}
        >
          <div className="rounded-2xl border border-[#e2e8f0] bg-white/90 shadow-sm backdrop-blur">
            <div className="flex items-center gap-2 rounded-t-2xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-3 py-3.5 sm:gap-3 sm:px-5 sm:py-4">
              <span className="flex w-7 items-center justify-center text-xs font-semibold text-white/70 sm:w-8 sm:text-sm">
                #
              </span>
              <span className="size-9 sm:size-10" />
              <span className="min-w-0 flex-1 text-xs font-semibold text-white/70 sm:text-sm">
                Player
              </span>
              <span className="hidden text-right text-xs font-semibold text-white/70 sm:block sm:text-sm">
                Coins
              </span>
              <span className="hidden text-right text-xs font-semibold text-white/70 sm:block sm:text-sm">
                Refs
              </span>
              <span className="text-xs font-semibold text-white/70 sm:text-sm">Badge</span>
            </div>

            <div className="divide-y divide-[#e2e8f0]">
              {entries.map((entry, index) => (
                <LeaderboardRow key={entry.username} entry={entry} index={index} />
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-10 flex justify-center"
          style={{ animation: "fade-up 0.5s ease-out 0.5s both" }}
        >
          <Link
            href={ROUTES.leaderboard}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-7 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition-all duration-200 hover:shadow-xl hover:shadow-[#2563eb]/25 active:scale-[0.97]"
          >
            <Trophy className="size-4" />
            View Full Leaderboard
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export { LeaderboardPreviewSection };
