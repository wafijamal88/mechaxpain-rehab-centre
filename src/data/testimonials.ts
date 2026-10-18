export interface VideoProofItem {
  id: string;
  name: string;
  age: number;
  location: string;
  condition: string;
  headline: string;
  badge: string;
  image: string;
  aspectRatio: string;
  story: string;
  keyOutcome: string;
  metric?: {
    before: string;
    after: string;
    reduction: string;
  };
  waMessage: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  age: number;
  occupation: string;
  condition: string;
  rating: number;
  story: string;
  outcome: string;
  location: string;
}

export const videoProofsData: VideoProofItem[] = [
  {
    id: "proof-belikat",
    name: "Puan Rogayah",
    age: 67,
    location: "Kota Bharu",
    condition: "Sakit Saraf Belikat & Sendi Bahu",
    headline: "Sakit Saraf Belikat Turun Dari 10/10 Ke 2/10 Daily!",
    badge: "Saraf & Biomekanik",
    image: "/images/testimoni-saraf-belikat.png",
    aspectRatio: "582/796",
    story: "Sakit saraf belikat terasa mencucuk sampai ke leher dan susah nak angkat tangan. Selepas bimbingan biomekanik di mechaXPAIN, sakit dah turun dari 10/10 ke 2/10 setiap hari!",
    keyOutcome: "Penurunan sakit saraf belikat dari 10/10 ke 2/10 harian",
    metric: {
      before: "10/10 (Kritikal)",
      after: "2/10 (Ringan)",
      reduction: "-80% Sakit",
    },
    waMessage: "Salam Admin mechaXPAIN, saya tengok video testimoni makcik sakit saraf belikat turun dari 10 ke 2. Saya juga ada masalah sakit saraf/bahu dan ingin buat temujanji.",
  },
  {
    id: "proof-lutut",
    name: "Tuan Haji Kamaruddin",
    age: 62,
    location: "Kota Bharu",
    condition: "Sakit Pelipat Lutut & Solat",
    headline: "Setel Sakit Pelipat Lutut, Boleh Duduk Antara Dua Sujud Selesa!",
    badge: "Solat Atas Lantai",
    image: "/images/testimoni-pelipat-lutut-sujud.png",
    aspectRatio: "551/963",
    story: "Dulu solat terpaksa guna kerusi sebab sakit yang amat di pelipat lutut tak boleh lipat. Alhamdulillah lepas terapi di mechaXPAIN, sekarang dah boleh sujud dan duduk antara dua sujud di lantai dengan sangat selesa.",
    keyOutcome: "Hilang sakit pelipat lutut & kembali solat atas lantai tanpa kerusi",
    metric: {
      before: "Solat atas kerusi",
      after: "Sujud & duduk selesa",
      reduction: "Solat Sempurna",
    },
    waMessage: "Salam Admin mechaXPAIN, saya tengok testimoni pakcik yang dah boleh duduk antara dua sujud lepas hilang sakit pelipat lutut. Saya nak buat pemeriksaan lutut untuk solat.",
  },
  {
    id: "proof-sciatica",
    name: "En. Firdaus",
    age: 38,
    location: "Kubang Kerian",
    condition: "False Sciatica & Sakit Pinggang",
    headline: "Pemulihan False Sciatica: Bangun Dari Kerusi Tanpa Rasa Terseksa!",
    badge: "False Sciatica",
    image: "/images/testimoni-false-sciatica.png",
    aspectRatio: "500/800",
    story: "Rasa ngilu dan kebas dari punggung mencucuk ke kaki setiap kali duduk dan bangun dari kerusi. Selepas rawatan dekompresi dan pengukuhan piriformis di mechaXPAIN, pergerakan kembali lancar tanpa rasa renjatan.",
    keyOutcome: "Bebas daripada simptom false sciatica & boleh duduk/bangun lancar",
    metric: {
      before: "Sakit bila bangun",
      after: "Pergerakan lancar",
      reduction: "Saraf Selesa",
    },
    waMessage: "Salam Admin mechaXPAIN, saya berminat dengan rawatan False Sciatica / sakit pinggang mencucuk ke punggung seperti dalam video testimoni.",
  },
  {
    id: "proof-12-tahun-kebas",
    name: "Puan Hasnah",
    age: 48,
    location: "Kota Bharu",
    condition: "Saraf Tersepit Kaki Kronik (12 Tahun Kebas)",
    headline: "12 Tahun Kaki Kebas Tak Pernah Hilang Kini Selesai!",
    badge: "12 Tahun Kebas Kronik",
    image: "/images/testimoni-12-tahun-kaki-kebas.png",
    aspectRatio: "500/800",
    story: "Menderita masalah kaki kebas berterusan selama 12 tahun tanpa kesudahan. Selepas menjalani Terapi Buka Saraf mechaXPAIN di bilik rawatan Tunjung, saluran saraf kembali pulih, peredaran darah lancar dan kaki rasa ringan serta hilang rasa kebas!",
    keyOutcome: "Hilang kebas kaki yang dideritai selama 12 tahun & kaki kembali bertenaga",
    metric: {
      before: "12 Tahun kebas berterusan",
      after: "Kaki ringan & tiada kebas",
      reduction: "Pelepasan Saraf",
    },
    waMessage: "Salam Admin mechaXPAIN, saya tengok testimoni pesakit wanita yang 12 tahun kaki kebas tak pernah hilang. Saya juga ada masalah kebas kaki kronik dan ingin buat pemeriksaan saraf.",
  },
  {
    id: "proof-rukuk",
    name: "En. Shahril",
    age: 46,
    location: "Kota Bharu",
    condition: "Sakit Pinggang & Tulang Belakang (Sukar Rukuk)",
    headline: "Kini Kembali Dapat Rukuk Dalam Solat Dengan Baik & Selesa!",
    badge: "Solat Sempurna",
    image: "/images/testimoni-rukuk-solat.png",
    aspectRatio: "509/793",
    story: "Dulu setiap kali nak rukuk memang rasa pinggang macam terkunci dan tegang menyucuk ke paha. Selepas sesi Terapi Buka Saraf di mechaXPAIN, tulang belakang rasa bebas dan sekarang dah boleh rukuk dengan postur lurus tanpa rasa sakit.",
    keyOutcome: "Dapat membongkok dan rukuk sempurna dalam solat tanpa kekejangan pinggang",
    metric: {
      before: "Pinggang tegang terkunci",
      after: "Rukuk lurus selesa",
      reduction: "Mobiliti Pulih",
    },
    waMessage: "Salam Admin mechaXPAIN, saya tengok testimoni pesakit yang kini dapat kembali rukuk dengan baik. Saya ada masalah sakit pinggang bila membongkok dan nak booking sesi konsultasi.",
  },
  {
    id: "proof-kebas-tangan",
    name: "Pak Cik Abdullah",
    age: 68,
    location: "Tunjung, Kota Bharu",
    condition: "Kebas Tangan & Lemah Genggam (Saraf Tersepit)",
    headline: "Kebas Tangan & Lemah Genggam/Memulas Kembali Normal!",
    badge: "2 Saraf Tersepit di 3 Lokasi",
    image: "/images/testimoni-kebas-tangan.png",
    aspectRatio: "593/929",
    story: "Pemeriksaan Terapi Buka Saraf mendapati ada 2 saraf tersepit di 3 lokasi berbeza (multiple nerves impingement) yang menyebabkan tangan lemah menggenggam, sukar memulas dan kebas. Selepas terapi mechaXPAIN, kekuatan tangan kembali normal dan tiada simptom kebas!",
    keyOutcome: "Kekuatan tangan pulih normal & 100% bebas daripada simptom kebas",
    metric: {
      before: "Lemah genggam & kebas",
      after: "Kekuatan pulih normal",
      reduction: "Tiada Simptom",
    },
    waMessage: "Salam Admin mechaXPAIN, saya tengok testimoni pesakit kebas tangan dan lemah menggenggam (2 saraf tersepit di 3 lokasi). Saya juga ada masalah kebas tangan dan ingin buat pemeriksaan saraf.",
  },
  {
    id: "proof-buka-saraf",
    name: "En. Rosli",
    age: 42,
    location: "Pasir Mas",
    condition: "Mobiliti Bahu, Lutut & Leher",
    headline: "4 Masalah Sendi & Saraf Selesai Dalam 1 Sesi Terapi!",
    badge: "1 Sesi Berkesan",
    image: "/images/testimoni-buka-saraf.png",
    aspectRatio: "551/963",
    story: "Bahu tak boleh angkat penuh, lutut tak boleh lipat, leher ketat dan susah duduk tahiyyat akhir. Selepas 1 sesi terapi buka saraf biomekanik di mechaXPAIN, semua bahagian rasa ringan dan sendi boleh digerakkan sepenuhnya.",
    keyOutcome: "Peningkatan mobiliti sendi bahu, lutut, leher & duduk tahiyyat akhir",
    metric: {
      before: "4 Sendi Ketat",
      after: "Mobiliti Pulih 100%",
      reduction: "1 Sesi Sahaja",
    },
    waMessage: "Salam Admin mechaXPAIN, saya tengok testimoni pesakit yang selesaikan 4 masalah saraf (bahu, lutut, tahiyyat akhir) dalam 1 sesi. Boleh saya booking slot?",
  },
  {
    id: "proof-stroke",
    name: "Pak Cik Salleh",
    age: 64,
    location: "Kota Bharu",
    condition: "Strok 5 Tahun & Cervical Myelopathy",
    headline: "5 Tahun Stroke: Sedang Belajar Berdiri Tanpa Pegang Support!",
    badge: "Strok & Myelopathy",
    image: "/images/testimoni-stroke-5-tahun.png",
    aspectRatio: "500/800",
    story: "Selepas 5 tahun strok dan berdepan komplikasi cervical myelopathy, kini dengan bimbingan fisioterapi biomekanik mechaXPAIN beliau berjaya berdiri sendiri dengan seimbang tanpa perlu memegang sokongan atau bergantung pada orang lain.",
    keyOutcome: "Mampu berdiri stabil sendiri tanpa support selepas 5 tahun strok",
    metric: {
      before: "5 Tahun pegang support",
      after: "Berdiri bebas seimbang",
      reduction: "Latihan Neuro",
    },
    waMessage: "Salam Admin mechaXPAIN, saya tengok testimoni pesakit strok 5 tahun yang belajar berdiri tanpa pegang support. Saya ingin dapatkan fisioterapi pemulihan strok untuk ahli keluarga.",
  },
  {
    id: "proof-stroke-tangan",
    name: "Tuan Haji Razak",
    age: 61,
    location: "Kota Bharu",
    condition: "Pemulihan Strok & Pengaktifan Saraf Motor Tangan",
    headline: "Strok: Dah Boleh Tekan Tangan & Aktifkan Anggota Lumpuh!",
    badge: "Strok & Neuro-Motor",
    image: "/images/testimoni-stroke-tekan-tangan.png",
    aspectRatio: "500/800",
    story: "Sebelum ini tangan bahagian strok terkulai lemah dan tidak berupaya menampung beban badan. Melalui teknik rangsangan neuro-fisioterapi mechaXPAIN, pesakit kini dilatih menggunakan semula bahagian yang terkena strok supaya saraf 'hidup' kembali dan sudah berupaya menekan tangan ke atas tilam.",
    keyOutcome: "Dah boleh menekan tangan menampung badan & saraf anggota strok kembali 'hidup'",
    metric: {
      before: "Tangan terkulai lemah",
      after: "Boleh tekan tampung badan",
      reduction: "Saraf 'Hidup' Semula",
    },
    waMessage: "Salam Admin mechaXPAIN, saya tengok testimoni pesakit strok yang dah boleh tekan tangan dan hidupkan kembali anggota strok. Boleh saya dapatkan info fisioterapi strok?",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "En. Azlan Syah",
    age: 42,
    occupation: "Jurutera Perisian / Software Lead",
    condition: "Slip Disc L5-S1 & Kebas Kaki Kanan",
    rating: 5,
    story:
      "Duduk lebih 20 minit pun dah rasa macam renjatan elektrik sampai ke betis. Doktor hospital sebelum ini cadangkan pembedahan microdiscectomy. Lepas 6 sesi di mechaXPAIN dengan pendekatan Functional Patterns, rasa kebas hilang dan saya boleh kembali berjoging 5KM tanpa rasa sakit langsung!",
    outcome: "Pulih daripada sciatica & kembali berlari 5KM secara konsisten",
    location: "Kota Bharu",
  },
  {
    id: "test-2",
    name: "Puan Noraini Binti Zakaria",
    age: 58,
    occupation: "Pesara Guru",
    condition: "Osteoarthritis Lutut (Gred 2)",
    rating: 5,
    story:
      "Dah hampir 3 tahun saya terpaksa solat atas kerusi sebab lutut tak boleh lipat dan bengkak berdenyut. Alhamdulillah, anak saya bawa ke mechaXPAIN. Fisioterapis sangat sabar ajar teknik pengukuhan dan betulkan cara berjalan. Sekarang saya dah boleh sujud dan duduk tahiyyat atas tikar sejadah semula.",
    outcome: "Dapat solat secara sempurna tanpa kerusi selepas 3 tahun",
    location: "Kubang Kerian",
  },
  {
    id: "test-3",
    name: "Hafizul Ikhwan",
    age: 26,
    occupation: "Pemain Futsal Amatur",
    condition: "Kecederaan Koyakan Meniscus & Ketidakstabilan Lutut",
    rating: 5,
    story:
      "Dulu rasa lutut longgar macam nak tercabut bila pusing badan. Di mechaXPAIN bukan sekadar tuam ais, mereka guna mesin kabel khas dan latih refleks imbangan. Memang sesuai dengan slogan 'Dari Sakit Sampai Boleh Berlari'. Sekarang saya dah lulus ujian Return-to-Play dan main tournament semula!",
    outcome: "Kembali beraksi di gelanggang futsal dengan keyakinan penuh",
    location: "Pasir Mas",
  },
  {
    id: "test-4",
    name: "Datin Faridah M.",
    age: 51,
    occupation: "Pengarah Urusan",
    condition: "Frozen Shoulder Kiri (Bahu Beku)",
    rating: 5,
    story:
      "Sakitnya sampai tidur malam pun menangis sebab tak boleh mengiring ke kiri. Nak sikat rambut atau zip baju memang tak sampai. Terapi manual di sini sangat tepat pada punca sendi, dan sekarang tangan kiri saya dah boleh angkat lurus ke atas kepala.",
    outcome: "Julat pergerakan sendi bahu pulih 100% tanpa rasa sakit",
    location: "Wakaf Bharu",
  },
  {
    id: "test-5",
    name: "Uncle Tan Boon Kiat",
    age: 64,
    occupation: "Peniaga",
    condition: "Pemulihan Strok Ringan & Foot Drop",
    rating: 5,
    story:
      "Selepas strok ringan, kaki kanan saya sering terseret dan takut nak keluar rumah seorang diri. Pasukan mechaXPAIN melatih saya dengan penuh dedikasi. Sekarang langkah kaki saya stabil, boleh berjalan ke pasar pagi tanpa tongkat.",
    outcome: "Boleh melangkah dengan seimbang dan berdikari tanpa bantuan tongkat",
    location: "Pengkalan Chepa",
  },
  {
    id: "test-6",
    name: "Sarah Melissa",
    age: 33,
    occupation: "Akauntan",
    condition: "Sakit Tengkuk Kronik & Migrain",
    rating: 5,
    story:
      "Bekerja 10 jam sehari depan Excel buat bahu tegang macam batu dan migrain hampir setiap petang. Selepas rawatan pembetulan postur dan teknik dekompresi leher di sini, badan rasa ringan dan kepala dah tak berdenyut lagi.",
    outcome: "Bebas daripada ketegangan leher & tidak perlu telan ubat migrain setiap minggu",
    location: "Tumpat",
  },
];
