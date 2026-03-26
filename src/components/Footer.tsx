import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              <span className="text-gold">Brighter</span> Days
            </h3>
            <p className="text-cream/50 text-sm leading-relaxed">
              Recovery. Dignity. A Brighter Day.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Pages
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-cream/60 hover:text-cream transition">
                Home
              </Link>
              <Link href="/about" className="text-sm text-cream/60 hover:text-cream transition">
                About Us
              </Link>
              <Link href="/contact" className="text-sm text-cream/60 hover:text-cream transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm text-cream/60">
              <p>Lower Bay Area, California</p>
              <p>info@brighterdayshousing.com</p>
              <p>(510) 555-0199</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-cream/30">
          &copy; {new Date().getFullYear()} Brighter Days Housing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
