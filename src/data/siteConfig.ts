export interface SiteConfig {
  name: string;
  shortName: string;
  companyName: string;
  ssmNumber: string;
  tagline: string;
  slogan: string;
  description: string;
  url: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    postcode: string;
    state: string;
    country: string;
    full: string;
  };
  operatingHours: {
    weekdays: string;
    friday: string;
    saturday: string;
    sunday: string;
    publicHoliday: string;
    shortSummary: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  mapsUrl: string;
  wazeUrl: string;
  social: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    youtube?: string;
  };
  features: {
    title: string;
    desc: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "mechaXPAIN Strength Rehab Centre",
  shortName: "mechaXPAIN",
  companyName: "STRENGTH REHAB WELLNESS CENTRE",
  ssmNumber: "2025 0306 3442 (KT0587142-V)",
  tagline: "Dari Sakit Sampai Boleh Berlari",
  slogan: "Pusat Fisioterapi & Pemulihan Kekuatan Fizikal Berasaskan Biomekanik",
  description:
    "Pusat fisioterapi & pemulihan kekuatan fizikal moden. Rawatan khusus untuk sakit pinggang, slip disc, sakit lutut, leher, bahu beku, dan kecederaan sukan berasaskan teknik Functional Patterns & rehabilitasi intensif.",
  url: "https://mechaxpain.vercel.app",
  phone: "+60149245406",
  phoneDisplay: "014-924 5406",
  whatsapp: "60149245406",
  whatsappDisplay: "+60 14-924 5406",
  email: "contact@mechaxpain.com",
  address: {
    line1: "Tingkat 1, S65/PT434",
    line2: "Bandar Baru Tunjung",
    city: "Kota Bharu",
    postcode: "16010",
    state: "Kelantan",
    country: "Malaysia",
    full: "Tingkat 1, S65/PT434, Bandar Baru Tunjung, 16010 Kota Bharu, Kelantan",
  },
  operatingHours: {
    weekdays: "9:00 AM – 5:00 PM (Ahad – Khamis)",
    friday: "Cuti",
    saturday: "10:00 AM – 5:00 PM",
    sunday: "9:00 AM – 5:00 PM",
    publicHoliday: "Ditutup (Cuti Umum Tertentu)",
    shortSummary: "Ahad – Khamis: 9:00 AM – 5:00 PM | Sabtu: 10:00 AM – 5:00 PM | Jumaat: Cuti",
  },
  coordinates: {
    lat: 6.0658,
    lng: 102.2472,
  },
  mapsUrl: "https://maps.google.com/?q=mechaXPAIN+Strength+Rehab+Centre+Bandar+Baru+Tunjung+Kota+Bharu+Kelantan",
  wazeUrl: "https://waze.com/ul?q=Bandar+Baru+Tunjung+Kota+Bharu+Kelantan",
  social: {
    instagram: "https://instagram.com/mechaxpain",
    facebook: "https://facebook.com/mechaxpain",
    tiktok: "https://tiktok.com/@mechaxpain",
  },
  features: [
    {
      title: "Sesi 1-on-1 Eksklusif",
      desc: "Perhatian 100% daripada fisioterapis bertauliah tanpa perkongsian slot.",
    },
    {
      title: "Peralatan Biomekanik Khusus",
      desc: "Menggunakan mesin Functional Patterns moden untuk membetulkan punca beban badan.",
    },
    {
      title: "Bebas Ubat Tahan Sakit",
      desc: "Pemulihan struktur tulang, otot dan sendi secara semulajadi dan berkekalan.",
    },
    {
      title: "Pelan Senaman Di Rumah",
      desc: "Bimbingan video & senaman susulan supaya kesakitan tidak berulang.",
    },
  ],
};

export const getWhatsAppLink = (message?: string) => {
  const defaultMsg =
    "Salam Admin mechaXPAIN, saya berminat untuk membuat temujanji konsultasi fisioterapi / pemulihan sakit.";
  const encoded = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
};

export const getPhoneLink = () => {
  return `tel:${siteConfig.phone}`;
};
