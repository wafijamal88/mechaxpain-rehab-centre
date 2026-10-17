import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import { getWhatsAppLink } from "@/data/siteConfig";
import { Sparkles, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Perkhidmatan Fisioterapi & Pemulihan Biomekanik",
  description:
    "Direktori rawatan lengkap mechaXPAIN Rehab Centre: Rawatan Sakit Pinggang, Slip Disc, Sakit Lutut, Frozen Shoulder, Kecederaan Sukan ACL, dan Neuro Strok.",
  openGraph: {
    title: "Direktori Rawatan Fisioterapi mechaXPAIN",
    description: "Rawatan fisioterapi intensif & pemulihan biomekanik di Bandar Baru Tunjung, Kota Bharu, Kelantan.",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direktori Rawatan mechaXPAIN</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Program Fisioterapi & Rehabilitasi Khusus
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Disesuaikan mengikut tahap kecederaan, jenis aktiviti harian, dan matlamat peribadi setiap pesakit.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-emerald-400">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4" />
              Sesi 1-on-1 Eksklusif
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4" />
              Fisioterapis Bertauliah
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Booking Consultation Box */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-black text-slate-900 mb-2">
            Perlukan Cadangan Rawatan Yang Sesuai Untuk Anda?
          </h3>
          <p className="text-sm text-slate-600 mb-6 max-w-xl mx-auto">
            Hantarkan laporan imbasan (MRI / X-ray) atau nyatakan gejala anda melalui WhatsApp. Fisioterapis kami sedia memberikan panduan awal.
          </p>
          <a
            href={getWhatsAppLink("Salam mechaXPAIN, saya mahu nasihat awal mengenai pilihan perkhidmatan rawatan yang sesuai.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Konsultasi Percuma di WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
