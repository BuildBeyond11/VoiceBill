"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const painPoints = [
  {
    icon: "⏰",
    stat: "2+ hrs",
    label: "Lost per job",
    detail: "Manually typing invoices after a long shift — killing your evenings and your energy.",
  },
  {
    icon: "💸",
    stat: "14 days",
    label: "Average payment delay",
    detail: "Paper invoices get lost. Late billing kills cash flow. Jobs pile up unpaid.",
  },
  {
    icon: "🤯",
    stat: "68%",
    label: "Contractors burned out",
    detail: "Paperwork overload is the #1 reason skilled tradespeople quit working solo.",
  },
];

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function ProblemSection() {
  return (
    <section
      className="py-24 sm:py-32 px-5 sm:px-8"
      style={{ background: "linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%)" }}
      aria-labelledby="problem-heading"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              The Real Cost of Manual Billing
            </span>
            <h2
              id="problem-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-5"
            >
              Field Service Admin Burnout{" "}
              <span className="text-red-500">Is Stealing</span> Your Time & Money
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Contractor paperwork stress and delayed billing are a silent tax on every skilled
              tradesperson working solo. You didn&apos;t train for years to spend nights typing invoices.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid — pain point cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
          {painPoints.map(({ icon, stat, label, detail }, i) => (
            <ScrollReveal key={label} delay={i * 0.1}>
              <div className="group relative rounded-3xl p-8 text-center h-full overflow-hidden border border-red-100/80 bg-white hover:border-red-200 hover:shadow-lg hover:shadow-red-50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                <div className="relative z-10">
                  <div className="text-4xl mb-4" role="img" aria-label={`Icon for ${label}`}>{icon}</div>
                  <div className="text-4xl font-black text-red-500 mb-1 tabular-nums">{stat}</div>
                  <div className="font-bold text-slate-800 mb-3">{label}</div>
                  <p className="text-slate-500 text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Before vs After */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-800">
              Old Way vs.{" "}
              <span className="text-[#1a3a5c]">VoiceBill Way</span>
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Before */}
          <ScrollReveal delay={0.05}>
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 sm:p-10 relative overflow-hidden h-full">
              <div className="absolute top-5 right-5 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                BEFORE
              </div>
              <h4 className="text-xl font-black text-red-700 mb-7">Manual Typing · 2 Hours Lost</h4>
              <ul className="space-y-4">
                {[
                  "Drive home exhausted after 8 hrs on-site",
                  "Open laptop, hunt for invoice template",
                  "Type job details from memory (make errors)",
                  "Attach PDF, pray the client pays it",
                  "Chase payment 2 weeks later",
                  "Miss the next job while doing admin",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-red-200/60 rounded-2xl p-4 text-center">
                <span className="text-red-700 font-black text-2xl">$0</span>
                <p className="text-red-600 text-sm font-medium mt-0.5">collected after 3 days</p>
              </div>
            </div>
          </ScrollReveal>

          {/* After */}
          <ScrollReveal delay={0.12}>
            <div
              className="rounded-3xl p-8 sm:p-10 relative overflow-hidden h-full border border-blue-400/20"
              style={{ background: "linear-gradient(135deg, #0d2238 0%, #1a3a5c 100%)" }}
            >
              <div
                className="absolute top-5 right-5 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide"
                style={{ background: "#FF4F00" }}
              >
                WITH VOICEBILL
              </div>
              <h4 className="text-xl font-black mb-7" style={{ color: "#FF4F00" }}>VoiceBill · 30 Seconds Done</h4>
              <ul className="space-y-4">
                {[
                  "Finish the job, pull out your phone",
                  'Tap once — say "Radiator swap, 2 hrs, £301"',
                  "AI generates a perfect invoice instantly",
                  "Stripe pay link sent to client in seconds",
                  "Client pays from their phone — same day",
                  "You drive to the next job, already paid",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-green-500/20 border border-green-400/30 rounded-2xl p-4 text-center">
                <span className="text-green-400 font-black text-2xl">£301</span>
                <p className="text-green-300 text-sm font-medium mt-0.5">collected before you leave the driveway</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
