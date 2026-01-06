export default function GettingThere() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-slide-up stagger-1">
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--muted)] mb-4">
            Logistics
          </p>
          <h1 className="headline text-6xl md:text-7xl">Getting There</h1>
        </div>

        {/* Carpool info */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-10 bg-[var(--foreground)] text-[var(--background)] border-bold animate-slide-up stagger-2">
            <div className="text-sm font-mono uppercase tracking-wider text-[var(--background)]/50 mb-4">
              Carpool Meetup
            </div>
            <p className="text-3xl font-bold mb-2">1 S 1st St</p>
            <p className="text-xl text-[var(--background)]/70 mb-6">Brooklyn, NY</p>
            <div className="flex flex-col gap-2 text-sm text-[var(--background)]/50">
              <p>Friday, January 23, 2026</p>
              <p>Departure: Noon</p>
            </div>
            <a
              href="https://maps.google.com/?q=1+S+1st+St,+Brooklyn,+NY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-[var(--accent-yellow)] text-[var(--foreground)] font-semibold hover:bg-[var(--accent-red)] transition-colors"
            >
              Open in Maps
            </a>
          </div>

          <div className="p-10 bg-[var(--accent-yellow)] border-bold animate-slide-up stagger-3">
            <div className="text-sm font-mono uppercase tracking-wider text-[var(--foreground)]/70 mb-4">
              The Haus
            </div>
            <p className="text-3xl font-bold mb-2">Upstate NY</p>
            <p className="text-xl text-[var(--foreground)]/80 mb-6">Exact address TBD</p>
            <p className="text-sm text-[var(--foreground)]/60 mb-6">
              ~2-3 hours from Brooklyn
            </p>
            <a
              href="https://www.airbnb.com/rooms/1466027978791560917?adults=6&check_in=2026-01-23&check_out=2026-01-25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[var(--foreground)] text-[var(--background)] font-semibold hover:bg-[var(--accent-red)] transition-colors"
            >
              View Airbnb Listing
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
