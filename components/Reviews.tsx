import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Ahmed Raza",
    area: "DHA Phase 5, Lahore",
    service: "AC Service",
    text: "Booked at 11 AM, technician arrived by 12:15. Both my split ACs serviced neatly, cooling is ice-cold now. Price was exactly the quote — no drama.",
  },
  {
    name: "Fatima Khan",
    area: "Bahria Town, Rawalpindi",
    service: "Deep Cleaning",
    text: "The 2-person team deep-cleaned my whole portion in 5 hours — sofa, carpets, kitchen, everything. It genuinely feels like a new house. Worth every rupee.",
  },
  {
    name: "Usman Tariq",
    area: "Gulberg Greens, Islamabad",
    service: "Electrician",
    text: "Had a scary sparking switchboard at night. GharFix sent someone within the hour. He fixed it, checked all rooms, and explained everything. Very professional.",
  },
  {
    name: "Ayesha Malik",
    area: "Model Town, Lahore",
    service: "Plumber",
    text: "Leaky bathroom taps and a blocked drain — sorted in one visit. The plumber wore shoe covers and left the place spotless. The 7-day warranty gives real peace of mind.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
            Reviews
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#0b1f3a] sm:text-5xl">
            Homes that <span className="text-fix">trust us</span>
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-5 py-2 ring-1 ring-amber-200">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="text-sm font-bold text-amber-800">
              4.9/5 · 3,200+ verified reviews
            </span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="card-lift flex flex-col rounded-3xl bg-[#f6f9ff] p-6 ring-1 ring-slate-100"
            >
              <Quote className="h-7 w-7 text-blue-200" />
              <span className="mt-3 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </span>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 border-t border-slate-200 pt-4">
                <div className="font-display font-bold text-[#0b1f3a]">
                  {r.name}
                </div>
                <div className="mt-0.5 text-xs text-slate-400">
                  {r.area} · {r.service}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
