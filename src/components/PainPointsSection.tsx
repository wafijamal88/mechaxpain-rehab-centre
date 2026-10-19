"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getWhatsAppLink } from "@/data/siteConfig";
import { 
  AlertCircle, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  MessageCircle
} from "lucide-react";

export default function PainPointsSection() {
  const painScenarios = [
    {
      title: "Sakit Pinggang & Saraf Sciatica",
      badge: "Slip Disc / Tulang Belakang",
      description: "Duduk lebih 15 minit rasa pedih mencucuk di pinggang dan kebas merayap turun hingga ke betis atau hujung ibu jari kaki.",
      solution: "Program Dekompresi & Penjajaran Lumbar",
      href: "/perkhidmatan/fisioterapi-sakit-pinggang-slip-disc",
      image: "/images/pain-points/sakit-pinggang-fokus-terapi.jpg",
      imageAlt: "Pemeriksaan dan rawatan dekompresi sakit pinggang fisioterapi di mechaXPAIN",
      accentBorder: "border-blue-100 hover:border-blue-300",
    },
    {
      title: "Sakit Lutut Semasa Solat & Tangga",
      badge: "Osteoarthritis / Sendi",
      description: "Lutut berbunyi 'krup-krap', terasa panas berdenyut, dan terpaksa solat atas kerusi kerana tidak boleh melipat kaki.",
      solution: "Terapi Pengukuhan Sendi Patellofemoral",
      href: "/perkhidmatan/pemulihan-sakit-lutut-osteoarthritis",
      image: "/images/pain-points/sakit-lutut-wanita-bertudung.jpg",
      imageAlt: "Pemeriksaan dan terapi sendi lutut wanita muslim bertudung di mechaXPAIN",
      accentBorder: "border-sky-100 hover:border-sky-300",
    },
    {
      title: "Bahu Kaku & Susah Angkat Tangan",
      badge: "Frozen Shoulder / Bahu Beku",
      description: "Tidak boleh memakai coli, zip baju di belakang, atau menyikat rambut. Tidur malam tersedar menangis bila tertindih bahu.",
      solution: "Mobilisasi Kapsul Bahu & Pelepasan Scapula",
      href: "/perkhidmatan/rawatan-leher-bahu-frozen-shoulder",
      image: "/images/pain-points/bahu-kaku-wanita-bertudung.jpg",
      imageAlt: "Mobilisasi rawatan bahu kaku wanita bertudung di mechaXPAIN",
      accentBorder: "border-teal-100 hover:border-teal-300",
    },
    {
      title: "Kecederaan Sukan & Lutut Longgar",
      badge: "ACL / Meniscus / Ligamen",
      description: "Pernah terseliuh atau bunyi 'pop' semasa bersukan. Rasa lutut tidak stabil, goyang dan takut hendak berlari semula.",
      solution: "Rehabilitasi Return-to-Play & Proprioception",
      href: "/perkhidmatan/rehabilitasi-kecederaan-sukan",
      image: "/images/pain-points/kecederaan-sukan-lelaki-melayu.jpg",
      imageAlt: "Rehabilitasi atlet lelaki Melayu kecederaan sukan ACL di mechaXPAIN",
      accentBorder: "border-rose-100 hover:border-rose-300",
    },
    {
      title: "Kelesuan Biomekanik & Postur Bongkok",
      badge: "Functional Patterns / Strength",
      description: "Badan senget sebelah, kerap sakit pinggang bila workout, dan cepat penat kerana corak pergerakan harian yang tidak simetri.",
      solution: "Latihan Rintangan Multi-Planar Khas mechaXPAIN",
      href: "/perkhidmatan/strength-rehab-functional-patterns",
      image: "/images/pain-points/biomekanik-postur-lelaki-melayu.jpg",
      imageAlt: "Latihan pembetulan biomekanik dan postur lelaki Melayu di mechaXPAIN",
      accentBorder: "border-orange-100 hover:border-orange-300",
    },
    {
      title: "Kelemahan Pasca-Strok & Foot Drop",
      badge: "Neuro-Rehabilitasi",
      description: "Langkah kaki terseret, imbangan badan goyah, dan sukar menggerakkan jari tangan selepas diserang strok ringan atau sederhana.",
      solution: "Latihan Stimulasi Saraf Neuroplasticity 1-on-1",
      href: "/perkhidmatan/rehabilitasi-strok-neurologi",
      image: "/images/pain-points/pemulihan-strok-wanita-bertudung.jpg",
      imageAlt: "Latihan fisioterapi neuro rehabilitasi pasca-strok wanita warga emas bertudung di mechaXPAIN",
      accentBorder: "border-purple-100 hover:border-purple-300",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Adakah Anda Mengalami Keadaan Ini?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Kesakitan Tubuh Yang Tidak Dirawat Akan Mengubah Cara Anda Berjalan Dan Berdiri.
          </h2>
          <p className="text-base text-slate-600">
            Setiap kali anda menahan sakit, otot lain terpaksa bekerja dua kali ganda untuk mengimbangi (compensate). Ini mencetuskan lingkaran kerosakan sendi baru.
          </p>
        </div>

        {/* 6 Pain Cards Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {painScenarios.map((item, idx) => (
            <div
              key={idx}
              className={`group bg-white rounded-2xl overflow-hidden border ${item.accentBorder} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                {/* Card Image with Badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-75 group-hover:opacity-50 transition-opacity" />
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-white/95 text-slate-800 shadow-sm backdrop-blur-xs border border-white/60">
                      {item.badge}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <div className="w-7 h-7 rounded-full bg-slate-900/60 backdrop-blur-xs flex items-center justify-center text-white/80">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 sm:px-6 pb-6 pt-1">
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-2 text-xs text-slate-700 mb-3.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong className="font-semibold text-slate-900">Pendekatan:</strong> {item.solution}</span>
                  </div>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group/link"
                  >
                    <span>Lihat Pelan Rawatan Penuh</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Consultation Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-1">
              Tidak pasti keadaan sakit anda dalam kategori mana?
            </h3>
            <p className="text-sm text-slate-300">
              Ceritakan gejala anda kepada fisioterapis kami melalui WhatsApp. Kami akan berikan nasihat awal percuma.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Salam mechaXPAIN, saya mahu buat semakan awal tentang punca kesakitan saya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanya Fisioterapis Kami</span>
          </a>
        </div>

      </div>
    </section>
  );
}
