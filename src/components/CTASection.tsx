import React from "react";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { MessageCircle, Phone, Sparkles, Clock, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white overflow-hidden">
      {/* Decorative background effects */}
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold mb-6">
          <Sparkles className="w-4 h-4 text-orange-400" />
          <span>{siteConfig.tagline}</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
          Jangan Biarkan Kesakitan Menyekat Aktiviti Hidup Anda Lagi.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Slot temujanji terhad kepada sesi 1-on-1 bagi memastikan tumpuan penuh fisioterapis. Tempah sesi penilaian biomekanik anda hari ini.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={getWhatsAppLink("Salam mechaXPAIN, saya mahu menempah slot konsultasi dan pemeriksaan.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xl shadow-emerald-900/30 hover:scale-105 transition-all group"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Tempah Slot Melalui WhatsApp</span>
          </a>

          <a
            href={getPhoneLink()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-xs transition-colors"
          >
            <Phone className="w-4 h-4 text-slate-300" />
            <span>Hubungi: {siteConfig.phoneDisplay}</span>
          </a>
        </div>

        {/* Footer Meta Notes in Banner */}
        <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-400 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-orange-400" />
            <span>{siteConfig.operatingHours.weekdays}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-orange-400" />
            <span>Bandar Baru Tunjung, Kota Bharu Kelantan</span>
          </div>
        </div>

      </div>
    </section>
  );
}
