"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-gold">Brighter</span> Days
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-cream/70 hover:text-cream transition">
            Home
          </Link>
          <Link href="/about" className="text-sm text-cream/70 hover:text-cream transition">
            About Us
          </Link>
          <Link href="/contact" className="text-sm text-cream/70 hover:text-cream transition">
            Contact
          </Link>
          <Link
            href="/contact"
            className="text-sm bg-gold text-navy font-semibold px-5 py-2 rounded-full hover:bg-gold-light transition"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-cream transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-light border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          <Link href="/" onClick={() => setOpen(false)} className="text-cream/80 hover:text-cream">
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-cream/80 hover:text-cream">
            About Us
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="text-cream/80 hover:text-cream">
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-gold text-navy font-semibold px-5 py-2 rounded-full text-center hover:bg-gold-light transition"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
}
