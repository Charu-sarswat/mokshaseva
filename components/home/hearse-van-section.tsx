"use client";

import { useState, useEffect } from "react";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    image: "/images/moksha/temp.png",
    eyebrow: "Spiritual Services",
    title: "Spiritual Services",
    description:
      "Guidance and support for Hindu rituals and ceremonies across the UK and India.",
    features: [
      "Experienced Pandits for Antim Sanskar, Puja and Shraddh",
      "Traditional rituals arranged at home, temple or crematorium",
      "Support for families living in the UK, with ceremonies coordinated in India",
      "Respectful arrangements for every family’s traditions and customs",
    ],
    buttonText: "Explore Spiritual Services",
    buttonHref: "/services/spiritual-services",
  },
  {
    image: "/images/moksha/tra.png",
    eyebrow: "Travel & Hospitality",
    title: "Travel & Hospitality",
    description:
      "Compassionate travel support for families during difficult journeys between the UK and India.",
    features: [
      "Flight coordination for family members travelling with or after a loved one",
      "Hotel and accommodation arrangements near airports, hospitals and cremation locations",
      "Airport transfers and local transportation for grieving families",
      "UK–India travel coordination with dedicated family support",
    ],
    buttonText: "Explore Travel Support",
    buttonHref: "/services/travel-hospitality",
  },
  {
    image: "/images/moksha/doc.png",
    eyebrow: "Documentation Support",
    title: "Documentation Support",
    description:
      "Complete documentation and embassy coordination for UK–India repatriation.",
    features: [
      "Death certificate and required document assistance",
      "Embassy and consular coordination",
      "NOC, attestation and airline documentation support",
      "End-to-end guidance for international repatriation paperwork",
    ],
    buttonText: "Documentation Guidance",
    buttonHref: "/services/documentation-support",
  },
];

export function HearseVanSection() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  // Auto-play: change slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FAF7F3] px-4 pt-4 pb-2 sm:px-6 border-t border-[#EDE6DD]/60">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#E7C19A] opacity-20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#EF7F6B] opacity-10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-6 text-center">
          <h2 className="font-sans text-2xl font-md text-[#222831] sm:text-3xl">
            Our Dedicated Services in UK & India
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={[
                "rounded-full px-4 py-2 text-sm font-md transition-all duration-200",
                active === i
                  ? "bg-[#D1842F] text-white shadow-md"
                  : "border border-[#EDE6DD] bg-white text-[#5C6570] hover:border-[#D1842F]/40 hover:text-[#D1842F]",
              ].join(" ")}
            >
              {s.eyebrow}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:items-center lg:gap-12">

          {/* Content */}
          <div className="flex-1">
            <p className="eyebrow">{slide.eyebrow}</p>
            <h3 className="mt-2 font-sans text-2xl font-md text-[#222831] sm:text-3xl">
              {slide.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4E5661]">
              {slide.description}
            </p>

            <ul className="mt-5 space-y-2.5">
              {slide.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D1842F]/10 text-[#D1842F]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-[#17202A]">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={slide.buttonHref}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#D1842F] to-[#B06B22] px-5 text-sm font-md text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                {slide.buttonText}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="tel:+919568259784"
                className="flex items-center gap-2 text-sm font-md text-[#17202A] transition-colors hover:text-[#D1842F]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1FA463]/10 text-[#1FA463]">
                  <Phone className="h-4 w-4" />
                </div>
                +91 95682 59784
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[280px] w-full max-w-[480px] shrink-0 overflow-hidden rounded-2xl shadow-lg sm:h-[320px] lg:w-[500px] lg:max-w-none">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={[
                "rounded-full transition-all duration-300",
                active === i
                  ? "h-2 w-8 bg-[#D1842F]"
                  : "h-2 w-2 bg-[#D1842F]/30 hover:bg-[#D1842F]/60",
              ].join(" ")}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
