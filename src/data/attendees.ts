export const attendees = [
  { name: "Kirill", initial: "K", color: "var(--accent-red)", description: "Recently funemployed, product guy turned buildooor" },
  { name: "Igor", initial: "I", color: "var(--accent-blue)", description: "Always shipping, somehow always makes it to events even though he has kids" },
  { name: "Slobo", initial: "S", color: "var(--accent-yellow)", description: "Bald mastermind, would make love to claude code if he could" },
  { name: "Dylan", initial: "D", color: "var(--accent-green)", description: "No longer code inept, just happy the slop code works" },
  { name: "Eden", initial: "E", color: "var(--accent-red)", description: "Talented google engineer, trying to exit wagie status" },
  { name: "Greg", initial: "G", color: "var(--accent-blue)", description: "Newly entered boomer status by wearing sweaters" },
  { name: "Tomer", initial: "T", color: "var(--accent-yellow)", description: "Opinionated dev, former volleyball state champion, surprisingly good at spikeball" },
  { name: "Dawson", initial: "D", color: "var(--accent-green)", description: "Crazy bicycle guy building in consumer crypto. Falls in love quickly, new love is 3D printing" },
];

export type Attendee = (typeof attendees)[number];
