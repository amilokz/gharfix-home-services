"use client";

import { useEffect, useState } from "react";
import { Wrench, MessageCircle, Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/services";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "Areas", href: "#areas" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled
          ? "bg-white/90 shadow-[0_8px_30px_-12px_rgba(11,31,58,0.25)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-[0_8px_20px_-6px_rgba(249,115,22,0.6)]">
            <Wrench className="h-5 w-5 text-white" />
          </span>
          <span
            className={`font-display text-xl font-bold tracking-tight ${
              scrolled ? "text-[#0b1f3a]" : "text-white"
            }`}
          >
            Ghar<span className="text-orange-500">Fix</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-slate-600 hover:text-blue-700"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(249,115,22,0.7)] transition-all hover:bg-orange-600"
          >
            <MessageCircle className="h-4 w-4" />
            Book in 60s
          </a>
        </div>

        <button
          className={`rounded-xl p-2 lg:hidden ${
            scrolled ? "text-[#0b1f3a]" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white/95 px-4 pb-6 pt-2 backdrop-blur lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-base font-medium text-slate-700 hover:bg-blue-50"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-base font-semibold text-white"
          >
            <MessageCircle className="h-5 w-5" />
            Book in 60s
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center text-sm font-medium text-blue-700"
          >
            or WhatsApp us directly
          </a>
        </div>
      )}
    </header>
  );
}
