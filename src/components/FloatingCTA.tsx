"use client";

import React, { useState, useEffect } from "react";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { MessageCircle, Phone, X } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Show after scrolling 100px or after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 1500);
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Floating Tooltip Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-1.5 px-3 rounded-full bg-slate-900 text-white text-xs font-medium shadow-xl border border-slate-700 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Fisioterapis Online: Sedia Membantu</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="ml-1 text-slate-400 hover:text-white"
            aria-label="Tutup pemberitahuan"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Buttons Group */}
      <div className="flex items-center gap-2">
        {/* Call button */}
        <a
          href={getPhoneLink()}
          className="w-12 h-12 rounded-full bg-white text-slate-800 border border-slate-300 shadow-xl flex items-center justify-center hover:scale-110 hover:bg-slate-50 transition-all duration-300"
          title={`Panggilan: ${siteConfig.phoneDisplay}`}
          aria-label="Panggilan Telefon"
        >
          <Phone className="w-5 h-5 text-blue-700" />
        </a>

        {/* WhatsApp primary button */}
        <a
          href={getWhatsAppLink("Salam mechaXPAIN, saya mahu buat temujanji konsultasi fisioterapi.")}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-2 py-3 px-4 sm:px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow group"
          title="WhatsApp mechaXPAIN"
        >
          <MessageCircle className="w-5 h-5 fill-white/20 text-white group-hover:rotate-12 transition-transform" />
          <span className="hidden xs:inline sm:inline">WhatsApp Kami</span>
        </a>
      </div>
    </div>
  );
}
