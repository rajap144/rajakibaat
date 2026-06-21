/* =============================================================================
 *  BLOG CONFIG
 *  Each post: { title, date, readTime, summary, href, external?, tags? }
 *    href     -> where "Read more" goes. Point it at your own post pages, or
 *                external URLs.
 *    external -> true opens the link in a new tab (default for off-site links).
 *  Shared theme / nav / socials live in assets/js/site.js
 * ============================================================================= */

export const BLOG = {
  meta: {
    title: "Blog | Diogo Correia",
    description: "Write-ups, self-hosting notes and the occasional personal story.",
  },

  heading: "Blog",
  lead: "CTF write-ups, NixOS & self-hosting notes, and the occasional personal story.",
  feed: "https://diogotc.com/blog/atom.xml",   // optional RSS/Atom link ("" to hide)

  posts: [
    {
      title: "KalmarCTF 2025 Write-up: nix-build as a service",
      date: "2025-03-12", readTime: "11 min read",
      summary: "A write-up of the “nix-build as a service” challenge from KalmarCTF 2025 — a sequel to last year's “Reproducible Pwning”, peeking behind the curtain of Nix.",
      href: "https://diogotc.com/blog/kalmarctf-writeup-nix-build-as-a-service/", external: true,
      tags: ["CTF", "Nix", "Security"],
    },
    {
      title: "Installing Collabora Online on Nextcloud with NixOS",
      date: "2025-02-25", readTime: "8 min read",
      summary: "How to set up Collabora Online on a Nextcloud instance using NixOS, resulting in a competent, fully self-hosted office suite.",
      href: "https://diogotc.com/blog/collabora-nextcloud-nixos/", external: true,
      tags: ["NixOS", "Self-hosting"],
    },
    {
      title: "Migrating Immich from Docker to NixOS",
      date: "2024-12-30", readTime: "3 min read",
      summary: "A quick post on how I migrated my Immich deployment from Docker to a native NixOS module, and how you can do the same.",
      href: "https://diogotc.com/blog/immich-docker-to-nixos/", external: true,
      tags: ["NixOS", "Docker", "Self-hosting"],
    },
    {
      title: "openECSC 2024 Round 2 Write-up: GoSweeper",
      date: "2024-05-04", readTime: "19 min read",
      summary: "A write-up of the “GoSweeper” challenge from Round 2 of openECSC 2024 — a glimpse of side channels in Go.",
      href: "https://diogotc.com/blog/openecsc-round2-writeup-gosweeper/", external: true,
      tags: ["CTF", "Go", "Security"],
    },
    {
      title: "KalmarCTF 2024 Write-up: Reproducible Pwning",
      date: "2024-03-19", readTime: "16 min read",
      summary: "A write-up of the “Reproducible Pwning” challenge from KalmarCTF 2024, taking us through the inner workings of Nix.",
      href: "https://diogotc.com/blog/kalmarctf-writeup-reproducible-pwning/", external: true,
      tags: ["CTF", "Nix", "Security"],
    },
    {
      title: "From IST to KTH: How I Ended Up Studying Abroad in Sweden",
      date: "2024-01-14", readTime: "17 min read",
      summary: "The story of how, a little over a year ago, I started the journey that took me from Técnico Lisboa to KTH in Sweden.",
      href: "https://diogotc.com/blog/ist-to-kth/", external: true,
      tags: ["Personal"],
    },
    {
      title: "Welcome to my blog!",
      date: "2023-12-12", readTime: "1 min read",
      summary: "Hello world! This post marks the beginning of my blogging journey — welcome to my little corner of the internet.",
      href: "https://diogotc.com/blog/hello-world/", external: true,
      tags: ["Meta"],
    },
  ],
};
