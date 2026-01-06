"use client";

import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/agenda", label: "Agenda" },
  { href: "/who", label: "Who" },
  { href: "/goals", label: "Goals" },
  { href: "/getting-there", label: "Getting There" },
  { href: "/vibes", label: "Vibes" },
];

export default function MobileNav() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(e.target.value);
  };

  return (
    <div className="md:hidden">
      <select
        value={pathname}
        onChange={handleChange}
        className="bg-[var(--surface)] text-[var(--foreground)] text-sm font-medium px-3 py-2 rounded-full border border-[var(--foreground)]/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent-red)] appearance-none pr-8"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 10px center",
        }}
      >
        {navLinks.map((link) => (
          <option key={link.href} value={link.href}>
            {link.label}
          </option>
        ))}
      </select>
    </div>
  );
}
