import SectionReveal from "@/components/SectionReveal";

const values = [
  {
    title: "Dignity",
    desc: "Every person who enters our home is treated with respect. No judgment, no stigma — only opportunity.",
  },
  {
    title: "Structure",
    desc: "Clear expectations, daily routines, and accountability create the foundation for lasting change.",
  },
  {
    title: "Community",
    desc: "Recovery is not a solo journey. We build a household where residents support and uplift one another.",
  },
  {
    title: "Independence",
    desc: "Our goal is not to house people forever — it's to prepare them for a stable, self-sufficient life.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              About Us
            </p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Built on <span className="text-gold">Belief</span> in
              <br />
              Second Chances
            </h1>
          </SectionReveal>
          <SectionReveal delay={200}>
            <p className="text-cream/55 text-lg max-w-2xl mx-auto leading-relaxed">
              Brighter Days Housing exists because everyone deserves a safe place
              to start over.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ─── Mission ─── */}
      <section className="py-20 px-6 bg-navy-light/50">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="bg-navy-light border border-white/5 rounded-3xl p-10 sm:p-14">
              <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
                Our Mission
              </p>
              <p className="text-xl sm:text-2xl leading-relaxed text-cream/75">
                To provide safe, structured, and dignified sober living for
                individuals transitioning from incarceration, hospitalization, or
                inpatient treatment — giving them the stability and support they
                need to rebuild their lives with confidence.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ─── Our Story ─── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <SectionReveal>
              <div>
                <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
                  Our Story
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Why We Started <span className="text-gold">This</span>
                </h2>
              </div>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="space-y-6 text-cream/60 leading-relaxed">
                <p>
                  Brighter Days Housing was founded in the lower Bay Area after
                  witnessing firsthand what happens when people are released from
                  jail or discharged from treatment with no housing plan. Too
                  many end up on the streets, back in the same environments that
                  led them to crisis in the first place.
                </p>
                <p>
                  We created Brighter Days to fill that gap — a structured,
                  sober, home-like environment where residents can stabilize, heal,
                  and begin planning for their future. Not a shelter. Not a
                  halfway house that feels institutional. A real home with real
                  support.
                </p>
                <p>
                  We work closely with case managers, parole officers, social
                  workers, and hospital discharge planners to ensure a smooth
                  transition for every resident who comes through our doors.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="py-20 px-6 bg-navy-light/50">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-14">
              <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
                Our Values
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                What We <span className="text-gold">Stand For</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 100}>
                <div className="bg-navy border border-white/5 rounded-2xl p-8 hover:border-gold/20 transition-all h-full">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                    <span className="text-gold font-bold text-lg">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
                  <p className="text-cream/50 leading-relaxed">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who We Serve (detail) ─── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              Who We Serve
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              People Who Deserve a{" "}
              <span className="text-gold">Fresh Start</span>
            </h2>
          </SectionReveal>
          <SectionReveal delay={100}>
            <p className="text-cream/55 text-lg leading-relaxed">
              Our residents are people coming directly from county jail, state
              prison, hospital psychiatric holds, detox centers, and inpatient
              rehabilitation programs. They are people who have made the decision
              to change — they just need a stable, sober environment to do it
              in. We welcome them without judgment and walk alongside them as
              they rebuild.
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
