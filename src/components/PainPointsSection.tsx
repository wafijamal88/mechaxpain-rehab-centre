"use client";

import React from "react";
import Link from "next/link";
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
      color: "border-blue-200 bg-blue-50/40 text-blue-900",
    },
    {
      title: "Sakit Lutut Semasa Solat & Tangga",
      badge: "Osteoarthritis / Sendi",
      description: "Lutut berbunyi 'krup-krap', terasa panas berdenyut, dan terpaksa solat atas kerusi kerana tidak boleh melipat kaki.",
      solution: "Terapi Pengukuhan Sendi Patellofemoral",
      href: "/perkhidmatan/pemulihan-sakit-lutut-osteoarthritis",
      color: "border-sky-200 bg-sky-50/40 text-sky-900",
    },
    {
      title: "Bahu Kaku & Susah Angkat Tangan",
      badge: "Frozen Shoulder / Bahu Beku",
      description: "Tidak boleh memakai coli, zip baju di belakang, atau menyikat rambut. Tidur malam tersedar menangis bila tertindih bahu.",
      solution: "Mobilisasi Kapsul Bahu & Pelepasan Scapula",
      href: "/perkhidmatan/rawatan-leher-bahu-frozen-shoulder",
      color: "border-teal-200 bg-teal-50/40 text-teal-900",
    },
    {
      title: "Kecederaan Sukan & Lutut Longgar",
      badge: "ACL / Meniscus / Ligamen",
      description: "Pernah terseliuh atau bunyi 'pop' semasa bersukan. Rasa lutut tidak stabil, goyang dan takut hendak berlari semula.",
      solution: "Rehabilitasi Return-to-Play & Proprioception",
      href: "/perkhidmatan/rehabilitasi-kecederaan-sukan",
      color: "border-rose-200 bg-rose-50/40 text-rose-900",
    },
    {
      title: "Kelesuan Biomekanik & Postur Bongkok",
      badge: "Functional Patterns / Strength",
      description: "Badan senget sebelah, kerap sakit pinggang bila workout, dan cepat penat kerana corak pergerakan harian yang tidak simetri.",
      solution: "Latihan Rintangan Multi-Planar Khas mechaXPAIN",
      href: "/perkhidmatan/strength-rehab-functional-patterns",
      color: "border-orange-200 bg-orange-50/40 text-orange-900",
    },
    {
      title: "Kelemahan Pasca-Strok & Foot Drop",
      badge: "Neuro-Rehabilitasi",
      description: "Langkah kaki terseret, imbangan badan goyah, dan sukar menggerakkan jari tangan selepas diserang strok ringan atau sederhana.",
      solution: "Latihan Stimulasi Saraf Neuroplasticity 1-on-1",
      href: "/perkhidmatan/rehabilitasi-strok-neurologi",
      color: "border-purple-200 bg-purple-50/40 text-purple-900",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
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

        {/* 6 Pain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painScenarios.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg flex flex-col justify-between ${item.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/80 shadow-xs">
                    {item.badge}
                  </span>
                  <HelpCircle className="w-4 h-4 text-slate-400" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Pendekatan: {item.solution}</span>
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 hover:underline"
                >
                  <span>Lihat Pelan Rawatan Penuh</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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
