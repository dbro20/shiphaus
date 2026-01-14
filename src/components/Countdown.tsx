"use client";

import { useState, useEffect } from "react";

// Target: Friday, January 23rd, 2026 at 12:00 PM EST
const TARGET_DATE = new Date("2026-01-23T12:00:00-05:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const now = new Date();
  const difference = TARGET_DATE.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Set initial time on client
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Show placeholder during SSR to avoid hydration mismatch
  if (timeLeft === null) {
    return (
      <div className="flex gap-4 md:gap-6">
        {["Days", "Hours", "Min", "Sec"].map((label) => (
          <div key={label} className="text-center">
            <div className="font-mono text-3xl md:text-5xl font-bold tabular-nums">
              --
            </div>
            <div className="text-xs md:text-sm font-mono uppercase tracking-wider text-[var(--muted)] mt-1">
              {label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const isComplete =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isComplete) {
    return (
      <div className="font-mono text-2xl md:text-3xl font-bold text-[var(--accent-red)]">
        It&apos;s time to ship!
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className="flex gap-4 md:gap-6">
      {units.map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="font-mono text-3xl md:text-5xl font-bold tabular-nums">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm font-mono uppercase tracking-wider text-[var(--muted)] mt-1">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
