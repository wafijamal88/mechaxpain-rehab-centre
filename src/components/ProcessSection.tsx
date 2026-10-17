import React from "react";
import { Search, Stethoscope, Dumbbell, Trophy } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      icon: <Search className="w-5 h-5 text-blue-600" />,
      title: "Penilaian Biomekanik Menyeluruh",
      desc: "Pemeriksaan postur, julat gerakan sendi (ROM), analisis cara melangkah (gait), dan semakan laporan MRI / X-ray terdahulu.",
    },
    {
      num: "02",
      icon: <Stethoscope className="w-5 h-5 text-orange-600" />,
      title: "Kenalpasti Punca Sebenar Sakit",
      desc: "Fisioterapis menerangkan dengan jelas mengapa sendi anda sakit dan merangka pelan pemulihan berfasa yang khusus untuk tubuh anda.",
    },
    {
      num: "03",
      icon: <Dumbbell className="w-5 h-5 text-emerald-600" />,
      title: "Terapi Manual & Latihan Biomekanik",
      desc: "Pelepasan saraf tersepit dan ketegangan otot melalui terapi manual, disusuli latihan kestabilan menggunakan alat Functional Patterns.",
    },
    {
      num: "04",
      icon: <Trophy className="w-5 h-5 text-indigo-600" />,
      title: "Kekuatan Sebenar & Bebas Berlari",
      desc: "Tubuh anda dibina semula dengan daya tahan tinggi. Anda kembali boleh membongkok, solat di lantai, dan aktif tanpa rasa takut.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            Langkah Pemulihan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
            4 Langkah Dari Rasa Sakit Hingga Mampu Berlari Semula
          </h2>
          <p className="text-base text-slate-300">
            Perjalanan kesembuhan yang telus, sistematik dan terbukti membantu ribuan pesakit kami kembali aktif.
          </p>
        </div>

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-700/80 border border-slate-600 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-600">
                    {step.num}
                  </span>
                </div>
                
                <h3 className="text-base font-bold text-white mb-2.5">
                  {step.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60">
                <span className="text-[11px] font-semibold text-orange-400">
                  Fasa {step.num} Sesi mechaXPAIN
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
