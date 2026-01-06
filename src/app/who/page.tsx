export default function Who() {
  const attendees = [
    { name: "Kirill", initial: "K", color: "var(--accent-red)", description: "Recently funemployed, product guy turned buildooor" },
    { name: "Igor", initial: "I", color: "var(--accent-blue)", description: "Always shipping, somehow always makes it to events even though he has kids" },
    { name: "Slobo", initial: "S", color: "var(--accent-yellow)", description: "Bald mastermind, would make love to claude code if he could" },
    { name: "Dylan", initial: "D", color: "var(--accent-green)", description: "No longer code inept, just happy the slop code works" },
    { name: "Eden", initial: "E", color: "var(--accent-red)", description: "Talented google engineer, trying to exit wagie status" },
    { name: "Greg", initial: "G", color: "var(--accent-blue)", description: "Newly entered boomer status by wearing sweaters" },
  ];

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-slide-up stagger-1">
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--muted)] mb-4">
            The Builders
          </p>
          <h1 className="headline text-6xl md:text-7xl">Who</h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attendees.map((person, i) => (
            <div
              key={person.name}
              className={`card-hover border-bold p-6 animate-slide-up stagger-${(i % 5) + 1}`}
            >
              <div
                className="w-20 h-20 flex items-center justify-center text-4xl font-bold text-[var(--foreground)] mb-6"
                style={{ backgroundColor: person.color }}
              >
                {person.initial}
              </div>
              <h3 className="text-2xl font-bold">{person.name}</h3>
              <p className="mt-3 text-[var(--muted)] text-sm leading-relaxed">{person.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
