import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppLink } from "@/data/siteConfig";
import { 
  Sparkles, 
  Target, 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  MessageCircle,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami | mechaXPAIN Strength Rehab Centre",
  description:
    "Ketahui visi, misi dan falsafah 'Dari Sakit Sampai Boleh Berlari' di mechaXPAIN Rehab Centre. Pusat pemulihan biomekanik dan fisioterapi moden di Bandar Baru Tunjung, Kota Bharu, Kelantan.",
  openGraph: {
    title: "Tentang mechaXPAIN Strength Rehab Centre",
    description: "Falsafah 'Dari Sakit Sampai Boleh Berlari' — Fisioterapi & Biomekanik Moden.",
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-orange-600" />,
      title: "Penyelesaian Punca Asal",
      desc: "Kami tidak berpuas hati dengan kelegaan sementara. Setiap rawatan membedah corak pergerakan bagi menghapuskan punca masalah dari akar umbi.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-blue-600" />,
      title: "Hubungan Pesakit-Fisioterapis Telus",
      desc: "Pesakit bukan sekadar 'nombor giliran'. Kami meluangkan masa menerangkan secara visual anatomi tubuh anda supaya anda faham apa yang sedang berlaku.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Berasaskan Sains Biomekanik",
      desc: "Menggabungkan prinsip Functional Patterns, ketegangan fasia dan integrasi kinetik yang terbukti di peringkat antarabangsa.",
    },
    {
      icon: <Award className="w-6 h-6 text-indigo-600" />,
      title: "Komitmen Ke Arah Kemandirian",
      desc: "Matlamat kami ialah agar anda tidak lagi memerlukan fisioterapi berterusan, sebaliknya mampu hidup aktif dan bersukan tanpa bergantung kepada ubat.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Falsafah mechaXPAIN</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
            &ldquo;Dari Sakit Sampai Boleh Berlari&rdquo;
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            mechaXPAIN Strength Rehab Centre ditubuhkan atas satu misi jelas: memulihkan pesakit daripada kesakitan kronik dan membina semula kekuatan struktur tubuh yang sebenar.
          </p>
        </div>
      </section>

      {/* Philosophy & Story Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-900">
                <Image
                  src="/images/pusat.png"
                  alt="Fasiliti mechaXPAIN Strength Rehab Centre"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block p-4 rounded-2xl bg-white border border-slate-200 shadow-xl max-w-xs">
                <p className="text-xs font-bold text-orange-600 mb-1">Standard Klinikal 1-on-1</p>
                <p className="text-xs text-slate-600">Perhatian penuh fisioterapis bertauliah tanpa perkongsian bilik rawatan.</p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                Kisah & Visi Kami
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-6">
                Menutup Jurang Antara Hilang Sakit Dan Kekuatan Berfungsi
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Dalam rawatan konvensional, kebanyakan pesakit dilepaskan sebaik sahaja rasa sakit berkurangan. Namun, struktur biomekanik dan corak pergerakan yang rosak masih kekal. Akibatnya, dalam beberapa bulan, kesakitan berulang semula (relapse).
                </p>
                <p>
                  Di mechaXPAIN, kami tidak berhenti setakat &ldquo;hilang sakit&rdquo;. Moto kami, <strong>&ldquo;Dari Sakit Sampai Boleh Berlari&rdquo;</strong>, adalah komitmen kami untuk membawa anda melalui fasa pemulihan lengkap: daripada fasa melegakan saraf, membina ketegangan fasia yang stabil, sehinggalah anda mampu melangkah, mendaki tangga, dan berlari semula dengan yakin.
                </p>
                <p>
                  Kemudahan kami di Bandar Baru Tunjung, Kota Bharu dilengkapi dengan alat latihan Functional Patterns moden bagi membolehkan latihan pergerakan multi-planar dijalankan dengan selamat dan berkesan.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppLink("Salam mechaXPAIN, saya mahu tahu lebih lanjut tentang pusat anda.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Pasukan Kami</span>
                </a>
                <Link
                  href="/perkhidmatan"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <span>Lihat Perkhidmatan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Pillars Values */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
              Nilai & Prinsip Rawatan Kami
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Setiap keputusan terapi di mechaXPAIN dipandu oleh 4 tonggak utama ini.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                    {v.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
