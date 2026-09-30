"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Star, Clock, ShieldCheck, MapPin } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Clock, text: "60-min avg. response" },
  { icon: ShieldCheck, text: "Verified professionals" },
  { icon: Star, text: "4.9/5 from 3,200+ reviews" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Respect reduced-motion: don't autoplay the cinematic background.
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      videoRef.current
    ) {
      videoRef.current.pause();
      videoRef.current.removeAttribute("autoplay");
    }
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* cinematic video backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/hero.mp4"
          poster="/service-cleaning.webp"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a]/95 via-[#0b1f3a]/65 to-[#0b1f3a]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/85 via-transparent to-[#0b1f3a]/40" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-orange-400" />
            Lahore · Islamabad · Rawalpindi
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Ghar ka har kaam,
            <br />
            <span className="text-fix">60 second</span> mein fix.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue-100/90">
            Verified plumbers, electricians, AC technicians, deep cleaners and
            painters — at your doorstep in about an hour. Upfront pricing, no
            advance, 7-day service warranty.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-base font-bold text-white shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all hover:bg-orange-600 hover:shadow-[0_0_56px_rgba(249,115,22,0.65)]"
            >
              Book a technician
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-white/50 hover:bg-white/20"
            >
              See services & prices
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {HIGHLIGHTS.map((h) => (
              <span
                key={h.text}
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-100/85"
              >
                <h.icon className="h-4 w-4 text-orange-400" />
                {h.text}
              </span>
            ))}
          </div>
        </div>

        {/* stats strip */}
        <div className="mt-14 grid max-w-3xl grid-cols-3 gap-3 sm:gap-4">
          {[
            { value: "12,000+", label: "Jobs completed" },
            { value: "4.9/5", label: "Average rating" },
            { value: "~60 min", label: "Avg. response" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur sm:p-5"
            >
              <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-blue-100/75 sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* floating booking card teaser */}
      <div className="pointer-events-none absolute bottom-8 right-8 hidden animate-float xl:block">
        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-green-400" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </span>
            <p className="text-sm font-medium text-white">
              14 technicians online near you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
