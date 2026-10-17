import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articlesData, getArticleBySlug } from "@/data/articles";
import { siteConfig, getWhatsAppLink } from "@/data/siteConfig";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  ChevronRight, 
  CheckCircle2, 
  MessageCircle,
  Share2
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemui",
    };
  }

  return {
    title: `${article.title} | ${siteConfig.shortName} Artikel`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} — ${siteConfig.name}`,
      description: article.excerpt,
      url: `${siteConfig.url}/artikel/${article.slug}`,
      type: "article",
      images: [
        {
          url: "/images/pusat.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-900 transition-colors">Utama</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/artikel" className="hover:text-slate-900 transition-colors">Artikel</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold line-clamp-1">{article.title}</span>
        </nav>

        {/* Article Container */}
        <article className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-12 mb-10">
          
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-900">
              {article.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{article.publishedAt}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          {/* Author Box */}
          <div className="flex items-center gap-3 py-4 border-y border-slate-100 mb-8">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">{article.author.name}</p>
              <p className="text-xs text-slate-500">{article.author.role}</p>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200/70 mb-10">
            <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wider mb-3">
              Intipati Utama Artikel Ini:
            </h3>
            <ul className="space-y-2">
              {article.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-950 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body Sections */}
          <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            {article.content.map((sec, i) => (
              <section key={i} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-2">
                  {sec.heading}
                </h2>
                {sec.body.map((para, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Share & Consultation Box */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/artikel"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-900"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali Ke Semua Artikel</span>
            </Link>

            <a
              href={getWhatsAppLink(`Salam mechaXPAIN, saya membaca artikel "${article.title}" dan ada soalan.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tanya Fisioterapis Kami</span>
            </a>
          </div>

        </article>

      </div>
    </div>
  );
}
