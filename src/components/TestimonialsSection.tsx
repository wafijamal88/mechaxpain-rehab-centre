import React from "react";
import Image from "next/image";
import { videoProofsData } from "@/data/testimonials";
import { siteConfig, getWhatsAppLink } from "@/data/siteConfig";
import { 
  Star, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  ShieldCheck, 
  ArrowRight,
  TrendingDown,
  Activity,
  Play
} from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      
      {/* Decorative ambient blur */}
      <div 
        className="absolute top-1/4 -left-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 -right-32 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Bukti Nyata Pemulihan Pesakit
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Mereka Pernah Merasai Kesakitan Yang Anda Hadapi Sekarang
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Dengar sendiri dan lihat rakaman sesi pemulihan pesakit mechaXPAIN. Dari kesakitan menyeksa 
            hingga kembali solat dengan selesa dan bergerak aktif tanpa kebergantungan ubat tahan sakit.
          </p>
        </div>

        {/* 🎬 4 REAL VIDEO / PHOTO TESTIMONIAL PROOF CARDS */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Rakaman Sesi Pemulihan & Hasil Rawatan Sebenar
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-semibold hidden sm:inline-block">
              {videoProofsData.length} Kes Terpilih Bersama Terapis mechaXPAIN
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {videoProofsData.map((item, index) => {
              const borderGradients = [
                "from-orange-400 via-amber-500 to-red-500",
                "from-emerald-400 via-teal-500 to-blue-500",
                "from-blue-400 via-indigo-500 to-violet-500",
                "from-amber-400 via-orange-500 to-rose-500",
                "from-teal-400 via-emerald-500 to-cyan-500",
                "from-indigo-400 via-blue-500 to-emerald-500",
              ];
              const badgeGradients = [
                "bg-orange-500/20 text-orange-300 border-orange-400/30",
                "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
                "bg-blue-500/20 text-blue-300 border-blue-400/30",
                "bg-amber-500/20 text-amber-300 border-amber-400/30",
                "bg-teal-500/20 text-teal-300 border-teal-400/30",
                "bg-indigo-500/20 text-indigo-300 border-indigo-400/30",
              ];

              return (
                <div
                  key={item.id}
                  className="rounded-3xl bg-slate-900 text-white p-5 sm:p-6 border border-slate-800 shadow-xl hover:shadow-2xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Condition Pill & Stars */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`inline-block px-2.5 py-0.5 rounded-lg text-[11px] font-bold border ${badgeGradients[index % 6]}`}>
                        {item.badge}
                      </span>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Image / Video Stills Frame */}
                    <div className="relative mb-4">
                      <div className={`p-1 rounded-2xl bg-gradient-to-b ${borderGradients[index % 6]} shadow-md`}>
                        <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-[3/4]">
                          <Image
                            src={item.image}
                            alt={item.headline}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                          
                          {/* Top Badges Overlay */}
                          <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-[9px] font-bold text-white shadow-sm">
                              <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                              Rakaman Asli
                            </span>
                            <span className="px-1.5 py-0.5 rounded bg-emerald-600/90 backdrop-blur-md text-[9px] font-black text-white">
                              HASIL NYATA
                            </span>
                          </div>

                          {/* Subtle Play Overlay Indicator */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-90 transition-opacity">
                            <div className="w-10 h-10 rounded-full bg-slate-950/70 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white shadow-lg">
                              <Play className="w-4 h-4 fill-white ml-0.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Headline */}
                    <h4 className="text-sm font-bold text-white tracking-tight leading-snug mb-2.5">
                      {item.headline}
                    </h4>

                    {/* Outcome / Metric Badge */}
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] mb-3">
                      {item.metric && (
                        <div className="flex items-center justify-between mb-1 text-[10px] font-semibold text-slate-400">
                          <span>Sebelum: {item.metric.before}</span>
                          <span className="text-emerald-400 font-bold">{item.metric.reduction}</span>
                        </div>
                      )}
                      <div className="flex items-start gap-1.5 text-emerald-400 font-medium text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item.keyOutcome}</span>
                      </div>
                    </div>

                    {/* Short Quote */}
                    <p className="text-xs text-slate-300 italic leading-relaxed line-clamp-3 mb-4">
                      &ldquo;{item.story}&rdquo;
                    </p>
                  </div>

                  {/* Bottom Patient Profile & WhatsApp Action */}
                  <div className="pt-3 border-t border-slate-800">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <div>
                        <p className="font-bold text-white text-xs">{item.name}</p>
                        <p className="text-[11px] text-slate-400">{item.age} tahun • {item.location}</p>
                      </div>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" /> Disahkan
                      </span>
                    </div>

                    <a
                      href={getWhatsAppLink(item.waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                      <span>Tanya Kes Seperti Ini</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section Link */}
        <div className="mt-14 text-center">
          <p className="text-base sm:text-lg font-bold text-slate-900 mb-4">
            Nak lihat video testimoni pelanggan kami?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {siteConfig.social.tiktok && (
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-black text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
                <span>Tonton di TikTok @mechaxpain</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}
            <a
              href={getWhatsAppLink("Salam mechaXPAIN, saya nak lihat video testimoni pelanggan dan bertanyakan tentang rawatan.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Minta Video di WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
