"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { 
  MessageCircle, 
  Phone, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Activity,
  HeartHandshake
} from "lucide-react";

export default function Hero() {
  const painTags = [
    { label: "Slip Disc / Sakit Pinggang", href: "/perkhidmatan/fisioterapi-sakit-pinggang-slip-disc" },
    { label: "Sakit Lutut / Osteoarthritis", href: "/perkhidmatan/pemulihan-sakit-lutut-osteoarthritis" },
    { label: "Frozen Shoulder & Leher", href: "/perkhidmatan/rawatan-leher-bahu-frozen-shoulder" },
    { label: "Strength Rehab & Gait", href: "/perkhidmatan/strength-rehab-functional-patterns" },
    { label: "Kecederaan Sukan (ACL)", href: "/perkhidmatan/rehabilitasi-kecederaan-sukan" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      {/* Decorative ambient gradient blobs */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 -right-32 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Trust, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Motto Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs sm:text-sm font-bold mb-5 shadow-sm">
              <Sparkles className="w-4 h-4 text-orange-600 animate-pulse" />
              <span>&ldquo;Dari Sakit Sampai Boleh Berlari&rdquo;</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
              Kembalikan Kebebasan Bergerak{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-800 to-orange-600">
                Tanpa Kesakitan & Ubat Berpanjangan.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Pusat Fisioterapi & Pemulihan Biomekanik <strong className="text-slate-900 font-bold">mechaXPAIN</strong> menggabungkan terapi manual klinikal dengan latihan rintangan Functional Patterns bagi membetulkan punca sebenar kesakitan anda, bukan sekadar menutup gejala.
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mb-8">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  1-on-1 Sesi Bersama Fisioterapis
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <Activity className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  Teknik Biomekanik Functional Patterns
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs col-span-2 sm:col-span-1">
                <HeartHandshake className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  Pelan Pemulihan Berfasa & Realistik
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href={getWhatsAppLink("Salam mechaXPAIN, saya mahu buat temujanji konsultasi fisioterapi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Tempah Slot Konsultasi (WhatsApp)</span>
              </a>

              <a
                href={getPhoneLink()}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
            </div>

            {/* Quick Pain Condition Tags */}
            <div className="w-full">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Kawasan Masalah Yang Kerap Kami Bantu:
              </p>
              <div className="flex flex-wrap gap-2">
                {painTags.map((tag) => (
                  <Link
                    key={tag.label}
                    href={tag.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-xs font-medium border border-slate-200 transition-colors"
                  >
                    <span>{tag.label}</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Center Image & Facility Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-tr from-blue-600 via-indigo-600 to-orange-500 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src="/images/pusat.png"
                    alt="Pusat Fisioterapi mechaXPAIN Strength Rehab Centre"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                  
                  {/* Floating caption at bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-orange-400">mechaXPAIN Fasiliti Rasmi</p>
                        <p className="text-sm font-bold text-white">Bilik Latihan Biomekanik & Rehab</p>
                      </div>
                      <span className="text-[10px] bg-blue-600/80 text-white px-2 py-1 rounded-md font-semibold">
                        Kota Bharu, Kelantan
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 1: Patient Satisfaction */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                  <Star className="w-6 h-6 fill-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-base font-black text-slate-900">4.9</span>
                    <span className="text-xs text-slate-400 font-medium">/ 5.0</span>
                  </div>
                  <p className="text-[11px] font-semibold text-slate-600">Kepuasan Pesakit</p>
                </div>
              </div>

              {/* Floating Stat Badge 2: Patients Helped */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-base font-black text-slate-900">5,000+</span>
                  <p className="text-[11px] font-semibold text-slate-600">Sesi Pemulihan Berjaya</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
