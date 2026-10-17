import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { 
  RotateCcw, 
  Calendar, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  DollarSign, 
  ChevronRight,
  HelpCircle,
  Mail,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Polisi Bayaran Balik & Pembatalan (Refund & Cancellation Policy) | mechaXPAIN",
  description: "Polisi bayaran balik, penukaran tarikh temujanji dan syarat pembatalan rawatan fisioterapi di STRENGTH REHAB WELLNESS CENTRE (mechaXPAIN).",
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-900 transition-colors">Utama</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Polisi Bayaran Balik & Pembatalan (Refund Policy)</span>
        </nav>

        {/* Header Hero */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-10 mb-8 relative overflow-hidden">
          <div className="h-2 w-full absolute top-0 left-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
          
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200">
              <RotateCcw className="w-3.5 h-3.5 text-blue-600" />
              Jaminan Ketelusan Perkhidmatan
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Kemas kini terakhir: Oktober 2026
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Polisi Bayaran Balik & Pembatalan Temujanji
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
            Di <strong className="text-slate-900">{siteConfig.name}</strong> bawah pengurusan <strong className="text-slate-900">{siteConfig.companyName}</strong> (No. SSM: {siteConfig.ssmNumber}), kami mengutamakan keselesaan pesakit serta memastikan jadual sesi rawatan 1-on-1 berjalan lancar dan adil untuk semua pihak.
          </p>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 leading-relaxed">
            Kerana setiap sesi diperuntukkan secara khusus bersama ahli fisioterapi bertauliah dan bilik terapi dikhaskan untuk anda seorang, sila patuhi garis panduan penukaran tarikh dan pembatalan di bawah.
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">

          {/* 1. Penukaran Jadual Temujanji (Rescheduling) */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span>1. Penukaran Tarikh & Masa Temujanji (Rescheduling)</span>
            </h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Notis Awal (24 Jam Ke Atas):</strong> Anda boleh menukar tarikh atau masa temujanji anda secara <strong>PERCUMA</strong> tanpa sebarang caj tambahan dengan memaklumkan pihak kami sekurang-kurangnya 24 jam sebelum waktu sesi.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Kecemasan Perubatan Tiba-Tiba:</strong> Jika anda mengalami demam, kecemasan keluarga, atau halangan mendesak dalam tempoh kurang 24 jam, sila hubungi kami secepat mungkin berserta dokumen sokongan (cth: sijil cuti sakit / MC) untuk kami jadualkan semula tanpa penalti.</span>
              </li>
            </ul>
          </section>

          {/* 2. Pembatalan & Bayaran Balik Temujanji */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <DollarSign className="w-5 h-5 text-emerald-600" />
              <span>2. Syarat Pembatalan & Kelayakan Bayaran Balik</span>
            </h2>
            <div className="space-y-3 text-sm text-slate-700 mb-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="font-bold text-slate-900 mb-1">A. Pembatalan Lebih 24 Jam Sebelum Sesi:</p>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Layak menerima <strong>100% bayaran balik penuh</strong> atau pilihan menukar bayaran tersebut sebagai kredit temujanji akan datang.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="font-bold text-slate-900 mb-1">B. Pembatalan Kurang 12 Jam Sebelum Sesi:</p>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Caj pentadbiran sebanyak 30% mungkin dikenakan untuk menampung masa slot pakar fisioterapi yang telah dikhaskan, atau anda boleh memindahkan slot tersebut kepada ahli keluarga terdekat.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950">
                <p className="font-bold flex items-center gap-1.5 mb-1 text-rose-800">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  C. Ketidakhadiran Tanpa Makluman (No-Show):
                </p>
                <p className="text-xs sm:text-sm text-rose-900">
                  Sekiranya pesakit gagal hadir ke klinik tanpa sebarang makluman awal sebelum sesi bermula, slot dan bayaran bagi sesi berkenaan adalah <strong>terbatal dan tidak boleh dipulangkan</strong> kerana terapis telah bersiap sedia di premis.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Polisi Pakej Rawatan & Sesi Berbilang */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <RotateCcw className="w-5 h-5 text-purple-600" />
              <span>3. Polisi Pakej Rawatan Pemulihan</span>
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li>• <strong>Tempoh Sah Pakej:</strong> Setiap pakej rawatan pemulihan fizikal mempunyai tempoh sah penggunaan (biasanya 6 hingga 12 bulan dari tarikh pembelian).</li>
              <li>• <strong>Pemindahan Pakej:</strong> Pakej boleh dipindahkan kepada ahli keluarga terdekat sekiranya pesakit berpindah ke luar kawasan atau atas budi bicara pihak pengurusan.</li>
              <li>• <strong>Bayaran Balik Baki Sesi Pakej:</strong> Sekiranya pesakit disahkan oleh doktor pakar perubatan tidak lagi sesuai menjalani terapi fizikal atas sebab kesihatan yang serius, baki sesi yang belum digunakan boleh dituntut bayaran balik secara pro-rata tolak sesi yang telah dijalankan pada kadar harga sesi tunggal biasa.</li>
            </ul>
          </section>

          {/* 4. Produk & Peralatan Pemulihan Fizikal */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>4. Pemulangan Produk & Kelengkapan Pemulihan</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Bagi pembelian barangan fizikal seperti pita sokongan elastik, bola urut myofascial, foam roller, atau pendakap sendi:
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Sebarang produk yang mengalami kerosakan kilang atau kecacatan semasa penerimaan boleh ditukar ganti dalam tempoh <strong>7 hari</strong> selepas pembelian dengan bukti resit rasmi.</li>
              <li>• Produk mestilah berada dalam keadaan asal, belum digunakan, dan dalam pembungkusan asal atas faktor kebersihan dan kebersihan perubatan.</li>
            </ul>
          </section>

          {/* 5. Tempoh & Kaedah Pemprosesan Bayaran Balik */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-indigo-600" />
              <span>5. Tempoh Pemprosesan Bayaran Balik</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Semua permohonan bayaran balik yang diluluskan akan diproses melalui kaedah pembayaran asal (FPX / Pindahan Bank / Kad) dalam tempoh <strong>7 hingga 14 hari bekerja</strong> bergantung kepada masa pemprosesan bank terlibat.
            </p>
          </section>

          {/* 6. Cara Mengemukakan Permohonan */}
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white shadow-md">
            <h2 className="text-lg sm:text-xl font-bold mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-orange-400" />
              <span>6. Cara Memohon Bayaran Balik atau Penukaran Slot</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Untuk mempercepatkan urusan, sila kemukakan nama penuh, nombor telefon tempahan, dan tarikh sesi kepada pegawai kami:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="space-y-2 text-slate-300">
                <p><strong className="text-white">Entiti:</strong> {siteConfig.companyName}</p>
                <p><strong className="text-white">Pusat:</strong> {siteConfig.name}</p>
                <p><strong className="text-white">Lokasi:</strong> {siteConfig.address.line2}, {siteConfig.address.city}</p>
              </div>
              <div className="space-y-3">
                <a
                  href={getWhatsAppLink("Salam Admin mechaXPAIN, saya ingin membuat permohonan penukaran tarikh / bayaran balik temujanji.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow-md transition-all"
                >
                  <span>WhatsApp Bahagian Pengurusan Slot</span>
                </a>
                <div className="flex flex-col gap-1 text-slate-400 pt-1">
                  <span>Emel: <a href={`mailto:${siteConfig.email}`} className="text-orange-400 hover:underline">{siteConfig.email}</a></span>
                  <span>Talian: <a href={getPhoneLink()} className="text-orange-400 hover:underline">{siteConfig.phoneDisplay}</a></span>
                </div>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
