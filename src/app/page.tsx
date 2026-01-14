import Link from "next/link";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-32 right-12 w-64 h-64 bg-[var(--accent-yellow)] geo-circle opacity-60 animate-float" />
      <div className="absolute bottom-24 left-8 w-48 h-48 bg-[var(--accent-red)] geo-triangle opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-[var(--accent-blue)] opacity-40 rotate-12" />

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="min-h-[70vh] flex flex-col justify-center">
          {/* Main content */}
          <div className="space-y-8 max-w-2xl">
            <div className="animate-slide-up stagger-1">
              <p className="text-sm font-mono uppercase tracking-widest text-[var(--muted)] mb-4">
                January 23–25, 2026
              </p>
              <h1 className="headline text-7xl md:text-8xl">
                ship
                <br />
                <span className="text-[var(--accent-red)]">haus</span>
              </h1>
            </div>

            <p className="text-2xl font-medium animate-slide-up stagger-2">
              Just Keep Shipping.
            </p>

            <div className="animate-slide-up stagger-3">
              <Countdown />
            </div>

            <div className="flex flex-wrap gap-4 animate-slide-up stagger-4">
              <Link
                href="/agenda"
                className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-semibold border-bold hover:bg-[var(--accent-red)] hover:border-[var(--accent-red)] transition-colors"
              >
                View Agenda
              </Link>
              <a
                href="https://www.airbnb.com/rooms/1466027978791560917?adults=6&check_in=2026-01-23&check_out=2026-01-25"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-bold font-semibold hover:bg-[var(--surface)] transition-colors"
              >
                The Haus
              </a>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="pt-12 border-t-[3px] border-[var(--foreground)] animate-slide-up stagger-5">
          <p className="font-mono text-sm uppercase tracking-wider text-[var(--muted)]">
            Upstate New York
          </p>
        </div>
      </div>
    </div>
  );
}
