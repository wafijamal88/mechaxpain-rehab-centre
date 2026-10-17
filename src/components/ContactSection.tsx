import React from "react";
import Image from "next/image";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Navigation, 
  Car, 
  Accessibility,
  Mail,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="lokasi" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            Lokasi & Waktu Operasi
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Kunjungi mechaXPAIN Strength Rehab Centre
          </h2>
          <p className="text-base text-slate-600">
            Terletak di lokasi strategik Bandar Baru Tunjung, Kota Bharu dengan akses mudah dari Lebuhraya Kota Bharu-Gua Musang dan kawasan sekitar Kelantan.
          </p>
        </div>

        {/* Exterior Building Showcase Card */}
        <div className="mb-12 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Building Photo */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 md:h-[420px] w-full bg-slate-950">
              <Image
                src="/images/bangunan-pusat-mechaxpain.png"
                alt="Bangunan Premis mechaXPAIN Strength Rehab Centre Bandar Baru Tunjung"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-md">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  Bangunan Premis mechaXPAIN
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-600/95 backdrop-blur-sm text-white text-[11px] font-bold shadow">
                  Papan Tanda / Banner Tingkat 1
                </span>
              </div>
            </div>

            {/* Building Info & Navigation */}
            <div className="lg:col-span-5 p-6 sm:p-8 text-white space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold border border-orange-400/30">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                Pengecaman Premis
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                Tingkat 1 Lot Sudut, Bandar Baru Tunjung
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Premis kami beroperasi di bangunan lot sudut 3 tingkat. Anda boleh mengecam papan tanda banner ungu-putih <strong className="text-white">mechaXPAIN STRENGTH REHAB CENTRE</strong> dengan jelas di tingkat satu dari arah jalan utama.
              </p>

              <div className="space-y-2.5 text-xs text-slate-300 pt-3 border-t border-slate-800">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Petak letak kereta luas betul-betul di hadapan tangga premis</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Kemudahan lif dan laluan mesra kerusi roda untuk pesakit</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Akses mudah berdekatan Lebuhraya KB - Gua Musang</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 shadow transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-blue-600" />
                  <span>Buka Google Maps</span>
                </a>
                <a
                  href={siteConfig.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white shadow transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Pandu Guna Waze</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Details Card (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    Alamat Lengkap Pusat Kami
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    {siteConfig.address.full}
                  </p>
                  
                  {/* Navigation Buttons (Google Maps & Waze) */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={siteConfig.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 shadow-2xs transition-colors"
                    >
                      <Navigation className="w-4 h-4 text-blue-600" />
                      <span>Buka Google Maps</span>
                    </a>

                    <a
                      href={siteConfig.wazeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 shadow-2xs transition-colors"
                    >
                      <Navigation className="w-4 h-4 text-sky-500" />
                      <span>Pandu Guna Waze</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-900 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Waktu Operasi Rawatan
                  </h3>
                  <div className="space-y-2 text-sm text-slate-700">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="font-medium">Isnin – Jumaat:</span>
                      <span className="font-bold text-slate-900">9:00 AM – 7:00 PM</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="font-medium">Sabtu:</span>
                      <span className="font-bold text-slate-900">9:00 AM – 5:00 PM</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="font-medium">Ahad:</span>
                      <span className="font-bold text-slate-900">9:00 AM – 2:00 PM (Temujanji Awal)</span>
                    </div>
                    <div className="flex justify-between py-1 text-slate-500">
                      <span>Cuti Umum Tertentu:</span>
                      <span>Sila rujuk WhatsApp</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Access & Parking Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-3">
                <Car className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                <span className="text-xs font-semibold text-emerald-900">
                  Parkir mudah betul-betul di hadapan premis
                </span>
              </div>
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-3">
                <Accessibility className="w-5 h-5 text-blue-700 flex-shrink-0" />
                <span className="text-xs font-semibold text-blue-900">
                  Laluan mesra kerusi roda & ada lif
                </span>
              </div>
            </div>

          </div>

          {/* Right Direct Action Card (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                Pertanyaan Segera
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Perlukan Bantuan Atau Ingin Buat Temujanji?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Kami mengutamakan keselesaan pesakit. Elakkan menunggu lama dengan membuat temujanji slot masa rawatan terlebih dahulu.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={getWhatsAppLink("Salam mechaXPAIN, saya mahu buat temujanji fisioterapi.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 px-5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp: {siteConfig.whatsappDisplay}</span>
                </a>

                <a
                  href={getPhoneLink()}
                  className="w-full flex items-center justify-center gap-3 py-3.5 px-5 rounded-xl font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Panggilan: {siteConfig.phoneDisplay}</span>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-center">
              <p className="text-xs text-slate-400">
                Peringatan mesra: Sesi konsultasi 1-on-1 memerlukan tempahan slot awal.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
