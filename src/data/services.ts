export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  longDesc: string;
  category: "Spine & Back" | "Joint & Mobility" | "Sports & Strength" | "Neuro";
  duration: string;
  idealFor: string[];
  symptoms: string[];
  causes: string[];
  treatmentSteps: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  iconName: string;
  gradient: string;
  badge: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "sakit-pinggang-slip-disc",
    slug: "fisioterapi-sakit-pinggang-slip-disc",
    title: "Rawatan Sakit Pinggang & Slip Disc",
    subtitle: "Atasi tekanan saraf sciatic dan kembalikan keupayaan membongkok tanpa rasa pedih",
    shortDesc:
      "Program pemulihan tulang belakang intensif untuk melegakan saraf tersepit (sciatica), ketegangan otot lumbar, dan disc bulge tanpa bergantung ubat penahan sakit.",
    longDesc:
      "Sakit pinggang bukan sekadar masalah otot tegang, tetapi sering berpunca daripada ketidakseimbangan biomekanik pinggul, kelemahan otot teras (core), serta tekanan kronik pada cakera tulang belakang (slip disc). Di mechaXPAIN, kami menggunakan pendekatan pembetulan postur Functional Patterns dan manual dekompresi bagi mengurangkan tekanan saraf, menguatkan fasia badan, dan membolehkan anda bergerak semula dengan yakin.",
    category: "Spine & Back",
    duration: "60 - 75 Minit setiap sesi",
    idealFor: [
      "Pesakit yang disahkan mengalami Slip Disc (L4-L5, L5-S1)",
      "Individu yang duduk lama di pejabat dan rasa kebas menjalar ke paha atau betis",
      "Mereka yang sukar berdiri lama atau membongkok untuk solat",
      "Pesakit yang ingin mengelakkan pembedahan tulang belakang",
    ],
    symptoms: [
      "Rasa ngilu tajam atau sengal mencucuk di bahagian bawah pinggang",
      "Kebas atau rasa renjatan elektrik menjalar ke punggung, paha dan tapak kaki",
      "Sakit bertambah apabila batuk, bersin, atau duduk terlalu lama",
      "Rasa tegang kaku pada waktu pagi hingga sukar meluruskan badan",
    ],
    causes: [
      "Degenerasi cakera dan postur duduk membongkok berjam-jam setiap hari",
      "Teknik mengangkat barang berat yang salah tanpa sokongan otot teras",
      "Kelemahan otot gluteus (punggung) dan psoas yang ketat mencengkam pinggul",
    ],
    treatmentSteps: [
      {
        title: "1. Analisis Biomekanik & Postur",
        description: "Pemeriksaan fizikal menyeluruh untuk mengesan tahap tekanan cakera dan asymmetries badan.",
      },
      {
        title: "2. Pelepasan Myofascial & Dekompresi Lembut",
        description: "Teknik manual terapi untuk melonggarkan otot paravertebral yang kejang dan melegakan saraf tersepit.",
      },
      {
        title: "3. Latihan Pengukuhan Teras Functional",
        description: "Latihan berasaskan rantaian kinetik untuk memindahkan beban badan dari tulang belakang ke otot penyokong.",
      },
      {
        title: "4. Koreksi Pergerakan Harian",
        description: "Latihan semula cara duduk, berdiri, dan mengangkat beban supaya masalah tidak berulang.",
      },
    ],
    benefits: [
      "Pelegaan segera pada rasa kebas dan renjatan sciatic",
      "Kestabilan tulang belakang yang tahan lama",
      "Boleh beribadah (solat) dan duduk memandu dengan selesa",
      "Mencegah kekerapan berulang tanpa suntikan steroid",
    ],
    iconName: "Activity",
    gradient: "from-blue-600 to-indigo-700",
    badge: "Paling Ramai Dirawat",
  },
  {
    id: "sakit-lutut-osteoarthritis",
    slug: "pemulihan-sakit-lutut-osteoarthritis",
    title: "Pemulihan Sakit Lutut & Osteoarthritis",
    subtitle: "Kuatkan sendi lutut agar boleh naik turun tangga dan solat tanpa kerusi",
    shortDesc:
      "Terapi rehabilitasi sendi lutut untuk masalah kehausan rawan (osteoarthritis), ketat sendi, dan keradangan patellofemoral tanpa pembedahan invasif.",
    longDesc:
      "Sendi lutut merupakan penyerap hentakan utama tubuh. Apabila pergelangan kaki atau pinggul tidak berfungsi dengan stabil, lutut terpaksa menanggung beban berlebihan yang mempercepatkan kehausan gel sendi. Rawatan di mechaXPAIN memfokuskan pembetulan paksi kaki, pengukuhan otot quadriceps dan hamstring, serta mobilisasi sendi agar pelincir semulajadi lutut dapat diedarkan semula.",
    category: "Joint & Mobility",
    duration: "60 Minit setiap sesi",
    idealFor: [
      "Warga emas & dewasa dengan gejala Osteoarthritis Lutut (Gred 1 - 3)",
      "Individu yang berbunyi 'krup-krap' atau rasa longgar pada tempurung lutut",
      "Mereka yang sukar melipat lutut untuk tahiyyat akhir dalam solat",
      "Individu berlebihan berat badan yang mengalami tekanan sendi kronik",
    ],
    symptoms: [
      "Sakit berdenyut di bahagian depan atau dalam tempurung lutut",
      "Bengkak dan rasa panas selepas berjalan atau berdiri melebihi 15 minit",
      "Ketegangan kaku waktu bangun pagi yang memerlukan masa untuk 'panaskan badan'",
      "Kelemahan atau rasa lutut seolah-olah hendak mengalah (giving way)",
    ],
    causes: [
      "Kehausan rawan akibat faktor usia dan biomekanik langkah yang senget",
      "Kelemahan otot penstabil peha (VMO) dan ketegangan jalur iliotibial (IT Band)",
      "Tapak kaki leper (flat feet) yang menyebabkan lutut berguling ke dalam (valgus)",
    ],
    treatmentSteps: [
      {
        title: "1. Ujian Mobiliti & Penjajaran Paksi Kaki",
        description: "Menilai sudut ketegangan patella, buku lali, dan pinggul ketika berdiri dan melangkah.",
      },
      {
        title: "2. Pengurangan Keradangan & Mobilisasi Patella",
        description: "Terapi manual khusus untuk mengembalikan luncuran tempurung lutut tanpa geseran tajam.",
      },
      {
        title: "3. Progressive Resistance Loading",
        description: "Latihan berfasa untuk membina semula kekuatan otot penampung lutut secara selamat tanpa hentakan.",
      },
      {
        title: "4. Latihan Fungsian Harian",
        description: "Praktis teknik bangun daripada kerusi, mendaki anak tangga, dan posisi sujud.",
      },
    ],
    benefits: [
      "Mengurangkan rasa ngilu ketika naik turun tangga",
      "Meningkatkan fleksibiliti lipatan sendi untuk solat sempurna",
      "Melambatkan atau mengelakkan keperluan pembedahan gantian lutut (TKR)",
      "Meningkatkan jarak berjalan harian tanpa rasa penat melampau",
    ],
    iconName: "ShieldAlert",
    gradient: "from-sky-500 to-blue-600",
    badge: "Sangat Berkesan",
  },
  {
    id: "sakit-leher-frozen-shoulder",
    slug: "rawatan-leher-bahu-frozen-shoulder",
    title: "Rawatan Sakit Leher, Tengkuk & Frozen Shoulder",
    subtitle: "Bebaskan sangkutan sendi bahu dan hilangkan beban berat di tengkuk",
    shortDesc:
      "Pelepasan saraf servikal tersepit, ketegangan trapezius kronik (text neck), dan pemulihan julat gerak sendi bahu yang beku (adhesive capsulitis).",
    longDesc:
      "Kerja berjam-jam di hadapan skrin komputer atau telefon pintar sering menarik kepala ke hadapan, meletakkan beban 5 kali ganda pada tulang leher. Masalah ini sering melarat menjadi saraf tersepit leher (cervical radiculopathy) atau bahu beku (frozen shoulder) di mana tangan tidak lagi boleh diangkat melepasi kepala. Kami mengembalikan mekanik scapula dan sangkar rusuk agar bahu anda bebas berputar tanpa rasa terkunci.",
    category: "Joint & Mobility",
    duration: "60 Minit setiap sesi",
    idealFor: [
      "Pesakit Frozen Shoulder yang tidak boleh menyikat rambut atau zip baju di belakang",
      "Pekerja korporat dengan sakit tengkuk berlarutan dan kerap diserang migrain",
      "Pemandu jarak jauh yang mengalami kebas di bahagian jari-jemari tangan",
      "Individu yang tidur sering tersalah bantal dan tengkuk kaku",
    ],
    symptoms: [
      "Sakit menikam di sendi bahu terutama waktu malam semasa tidur mengiring",
      "Ketidakupayaan mengangkat tangan ke atas atau memutar tangan ke belakang pinggang",
      "Rasa berat seperti memikul batu di atas kedua-dua belah bahu dan tengkuk",
      "Sakit kepala bermula dari pangkal leher merebak ke dahi (cervicogenic headache)",
    ],
    causes: [
      "Penebalan dan pengecutan kapsul sendi glenohumeral (Frozen Shoulder)",
      "Postur kepala condong ke hadapan (Forward Head Posture) yang kronik",
      "Otot rhomboid dan rotator cuff yang lemah serta scapula yang tidak stabil",
    ],
    treatmentSteps: [
      {
        title: "1. Pengukuran Julat Gerakan (ROM)",
        description: "Ujian goniometer untuk menentukan sudut pergerakan bahu dan fleksibiliti servikal.",
      },
      {
        title: "2. Mobilisasi Kapsul & Terapi Tisu Lembut",
        description: "Regangan sendi tahap klinikal bagi memecahkan lekatan fibrotik pada kapsul sendi bahu.",
      },
      {
        title: "3. Pengaktifan Otot Penstabil Scapulothoracic",
        description: "Latihan menggerakkan bilah bahu secara bebas untuk mengelakkan sangkutan impingement.",
      },
      {
        title: "4. Koreksi Postur Ergonomik Meja Kerja",
        description: "Penyesuaian posisi skrin dan latihan regangan mikro harian.",
      },
    ],
    benefits: [
      "Tangan boleh diangkat ke atas kepala semula tanpa rasa terhad",
      "Tidur lena tanpa tersedar akibat sengal bahu",
      "Hilang rasa tegang tengkuk dan kelegaan dari sakit kepala kronik",
      "Boleh memandu dan mencapai barang di tempat tinggi dengan mudah",
    ],
    iconName: "Layers",
    gradient: "from-teal-500 to-emerald-600",
    badge: "Pemulihan Pantas",
  },
  {
    id: "strength-rehab-functional-patterns",
    slug: "strength-rehab-functional-patterns",
    title: "Strength Rehab & Functional Patterns Training",
    subtitle: "Membina kekuatan sebenar berasaskan biomekanik pergerakan manusia",
    shortDesc:
      "Program pengukuhan intensif mechaXPAIN khusus untuk membetulkan corak berjalan, postur teras dinamik, dan ketahanan fizikal menyeluruh.",
    longDesc:
      "Senaman gym konvensional sering mengasingkan otot pada satu satah pergerakan (isolation), yang kadangkala memburukkan lagi ketidakseimbangan biomekanik. Program Strength Rehab di mechaXPAIN berteraskan Functional Patterns: melatih tubuh manusia berdasarkan corak evolusi semulajadi iaitu berdiri, melangkah, berlari, dan membaling. Hasilnya, tubuh anda menjadi lebih simetri, tahan lasak, dan kebal daripada kecederaan masa depan.",
    category: "Sports & Strength",
    duration: "60 - 90 Minit setiap sesi",
    idealFor: [
      "Bekas pesakit yang sudah hilang sakit dan mahu mula bersukan atau berlari semula",
      "Individu yang kerap berulang sakit setiap kali bersenam di gym",
      "Mereka yang mahu membetulkan postur bongkok (kyphosis) atau scoliosis ringan",
      "Sesiapa yang mahukan badan cergas, tegap, dan bertenaga sehingga usia emas",
    ],
    symptoms: [
      "Rasa tidak stabil ketika melangkah atau kerap terseliuh",
      "Satu sisi badan sentiasa rasa lebih lemah atau lebih tegang",
      "Cepat penat dan rasa lenguh seluruh badan selepas aktiviti ringkas",
      "Kekurangan kuasa ledakan dan koordinasi pergerakan",
    ],
    causes: [
      "Corak rekrutmen otot yang salah bertahun-tahun lamanya",
      "Penggunaan kasut bertumit atau tidak sesuai yang merosakkan corak kinetik",
      "Gaya hidup sedentari yang mematikan fungsi otot glutes dan transverse abdominis",
    ],
    treatmentSteps: [
      {
        title: "1. Gait & Movement Video Analysis",
        description: "Rakaman video pergerakan berjalan dan berlari untuk mengesan kebocoran tenaga kinetik.",
      },
      {
        title: "2. Latihan Fascial Tensioning",
        description: "Mengajar badan menggunakan ketegangan fasia untuk menyokong sendi secara elastik.",
      },
      {
        title: "3. Multi-Planar Dynamic Loading",
        description: "Latihan kekuatan menggunakan kabel Functional Patterns pada pelbagai sudut pergerakan realiti.",
      },
      {
        title: "4. Integrasi Larian & Ketahanan",
        description: "Membimbing teknik melangkah yang ringan, efisien, dan bebas impak rosak pada sendi.",
      },
    ],
    benefits: [
      "Kekuatan badan melonjak tanpa membebankan sendi",
      "Postur badan tegak secara automatik tanpa perlu dipaksa",
      "Keupayaan berlari tanpa rasa sakit pinggang atau lutut",
      "Keyakinan mental untuk menjalani gaya hidup aktif dan sukan",
    ],
    iconName: "Zap",
    gradient: "from-orange-500 to-amber-600",
    badge: "Falsafah Utama Kami",
  },
  {
    id: "kecederaan-sukan-ligamen",
    slug: "rehabilitasi-kecederaan-sukan",
    title: "Rehabilitasi Kecederaan Sukan & Koyakan Ligamen",
    subtitle: "Dari fasa kecederaan padang hingga kembali beraksi pada prestasi puncak (Return-to-Play)",
    shortDesc:
      "Pemulihan khusus untuk atlet dan peminat sukan yang mengalami koyakan ACL/MCL, meniscus, terseliuh pergelangan kaki, dan regangan otot hamstring.",
    longDesc:
      "Kecederaan sukan memerlukan pendekatan rehabilitasi yang berfasa dan berstruktur tinggi. Kami tidak hanya merawat bengkak, tetapi membina semula kestabilan neuromuskular, refleks proprietif, dan kuasa penyerapan impak. Setiap atlet diuji dengan metrik saintifik sebelum dibenarkan kembali ke padang atau gelanggang untuk memastikan risiko kecederaan berulang berkurang ke tahap minimum.",
    category: "Sports & Strength",
    duration: "60 - 75 Minit setiap sesi",
    idealFor: [
      "Pemain bola sepak, badminton, futsal, pelari maraton, dan crossfit",
      "Individu selepas pembedahan rekonstruksi ACL atau meniscectomy",
      "Mereka yang mengalami ankle sprain berulang-ulang",
      "Penyakit kecederaan otot berulang seperti hamstring pull atau groin strain",
    ],
    symptoms: [
      "Bunyi 'pop' semasa bersukan diikuti bengkak serta merta",
      "Lutut atau buku lali terasa goyang dan tidak boleh menampung berat badan",
      "Sakit tajam apabila memecut, menukar arah (cutting), atau mendarat dari lompatan",
      "Hilang keyakinan psikologi untuk bergerak pantas",
    ],
    causes: [
      "Daya pusingan (torsion) mengejut semasa mendarat atau merebut bola",
      "Ketidakseimbangan kekuatan antara quadriceps dan hamstring (H:Q ratio)",
      "Kelesuan otot neuromuskular pada penghujung perlawanan",
    ],
    treatmentSteps: [
      {
        title: "1. Penilaian Akut & Pengawalan Edema",
        description: "Pengurusan fasa awal dengan teknik terapi manual untuk mengembalikan julat asas.",
      },
      {
        title: "2. Neuromuscular Re-Education & Proprioception",
        description: "Latihan imbangan dan tindak balas pantas untuk melatih semula reseptor saraf sendi.",
      },
      {
        title: "3. Eccentric Strength & Plyometrics Berfasa",
        description: "Membina kapasiti penyerapan hentakan ketika mendarat dan decelerate.",
      },
      {
        title: "4. Return-to-Sport Functional Testing",
        description: "Ujian lompatan Y-Balance dan agility sebelum pensijilan kelulusan sukan.",
      },
    ],
    benefits: [
      "Mempercepatkan tempoh pulih ke padang dengan selamat",
      "Mengurangkan risiko koyakan semula ligamen sehingga 70%",
      "Meningkatkan kelajuan reaksi dan kelincahan pergerakan",
      "Menghilangkan rasa takut atau was-was ketika beraksi lasak",
    ],
    iconName: "Award",
    gradient: "from-red-500 to-rose-600",
    badge: "Untuk Atlet & Aktif",
  },
  {
    id: "pemulihan-strok-neurologi",
    slug: "rehabilitasi-strok-neurologi",
    title: "Pemulihan Strok & Neuro-Mobiliti",
    subtitle: "Rangsang semula laluan saraf otak (neuroplasticity) untuk kemandirian diri pesakit",
    shortDesc:
      "Terapi rehabilitasi berdedikasi untuk pesakit strok iskemik/hemoragik bagi melatih semula keupayaan berdiri, melangkah, dan fungsi motor tangan.",
    longDesc:
      "Pemulihan strok memerlukan ketekunan dan kaedah rangsangan neuro-fisioterapi yang terbukti. Melalui prinsip neuroplasticity, otak berupaya membina laluan saraf baru untuk menggantikan fungsi yang terjejas. Pasukan fisioterapis kami membimbing pesakit langkah demi langkah dengan penuh kesabaran, dari kawalan imbangan di atas katil, latihan berdiri dengan sokongan, hingga pesakit berupaya berjalan sendiri.",
    category: "Neuro",
    duration: "60 Minit setiap sesi (1-to-1)",
    idealFor: [
      "Pesakit strok fasa sub-akut atau kronik yang ingin meningkatkan kemandirian",
      "Individu dengan hemiparesis (kelemahan sebelah badan)",
      "Pesakit yang mengalami foot drop (kaki terseret semasa berjalan)",
      "Keluarga yang memerlukan bimbingan teknik mengangkat dan mengurus pesakit di rumah",
    ],
    symptoms: [
      "Kelemahan atau lumpuh separuh badan (kaki dan tangan)",
      "Spastisiti (kekejangan otot yang mengecut secara tidak terkawal)",
      "Hilang keseimbangan badan dan risiko kerap jatuh",
      "Sukar memegang sudu atau mengangkat cawan",
    ],
    causes: [
      "Gangguan bekalan darah ke otak akibat salur darah tersumbat atau pecah",
      "Kerosakan neuron motor korteks serebrum",
    ],
    treatmentSteps: [
      {
        title: "1. Kawalan Tonus Otot & Pengurangan Spastisiti",
        description: "Regangan terapeutik berterusan untuk melembutkan kekakuan otot dan mencegah kontraktur sendi.",
      },
      {
        title: "2. Latihan Pemindahan Berat & Imbangan Duduk-Berdiri",
        description: "Melatih semula kawalan otot teras dan kestabilan pelvis untuk berdiri tegak.",
      },
      {
        title: "3. Gait Retraining & Re-education Berjalan",
        description: "Latihan melangkah menggunakan palang selari atau harness dengan pembetulan fasa ayunan kaki.",
      },
      {
        title: "4. Latihan Kemahiran Harian & Latihan Penjaga",
        description: "Mendidik waris teknik pemindahan yang betul dan senaman rangsangan harian di rumah.",
      },
    ],
    benefits: [
      "Meningkatkan keyakinan pesakit untuk berdikari mengurus diri",
      "Memulihkan keupayaan melangkah dan mengurangkan kebergantungan pada kerusi roda",
      "Meringankan beban fizikal dan emosi ahli keluarga penjaga",
      "Mencegah komplikasi sekunder seperti kekejangan otot kekal atau luka baring",
    ],
    iconName: "HeartPulse",
    gradient: "from-purple-600 to-indigo-800",
    badge: "Perhatian Penuh Kasih",
  },
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return servicesData.find((s) => s.slug === slug);
};
