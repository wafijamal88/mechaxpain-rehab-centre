# mechaXPAIN Strength Rehab Centre Website

Laman web rasmi **mechaXPAIN Strength Rehab Centre** (&ldquo;*Dari Sakit Sampai Boleh Berlari*&rdquo;) yang dibina menggunakan teknologi web moden berprestasi tinggi: **Next.js (App Router), React 19, TypeScript dan Tailwind CSS**.

---

## 🚀 Ciri-Ciri Utama

1. **Next.js App Router & TypeScript**: Struktur routing terkini, sokongan Static Generation (SSG) dan Partial Prerendering untuk kelajuan maksimum.
2. **Tailwind CSS Styling**: Reka bentuk bertaraf profesional dengan palet warna klinikal (Navy, Cobalt Blue & Kinetic Orange), glassmorphism, dan responsif sepenuhnya untuk peranti mudah alih & desktop.
3. **Komponen Boleh Diguna Semula (Reusable Components)**:
   - `Header`: Navigasi dengan bar maklumat waktu operasi, nombor telefon, dan menu responsif.
   - `Hero`: Headline berimpak tinggi, trust badge (4.9/5 penilaian, 5,000+ pesakit pulih), dan integrasi foto rasmi fasiliti mechaXPAIN.
   - `PainPointsSection`: Panduan pengecaman sakit (Slip disc, sendi lutut, frozen shoulder, sukan, neuro).
   - `ServicesSection` & `ServiceCard`: Kad perkhidmatan interaktif dengan filter kategori dan butang WhatsApp terus.
   - `WhyChooseUs`: 6 tonggak kelebihan biomekanik & Functional Patterns berbanding klinik konvensional.
   - `FacilitySection`: Paparan fasiliti sebenar pusat pemulihan dengan kelengkapan biomekanik moden.
   - `ProcessSection`: 4 langkah perjalanan pesakit dari rasa sakit sehingga boleh berlari semula.
   - `TestimonialsSection`: Ulasan sebenar pesakit di Malaysia dengan skor penilaian dan hasil pemulihan.
   - `FAQSection`: Soalan lazim interaktif (accordion) merangkumi kos, prosedur dan tuntutan insurans/GL.
   - `CTASection` & `ContactSection`: Lokasi lengkap, pautan Waze & Google Maps, dan waktu operasi.
   - `FloatingCTA`: Butang WhatsApp dan telefon terapung di penjuru bawah untuk kadar penukaran (conversion) pesakit yang tinggi.
4. **Struktur Routing Yang Boleh Dikembangkan**:
   - `/` — Halaman Utama
   - `/tentang-kami` — Kisah, falsafah dan nilai mechaXPAIN
   - `/perkhidmatan` — Direktori semua rawatan
   - `/perkhidmatan/[slug]` — Halaman dinamik setiap rawatan (contoh: *fisioterapi-sakit-pinggang-slip-disc*, *pemulihan-sakit-lutut-osteoarthritis*, dsb.)
   - `/artikel` — Direktori artikel kesihatan & panduan ergonomik
   - `/artikel/[slug]` — Halaman dinamik membaca artikel dengan cadangan rawatan berkaitan
   - `/hubungi` — Halaman lokasi dan waktu operasi
5. **SEO & Next.js Metadata API**:
   - Tajuk halaman dinamik (`title template`)
   - Meta description dan kata kunci kesihatan
   - Open Graph & Twitter Cards lengkap dengan gambar rasmi
   - Skema berstruktur `MedicalClinic` (Schema.org JSON-LD)
   - Fail automatik `sitemap.xml` dan `robots.txt`
6. **Optimum Gambar**: Menggunakan `next/image` dengan penskalaan automatik dan format WebP/AVIF untuk gambar `logo.jpeg` dan `pusat.png`.
7. **Zero-Backend (WhatsApp-Driven)**: Tiada pangkalan data atau borang rumit; semua panggilan tindakan (CTA) dihubungkan terus ke WhatsApp dengan mesej pra-isi yang spesifik mengikut servis.

---

## 📂 Struktur Direktori

```text
Mechaxpain Rehab Centre/
├── public/
│   └── images/
│       ├── logo.jpeg       # Logo rasmi mechaXPAIN
│       └── pusat.png       # Foto fasiliti pusat pemulihan
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout, metadata API & Schema.org JSON-LD
│   │   ├── page.tsx        # Halaman utama (gabungan semua seksyen)
│   │   ├── sitemap.ts      # Fail sitemap automatik untuk enjin carian
│   │   ├── robots.ts       # Konfigurasi perayap (crawler) Google
│   │   ├── tentang-kami/
│   │   │   └── page.tsx    # Halaman Tentang Kami
│   │   ├── perkhidmatan/
│   │   │   ├── page.tsx    # Direktori Perkhidmatan
│   │   │   └── [slug]/
│   │   │       └── page.tsx# Halaman Dinamik Servis
│   │   ├── artikel/
│   │   │   ├── page.tsx    # Direktori Artikel
│   │   │   └── [slug]/
│   │   │       └── page.tsx# Halaman Dinamik Artikel
│   │   └── hubungi/
│   │       └── page.tsx    # Halaman Lokasi & Hubungi
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── PainPointsSection.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── FacilitySection.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FloatingCTA.tsx
│   │   └── Footer.tsx
│   └── data/               # Fail data berstruktur (mudah disunting)
│       ├── siteConfig.ts   # Maklumat klinik (No tel, WhatsApp, alamat, waktu operasi)
│       ├── services.ts     # Senarai semua servis rawatan & langkah terapi
│       ├── articles.ts     # Senarai artikel kesihatan & panduan
│       ├── faqs.ts         # Senarai soalan lazim (FAQ)
│       └── testimonials.ts # Ulasan & kisah pemulihan pesakit
```

---

## 💻 Cara Menjalankan Secara Lokal

Pastikan Node.js (v18 ke atas) telah dipasang pada komputer anda.

1. **Pasang Dependensi**:
   ```bash
   npm install
   ```

2. **Jalankan Pelayan Pembangunan (Local Dev Server)**:
   ```bash
   npm run dev
   ```
   Buka pelayar web di: [http://localhost:3000](http://localhost:3000)

3. **Uji Bina Pengeluaran (Production Build)**:
   ```bash
   npm run build
   ```

4. **Jalankan Pelayan Pengeluaran**:
   ```bash
   npm run start
   ```

---

## 🌐 Cara Deploy Terus ke Vercel

Projek ini telah dikonfigurasi mengikut standard Next.js terkini dan sedia untuk dideploy ke Vercel dalam beberapa klik:

### Kaedah 1: Melalui Git & GitHub (Disyorkan)
1. Muat naik folder projek ke repositori GitHub baharu:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for mechaXPAIN Strength Rehab Centre"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```
2. Layari [Vercel Dashboard](https://vercel.com).
3. Klik **"Add New..."** > **"Project"**.
4. Import repositori GitHub tadi.
5. Vercel akan mengesan rangka kerja **Next.js** secara automatik.
6. Klik **"Deploy"**. Laman web akan live dalam masa kurang 2 minit!

### Kaedah 2: Menggunakan Vercel CLI
```bash
npx vercel
```
Ikuti arahan di skrin terminal untuk deploy terus.

---

## ✏️ Cara Mengemaskini Maklumat Pusat

Semua teks, nombor telefon, WhatsApp, senarai rawatan dan artikel diasingkan dalam folder `src/data/`:
- **Nombor Telefon / WhatsApp / Alamat**: Buka `src/data/siteConfig.ts` dan tukar nilai pembolehubah.
- **Tambah / Sunting Rawatan**: Buka `src/data/services.ts`.
- **Tambah / Sunting Artikel**: Buka `src/data/articles.ts`.
- **Tambah / Sunting Soalan Lazim**: Buka `src/data/faqs.ts`.
