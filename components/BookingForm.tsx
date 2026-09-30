"use client";

import { useMemo, useState } from "react";
import {
  MessageCircle,
  ShieldCheck,
  BadgeCheck,
  CalendarCheck2,
  Timer,
} from "lucide-react";
import {
  SERVICES,
  TIME_SLOTS,
  WHATSAPP_NUMBER,
  formatPKR,
} from "@/data/services";

function prettyDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BookingForm({ serviceId }: { serviceId: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(serviceId);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [address, setAddress] = useState("");

  // Keep the select in sync when a service card's "Book" button is pressed.
  const [lastSynced, setLastSynced] = useState(serviceId);
  if (serviceId !== lastSynced) {
    setLastSynced(serviceId);
    setService(serviceId);
  }

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const chosen = SERVICES.find((s) => s.id === service);

  const valid =
    name.trim().length >= 2 &&
    phone.replace(/\D/g, "").length >= 10 &&
    !!service &&
    !!date &&
    !!slot &&
    address.trim().length >= 8;

  const waLink = useMemo(() => {
    if (!valid || !chosen) return "#";
    const lines = [
      "Assalam-o-Alaikum GharFix! I want to book a home service:",
      "",
      `Service: ${chosen.name} (from ${formatPKR(chosen.priceFrom)} ${chosen.priceNote})`,
      `Date: ${prettyDate(date)}`,
      `Time slot: ${slot}`,
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Address: ${address.trim()}`,
      "",
      "Please confirm my booking. Thank you!",
    ];
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
  }, [valid, chosen, date, slot, name, phone, address]);

  const inputCls =
    "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-[15px] text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  return (
    <section id="booking" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* form */}
          <div className="lg:col-span-3">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-700">
              <Timer className="h-3.5 w-3.5" />
              60-second booking
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-[#0b1f3a] sm:text-5xl">
              Book your <span className="text-fix">technician</span>
            </h2>
            <p className="mt-4 max-w-xl text-slate-500">
              Fill this in and hit the button — your booking opens in WhatsApp,
              ready to send. No advance payment needed.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={inputCls}
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} — from {formatPKR(s.priceFrom)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Preferred date
                </label>
                <input
                  type="date"
                  min={today}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ahmed Raza"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="03xx xxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Time slot
                </label>
                <div className="flex flex-wrap gap-2">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSlot(t)}
                      className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                        slot === t
                          ? "bg-blue-700 text-white shadow-[0_8px_20px_-8px_rgba(29,78,216,0.7)]"
                          : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Full address
                </label>
                <textarea
                  rows={3}
                  placeholder="House, street, block/sector, area, city"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={`${inputCls} resize-none`}
                />
              </div>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!valid) e.preventDefault();
              }}
              aria-disabled={!valid}
              className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-bold transition-all sm:w-auto sm:px-10 ${
                valid
                  ? "bg-[#25d366] text-white shadow-[0_12px_32px_-10px_rgba(37,211,102,0.7)] hover:bg-[#1fb857]"
                  : "cursor-not-allowed bg-slate-200 text-slate-400"
              }`}
            >
              <MessageCircle className="h-5 w-5" />
              Confirm booking on WhatsApp
            </a>
            {!valid && (
              <p className="mt-3 text-sm text-slate-400">
                Fill all fields above to enable the WhatsApp button.
              </p>
            )}
          </div>

          {/* side card */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-3xl bg-gradient-to-br from-[#0b1f3a] to-blue-900 p-8 text-white shadow-[0_24px_60px_-24px_rgba(11,31,58,0.6)]">
              <h3 className="font-display text-2xl font-bold">
                Why 12,000+ homes trust GharFix
              </h3>
              <ul className="mt-6 space-y-5">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Verified professionals",
                    text: "CNIC-verified, background-checked & skill-tested technicians.",
                  },
                  {
                    icon: BadgeCheck,
                    title: "Upfront pricing",
                    text: "Starting prices shown here; exact quote before work begins.",
                  },
                  {
                    icon: CalendarCheck2,
                    title: "7-day service warranty",
                    text: "Not happy? We come back and fix it free within 7 days.",
                  },
                ].map((b) => (
                  <li key={b.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-500/20">
                      <b.icon className="h-5 w-5 text-orange-400" />
                    </span>
                    <span>
                      <span className="block font-semibold">{b.title}</span>
                      <span className="mt-0.5 block text-sm text-blue-100/75">
                        {b.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-white/10 p-4 text-sm text-blue-100/85 backdrop-blur">
                Average response time today:{" "}
                <span className="font-bold text-white">58 minutes</span> — book
                before 6 PM for same-day service.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
