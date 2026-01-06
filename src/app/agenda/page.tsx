export default function Agenda() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-slide-up stagger-1">
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--muted)] mb-4">
            The Schedule
          </p>
          <h1 className="headline text-6xl md:text-7xl">Agenda</h1>
        </div>

        <div className="space-y-16">
          {/* Friday */}
          <DaySection
            day="Friday"
            date="January 23"
            color="var(--accent-red)"
            items={[
              { time: "Morning", title: "Whole Foods Trip", description: "Stock up for the weekend. Let Kirill know if you have special requests." },
              { time: "Noon", title: "Depart Brooklyn", description: "Leave from 1 S 1st St. Don't be late!", highlight: true },
              { time: "~3:00 PM", title: "Arrive & Settle In", description: "Get to the cabin, pick rooms, unpack" },
              { time: "4:00 PM", title: "Kickoff", description: "Share what everyone is building this weekend" },
              { time: "5:30 PM", title: "Dinner: Steaks", description: "Steaks, potatoes, and asparagus", highlight: true },
            ]}
          />

          {/* Saturday */}
          <DaySection
            day="Saturday"
            date="January 24"
            color="var(--accent-yellow)"
            items={[
              { time: "9:00 AM", title: "Breakfast: Eggs & Bacon", description: "Classic breakfast to fuel the day" },
              { time: "10:00 AM", title: "Morning Hike", description: "Get outside, explore the area, clear the mind", highlight: true },
              { time: "1:00 PM", title: "Lunch: Turkey Sandwiches", description: "Quick lunch with lots of fruit" },
              { time: "5:30 PM", title: "Dinner: Seafood Pasta", description: "Fresh pasta with seafood, a proper feast", highlight: true },
              { time: "Evening", title: "Keep Building", description: "Heads down, ship mode activated" },
            ]}
          />

          {/* Sunday */}
          <DaySection
            day="Sunday"
            date="January 25"
            color="var(--accent-blue)"
            items={[
              { time: "9:00 AM", title: "Breakfast: Eggs & Bacon", description: "Fuel up for Demo Day" },
              { time: "9:30 AM", title: "Demo Day", description: "Sit around the table, use each other's products, give feedback. Live product only!", highlight: true },
              { time: "11:00 AM", title: "Checkout", description: "Clean up, pack up, head home" },
            ]}
          />
        </div>

      </div>
    </div>
  );
}

function DaySection({
  day,
  date,
  color,
  items,
}: {
  day: string;
  date: string;
  color: string;
  items: { time: string; title: string; description: string; highlight?: boolean }[];
}) {
  return (
    <div className="animate-slide-up">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-4 h-4" style={{ backgroundColor: color }} />
        <h2 className="text-3xl font-bold">{day}</h2>
        <span className="text-[var(--muted)] font-mono text-sm">{date}</span>
      </div>

      <div className="space-y-3 ml-8">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex gap-6 p-5 border-l-4 transition-all hover:translate-x-2 ${
              item.highlight
                ? "border-[var(--accent-red)] bg-[var(--surface)]"
                : "border-[var(--foreground)]/20"
            }`}
          >
            <div className="w-20 shrink-0 font-mono text-sm text-[var(--muted)]">
              {item.time}
            </div>
            <div>
              <div className="font-semibold text-lg">{item.title}</div>
              <div className="text-[var(--muted)] text-sm mt-1">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
