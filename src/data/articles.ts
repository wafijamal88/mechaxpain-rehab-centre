export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Panduan Fisioterapi" | "Tulang Belakang" | "Sendi & Lutut" | "Kesihatan & Ergonomik";
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  content: {
    heading: string;
    body: string[];
  }[];
  keyTakeaways: string[];
}

export const articlesData: ArticleItem[] = [
  {
    id: "art-1",
    slug: "5-tanda-awal-slip-disc-yang-sering-diabaikan",
    title: "5 Tanda Awal Slip Disc Yang Sering Diabaikan & Bila Patut Jumpa Fisioterapis",
    excerpt:
      "Ketahui tanda-tanda amaran awal cakera tulang belakang tergelincir sebelum ia menekan saraf tunjang dan menyebabkan kelumpuhan sementara.",
    category: "Tulang Belakang",
    publishedAt: "12 Oktober 2026",
    readTime: "5 minit bacaan",
    author: {
      name: "Fisioterapis mechaXPAIN",
      role: "Pakar Pemulihan Biomekanik",
    },
    keyTakeaways: [
      "Sakit pinggang yang merebak ke kaki bukan sekadar lenguh otot biasa.",
      "Membongkok atau bersin yang mencetuskan renjatan adalah tanda tekanan saraf.",
      "Rawatan intervensi awal mampu menyelamatkan pesakit daripada pembedahan rumit.",
    ],
    content: [
      {
        heading: "Pengenalan: Mengapa Slip Disc Semakin Ramai Menimpa Golongan Muda?",
        body: [
          "Dahulu, masalah cakera tulang belakang (intervertebral disc) sering dikaitkan dengan penuaan. Namun kini di mechaXPAIN, kami kerap menerima pesakit seawal usia 20-an dan 30-an. Gaya hidup sedentari, duduk menghadap komputer riba berjam-jam, dan tabiat membongkok tanpa sedar meletakkan beban sehingga 200kg ke atas cakera L4-L5 dan L5-S1.",
          "Cakera ini bertindak seperti kusyen gel antara ruas tulang belakang. Apabila gel ini tertekan dan terbonjol keluar (herniated disc), ia boleh menyentuh akar saraf sciatic dan mencetuskan rasa sakit yang menyeksakan.",
        ],
      },
      {
        heading: "5 Tanda Amaran Yang Tidak Boleh Dianggap Remeh",
        body: [
          "1. Rasa Sakit Menjalar (Sciatica): Sakit tidak hanya tertumpu di pinggang, malah merayap ke bahagian bontot, belakang peha, hingga ke betis dan hujung jari kaki.",
          "2. Kebas & Rasa Mencucuk 'Semut-Semut': Bahagian kulit tertentu pada kaki terasa tebal atau seperti dicucuk jarum kecil apabila berdiri atau berjalan beberapa langkah.",
          "3. Sakit Apabila Batuk, Bersin, atau Meneran: Sebarang aktiviti yang meningkatkan tekanan intra-abdominal (tekanan dalam abdomen) akan memicit cakera terus ke akar saraf.",
          "4. Kelemahan Otot Kaki (Foot Drop): Anda mendapati selipar kerap tercabut atau hujung jari kaki tersandung di permaidani kerana otot pengangkat kaki semakin lemah.",
          "5. Sukar Meluruskan Badan Selepas Duduk: Apabila bangun dari kerusi atau kereta, pinggang terasa kaku terkunci dan mengambil masa beberapa minit sebelum boleh berdiri tegak.",
        ],
      },
      {
        heading: "Bila Anda Perlu Bertindak?",
        body: [
          "Jika anda mengalami salah satu daripada gejala di atas selama lebih daripada 7 hari, jangan tangguhkan pemeriksaan. Pengesanan awal membolehkan fisioterapis melakukan dekompresi sendi dan latihan pengukuhan kestabilan sebelum cakera pecah atau saraf mengalami kerosakan kekal.",
        ],
      },
    ],
  },
  {
    id: "art-2",
    slug: "atasi-sakit-lutut-semasa-solat-tanpa-pembedahan",
    title: "Cara Atasi Sakit Lutut Semasa Solat & Turun Tangga Tanpa Bergantung Ubat Tahan Sakit",
    excerpt:
      "Panduan praktikal menguatkan otot penstabil lutut agar anda dapat kembali rukuk, sujud, dan melangkah tanpa rasa mencucuk pada tempurung.",
    category: "Sendi & Lutut",
    publishedAt: "5 Oktober 2026",
    readTime: "6 minit bacaan",
    author: {
      name: "Pasukan Klinikal mechaXPAIN",
      role: "Rehabilitasi Sendi & Gerakan",
    },
    keyTakeaways: [
      "Sakit lutut jarang sekali berpunca daripada lutut itu sendiri; puncanya sering dari pinggul atau buku lali.",
      "Ubat tahan sakit hanya menutup isyarat saraf tanpa membetulkan geseran rawan.",
      "Latihan rintangan berfasa membina rawan kuat dan cecair sinovial semulajadi.",
    ],
    content: [
      {
        heading: "Dilema Solat Di Atas Kerusi",
        body: [
          "Bagi masyarakat kita, keupayaan sujud dan duduk antara dua sujud adalah kenikmatan ibadah yang amat bernilai. Apabila sendi lutut mula berdenyut ngilu setiap kali dilipat, ramai yang terpaksa mengambil keputusan untuk solat di atas kerusi.",
          "Namun, tahukah anda bahawa menghentikan pergerakan sendi secara total sebenarnya boleh membuatkan ligamen lutut menjadi semakin kaku dan otot peha (quadriceps) semakin mengecut?",
        ],
      },
      {
        heading: "Mengapa Sendi Lutut Berbunyi 'Krup-Krap' dan Ngilu?",
        body: [
          "Lutut tersepit di antara dua sendi utama: sendi pinggul (hip joint) di atas dan sendi buku lali (ankle) di bawah. Sekiranya otot punggung anda lemah atau tapak kaki anda leper (overpronation), lutut akan terpaksa memusing ke dalam setiap kali anda melangkah.",
          "Akibatnya, tempurung lutut (patella) bergeser secara tidak rata pada tulang peha (femur), menghakis lapisan rawan pelindung sehingga menimbulkan radang kronik.",
        ],
      },
      {
        heading: "3 Langkah Pemulihan Berkesan Di mechaXPAIN",
        body: [
          "1. Melonggarkan Jalur IT Band & Otot Betis yang tegang mencengkam sendi.",
          "2. Menguatkan Otot VMO (Vastus Medialis Oblique) iaitu otot bahagian dalam peha yang memegang tempurung lutut agar berada di landasan yang betul.",
          "3. Membetulkan Corak Melangkah (Gait Retraining) supaya beban berat badan diserap oleh otot gluteus dan bukannya sendi lutut.",
        ],
      },
    ],
  },
  {
    id: "art-3",
    slug: "mengapa-rehat-sahaja-tidak-cukup-untuk-sembuh",
    title: "Mengapa 'Rehat Sahaja' Tidak Menyembuhkan Sakit Sendi: Kuasa Active Rehab",
    excerpt:
      "Mitos 'Rest & Wait' sering menyebabkan otot atrofi dan sendi kaku. Ketahui mengapa pemulihan aktif (Active Rehabilitation) adalah jalan sebenar menuju kesembuhan.",
    category: "Panduan Fisioterapi",
    publishedAt: "28 September 2026",
    readTime: "4 minit bacaan",
    author: {
      name: "Fisioterapis mechaXPAIN",
      role: "Pakar Functional Patterns",
    },
    keyTakeaways: [
      "Rehat berlebihan (bed rest) melemahkan tisu sokongan dan mempercepatkan kerapuhan sendi.",
      "Pergerakan yang terkawal menghantar nutrien ke tisu yang tercedera.",
      "Prinsip 'Dari Sakit Sampai Boleh Berlari' membimbing peralihan dari fasa sakit ke fasa cergas sepenuhnya.",
    ],
    content: [
      {
        heading: "Paradigma Lama: Baring Hingga Hilang Sakit?",
        body: [
          "Seringkali apabila seseorang mengadu sakit pinggang atau terseliuh, nasihat pertama yang diterima ialah: 'Rehat di atas katil, jangan buat apa-apa.' Walaupun rehat fasa akut (24-48 jam pertama) penting untuk mengurangkan keradangan melampau, rehat yang berpanjangan sebenarnya menjadi racun kepada sistem muskuloskeletal.",
          "Kajian biomekanik membuktikan bahawa selepas 48 jam rehat total tanpa stimulasi, otot teras mula kehilangan ketumpatan sel sebanyak 1% setiap hari. Sendi yang tidak digerakkan kehilangan pelincir, menyebabkan tisu parut mengeras dan pergerakan menjadi semakin terbatas.",
        ],
      },
      {
        heading: "Konsep Pemulihan Aktif (Active Rehab)",
        body: [
          "Di mechaXPAIN, kami menerapkan prinsip stimulasi mekanikal (mechanotransduction). Melalui pergerakan terkawal dengan bebanan mikro yang tepat, sel rawan dan ligamen dirangsang untuk membina gentian kolagen baru yang lebih kukuh.",
          "Kami tidak membiarkan anda pasif. Setiap pesakit dilatih mengawal postur dalam posisi berdiri, berjalan, dan memindahkan berat badan sehingga tubuh berasa selamat untuk bergerak bebas tanpa sebarang ketakutan.",
        ],
      },
    ],
  },
  {
    id: "art-4",
    slug: "panduan-postur-kerja-pejabat-elak-sakit-tengkuk",
    title: "Panduan Ergonomik Pejabat: Bebaskan Leher & Bahu Daripada Kesakitan 'Text Neck'",
    excerpt:
      "Trik mudah mengubah susunan meja kerja, skrin komputer dan ketinggian kerusi untuk menghapuskan beban berat di tengkuk dan migrain harian.",
    category: "Kesihatan & Ergonomik",
    publishedAt: "19 September 2026",
    readTime: "5 minit bacaan",
    author: {
      name: "Pasukan Klinikal mechaXPAIN",
      role: "Pakar Ergonomik & Pemulihan Fizikal",
    },
    keyTakeaways: [
      "Kepala yang condong 60 darjah ke skrin memberi beban seberat 27kg kepada leher.",
      "Laraskan paras bahagian atas skrin monitor sejajar dengan aras mata anda.",
      "Amalkan peraturan 30-minit untuk berdiri dan melakukan regangan mikro.",
    ],
    content: [
      {
        heading: "Fenomena 'Text Neck' & Postur Kepala Condong",
        body: [
          "Tahukah anda bahawa berat purata kepala manusia dalam posisi tegak adalah kira-kira 5kg? Namun, apabila anda menunduk melihat telefon pintar atau skrin komputer riba pada sudut 45 hingga 60 darjah, beban yang ditanggung oleh otot leher meningkat mendadak sehingga 27kg!",
          "Beban berterusan ini menyebabkan otot trapezius dan levator scapulae menjadi kejang dan membentuk bintik picu (trigger points) yang memancar sakit kepala (tension headache) dan kebas ke tangan.",
        ],
      },
      {
        heading: "Senarai Semak Susunan Ergonomik Pantas",
        body: [
          "1. Paras Skrin: Pastikan satu pertiga bahagian atas skrin monitor berada tepat pada paras anak mata anda. Gunakan laptop stand jika menggunakan komputer riba.",
          "2. Sokongan Siku & Lengan: Lengan harus berada pada sudut 90 darjah dengan bahu sentiasa rileks, bukan terangkat ke atas telinga.",
          "3. Kaki Jejak Lantai: Tapak kaki mesti rata di atas lantai. Elakkan menyilang kaki kerana ia memutar kedudukan tulang pelvis.",
        ],
      },
    ],
  },
];

export const getArticleBySlug = (slug: string): ArticleItem | undefined => {
  return articlesData.find((a) => a.slug === slug);
};
