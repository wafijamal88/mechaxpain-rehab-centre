"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/faqs";
import { getWhatsAppLink } from "@/data/siteConfig";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const categories = ["Semua", "Umum", "Rawatan & Prosedur", "Pembayaran & Temujanji"];

  const filteredFaqs =
    activeCategory === "Semua"
      ? faqsData
      : faqsData.filter((f) => f.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
            <span>Soalan Lazim (FAQ)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Semua Yang Perlu Anda Tahu Sebelum Sesi Rawatan
          </h2>
          <p className="text-base text-slate-600">
            Jawapan ringkas dan padat untuk persoalan yang sering ditanya oleh pesakit baru.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-blue-900 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-blue-200 shadow-md ring-1 ring-blue-100"
                    : "bg-white/80 border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-blue-900 text-white rotate-180" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-slate-900">
              Ada soalan lain yang belum terjawab?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              Admin kami sedia membantu menjawab sebarang kekeliruan anda melalui WhatsApp.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Salam mechaXPAIN, saya ada soalan mengenai rawatan...")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanya di WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
