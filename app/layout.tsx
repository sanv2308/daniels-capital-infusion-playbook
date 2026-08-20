import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Shell } from "@/components/Shell";

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif-var",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Capital Infusion · Playbook",
  description:
    "The Capital Infusion sales instrument: PULSE call arc, deterministic GATE-5 qualification, LANE routing, PBR sizing, and 22 industry dossiers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Shell />
        <main className="wash">{children}</main>
      </body>
    </html>
  );
}
