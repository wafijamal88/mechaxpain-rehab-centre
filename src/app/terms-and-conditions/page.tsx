import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { 
  FileCheck, 
  AlertCircle, 
  Clock, 
  CreditCard, 
  Scale, 
  ChevronRight, 
  CheckCircle2, 
  Mail, 
  Phone 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terma & Syarat (Terms & Conditions) | mechaXPAIN Strength Rehab Centre",
  description: "Terma dan syarat rasmi perkhidmatan fisioterapi dan pemulihan fizikal STRENGTH REHAB WELLNESS CENTRE (mechaXPAIN).",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-900 transition-colors">Utama</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Terma & Syarat (Terms & Conditions)</span>
        </nav>

        {/* Header Hero */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-10 mb-8 relative overflow-hidden">
          <div className="h-2 w-full absolute top-0 left-0 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500" />
          
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-800 text-xs font-bold border border-orange-200">
              <FileCheck className="w-3.5 h-3.5 text-orange-600" />
              Perjanjian Perkhidmatan Rasmi
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Kemas kini terakhir: Oktober 2026
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Terma & Syarat Perkhidmatan
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
            Selamat datang ke <strong className="text-slate-900">{siteConfig.name}</strong>, jenama di bawah milikan dan pengurusan <strong className="text-slate-900">{siteConfig.companyName}</strong> (No. SSM: {siteConfig.ssmNumber}). Dengan mengakses laman web ini, membuat tempahan slot rawatan atau mendapatkan mana-mana perkhidmatan kami, anda bersetuju untuk terikat dengan terma dan syarat yang dinyatakan di bawah.
          </p>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
            Sila baca terma ini dengan teliti sebelum membuat sebarang pembayaran atau menghadiri sesi rawatan pemulihan fizikal.
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">

          {/* 1. Pengenalan & Skop Perkhidmatan */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <FileCheck className="w-5 h-5 text-orange-600" />
              <span>1. Skop Perkhidmatan Fisioterapi & Pemulihan</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {siteConfig.name} menyediakan perkhidmatan terapi manual, fisioterapi, pembetulan biomekanik berasaskan kaedah Functional Patterns, dan program pemulihan kekuatan bagi masalah otot, sendi, tulang belakang (slip disc), saraf tersepit, serta pemulihan strok dan kecederaan sukan.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Semua sesi dijalankan secara eksklusif 1-on-1 bersama ahli fisioterapi bertauliah.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Pelan rawatan adalah disesuaikan mengikut penilaian biomekanik individu dan tahap kesakitan pesakit.</span>
              </li>
            </ul>
          </section>

          {/* 2. Tanggungjawab Pesakit & Pendedahan Kesihatan */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-rose-600" />
              <span>2. Pendedahan Kesihatan & Tanggungjawab Pesakit</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Bagi memastikan keselamatan semasa sesi penilaian dan rawatan fizikal:
            </p>
            <ul className="space-y-2 text-sm text-slate-700 mb-4">
              <li>• <strong>Ketelusan Kesihatan:</strong> Pesakit berkewajipan untuk mendedahkan sejarah perubatan lengkap, sebarang pembedahan terdahulu, implan besi/skru, masalah kardiovaskular, kehamilan, atau jangkitan aktif sebelum memulakan sesi terapi.</li>
              <li>• <strong>Pakaian Sesuai:</strong> Pesakit diminta memakai pakaian sukan yang selesa dan longgar (seperti seluar trek atau t-shirt) untuk memudahkan pergerakan dan penilaian fizikal.</li>
              <li>• <strong>Ketepatan Masa:</strong> Pesakit dinasihatkan tiba 10 minit sebelum waktu temujanji bagi proses pendaftaran dan rehat awal. Kelewatan mungkin memendekkan masa sesi rawatan anda tanpa lanjutan masa.</li>
            </ul>
          </section>

          {/* 3. Penafian Perubatan (Medical Disclaimer) */}
          <section className="p-6 sm:p-8 rounded-2xl bg-amber-50/70 border border-amber-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-3">
              <Scale className="w-5 h-5 text-amber-700" />
              <span>3. Penafian Perubatan (Medical Disclaimer)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
              Kandungan di laman web ini dan nasihat yang diberikan oleh pengamal pemulihan kami adalah bertujuan untuk pemulihan fizikal, biomekanik gerak badan, dan bimbingan senaman. Ia tidak menggantikan diagnosis kecemasan hospital atau pemeriksaan klinikal pakar bedah perubatan.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Kadar pemulihan setiap individu mungkin berbeza bergantung kepada faktor umur, tahap kronik kecederaan, konsistensi menghadiri sesi terapi, dan disiplin melakukan senaman pemulihan di rumah.
            </p>
          </section>

          {/* 4. Harga, Pembayaran & Caj Pakej */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <CreditCard className="w-5 h-5 text-blue-600" />
              <span>4. Yuran, Pembayaran & Caj Rawatan</span>
            </h2>
            <ul className="space-y-2 text-sm text-slate-700 mb-4">
              <li>• <strong>Mata Wang:</strong> Semua harga dan caj rawatan dinyatakan dalam Ringgit Malaysia (MYR).</li>
              <li>• <strong>Kaedah Bayaran Diterima:</strong> FPX Online Banking, Kad Debit/Kredit, Pindahan Bank Segera (DuitNow), dan bayaran di kaunter premis.</li>
              <li>• <strong>Pengesahan Slot:</strong> Slot temujanji disahkan sebaik sahaja maklumat tempahan diterima dan dipersetujui oleh pihak klinik.</li>
              <li>• <strong>Invois & Resit:</strong> Resit rasmi pembayaran akan dikeluarkan untuk rujukan pesakit dan boleh digunakan untuk semakan tuntutan insurans perubatan (bergantung kepada syarat polisi panel insurans pesakit).</li>
            </ul>
          </section>

          {/* 5. Hak Harta Intelek */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              5. Hak Harta Intelek & Kandungan Laman Web
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Semua teks, logo jenama, grafik visual, foto testimoni sebenar, dan video di laman web ini adalah hak milik terpelihara <strong className="text-slate-800">{siteConfig.companyName}</strong>. Penggunaan, pengedaran, atau penerbitan semula mana-mana bahan tanpa kebenaran bertulis adalah dilarang sama sekali.
            </p>
          </section>

          {/* 6. Undang-Undang Yang Mentadbir */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              6. Undang-Undang Yang Mentadbir (Governing Law)
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Terma dan syarat ini ditadbir dan ditafsirkan mengikut <strong>Undang-Undang Persekutuan Malaysia</strong>. Sebarang pertikaian atau tuntutan yang timbul berkaitan perkhidmatan kami adalah tertakluk kepada bidang kuasa eksklusif mahkamah di Malaysia.
            </p>
          </section>

          {/* 7. Pertanyaan & Bantuan */}
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white shadow-md">
            <h2 className="text-lg sm:text-xl font-bold mb-3">
              7. Pertanyaan Mengenai Terma & Syarat
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Untuk maklumat lanjut berkaitan terma dan syarat perkhidmatan kami, sila hubungi pihak pengurusan kami:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="space-y-1.5 text-slate-300">
                <p><strong className="text-white">Perniagaan:</strong> {siteConfig.companyName}</p>
                <p><strong className="text-white">No. SSM:</strong> {siteConfig.ssmNumber}</p>
                <p><strong className="text-white">Premis:</strong> {siteConfig.address.full}</p>
              </div>
              <div className="space-y-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{siteConfig.email}</span>
                </a>
                <a
                  href={getPhoneLink()}
                  className="flex items-center gap-2.5 text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
                <a
                  href={getWhatsAppLink("Salam mechaXPAIN, saya ada pertanyaan mengenai Terma & Syarat Perkhidmatan.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow-md transition-all"
                >
                  <span>Hubungi Kami Melalui WhatsApp</span>
                </a>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
