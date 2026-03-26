import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Safe Sober Environment",
    desc: "A substance-free home with 24/7 structure, so you can focus entirely on your recovery.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Structure & Accountability",
    desc: "Daily routines, house meetings, and clear expectations that build discipline and momentum.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Community Support",
    desc: "Live alongside others on the same journey. Shared meals, shared goals, shared victories.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Pathway to Independence",
    desc: "We connect you with employment resources, life skills, and long-term housing so you can thrive on your own.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-lighter animate-gradient" />
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.08)_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <SectionReveal>
            <p className="text-gold uppercase tracking-[0.25em] text-sm font-semibold mb-6">
              Sober Living &middot; Bay Area, CA
            </p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              A New Beginning
              <br />
              <span className="text-gold">Starts Here.</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={200}>
            <p className="text-lg sm:text-xl text-cream/60 max-w-2xl mx-auto leading-relaxed mb-10">
              Brighter Days Housing provides safe, structured sober living for
              people transitioning from incarceration, hospitalization, or
              treatment&mdash;right here in the Bay Area.
            </p>
          </SectionReveal>
          <SectionReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gold text-navy font-semibold px-8 py-3.5 rounded-full hover:bg-gold-light transition text-base"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="border border-cream/20 text-cream font-medium px-8 py-3.5 rounded-full hover:bg-white/5 transition text-base"
              >
                Contact Us
              </Link>
            </div>
          </SectionReveal>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
      </section>

      {/* ─── Who We Serve ─── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              Who We Serve
            </p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              For People Who Need a{" "}
              <span className="text-gold">Safe Place to Land</span>
            </h2>
          </SectionReveal>
          <SectionReveal delay={200}>
            <p className="text-cream/55 text-lg leading-relaxed max-w-2xl mx-auto">
              We serve individuals coming directly from jail, the hospital, or
              inpatient treatment programs who need immediate, stable, sober
              housing. If you&apos;re being discharged or released with nowhere safe
              to go, Brighter Days is here for you.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ─── What We Provide ─── */}
      <section className="py-24 px-6 bg-navy-light/50">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
                What We Provide
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Everything You Need to{" "}
                <span className="text-gold">Rebuild</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <SectionReveal key={f.title} delay={i * 100}>
                <div className="bg-navy-light border border-white/5 rounded-2xl p-8 hover:border-gold/20 transition-all duration-300 h-full group">
                  <div className="text-gold mb-5 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
                  <p className="text-cream/50 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why It Matters ─── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              Why It Matters
            </p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <blockquote className="text-2xl sm:text-3xl font-medium leading-snug text-cream/80">
              &ldquo;When someone walks out of a jail cell or a hospital bed with
              nowhere to go, the world tells them to figure it out. But recovery
              doesn&apos;t happen on park benches or in shelters where the same
              substances that broke them are waiting. It happens in a home. A
              real one. With structure, dignity, and people who believe the next
              chapter can be different.&rdquo;
            </blockquote>
          </SectionReveal>
        </div>
      </section>

      {/* ─── Referral CTA ─── */}
      <section className="py-24 px-6">
        <SectionReveal>
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-navy-light to-navy-lighter border border-gold/10 rounded-3xl p-12 sm:p-16 text-center glow-gold">
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              For Professionals
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Refer a Client to <span className="text-gold">Brighter Days</span>
            </h2>
            <p className="text-cream/55 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Are you a case manager, parole officer, social worker, or hospital
              discharge planner? We partner with you to provide immediate, stable
              housing for your clients.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-navy font-semibold px-10 py-4 rounded-full hover:bg-gold-light transition text-base"
            >
              Make a Referral
            </Link>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
