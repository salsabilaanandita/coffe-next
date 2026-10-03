import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { FloatingOrderButton } from "@/components/layout/FloatingOrderButton";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Kopi Rengkuh — Kafe & Roastery Jakarta", template: "%s | Kopi Rengkuh" },
  description: "Kopi single origin, suasana hangat, dan reservasi meja online di Kopi Rengkuh, Jakarta.",
  openGraph: { type: "website", siteName: "Kopi Rengkuh", locale: "id_ID" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-[#18100a] text-[#faf6ee]">
        {/* Global Dark Brown Background with Coffee Texture */}
        <div className="fixed inset-0 z-[-2] bg-[#18100a]">
           {/* You can add a subtle noise or image here if needed */}
           <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a14]/90 via-[#18100a]/95 to-[#120a06] backdrop-blur-md" />
        </div>
        
        {/* Ambient Glows */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#7a4b2f]/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#cba258]/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-0">
          <Navbar />
          <main id="konten">{children}</main>
          <Footer />
          <FloatingOrderButton />
        </div>
      </body>
    </html>
  );
}

