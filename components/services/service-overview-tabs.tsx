"use client";

import { useState } from "react";
import { CheckCircle2, Globe2, Quote } from "lucide-react";
import {
  SERVICE_REGIONAL_CONTENT,
  type CountryCode
} from "@/lib/service-regional-content";

type ServiceOverviewTabsProps = {
  slug: string;
  defaultHeading: string;
  defaultOverview: string;
  quote: string;
  children?: React.ReactNode;
};

function UkFlagIcon({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="uk-clip">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="uk-diag">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-diag)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function IndiaFlagIcon({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="900" height="600" fill="#138808" />
      <rect width="900" height="400" fill="#FFFFFF" />
      <rect width="900" height="200" fill="#FF9933" />
      <circle cx="450" cy="300" r="80" fill="none" stroke="#000080" strokeWidth="14" />
      <circle cx="450" cy="300" r="16" fill="#000080" />
    </svg>
  );
}

const COUNTRIES: {
  id: CountryCode;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: "uk", label: "United Kingdom", icon: UkFlagIcon },
  { id: "india", label: "India", icon: IndiaFlagIcon }
];

export function ServiceOverviewTabs({
  slug,
  defaultHeading,
  defaultOverview,
  quote,
  children
}: ServiceOverviewTabsProps) {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>("uk");

  const serviceData = SERVICE_REGIONAL_CONTENT[slug];
  const activeRegion = serviceData?.[selectedCountry];

  const currentHeading = activeRegion?.heading || defaultHeading;
  const currentOverview = activeRegion?.overview || defaultOverview;
  const currentPoints = activeRegion?.points || [];

  return (
    <div className="rounded-[22px] border border-[#E8DED2] bg-white p-5 shadow-sm transition-all">
      {/* Top Header with Eyebrow and Selectable Country Tabs */}
      <div className="flex flex-col gap-3 pb-3 border-b border-[#E8DED2]/70 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-[11px] font-md uppercase tracking-[0.18em] text-[#C77B21]">
            Overview
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="inline-flex items-center gap-1 rounded-xl border border-[#E8DED2] bg-[#FAF8F4] p-1 shadow-inner">
          {COUNTRIES.map((country) => {
            const isActive = selectedCountry === country.id;
            const Flag = country.icon;
            return (
              <button
                key={country.id}
                type="button"
                onClick={() => setSelectedCountry(country.id)}
                className={`flex items-center gap-1.5 cursor-pointer rounded-lg px-3 py-1.5 text-[12.5px] font-md transition-all active:scale-95 ${
                  isActive
                    ? "bg-[#C77B21] text-white shadow-md shadow-[#C77B21]/20 font-semibold"
                    : "text-[#5C6570] hover:text-[#17202A] hover:bg-white"
                }`}
                aria-pressed={isActive}
              >
                <Flag className="h-3 w-4.5 rounded-[2px] shadow-2xs overflow-hidden" />
                <span>{country.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Heading with Country Context */}
      <h2 className="mt-4 font-sans text-[1.5rem] font-md leading-snug text-[#17202A] transition-all sm:text-[1.65rem]">
        {currentHeading}
      </h2>

      {/* Dynamic Overview Text */}
      <p className="mt-2.5 text-[14px] leading-[1.8] text-[#5C6570] transition-all">
        {currentOverview}
      </p>

      {/* Region-Specific Feature Points */}
      {currentPoints.length > 0 && (
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {currentPoints.map((point, idx) => (
            <div
              key={`${selectedCountry}-${idx}`}
              className="flex items-start gap-2.5 rounded-xl border border-[#E8DED2] bg-[#FAF8F4] px-3.5 py-2.5 transition-colors hover:bg-white"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1FA463]" />
              <span className="text-[12.5px] font-medium leading-snug text-[#344054]">
                {point}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Quote Box */}
      <div className="mt-4 rounded-xl border border-[#E8D4BD] bg-[#FFF8EF] p-4">
        <Quote className="mb-2 h-5 w-5 text-[#C77B21]/40" />
        <p className="font-sans text-[14.5px] italic leading-relaxed text-[#17202A]">
          "{quote}"
        </p>
        <p className="mt-1.5 text-[12px] text-[#687684]">
          — Vijay Sharma, Founder & Care Director
        </p>
      </div>

      {/* Category Trust Row */}
      {children}
    </div>
  );
}
