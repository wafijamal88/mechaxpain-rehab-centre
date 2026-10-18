import React from "react";
import Image from "next/image";
import { siteConfig, getWhatsAppLink } from "@/data/siteConfig";
import { 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  MessageCircle,
  Dumbbell
} from "lucide-react";

export default function FacilitySection() {
  const highlights = [
    {
      title: "Mesin Biomekanik Functional Patterns",
      desc: "Kelengkapan kabel multidimensi untuk melatih ketegangan fasia dan postur simetri.",
    },
    {
      title: "Kawasan Sesi 1-on-1 Eksklusif",
      desc: "Ruang yang luas dan selesa, tiada kesesakan, fokus 100% kepada anda.",
    },
    {
      title: "Lantai Getah Penyerapan Impak",
      desc: "Kawasan senaman gait dan larian yang selamat untuk sendi lutut dan buku lali.",
    },
    {
      title: "Ruang Terapi Selesa & Berhawa Dingin",
      desc: "Persekitaran rehabilitasi yang bersih, berhawa dingin sepenuhnya dan parkir mudah di hadapan premis.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image showcase with styling */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900 group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
                <Image
                  src="/images/pusat.png"
                  alt="Fasiliti mechaXPAIN Strength Rehab Centre Kota Bharu"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold border border-slate-700/80">
                  <Dumbbell className="w-3.5 h-3.5 text-orange-400" />
                  <span>mechaXPAIN Official Centre</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs text-orange-400 font-bold uppercase tracking-wider mb-1">
                    Ruang Rawatan & Pemulihan
                  </p>
                  <p className="text-base sm:text-lg font-bold leading-tight">
                    &ldquo;Dari Sakit Sampai Boleh Berlari&rdquo; — Kemudahan Moden Untuk Kesembuhan Berkekalan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Details */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 text-orange-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Fasiliti Pemulihan Kami</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Suasana Kondusif, Dilengkapi Teknologi Pergerakan Biomekanik.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
              Kami percaya proses kesembuhan memerlukan persekitaran yang positif, selesa dan bebas tekanan. Di {siteConfig.shortName}, anda tidak akan berasa seperti di hospital yang muram, sebaliknya di sebuah pusat pemulihan prestasi yang penuh motivasi.
            </p>

            {/* Highlights List */}
            <div className="space-y-4 w-full mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{h.title}</h4>
                    <p className="text-xs text-slate-600 leading-normal">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Location & CTA */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Bandar Baru Tunjung</p>
                  <p className="text-[11px] text-slate-500">Kota Bharu, Kelantan</p>
                </div>
              </div>

              <a
                href={getWhatsAppLink("Salam mechaXPAIN, saya mahu melawat pusat atau tempah slot sesi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Tempah Lawatan</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
