import Link from "next/link";
import { Container } from "@/components/shared/container";
import { ROUTES } from "@/constants";
import { Crown, Medal, User, ArrowRight } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  username: string;
  coins: string;
  referrals: number;
  badge: string;
}

const entries: LeaderboardEntry[] = [
  { rank: 1, username: "ShadowHunter", coins: "24,850", referrals: 185, badge: "Gold" },
  { rank: 2, username: "FireKing", coins: "21,600", referrals: 160, badge: "Silver" },
  { rank: 3, username: "NovaX", coins: "18,920", referrals: 148, badge: "Bronze" },
  { rank: 4, username: "WarLord", coins: "17,430", referrals: 132, badge: "Top 10" },
  { rank: 5, username: "GhostYT", coins: "15,950", referrals: 120, badge: "Top 10" },
];

const badgeConfig: Record<string, { bg: string; text: string; border: string; Icon: typeof Crown | null }> = {
  Gold: { bg: "#f59e0b1a", text: "#f59e0b", border: "#f59e0b33", Icon: Crown },
  Silver: { bg: "#94a3b81a", text: "#94a3b8", border: "#94a3b833", Icon: Medal },
  Bronze: { bg: "#d977061a", text: "#d97706", border: "#d9770633", Icon: Medal },
  "Top 10": { bg: "#2563eb1a", text: "#2563eb", border: "#2563eb33", Icon: null },
};

function LeaderboardRow({ entry, index }: { entry: LeaderboardEntry; index: number }) {
  const { bg, text, border, Icon } = badgeConfig[entry.badge];

  return (
    <div
      className="flex items-center gap-3 rounded-xl px-4 py-3.5 transition-colors duration-200 hover:bg-[#f8fafc] sm:gap-4 sm:px-6 sm:py-4"
      style={{ animation: `fade-up 0.4s ease-out ${index * 0.08}s both` }}
    >
      <span className="w-5 text-center text-sm font-bold text-[#64748b] sm:w-6 sm:text-base">
        {entry.rank}
      </span>

      <div className="flex size-9 items-center justify-center rounded-full bg-[#f1f5f9] text-[#64748b] sm:size-10">
        <User className="size-4 sm:size-5" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[#0f172a] sm:text-base">{entry.username}</p>
      </div>

      <div className="hidden text-right sm:block">
        <p className="text-sm font-semibold text-[#0f172a]">{entry.coins}</p>
        <p className="text-xs text-[#64748b]">Coins</p>
      </div>

      <div className="hidden text-right sm:block">
        <p className="text-sm font-semibold text-[#0f172a]">{entry.referrals}</p>
        <p className="text-xs text-[#64748b]">Referrals</p>
      </div>

      <div
        className="flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold sm:px-3 sm:py-1 sm:text-sm"
        style={{ backgroundColor: bg, color: text, borderColor: border }}
      >
        {Icon && <Icon className="size-3 sm:size-3.5" />}
        {entry.badge}
      </div>
    </div>
  );
}

function LeaderboardPreviewSection() {
  return (
    <section className="bg-[#f8faff] py-16 sm:py-20 lg:py-24" aria-labelledby="leaderboard-heading">
      <Container>
        <div
          className="mx-auto max-w-2xl text-center"
          style={{ animation: "fade-up 0.5s ease-out both" }}
        >
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#2563eb]/15 bg-[#2563eb]/[0.04] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#2563eb]">
            <span className="size-1.5 rounded-full bg-[#2563eb]" />
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
            See who is leading the LinkEarn community through referrals, rewards, and marketplace
            activity.
          </p>
        </div>

        <div
          className="mx-auto mt-12 max-w-3xl"
          style={{ animation: "fade-up 0.5s ease-out 0.15s both" }}
        >
          <div className="rounded-2xl border border-[#e2e8f0] bg-white shadow-sm">
            <div className="flex items-center gap-3 rounded-t-2xl bg-[#2563eb] px-4 py-3.5 sm:gap-4 sm:px-6 sm:py-4">
              <span className="w-5 text-center text-xs font-semibold text-white/70 sm:w-6 sm:text-sm">
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
                Referrals
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
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-7 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/20 transition-all duration-200 hover:bg-[#1d4ed8] hover:shadow-xl hover:shadow-[#2563eb]/25 active:scale-[0.97]"
          >
            View Full Leaderboard
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export { LeaderboardPreviewSection };
