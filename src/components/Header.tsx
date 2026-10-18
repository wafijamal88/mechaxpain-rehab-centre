"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Clock, 
  MapPin, 
  ChevronRight, 
  ShieldCheck 
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Perkhidmatan", href: "/perkhidmatan" },
    { name: "Artikel & Tips", href: "/artikel" },
    { name: "Soalan Lazim", href: "/#faq" },
    { name: "Hubungi", href: "/hubungi" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
              <span>Ahad – Khamis: 9:00 AM – 5:00 PM | Sabtu: 10:00 AM – 5:00 PM</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>Bandar Baru Tunjung, Kota Bharu</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Fisioterapis Bertauliah & Sesi 1-on-1
            </span>
            <a
              href={getPhoneLink()}
              className="flex items-center gap-1 text-white hover:text-orange-400 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-orange-400" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3"
            : "bg-white border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white p-0.5 flex-shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/logo.jpeg"
                  alt="mechaXPAIN Rehab Centre Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                  mecha<span className="text-orange-600">X</span>PAIN
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-blue-900">
                  Strength Rehab Centre
                </span>
                <span className="text-[9px] text-slate-500 italic hidden sm:block">
                  &ldquo;Dari Sakit Sampai Boleh Berlari&rdquo;
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isActive(link.href)
                      ? "text-blue-900 bg-blue-50 font-bold"
                      : "text-slate-700 hover:text-blue-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Action CTA Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={getPhoneLink()}
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-blue-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                title="Panggilan Terus"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>Panggilan</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm hover:shadow transition-all group"
              >
                <MessageCircle className="w-4 h-4 fill-white/20 text-white group-hover:scale-110 transition-transform" />
                <span>Tempah Slot WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white bg-emerald-600 rounded-lg sm:hidden shadow-sm"
                aria-label="WhatsApp Admin"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-auto bg-white border-b border-slate-200 shadow-2xl px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? "bg-blue-50 text-blue-900 font-bold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-900"
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Kami Sekarang</span>
            </a>

            <a
              href={getPhoneLink()}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4 text-slate-600" />
              <span>Hubungi: {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
