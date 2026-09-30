import { ShieldCheck, BadgeCheck, CalendarCheck2 } from "lucide-react";

const BADGES = [
  {
    icon: ShieldCheck,
    title: "Verified pros only",
    text: "Every technician is CNIC-verified, background-checked and skill-tested before their first job.",
  },
  {
    icon: BadgeCheck,
    title: "Upfront pricing",
    text: "You see starting prices here and approve an exact quote before any work begins. Zero hidden charges.",
  },
  {
    icon: CalendarCheck2,
    title: "7-day service warranty",
    text: "If anything we fixed acts up within 7 days, we return and make it right — completely free.",
  },
];

export default function TrustBadges() {
  return (
    <section className="relative overflow-hidden bg-[#0b1f3a] py-16 sm:py-20">
      <div
        className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {BADGES.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors hover:border-orange-400/40"
            >
              <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-3 shadow-[0_10px_28px_-8px_rgba(249,115,22,0.7)]">
                <b.icon className="h-6 w-6 text-white" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-white">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-100/70">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
