import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { servicesData } from "@/data/services";
import { articlesData } from "@/data/articles";
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ChevronRight
} from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white p-0.5 border border-slate-700">
                <Image
                  src="/images/logo.jpeg"
                  alt="mechaXPAIN Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-none">
                  mecha<span className="text-orange-500">X</span>PAIN
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase text-blue-400">
                  Strength Rehab Centre
                </span>
              </div>
            </Link>

            <p className="text-xs text-orange-400 font-bold italic">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Pusat fisioterapi & pemulihan kekuatan berasaskan biomekanik moden. Kami membantu pesakit membetulkan punca kesakitan sendi, tulang belakang dan otot agar boleh kembali aktif secara semulajadi.
            </p>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Pautan Pantas
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Halaman Utama
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/perkhidmatan" className="hover:text-white transition-colors">
                  Semua Perkhidmatan
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="hover:text-white transition-colors">
                  Artikel & Panduan
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Soalan Lazim (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/hubungi" className="hover:text-white transition-colors">
                  Lokasi & Hubungi
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Rawatan Utama
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/perkhidmatan/${service.slug}`}
                    className="hover:text-orange-400 transition-colors flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span className="line-clamp-1">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Hubungi Kami
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <a href={getPhoneLink()} className="hover:text-white transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-emerald-400 transition-colors"
                >
                  WhatsApp: {siteConfig.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                <span>Isnin – Sabtu: 9.00 AM – 7.00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-[11px] text-slate-500 leading-relaxed">
          <p className="mb-2">
            <strong className="text-slate-400">Penafian Perubatan (Medical Disclaimer):</strong> Maklumat dan bahan yang terkandung di laman web ini adalah untuk tujuan pendidikan kesihatan dan maklumat am sahaja. Ia tidak bertujuan untuk menggantikan diagnosis atau nasihat perubatan profesional daripada doktor perubatan bertauliah. Sila dapatkan nasihat daripada fisioterapis atau pengamal perubatan kami sebelum memulakan sebarang rutin senaman atau rawatan pemulihan fizikal.
          </p>
        </div>

        {/* Legal & Policy Links Row (Payment Gateway & Regulatory Compliance) */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <Link href="/refund-policy" className="hover:text-white transition-colors">
              Refund & Cancellation Policy
            </Link>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <Link href="/shipping-policy" className="hover:text-white transition-colors">
              Shipping Policy
            </Link>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <Link href="/perkhidmatan" className="hover:text-slate-300 transition-colors">Perkhidmatan</Link>
            <Link href="/artikel" className="hover:text-slate-300 transition-colors">Artikel</Link>
            <Link href="/hubungi" className="hover:text-slate-300 transition-colors">Hubungi</Link>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-4 pt-4 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {currentYear} {siteConfig.name}. Hak Cipta Terpelihara.</p>
          <p className="text-[11px] text-slate-500">
            {siteConfig.companyName} (No. SSM: {siteConfig.ssmNumber})
          </p>
        </div>

      </div>
    </footer>
  );
}
