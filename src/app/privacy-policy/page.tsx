import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  UserCheck, 
  Eye, 
  Mail, 
  Phone, 
  ChevronRight,
  Clock,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dasar Privasi (Privacy Policy) | mechaXPAIN Strength Rehab Centre",
  description: "Dasar privasi rasmi STRENGTH REHAB WELLNESS CENTRE (mechaXPAIN) mengenai perlindungan data peribadi dan rekod kesihatan pesakit mengikut Akta PDPA 2010 Malaysia.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-900 transition-colors">Utama</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Dasar Privasi (Privacy Policy)</span>
        </nav>

        {/* Header Hero */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-10 mb-8 relative overflow-hidden">
          <div className="h-2 w-full absolute top-0 left-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500" />
          
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Pematuhan Akta PDPA 2010
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Kemas kini terakhir: Oktober 2026
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Dasar Privasi & Perlindungan Data Peribadi
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
            Dasar Privasi ini menetapkan komitmen <strong className="text-slate-900">{siteConfig.companyName}</strong> (No. SSM: {siteConfig.ssmNumber}) yang mengendalikan jenama <strong className="text-slate-900">{siteConfig.name}</strong> dalam melindungi, menguruskan dan menghormati maklumat peribadi dan rekod kesihatan fizikal anda selaras dengan <strong>Akta Perlindungan Data Peribadi 2010 (&ldquo;PDPA 2010&rdquo;) Malaysia</strong>.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
            Dengan melayari laman web ini, membuat tempahan temujanji fisioterapi, atau menggunakan perkhidmatan pemulihan fizikal kami, anda dianggap telah membaca, memahami, dan bersetuju dengan pengumpulan dan pemprosesan data anda sebagaimana yang dinyatakan dalam dasar ini.
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">

          {/* 1. Pengumpulan Maklumat */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <UserCheck className="w-5 h-5 text-emerald-600" />
              <span>1. Maklumat Peribadi Yang Kami Kumpulkan</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Bagi tujuan penyediaan rawatan fisioterapi 1-on-1, penilaian biomekanik, serta pengurusan tempahan yang selamat, kami mungkin mengumpul maklumat berikut:
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Maklumat Pengenalan Asas:</strong> Nama penuh, nombor kad pengenalan / pasport, umur, jantina, nombor telefon dan alamat emel.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Maklumat Kesihatan & Gejala Fizikal:</strong> Sejarah kecederaan, lokasi kesakitan (pinggang, lutut, leher, dll.), rekod pembedahan terdahulu, laporan pengimejan (MRI / X-ray) jika dibekalkan oleh pesakit, serta tahap mobiliti fizikal.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Maklumat Transaksi & Pembayaran:</strong> Kaedah bayaran (FPX, kad debit/kredit, pindahan bank), resit transaksi dan rekod pakej rawatan. (Nota: Kami tidak menyimpan butiran kad pembayaran sensitif secara terus pada pelayan kami).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Data Teknikal Laman Web:</strong> Alamat IP, jenis pelayar web, kuki (cookies), dan halaman yang dilayari untuk menambah baik pengalaman pengguna.</span>
              </li>
            </ul>
          </section>

          {/* 2. Tujuan Penggunaan Maklumat */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Eye className="w-5 h-5 text-blue-600" />
              <span>2. Tujuan Penggunaan Maklumat Anda</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Data yang dikumpul digunakan untuk tujuan-tujuan yang sah berikut:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <strong>Pengurusan Temujanji:</strong> Mengesahkan slot sesi, menghantar peringatan temujanji melalui WhatsApp atau SMS.
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <strong>Pelan Rawatan Khusus:</strong> Membolehkan ahli fisioterapi merancang protokol senaman dan terapi yang bersesuaian dengan keadaan fizikal anda.
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <strong>Komunikasi & Maklum Balas:</strong> Menjawab sebarang pertanyaan pesakit mengenai pemulihan dan latihan di rumah.
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <strong>Pematuhan Perundangan:</strong> Menyimpan rekod klinikal dan perakaunan mengikut ketetapan undang-undang Malaysia.
              </div>
            </div>
          </section>

          {/* 3. Kerahsiaan & Keselamatan Data */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Lock className="w-5 h-5 text-amber-600" />
              <span>3. Kerahsiaan & Keselamatan Data Pesakit</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Kami mengambil langkah-langkah teknikal dan organisasi yang ketat untuk mengelakkan sebarang kehilangan, penyalahgunaan, akses tanpa kebenaran, atau pendedahan maklumat peribadi anda:
            </p>
            <ul className="space-y-2 text-sm text-slate-700 mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Semua rekod kesihatan pesakit diuruskan dengan tahap kerahsiaan perubatan yang tinggi dan hanya boleh diakses oleh kakitangan klinikal yang terlibat.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Pihak kami <strong>TIDAK AKAN</strong> sesekali menjual, menyewakan, atau memperdagangkan data peribadi anda kepada mana-mana pihak ketiga bagi tujuan pemasaran tanpa kebenaran bertulis anda.</span>
              </li>
            </ul>
          </section>

          {/* 4. Hak Pesakit di Bawah PDPA */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-indigo-600" />
              <span>4. Hak Anda Mengenai Data Peribadi</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Di bawah Akta PDPA 2010, anda mempunyai hak undang-undang untuk:
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• <strong>Meminta Akses:</strong> Memohon salinan data peribadi anda yang kami simpan.</li>
              <li>• <strong>Pembetulan Data:</strong> Meminta kami membetulkan sebarang maklumat yang tidak tepat atau lapuk.</li>
              <li>• <strong>Menarik Balik Kebenaran:</strong> Menarik balik kebenaran pemprosesan data untuk tujuan promosi pada bila-bila masa.</li>
            </ul>
          </section>

          {/* 5. Hubungi Pegawai Data */}
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white shadow-md">
            <h2 className="text-lg sm:text-xl font-bold mb-3">
              5. Hubungi Kami Mengenai Dasar Privasi
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Sekiranya anda mempunyai sebarang soalan, maklum balas atau ingin mengemaskini maklumat peribadi anda, sila hubungi pihak pengurusan kami:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="space-y-2 text-slate-300">
                <p><strong className="text-white">Entiti:</strong> {siteConfig.companyName}</p>
                <p><strong className="text-white">No. Pendaftaran SSM:</strong> {siteConfig.ssmNumber}</p>
                <p><strong className="text-white">Alamat Premis:</strong> {siteConfig.address.full}</p>
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
                  href={getWhatsAppLink("Salam mechaXPAIN, saya ada pertanyaan mengenai Dasar Privasi & Data Peribadi.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow-md transition-all"
                >
                  <span>Pertanyaan Melalui WhatsApp</span>
                </a>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
