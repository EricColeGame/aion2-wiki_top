export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
    reddit?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Aion 2 Wiki",
  shortName: "Aion 2",
  logoText: "A2",
  tagline: "Classes, Builds, Guides & Raids",
  description: "Explore Aion 2 Wiki with detailed class guides, builds, characters, combat systems, PvE raids, PvP tips, and the latest MMORPG updates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aion2-wiki.top",
  supportEmail: "support@aion2-wiki.top",
  gameUrl: "https://aion2.com",
  heroVideoId: "vZV1pQP09p8", // Aion 2 - Official Gameplay Trailer | gamescom 2026
  social: {
    discord: "https://discord.gg/aion",
    youtube: "https://www.youtube.com/results?search_query=Aion+2+official+trailer",
    reddit: "https://www.reddit.com/r/aion/",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
