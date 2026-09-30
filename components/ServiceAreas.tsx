import { MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/services";

const AREAS = [
  "DHA",
  "Bahria Town",
  "Gulberg",
  "Model Town",
  "Johar Town",
  "Cantt",
  "Satellite Town",
  "E-11",
  "F-10",
  "Valencia Town",
  "Lake City",
  "Wapda Town",
  "DHA Phase 6",
  "Blue Area",
  "Saddar",
  "Clifton Block 5",
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-dots relative bg-[#f6f9ff] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
          Service areas
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-[#0b1f3a] sm:text-5xl">
          We&apos;re <span className="text-fix">already nearby</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-500">
          Technicians stationed across Lahore, Islamabad and Rawalpindi — that&apos;s
          how we reach most homes within the hour.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {AREAS.map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-[0_6px_20px_-10px_rgba(11,31,58,0.3)] ring-1 ring-slate-100 transition-all hover:-translate-y-0.5 hover:ring-blue-200"
            >
              <MapPin className="h-4 w-4 text-orange-500" />
              {a}
            </span>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Don&apos;t see your area?{" "}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-800"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp us
          </a>{" "}
          — we&apos;re expanding every week.
        </p>
      </div>
    </section>
  );
}
