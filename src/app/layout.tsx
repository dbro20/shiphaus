import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "shiphaus — Just Keep Shipping",
  description: "A cabin trip for building and shipping. January 23-25, 2026. Upstate New York.",
  metadataBase: new URL("https://shiphaus.dylanbrodeur.org"),
  openGraph: {
    title: "shiphaus — Just Keep Shipping",
    description: "A cabin trip for building and shipping. January 23-25, 2026.",
    siteName: "shiphaus",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "shiphaus — Just Keep Shipping",
    description: "A cabin trip for building and shipping. January 23-25, 2026.",
  },
};

const navLinks = [
  { href: "/agenda", label: "Agenda" },
  { href: "/who", label: "Who" },
  { href: "/goals", label: "Goals" },
  { href: "/ideas", label: "Ideas" },
  { href: "/getting-there", label: "Getting There" },
  { href: "/vibes", label: "Vibes" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight hover:text-[var(--accent-red)] transition-colors"
            >
              shiphaus
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] rounded-full transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <MobileNav />
          </div>
          <div className="h-[3px] bg-[var(--foreground)]" />
        </nav>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
