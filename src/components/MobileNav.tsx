"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/agenda", label: "Agenda" },
  { href: "/who", label: "Who" },
  { href: "/goals", label: "Goals" },
  { href: "/getting-there", label: "Getting There" },
  { href: "/vibes", label: "Vibes" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="md:hidden relative" ref={menuRef}>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-1 p-2"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="w-2 h-2 rounded-full bg-[var(--accent-red)]" />
        <div className="w-2 h-2 rounded-full bg-[var(--accent-yellow)]" />
        <div className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-48 bg-[var(--background)] overflow-hidden"
          style={{ border: "3px solid var(--foreground)", boxShadow: "4px 4px 0 var(--accent-black)" }}
        >
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            const colors = [
              "var(--accent-red)",
              "var(--accent-yellow)",
              "var(--accent-blue)",
              "var(--accent-green)",
              "var(--accent-red)",
              "var(--accent-yellow)",
            ];
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-sm font-medium border-b-2 border-[var(--foreground)] last:border-b-0 transition-colors ${
                  isActive
                    ? "bg-[var(--foreground)] text-[var(--background)]"
                    : "text-[var(--foreground)] hover:bg-[var(--surface)]"
                }`}
                style={{
                  borderLeftWidth: "4px",
                  borderLeftColor: colors[index],
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
