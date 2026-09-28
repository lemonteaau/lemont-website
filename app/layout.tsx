import type { Metadata, Viewport } from "next";
import { Imbue, Newsreader, DM_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const imbue = Imbue({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-imbue",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

const description =
  "Terry Cheng (lemontea), full-stack developer and software engineer in Adelaide, South Australia. Projects, open-source contributions and profile.";

export const metadata: Metadata = {
  metadataBase: new URL("https://lemontea.xyz"),
  title: {
    default: "Terry Cheng — lemontea",
    template: "%s — Terry Cheng",
  },
  description,
  openGraph: {
    title: "Terry Cheng — lemontea",
    description,
    url: "https://lemontea.xyz",
    siteName: "lemontea",
    images: [{ url: "og-image.png" }],
  },
  authors: [{ name: "Terry Cheng", url: "https://lemontea.xyz" }],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2ede2" },
    { media: "(prefers-color-scheme: dark)", color: "#15140f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${imbue.variable} ${newsreader.variable} ${dmMono.variable}`}
    >
      <body id="top">
        {process.env.NODE_ENV === "production" && (
          <Script
            src="https://umami.lemontea.xyz/script.js"
            data-website-id="66f7c8be-a725-4626-a538-8ebbc5ee47d5"
            strategy="afterInteractive"
          />
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="kicker sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-lemon focus:px-3 focus:py-2 focus:text-on-lemon"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
