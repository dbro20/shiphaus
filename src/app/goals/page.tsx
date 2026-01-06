export default function Goals() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-slide-up stagger-1">
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--muted)] mb-4">
            The Mission
          </p>
          <h1 className="headline text-6xl md:text-7xl">Goals</h1>
        </div>

        {/* Main goal */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-10 bg-[var(--foreground)] text-[var(--background)] border-bold animate-slide-up stagger-2">
            <div className="text-sm font-mono uppercase tracking-wider text-[var(--background)]/50 mb-4">
              The Goal
            </div>
            <p className="text-2xl md:text-3xl font-bold leading-tight">
              Create something usable by the end of the trip and have everyone demo it on Sunday.
            </p>
          </div>

          <div className="p-10 bg-[var(--accent-red)] border-bold animate-slide-up stagger-3">
            <div className="text-sm font-mono uppercase tracking-wider text-[var(--foreground)]/50 mb-4">
              The Rule
            </div>
            <p className="text-2xl md:text-3xl font-bold leading-tight">
              No presentations, only demos.
            </p>
          </div>
        </div>

        {/* What this means */}
        <div className="mb-16 animate-slide-up stagger-4">
          <h2 className="text-3xl font-bold mb-8">What This Means</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <GuideCard
              number="01"
              title="Scope Small"
              description="You have ~24 hours of build time. Pick something you can actually finish."
              color="var(--accent-yellow)"
            />
            <GuideCard
              number="02"
              title="Ship Real"
              description="Deploy it. Make it accessible. It doesn't have to be perfect, but it has to work."
              color="var(--accent-blue)"
            />
            <GuideCard
              number="03"
              title="Demo Live"
              description="Deploy. Deploy. Deploy."
              color="var(--accent-red)"
            />
          </div>
        </div>

        {/* No excuses */}
        <div className="p-10 border-bold bg-[var(--surface)] animate-slide-up stagger-5">
          <h2 className="text-2xl font-bold mb-6">No Excuses Accepted</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-sm text-[var(--accent-red)] mb-2">NOT ALLOWED</p>
              <ul className="space-y-2 text-[var(--muted)]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--accent-red)]" />
                  Slides or mockups
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--accent-red)]" />
                  &quot;Imagine if this worked&quot;
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--accent-red)]" />
                  Localhost-only demos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--accent-red)]" />
                  Hardcoded demo data
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-sm text-[var(--accent-blue)] mb-2">ENCOURAGED</p>
              <ul className="space-y-2 text-[var(--muted)]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--accent-blue)]" />
                  Real, deployed apps
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--accent-blue)]" />
                  Functional prototypes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--accent-blue)]" />
                  Creative experiments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--accent-blue)]" />
                  Rough but working
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuideCard({
  number,
  title,
  description,
  color,
}: {
  number: string;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="card-hover border-bold p-6">
      <div
        className="w-12 h-12 flex items-center justify-center font-mono font-bold text-lg mb-4"
        style={{ backgroundColor: color }}
      >
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-[var(--muted)] text-sm">{description}</p>
    </div>
  );
}
