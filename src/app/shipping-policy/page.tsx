import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/siteConfig";
import { 
  Truck, 
  Package, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  ShieldCheck,
  Mail,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Polisi Penghantaran (Shipping Policy) | mechaXPAIN Strength Rehab Centre",
  description: "Polisi penghantaran perkhidmatan klinikal dan barangan kelengkapan pemulihan fizikal STRENGTH REHAB WELLNESS CENTRE (mechaXPAIN).",
};

export default function ShippingPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-900 transition-colors">Utama</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Polisi Penghantaran (Shipping Policy)</span>
        </nav>

        {/* Header Hero */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-10 mb-8 relative overflow-hidden">
          <div className="h-2 w-full absolute top-0 left-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500" />
          
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200">
              <Truck className="w-3.5 h-3.5 text-teal-600" />
              Penghantaran Perkhidmatan & Barangan Fizikal
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Kemas kini terakhir: Oktober 2026
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Polisi Penghantaran (Shipping Policy)
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
            Polisi ini menerangkan kaedah penyampaian perkhidmatan rawatan pemulihan fizikal di klinik serta proses penghantaran peralatan sokongan fisioterapi oleh <strong className="text-slate-900">{siteConfig.companyName}</strong> (No. SSM: {siteConfig.ssmNumber}) yang beroperasi di bawah jenama <strong className="text-slate-900">{siteConfig.name}</strong>.
          </p>

          <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-900 leading-relaxed">
            Kami komited untuk memastikan setiap perkhidmatan dan produk sampai kepada anda dengan tepat pada masanya, selamat dan dalam keadaan sempurna.
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">

          {/* 1. Penyampaian Perkhidmatan Fisioterapi (Service Delivery) */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-teal-600" />
              <span>1. Penyampaian Perkhidmatan Rawatan & Sesi Pemulihan</span>
            </h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Sesi Bersemuka di Pusat Rawatan:</strong> Semua sesi fisioterapi, konsultasi biomekanik, dan senaman pemulihan dilaksanakan secara bersemuka di premis klinik kami di alamat: <strong className="text-slate-900">{siteConfig.address.full}</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Pengesahan Tempahan Serta-merta:</strong> Sebaik sahaja anda melengkapkan tempahan atau pembayaran slot temujanji, notifikasi pengesahan digital rasmi berserta tarikh, masa, dan panduan persediaan akan dihantar serta-merta melalui WhatsApp dan emel anda. Tiada sebarang penghantaran fizikal diperlukan untuk pas temujanji rawatan.</span>
              </li>
            </ul>
          </section>

          {/* 2. Penghantaran Produk & Alat Pemulihan Fizikal */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Package className="w-5 h-5 text-blue-600" />
              <span>2. Penghantaran Barangan Fizikal & Alat Pemulihan</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Bagi pembelian produk sokongan senaman di rumah (seperti pita elastik kinesiology, foam roller, resistance band, pendakap lumbar/lutut):
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 mb-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-orange-500" />
                  Masa Pemprosesan Pesanan
                </p>
                <p className="text-slate-600">
                  Pesanan diproses dan dibungkus dengan rapi dalam masa <strong>1 hingga 2 hari bekerja</strong> (tidak termasuk hari cuti umum Kelantan & Persekutuan).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-blue-500" />
                  Rakan Kurier Berdaftar
                </p>
                <p className="text-slate-600">
                  Penghantaran menggunakan kurier dipercayai seperti Pos Laju, J&T Express, atau Ninja Van dengan rekod penjejakan rasmi.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 text-slate-800 font-bold">
                  <tr>
                    <th className="p-3 border-b border-slate-200">Kawasan Liputan</th>
                    <th className="p-3 border-b border-slate-200">Anggaran Tempoh Penghantaran</th>
                    <th className="p-3 border-b border-slate-200">Status Penjejakan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="p-3 font-semibold">Semenanjung Malaysia</td>
                    <td className="p-3">2 – 4 Hari Bekerja</td>
                    <td className="p-3 text-emerald-600 font-medium">Nombor Tracking Disediakan</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Sabah & Sarawak</td>
                    <td className="p-3">4 – 7 Hari Bekerja</td>
                    <td className="p-3 text-emerald-600 font-medium">Nombor Tracking Disediakan</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Nombor Penjejakan & Penyerahan */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>3. Nombor Penjejakan (Tracking Number)</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Sebaik sahaja bungkusan anda diserahkan kepada pihak kurier, nombor penjejakan rasmi akan dihantar terus ke nombor telefon (WhatsApp) atau alamat emel yang anda berikan semasa pesanan. Anda boleh menyemak status pergerakan bungkusan anda secara terus di portal kurier berkenaan.
            </p>
          </section>

          {/* 4. Khidmat Ambil Sendiri (Self-Pickup) */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-600" />
              <span>4. Khidmat Ambil Sendiri di Pusat (Self-Pickup)</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-2">
              Pelanggan di kawasan Kota Bharu dan sekitar Kelantan boleh memilih untuk mengambil produk secara terus di kaunter mechaXPAIN tanpa sebarang caj penghantaran.
            </p>
            <p className="text-xs text-slate-500">
              Waktu pengambilan: <strong>Isnin – Jumaat (9.00 AM – 7.00 PM)</strong> dan <strong>Sabtu (9.00 AM – 5.00 PM)</strong> di Tingkat 1, Bandar Baru Tunjung.
            </p>
          </section>

          {/* 5. Barangan Rosak Semasa Penghantaran */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-rose-600" />
              <span>5. Polisi Bungkusan Rosak Semasa Penghantaran</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Sekiranya produk anda tiba dalam keadaan rosak, pecah atau cacat akibat kendalian pihak kurier:
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Sila hubungi kami dalam tempoh <strong>3 hari</strong> selepas bungkusan diterima.</li>
              <li>• Sertakan gambar bungkusan luar, nombor resit kurier, dan video unboxing ringkas.</li>
              <li>• Pihak kami akan menguruskan <strong>penggantian produk baru secara percuma</strong> tanpa sebarang caj tambahan kepada anda.</li>
            </ul>
          </section>

          {/* 6. Hubungi Bahagian Logistik */}
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white shadow-md">
            <h2 className="text-lg sm:text-xl font-bold mb-3">
              6. Pertanyaan Berkaitan Penghantaran
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Jika bungkusan anda mengalami kelewatan atau anda ingin menyemak status pesanan anda:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="space-y-1.5 text-slate-300">
                <p><strong className="text-white">Perniagaan:</strong> {siteConfig.companyName}</p>
                <p><strong className="text-white">No. SSM:</strong> {siteConfig.ssmNumber}</p>
                <p><strong className="text-white">Pusat Fisioterapi:</strong> {siteConfig.address.full}</p>
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
                  href={getWhatsAppLink("Salam mechaXPAIN, saya ingin menyemak status penghantaran pesanan saya.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs shadow-md transition-all"
                >
                  <span>Semak Tracking Melalui WhatsApp</span>
                </a>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
