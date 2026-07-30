export const BRAND = {
  name: "LinkEarn",
  tagline: "Earn. Trade. Connect.",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "Community", href: "/community" },
  { label: "About", href: "/about" },
] as const;

export const ROUTES = {
  home: "/",
  login: "/login",
  signup: "/signup",
  marketplace: "/marketplace",
  leaderboard: "/leaderboard",
  community: "/community",
  about: "/about",
} as const;
