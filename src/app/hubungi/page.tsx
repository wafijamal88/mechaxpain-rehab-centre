import type { Metadata } from "next";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import { MessageCircle, Phone, Navigation, MapPin, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Hubungi & Lokasi Pusat | mechaXPAIN Rehab Centre",
  description:
    "Hubungi mechaXPAIN Strength Rehab Centre di Bandar Baru Tunjung, Kota Bharu Kelantan. Buat temujanji fisioterapi melalui WhatsApp atau panggilan telefon terus.",
  openGraph: {
    title: "Hubungi mechaXPAIN Rehab Centre",
    description: "Tempah slot konsultasi fisioterapi 1-on-1 di Bandar Baru Tunjung, Kota Bharu, Kelantan.",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pertanyaan & Temujanji</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Hubungi mechaXPAIN Rehab Centre
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Sedia untuk memulakan langkah kesembuhan anda? Pasukan klinikal kami bersedia menyambut kehadiran anda di Bandar Baru Tunjung, Kota Bharu.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Relevant FAQs */}
      <FAQSection />
    </div>
  );
}
