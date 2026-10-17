import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/data/services";
import { getWhatsAppLink } from "@/data/siteConfig";
import { 
  ArrowRight, 
  Clock, 
  MessageCircle, 
  Activity, 
  ShieldAlert, 
  Layers, 
  Zap, 
  Award, 
  HeartPulse,
  Check
} from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Render corresponding icon dynamically
  const renderIcon = () => {
    switch (service.iconName) {
      case "Activity":
        return <Activity className="w-6 h-6 text-blue-600" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-sky-600" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-teal-600" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-orange-600" />;
      case "Award":
        return <Award className="w-6 h-6 text-rose-600" />;
      case "HeartPulse":
      default:
        return <HeartPulse className="w-6 h-6 text-purple-600" />;
    }
  };

  return (
    <div className="group relative rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1">
      {/* Top accent gradient bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${service.gradient}`} />

      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        {/* Header row with Icon & Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
            {renderIcon()}
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
            {service.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-2">
          {service.title}
        </h3>

        {/* Subtitle / Punchline */}
        <p className="text-xs font-semibold text-orange-600 mb-3">
          {service.subtitle}
        </p>

        {/* Short Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          {service.shortDesc}
        </p>

        {/* Common Symptoms / Solved Key Points */}
        <div className="mb-6 mt-auto">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Fokus Rawatan:
          </p>
          <ul className="space-y-1.5">
            {service.symptoms.slice(0, 3).map((symp, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-1">{symp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Duration badge */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-5 pt-3 border-t border-slate-100">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>{service.duration}</span>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="p-4 sm:px-7 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-3">
        <Link
          href={`/perkhidmatan/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
        >
          <span>Info Lengkap</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <a
          href={getWhatsAppLink(`Salam mechaXPAIN, saya mahu buat temujanji untuk rawatan: ${service.title}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors"
          title={`WhatsApp untuk ${service.title}`}
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Tempah Sesi</span>
        </a>
      </div>
    </div>
  );
}
