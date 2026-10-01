import { Wrench, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { SERVICES, WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-[#0b1f3a] pt-16 text-blue-100/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 pb-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600">
                <Wrench className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Ghar<span className="text-orange-500">Fix</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Pakistan&apos;s trusted home-services company. Verified
              technicians, upfront pricing and a 7-day service warranty —
              booked in 60 seconds.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-white hover:text-orange-400"
              >
                <MessageCircle className="h-4 w-4 text-green-400" />
                WhatsApp: +{WHATSAPP_NUMBER}
              </a>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-400" />
                Helpline: 0800-GHARFIX (7 AM – 11 PM)
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange-400" />
                Lahore · Islamabad · Rawalpindi
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-400" />
                Same-day service, 7 days a week
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-orange-400">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#how-it-works" className="hover:text-orange-400">
                  How it works
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-orange-400">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-orange-400">
                  Service areas
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-orange-400">
                  Book now
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs sm:flex-row">
          <p>© 2026 GharFix. All rights reserved. · Designed &amp; built by <a href="https://akclnt.com" className="hover:text-orange-400">AKCLNT</a></p>
          <p className="text-blue-100/40">
            Fictional demo website built for illustration.
          </p>
        </div>
      </div>
    </footer>
  );
}
