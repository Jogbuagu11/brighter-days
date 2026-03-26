"use client";

import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch("https://formspree.io/f/xykbydog", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSending(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              Get in Touch
            </p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We&apos;d Love to <span className="text-gold">Hear From You</span>
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* ─── Contact Split ─── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — Info */}
            <SectionReveal>
              <div>
                <p className="text-cream/60 text-lg leading-relaxed mb-10">
                  Whether you&apos;re ready to apply, or you&apos;re a case
                  manager looking to refer a client, we&apos;d love to hear
                  from you.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                      Location
                    </h3>
                    <p className="text-cream/55">Lower Bay Area, California</p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Right — Form */}
            <SectionReveal delay={150}>
              {submitted ? (
                <div className="bg-navy-light border border-gold/20 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Message Sent</h3>
                  <p className="text-cream/55">
                    Thank you for reaching out. We&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-navy-light border border-white/5 rounded-2xl p-8 sm:p-10 space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-cream/70 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/40 transition"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-cream/70 mb-2">
                        Phone
                      </label>
                    <input
                        type="tel"
                        name="phone"
                        className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/40 transition"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-cream/70 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/40 transition"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-cream/70 mb-2">
                      I am a&hellip;
                    </label>
                    <select
                      name="role"
                      required
                      className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold/40 transition appearance-none"
                    >
                      <option value="" className="text-cream/30">
                        Select one
                      </option>
                      <option value="prospective-resident">
                        Prospective Resident
                      </option>
                      <option value="family-member">Family Member</option>
                      <option value="case-manager">Case Manager</option>
                      <option value="parole-officer">Parole Officer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-cream/70 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/40 transition resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold text-navy font-semibold py-3.5 rounded-full hover:bg-gold-light transition text-base"
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
