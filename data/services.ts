import type { LucideIcon } from "lucide-react";
import {
  Zap,
  Snowflake,
  Sparkles,
  Droplets,
  PaintRoller,
} from "lucide-react";

export interface Service {
  id: string;
  name: string;
  tagline: string;
  priceFrom: number;
  priceNote: string;
  image: string | null;
  icon: LucideIcon;
  tag?: string;
  includes: string[];
}

export const WHATSAPP_NUMBER = "923001234567";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SERVICES: Service[] = [
  {
    id: "electrician",
    name: "Electrician",
    tagline: "Switchboards, wiring, ceiling fans, breakers & fault repair.",
    priceFrom: 800,
    priceNote: "per visit",
    image: "/service-electrician.webp",
    icon: Zap,
    tag: "Most booked",
    includes: ["Safety-checked wiring", "Same-day visit", "Genuine parts"],
  },
  {
    id: "ac",
    name: "AC Service & Repair",
    tagline: "General service, gas refill, cooling issues & installation.",
    priceFrom: 1500,
    priceNote: "per unit",
    image: "/service-ac.webp",
    icon: Snowflake,
    tag: "Summer essential",
    includes: ["Foam-jet cleaning", "Free gas check", "30-day cooling warranty"],
  },
  {
    id: "cleaning",
    name: "Deep Home Cleaning",
    tagline: "Sofa & carpet shampoo, kitchen & bathroom deep cleaning.",
    priceFrom: 4999,
    priceNote: "per home",
    image: "/service-cleaning.webp",
    icon: Sparkles,
    includes: ["Trained 2-person team", "Eco-safe chemicals", "4–6 hour detail"],
  },
  {
    id: "plumber",
    name: "Plumber",
    tagline: "Leak repair, taps, flush tanks, blockages & new fittings.",
    priceFrom: 800,
    priceNote: "per visit",
    image: "/service-plumber.webp",
    icon: Droplets,
    includes: ["Leak detection", "No-mess work", "Parts at market rate"],
  },
  {
    id: "painter",
    name: "Painter",
    tagline: "Room & full-home painting, wall putty & waterproofing.",
    priceFrom: 35,
    priceNote: "per sq.ft",
    image: null,
    icon: PaintRoller,
    tag: "Free colour consult",
    includes: ["Dust-free sanding", "Premium paint options", "Neat, on-time finish"],
  },
];

export const TIME_SLOTS = [
  "9 – 11 AM",
  "11 AM – 1 PM",
  "2 – 4 PM",
  "4 – 6 PM",
  "6 – 8 PM",
];

export function formatPKR(n: number): string {
  return "Rs " + Math.round(n).toLocaleString("en-US");
}
