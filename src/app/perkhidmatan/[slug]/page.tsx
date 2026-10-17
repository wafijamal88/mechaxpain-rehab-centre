import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { servicesData, getServiceBySlug } from "@/data/services";
import { videoProofsData } from "@/data/testimonials";
import { getWhatsAppLink, siteConfig } from "@/data/siteConfig";
import { 
  ArrowLeft, 
  Clock, 
  MessageCircle, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Sparkles, 
  ShieldCheck,
  ChevronRight,
  Play,
  Star
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Perkhidmatan Tidak Ditemui",
    };
  }

  return {
    title: `${service.title} | ${siteConfig.shortName} Rehab Centre`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} — ${siteConfig.name}`,
      description: service.shortDesc,
      url: `${siteConfig.url}/perkhidmatan/${service.slug}`,
      images: [
        {
          url: "/images/pusat.png",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const prefilledWhatsApp = getWhatsAppLink(
    `Salam mechaXPAIN, saya mahu buat temujanji untuk rawatan: ${service.title}`
  );

  const slugToProofIds: Record<string, string[]> = {
    "fisioterapi-sakit-pinggang-slip-disc": ["proof-sciatica", "proof-rukuk", "proof-12-tahun-kebas"],
    "pemulihan-sakit-lutut-osteoarthritis": ["proof-lutut"],
    "rawatan-leher-bahu-frozen-shoulder": ["proof-belikat", "proof-kebas-tangan"],
    "strength-rehab-functional-patterns": ["proof-buka-saraf"],
    "rehabilitasi-strok-neurologi": ["proof-stroke", "proof-stroke-tangan"],
  };
  const matchedProofs = videoProofsData.filter((p) =>
    (slugToProofIds[service.slug] || []).includes(p.id)
  );

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-900 transition-colors">Utama</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/perkhidmatan" className="hover:text-slate-900 transition-colors">Perkhidmatan</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold line-clamp-1">{service.title}</span>
        </nav>

        {/* Header Hero Card */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-md p-6 sm:p-10 mb-8 relative overflow-hidden">
          <div className={`h-2 w-full absolute top-0 left-0 bg-gradient-to-r ${service.gradient}`} />
          
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-800">
              {service.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <Clock className="w-4 h-4 text-orange-500" />
              <span>{service.duration}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            {service.title}
          </h1>

          <p className="text-sm sm:text-base font-semibold text-orange-600 mb-5">
            {service.subtitle}
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
            {service.longDesc}
          </p>

          {/* Quick CTA row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-slate-100">
            <a
              href={prefilledWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tempah Sesi Rawatan Ini (WhatsApp)</span>
            </a>

            <Link
              href="/perkhidmatan"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali Ke Semua Rawatan</span>
            </Link>
          </div>
        </div>

        {/* Symptoms & Ideal For Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Gejala / Simptom */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <div className="flex items-center gap-2 text-rose-600 mb-4">
              <AlertTriangle className="w-5 h-5" />
              <h2 className="text-lg font-bold text-slate-900">Gejala Yang Sering Dialami</h2>
            </div>
            <ul className="space-y-3">
              {service.symptoms.map((symp, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                  <span>{symp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sesuai Untuk Siapa */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <div className="flex items-center gap-2 text-blue-700 mb-4">
              <ShieldCheck className="w-5 h-5" />
              <h2 className="text-lg font-bold text-slate-900">Program Ini Sangat Sesuai Untuk</h2>
            </div>
            <ul className="space-y-3">
              {service.idealFor.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 4 Treatment Steps Detail */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs mb-8">
          <div className="flex items-center gap-2 text-orange-600 mb-6">
            <Layers className="w-5 h-5" />
            <h2 className="text-xl font-bold text-slate-900">
              Langkah Rawatan & Terapi Di mechaXPAIN
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.treatmentSteps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200/70">
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 🌟 MATCHED REAL VIDEO TESTIMONIAL CASE STUDY (IF APPLICABLE) */}
        {matchedProofs.length > 0 && (
          <div className="space-y-6 mb-10">
            {matchedProofs.map((matchedProof) => (
              <div 
                key={matchedProof.id}
                className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                    Bukti Rakaman Sebenar Rawatan Ini
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-slate-400 font-semibold ml-1">5.0</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  {/* Photo Frame */}
                  <div className="sm:col-span-4 flex justify-center">
                    <div className="relative w-full max-w-[200px] rounded-2xl overflow-hidden aspect-[3/4] bg-slate-950 border-2 border-orange-500/40 shadow-xl">
                      <Image
                        src={matchedProof.image}
                        alt={matchedProof.headline}
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                      <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                        <span className="px-2 py-0.5 rounded-full bg-slate-950/80 text-[9px] font-bold text-white">
                          Rakaman Asli
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-600 text-[9px] font-black text-white">
                          HASIL NYATA
                        </span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-9 h-9 rounded-full bg-black/60 border border-white/40 flex items-center justify-center text-white">
                          <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Story & Outcome */}
                  <div className="sm:col-span-8 flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                      {matchedProof.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 italic mb-4 leading-relaxed border-l-2 border-orange-400 pl-3">
                      &ldquo;{matchedProof.story}&rdquo;
                    </p>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-emerald-400 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span className="font-semibold">{matchedProof.keyOutcome}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-semibold text-white">
                        {matchedProof.name}, {matchedProof.age} tahun • {matchedProof.location}
                      </span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> Disahkan Pesakit
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Benefits Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-xl mb-12">
          <div className="flex items-center gap-2 text-orange-400 mb-4">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-xl font-bold text-white">Hasil & Faedah Selepas Program Rawatan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200 font-medium">{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-blue-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-300">Sedia untuk bebas daripada kesakitan ini?</p>
              <p className="text-sm font-bold text-white">Tempah konsultasi 1-on-1 bersama fisioterapis bertauliah.</p>
            </div>
            <a
              href={prefilledWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Slot Anda</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
