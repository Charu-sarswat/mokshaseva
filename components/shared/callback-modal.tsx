"use client";

import React, { useState } from "react";
import { 
  Phone, 
  User, 
  Mail, 
  MapPin, 
  Clock, 
  HeartHandshake, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  X,
  Loader2
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CallbackModalProps {
  trigger?: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultService?: string;
}

const serviceOptions = [
  "General Inquiry / Immediate Support",
  "Funeral Services",
  "International Repatriation",
  "Ash Immersion",
  "Ambulance & Hearse Van",
  "Air Ambulance",
  "Pandit & Spiritual Rituals",
  "Documentation & Consular Support",
  "Travel & Accommodation",
];

const timePreferences = [
  "Immediate (Within 15 mins)",
  "Today (Morning)",
  "Today (Afternoon)",
  "Today (Evening)",
  "Specific Time (Add in note)",
];

export function CallbackModal({
  trigger,
  isOpen,
  onOpenChange,
  defaultService,
}: CallbackModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = isOpen !== undefined;
  const open = isControlled ? isOpen : internalOpen;
  const setOpen = isControlled ? onOpenChange : setInternalOpen;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: defaultService || "General Inquiry / Immediate Support",
    preferredTime: "Immediate (Within 15 mins)",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "",
      service: defaultService || "General Inquiry / Immediate Support",
      preferredTime: "Immediate (Within 15 mins)",
      notes: "",
    });
    if (setOpen) setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={(val) => {
      if (!val) {
        // Reset state after dialog closes
        setTimeout(() => setIsSubmitted(false), 300);
      }
      if (setOpen) setOpen(val);
    }}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      
      <DialogContent className="max-h-[90vh] overflow-y-auto max-w-[540px] rounded-2xl border border-[#E8DED2] bg-white p-6 shadow-2xl sm:rounded-[24px]">
        {isSubmitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF3E5] text-[#C77B21]">
              <CheckCircle2 className="h-9 w-9 text-[#C77B21]" />
            </div>
            <h3 className="font-sans text-2xl font-bold text-[#121A24]">
              Callback Request Received
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5C6570]">
              Thank you, <strong className="text-[#121A24]">{formData.name}</strong>. Our dedicated care coordinator will call you back at <strong className="text-[#C77B21]">{formData.phone}</strong> {formData.preferredTime.includes("Immediate") ? "promptly within 15 minutes" : `(${formData.preferredTime})`}.
            </p>

            <div className="mt-6 rounded-xl border border-[#EDE6DD] bg-[#FAF8F4] p-4 text-left">
              <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#8A7968]">
                <ShieldCheck className="h-4 w-4 text-[#C77B21]" /> Request Summary
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-[#5C6570]">
                <div><span className="text-[#8A7968]">Service:</span> {formData.service}</div>
                <div><span className="text-[#8A7968]">Preference:</span> {formData.preferredTime}</div>
                {formData.location && <div className="col-span-2"><span className="text-[#8A7968]">Location:</span> {formData.location}</div>}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
              <Button
                type="button"
                onClick={handleReset}
                className="h-11 rounded-xl bg-[#C77B21] px-6 text-sm font-semibold text-white hover:bg-[#A96418]"
              >
                Done
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-xl border-[#E8DED2] bg-white text-sm font-semibold text-[#17202A] hover:bg-[#FAF8F4]"
              >
                <a href="tel:+919568259784">
                  <Phone className="mr-2 h-4 w-4 text-[#C77B21]" /> Call Directly Now
                </a>
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <DialogHeader className="mb-4 text-left">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E8D4BD] bg-[#FFF8EF] px-3 py-1 text-[11px] font-semibold text-[#C77B21]">
                  <span className="h-2 w-2 rounded-full bg-[#1FA463] animate-pulse" />
                  24/7 Care Response
                </div>
              </div>
              <DialogTitle className="mt-2 font-sans text-2xl font-bold tracking-tight text-[#121A24]">
                Request a Callback
              </DialogTitle>
              <DialogDescription className="text-[13px] leading-relaxed text-[#5C6570]">
                Leave your details below and our compassionate care team will reach out to you promptly.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Name & Phone */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-medium text-[#343B45]">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A7968]" />
                    <Input
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-10 rounded-xl border-[#E8DED2] bg-[#FAF8F4] pl-9 text-[13px] text-[#17202A] placeholder:text-[#9AA3AF] focus-visible:ring-[#C77B21]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-[#343B45]">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A7968]" />
                    <Input
                      required
                      type="tel"
                      placeholder="+91 / +44 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-10 rounded-xl border-[#E8DED2] bg-[#FAF8F4] pl-9 text-[13px] text-[#17202A] placeholder:text-[#9AA3AF] focus-visible:ring-[#C77B21]"
                    />
                  </div>
                </div>
              </div>

              {/* Service Required */}
              <div>
                <label className="mb-1 block text-xs font-medium text-[#343B45]">
                  Service Needed
                </label>
                <div className="relative">
                  <HeartHandshake className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A7968]" />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="flex h-10 w-full rounded-xl border border-[#E8DED2] bg-[#FAF8F4] pl-9 pr-8 text-[13px] text-[#17202A] outline-none transition focus:border-[#C77B21] focus:ring-1 focus:ring-[#C77B21]"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Location & Preferred Time */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-medium text-[#343B45]">
                    Your City / Country
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A7968]" />
                    <Input
                      placeholder="e.g., London, UK / Delhi, India"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="h-10 rounded-xl border-[#E8DED2] bg-[#FAF8F4] pl-9 text-[13px] text-[#17202A] placeholder:text-[#9AA3AF] focus-visible:ring-[#C77B21]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-[#343B45]">
                    When should we call?
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A7968]" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="flex h-10 w-full rounded-xl border border-[#E8DED2] bg-[#FAF8F4] pl-9 pr-8 text-[13px] text-[#17202A] outline-none transition focus:border-[#C77B21] focus:ring-1 focus:ring-[#C77B21]"
                    >
                      {timePreferences.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Short Note */}
              <div>
                <label className="mb-1 block text-xs font-medium text-[#343B45]">
                  Brief Details / Urgency <span className="text-[#8A7968] font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any specific requirements or immediate questions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full resize-none rounded-xl border border-[#E8DED2] bg-[#FAF8F4] px-3 py-2 text-[13px] text-[#17202A] outline-none transition placeholder:text-[#9AA3AF] focus:border-[#C77B21] focus:ring-1 focus:ring-[#C77B21]"
                />
              </div>

              {/* Privacy Notice */}
              <p className="text-[11px] leading-relaxed text-[#7C8794]">
                🔒 Your privacy is fully respected. All communications are confidential and handled with care.
              </p>

              {/* Action Buttons */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 w-full rounded-xl bg-[#F28A35] text-sm font-semibold text-white shadow-md shadow-[#F28A35]/25 transition hover:bg-[#D97724] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting Request...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Request Callback Now <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>

              {/* Instant Call Alternative */}
              <div className="mt-3 border-t border-[#EDE6DD] pt-3 text-center">
                <p className="text-xs text-[#5C6570]">
                  Need immediate 24/7 assistance?{" "}
                  <a
                    href="tel:+919568259784"
                    className="font-semibold text-[#C77B21] hover:underline"
                  >
                    Call +91-9654900525
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://wa.me/919568259784"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#1FA463] hover:underline"
                  >
                    WhatsApp Us
                  </a>
                </p>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
