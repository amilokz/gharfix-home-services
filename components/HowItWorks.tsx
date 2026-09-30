"use client";

import { ClipboardList, UserCheck, Wallet } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    step: "Step 1",
    title: "Tell us what you need",
    text: "Pick a service, choose your date and time slot, and share your address. It takes about 60 seconds.",
  },
  {
    icon: UserCheck,
    step: "Step 2",
    title: "We send a verified pro",
    text: "A background-checked technician is assigned instantly and usually arrives within 60–90 minutes.",
  },
  {
    icon: Wallet,
    step: "Step 3",
    title: "Pay after the job",
    text: "Approve the upfront quote, get the work done, then pay by cash or bank transfer. 7-day warranty included.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-[#f6f9ff] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
            How it works
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#0b1f3a] sm:text-5xl">
            Fixed in <span className="text-fix">3 easy steps</span>
          </h2>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3">
          {/* connector line */}
          <div
            className="absolute left-[16%] right-[16%] top-16 hidden border-t-2 border-dashed border-blue-200 md:block"
            aria-hidden="true"
          />
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="relative mx-auto flex h-32 w-32 items-center justify-center">
                <span className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-600 to-blue-800 shadow-[0_16px_40px_-12px_rgba(37,99,235,0.55)]" />
                <s.icon className="relative h-12 w-12 text-white" />
                <span className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-display text-lg font-bold text-white shadow-lg">
                  {i + 1}
                </span>
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                {s.step}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-[#0b1f3a]">
                {s.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
