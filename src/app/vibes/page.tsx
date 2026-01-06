export default function Vibes() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-slide-up stagger-1">
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--muted)] mb-4">
            The Soundtrack
          </p>
          <h1 className="headline text-6xl md:text-7xl">Vibes</h1>
        </div>

        {/* Spotify embed */}
        <div className="mb-16 animate-slide-up stagger-2">
          <div className="p-8 bg-[var(--foreground)] border-bold">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-4 h-4 rounded-full bg-[#1DB954]" />
              <h2 className="text-xl font-bold text-[var(--background)]">Shiphaus Playlist</h2>
            </div>
            <iframe
              style={{ borderRadius: "0" }}
              src="https://open.spotify.com/embed/playlist/2UrCnpQxxu7Y0yTHswFrnw?utm_source=generator&theme=0"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>

        {/* Add songs CTA */}
        <div className="grid md:grid-cols-2 gap-8 animate-slide-up stagger-3">
          <div className="p-10 bg-[var(--accent-yellow)] border-bold">
            <h2 className="text-2xl font-bold mb-4">Add Your Tracks</h2>
            <p className="text-[var(--foreground)]/70 mb-6">
              This is a collaborative playlist. Add songs that fuel your focus, creativity, or good vibes.
            </p>
            <a
              href="https://open.spotify.com/playlist/2UrCnpQxxu7Y0yTHswFrnw?si=v_7P4rOlTp2G5_PskfP3EA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[var(--foreground)] text-[var(--background)] font-semibold hover:bg-[var(--accent-red)] transition-colors"
            >
              Open in Spotify
            </a>
          </div>

          <div className="p-10 bg-[var(--surface)] border-bold">
            <h2 className="text-2xl font-bold mb-4">Vibe Guidelines</h2>
            <ul className="space-y-3 text-[var(--muted)]">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--accent-blue)] mt-2" />
                <span>Focus music for building hours</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--accent-red)] mt-2" />
                <span>Upbeat tracks for cooking & hanging</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--accent-yellow)] mt-2" />
                <span>Chill beats for late night sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[var(--foreground)] mt-2" />
                <span>Driving music for the road trip</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="mt-24 flex items-center gap-4">
          <div className="flex-1 h-[3px] bg-[var(--foreground)]" />
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-[var(--accent-red)]" />
            <div className="w-4 h-4 bg-[var(--accent-yellow)]" />
            <div className="w-4 h-4 bg-[var(--accent-blue)]" />
          </div>
          <div className="flex-1 h-[3px] bg-[var(--foreground)]" />
        </div>
      </div>
    </div>
  );
}
