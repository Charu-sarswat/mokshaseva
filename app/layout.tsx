import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/lib/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Moksha Voyage | Global Funeral, Repatriation & Spiritual Care",
  description:
    "A premium global platform for funeral services, international repatriation, spiritual care, family support, and case management.",
  openGraph: {
    title: "Moksha Voyage",
    description: "Trusted global funeral, repatriation, travel, and spiritual care platform.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(inter.variable, inter.className)}>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
