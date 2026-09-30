"use client";

import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";
import { SERVICES, formatPKR } from "@/data/services";

export default function Services({
  onSelect,
}: {
  onSelect: (id: string) => void;
}) {
  return (
    <section id="services" className="bg-dots relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
            Our services
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#0b1f3a] sm:text-5xl">
            Every fix your home <span className="text-fix">needs</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Honest starting prices shown upfront. Final quote confirmed before
            any work begins — no surprises, ever.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="card-lift group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_36px_-18px_rgba(11,31,58,0.25)] ring-1 ring-slate-100"
            >
              <div className="relative h-52 overflow-hidden">
                {s.image ? (
                  <Image
                    src={s.image}
                    alt={`${s.name} — GharFix home service`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-[#0b1f3a]">
                    <s.icon className="h-24 w-24 text-white/90 drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/50 via-transparent to-transparent" />
                {s.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
                    {s.tag}
                  </span>
                )}
                <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 shadow-lg">
                  <s.icon className="h-5 w-5 text-blue-700" />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold text-[#0b1f3a]">
                    {s.name}
                  </h3>
                  <p className="whitespace-nowrap text-right">
                    <span className="text-xs text-slate-400">from</span>{" "}
                    <span className="font-display text-lg font-bold text-blue-700">
                      {formatPKR(s.priceFrom)}
                    </span>
                    <span className="block text-[11px] text-slate-400">
                      {s.priceNote}
                    </span>
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {s.tagline}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.includes.map((inc) => (
                    <li
                      key={inc}
                      className="flex items-center gap-2 text-[13px] text-slate-600"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                        <Check className="h-3 w-3 text-green-700" />
                      </span>
                      {inc}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onSelect(s.id)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-2xl bg-blue-700 px-4 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-800"
                >
                  Book {s.name}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}

          {/* CTA card */}
          <article className="card-lift flex flex-col justify-center rounded-3xl bg-gradient-to-br from-[#0b1f3a] to-blue-900 p-8 text-white shadow-[0_10px_36px_-18px_rgba(11,31,58,0.5)]">
            <h3 className="font-display text-2xl font-bold leading-snug">
              Something else broken?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-100/80">
              Carpentry, appliance repair, water tanks, CCTV — if it&apos;s in
              your home, we probably fix it. Just ask on WhatsApp.
            </p>
            <a
              href="#booking"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-4 py-3.5 text-sm font-bold text-white transition-all hover:bg-orange-600"
            >
              Describe your problem
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
