import type { Metadata } from "next";
import Link from "next/link";
import { articlesData } from "@/data/articles";
import { siteConfig, getWhatsAppLink } from "@/data/siteConfig";
import { BookOpen, Clock, Calendar, ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Artikel & Panduan Fisioterapi | Tips Kesihatan Tulang Belakang & Sendi",
  description:
    "Koleksi artikel kesihatan fizikal, panduan slip disc, cara rawat sakit lutut, ergonomik pejabat, dan pemulihan biomekanik daripada pakar fisioterapi mechaXPAIN.",
  openGraph: {
    title: "Artikel & Panduan Fisioterapi mechaXPAIN",
    description: "Panduan pemulihan sakit sendi & tulang belakang berasaskan sains biomekanik.",
  },
};

export default function ArticlesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-orange-600" />
            <span>Pusat Ilmu & Panduan Kesihatan</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Artikel, Tips & Rahsia Pemulihan Fizikal
          </h1>
          <p className="text-base text-slate-600">
            Fahami anatomi tubuh anda dan pelajari kaedah saintifik untuk mencegah kesakitan berulang daripada pasukan klinikal {siteConfig.shortName}.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {articlesData.map((article) => (
            <article
              key={article.id}
              className="rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-900">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-3 leading-snug">
                  <Link href={`/artikel/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                {/* Key takeaways bullet */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 space-y-1 mb-6">
                  <p className="font-bold text-slate-900">Intipati Utama:</p>
                  <p className="text-slate-600">{article.keyTakeaways[0]}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{article.publishedAt}</span>
                </div>

                <Link
                  href={`/artikel/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-900 hover:text-orange-600 transition-colors group-hover:translate-x-1"
                >
                  <span>Baca Penuh</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* WhatsApp Consultation Helper */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-blue-950 text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2 block">
              Ada Masalah Kesihatan Tertentu?
            </span>
            <h3 className="text-xl sm:text-2xl font-black mb-2">
              Bincangkan Gejala Anda Bersama Fisioterapis Kami
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Kami boleh mencadangkan pelan senaman ringkas atau semakan klinikal 1-on-1 mengikut kesesuaian keadaan anda.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Salam mechaXPAIN, saya membaca artikel di website dan mahu bertanya mengenai...")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanya di WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
