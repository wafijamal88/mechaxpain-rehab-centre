"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import ServiceCard from "./ServiceCard";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { label: "Semua Rawatan", value: "All" },
    { label: "Tulang Belakang & Pinggang", value: "Spine & Back" },
    { label: "Sendi & Lutut", value: "Joint & Mobility" },
    { label: "Sukan & Strength Rehab", value: "Sports & Strength" },
    { label: "Neuro & Strok", value: "Neuro" },
  ];

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <section id="perkhidmatan" className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>Program Rawatan Klinikal Kami</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Rawatan Khusus Mengikut Punca Sebenar Kesakitan Anda
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Setiap sesi dikendalikan 1-on-1 bersama fisioterapis bertauliah menggunakan gabungan teknik manual klinikal dan Functional Patterns.
            </p>
          </div>

          <Link
            href="/perkhidmatan"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-orange-600 transition-colors"
          >
            <span>Lihat Semua Direktori Rawatan</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.value
                  ? "bg-blue-900 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}
