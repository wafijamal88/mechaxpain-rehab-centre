import React from "react";
import { 
  Target, 
  UserCheck, 
  Zap, 
  Activity, 
  Video, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Rawat Punca, Bukan Simptom",
      description: "Kami tidak sekadar meredakan sakit sementara waktu. Kami menganalisis kedudukan pelvis, tulang belakang dan cara melangkah untuk membetulkan ketidakseimbangan asal.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-orange-600" />,
      title: "1-on-1 Dedikasi Sepenuh Masa",
      description: "Setiap sesi dijalankan secara individu bersama fisioterapis bertauliah tanpa gangguan atau perkongsian perhatian dengan pesakit lain.",
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      title: "Teknik Functional Patterns",
      description: "Menggunakan metodologi biomekanik moden yang melatih semula rantaian fasia dan koordinasi otot mengikut fitrah pergerakan tubuh manusia.",
    },
    {
      icon: <Activity className="w-6 h-6 text-indigo-600" />,
      title: "Dari Sakit Sampai Boleh Berlari",
      description: "Kami bukan hanya memastikan anda hilang rasa sakit, tetapi membina semula kekuatan struktur tubuh agar anda mampu kembali bersukan dan aktif.",
    },
    {
      icon: <Video className="w-6 h-6 text-rose-600" />,
      title: "Bimbingan Senaman Susulan",
      description: "Setiap pesakit dibekalkan panduan senaman peribadi di rumah supaya kemajuan kesembuhan dapat dikekalkan secara berterusan.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-sky-600" />,
      title: "Kadar Kepuasan 98%",
      description: "Lebih 5,000 pesakit sakit pinggang, slip disc, lutut dan kecederaan sukan telah dibantu mengelakkan pembedahan dan pulih sepenuhnya.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            Mengapa mechaXPAIN
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Perbezaan Pendekatan Kami Berbanding Rawatan Konvensional
          </h2>
          <p className="text-base text-slate-600">
            Ramai pesakit hadir ke mechaXPAIN selepas mencuba pelbagai kaedah tanpa hasil kekal. Inilah sebab mengapa pendekatan kami berjaya memulihkan mereka.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Standard Klinikal mechaXPAIN</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
