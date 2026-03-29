import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pulse - 2.4秒で、全部見える。",
  description:
    "データ分析にかかる時間を87%削った。Slack、GA4、Stripe、Notionを1つのダッシュボードに。",
  openGraph: {
    title: "Pulse - 2.4秒で、全部見える。",
    description:
      "データ分析にかかる時間を87%削った。Slack、GA4、Stripe、Notionを1つのダッシュボードに。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
