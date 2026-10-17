export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Umum" | "Rawatan & Prosedur" | "Pembayaran & Temujanji";
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apakah beza rawatan di mechaXPAIN berbanding klinik fisioterapi biasa?",
    answer:
      "Di mechaXPAIN, kami berpegang pada prinsip 'Dari Sakit Sampai Boleh Berlari'. Kami tidak hanya menggunakan mesin pasif (seperti tuam panas atau TENS) yang hanya melegakan kesakitan sementara. Kami menggabungkan terapi manual klinikal dengan latihan pembetulan biomekanik berasaskan Functional Patterns. Kami melatih tubuh anda mengikut fitrah pergerakan manusia agar punca sebenar kesakitan diperbetulkan dan tidak berulang.",
    category: "Umum",
  },
  {
    id: "faq-2",
    question: "Perlukah saya membawa surat rujukan doktor (doctor's referral) atau laporan MRI / X-ray?",
    answer:
      "Surat rujukan doktor tidak diwajibkan untuk memulakan rawatan. Namun, jika anda mempunyai sebarang laporan imbasan MRI, X-ray, atau rekod kesihatan terdahulu, sila bawa bersama. Fisioterapis kami akan meneliti laporan tersebut bagi membantu diagnosis fizikal yang lebih tepat.",
    category: "Umum",
  },
  {
    id: "faq-3",
    question: "Berapa lamakah satu sesi rawatan dan apakah pakaian yang sesuai dipakai?",
    answer:
      "Satu sesi rawatan biasanya mengambil masa antara 60 hingga 75 minit secara peribadi (1-to-1). Anda dinasihatkan memakai pakaian sukan yang selesa dan longgar seperti t-shirt, seluar trek (tracksuit), atau leggings supaya fisioterapis dapat menilai pergerakan sendi dan bahagian yang sakit dengan mudah.",
    category: "Rawatan & Prosedur",
  },
  {
    id: "faq-4",
    question: "Berapa banyakkah sesi yang biasanya diperlukan untuk melihat kesan positif?",
    answer:
      "Kebanyakan pesakit kami merasai perbezaan dan kelegaan ketara seawal sesi pertama hingga ketiga, terutamanya pada pengurangan rasa sakit dan kebas. Walau bagaimanapun, pelan rawatan lengkap biasanya melibatkan 5 hingga 10 sesi bergantung kepada tahap keparahan, tempoh masalah dihadapi (akut atau kronik), serta komitmen pesakit melakukan senaman di rumah.",
    category: "Rawatan & Prosedur",
  },
  {
    id: "faq-5",
    question: "Adakah rawatan ini menyakitkan?",
    answer:
      "Fisioterapis kami sentiasa berkomunikasi sepanjang sesi untuk memastikan teknik yang dijalankan berada dalam paras toleransi anda. Sesetengah teknik pelepasan otot tegang mungkin menimbulkan rasa 'sedap sakit' (therapeutic discomfort), namun kami tidak menggunakan teknik paksaan yang membahayakan tubuh.",
    category: "Rawatan & Prosedur",
  },
  {
    id: "faq-6",
    question: "Bolehkah saya membuat tuntutan insurans perubatan atau panel syarikat?",
    answer:
      "Kami menyediakan resit rasmi dan laporan rawatan fisioterapi yang lengkap dengan cop fisioterapis berdaftar. Kebanyakan polisi insurans kesihatan (Personal Accident atau Medical Card tertentu yang merangkumi rawatan fisioterapi pasca-kemalangan/rujukan pakar) serta skim manfaat perubatan syarikat (Outpatient Specialist/Allied Health) boleh dituntut secara 'Pay & Claim'. Sila semak dengan penyedia polisi insurans anda untuk terma polisi.",
    category: "Pembayaran & Temujanji",
  },
  {
    id: "faq-7",
    question: "Bagaimanakah cara untuk membuat temujanji konsultasi?",
    answer:
      "Sangat mudah! Anda hanya perlu menekan butang WhatsApp atau Panggilan Telefon di laman web ini. Pasukan perkhidmatan pelanggan kami akan membantu memilih tarikh dan masa yang bersesuaian dengan jadual anda serta menjawab sebarang pertanyaan awal.",
    category: "Pembayaran & Temujanji",
  },
  {
    id: "faq-8",
    question: "Adakah terdapat tempat letak kereta dan kemudahan mesra kerusi roda?",
    answer:
      "Ya, premis kami dilengkapi kawasan letak kereta yang luas di hadapan pintu masuk dan mempunyai laluan landai (ramp) serta lif yang mesra kerusi roda bagi memudahkan pesakit warga emas atau mereka yang mengalami kesukaran berjalan.",
    category: "Umum",
  },
];
