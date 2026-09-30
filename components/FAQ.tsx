"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How fast can a technician reach my home?",
    a: "In our covered areas the average response is about 60 minutes. Book before 6 PM and we can almost always offer same-day service. You'll get the technician's name and live ETA on WhatsApp.",
  },
  {
    q: "How is the final price decided?",
    a: "Every service shows an upfront starting price. After the technician inspects the job, you approve an exact quote before any work begins. The price never changes mid-job without your OK.",
  },
  {
    q: "Are your technicians verified?",
    a: "Yes. Every GharFix pro is CNIC-verified, background-checked and skill-tested, and carries a GharFix ID. You can ask to see it at the door — we encourage it.",
  },
  {
    q: "Do I need to pay anything in advance?",
    a: "No. You pay only after the job is done and you're satisfied — cash or bank transfer, whichever you prefer. For large painting or renovation jobs we may take a small material advance, always receipted.",
  },
  {
    q: "What if something goes wrong after the service?",
    a: "Every job carries a 7-day service warranty. If the same issue reappears within 7 days, we send a technician back and fix it completely free.",
  },
  {
    q: "Do I need to provide tools or materials?",
    a: "Technicians bring their own professional tools. If spare parts are needed (a tap, a breaker, paint), they're billed at market rate and shown on your invoice — or you can provide your own.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
            FAQ
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#0b1f3a] sm:text-5xl">
            Questions, <span className="text-fix">answered</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl ring-1 transition-all ${
                  isOpen
                    ? "bg-blue-50/60 ring-blue-200"
                    : "bg-[#f6f9ff] ring-slate-100 hover:ring-blue-200"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-bold text-[#0b1f3a] sm:text-lg">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen
                        ? "rotate-180 bg-blue-700 text-white"
                        : "bg-white text-slate-500 ring-1 ring-slate-200"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
