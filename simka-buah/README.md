# SIMKA Buah - Landing Page

Landing page untuk SIMKA Buah Medan - menyediakan berbagai jenis buah segar langsung dari perkebunan Medan. Dibangun dengan Vite + Vue 3 + TailwindCSS untuk performa tinggi dan SEO optimal.

## Fitur Utama

- Desain responsif dan mobile-first
- SEO friendly dengan meta tags dan structured data
- Integrasi WhatsApp untuk pemesanan langsung
- Galeri produk dengan carousel otomatis
- Testimoni pelanggan
- Formulir kontak dan informasi bisnis

## Teknologi yang Digunakan

- Vue 3
- Vite
- TailwindCSS
- JavaScript (ES6+)
- Semantic HTML

## Struktur Proyek

```
src/
├── components/     # Komponen Vue
│   ├── Header.vue
│   ├── Hero.vue
│   ├── Features.vue
│   ├── Gallery.vue
│   ├── Testimoni.vue
│   ├── CTA.vue
│   ├── Footer.vue
│   └── ...
├── App.vue         # Komponen utama
└── main.js         # Entry point aplikasi
```

## Instalasi

1. Clone repository ini
2. Jalankan perintah:
   ```bash
   npm install
   ```
3. Jalankan development server:
   ```bash
   npm run dev
   ```

## Build untuk Produksi

```bash
npm run build
```

## Optimasi SEO

Proyek ini dioptimalkan untuk SEO dengan:

- Meta tags lengkap untuk "buah segar Medan"
- Structured data (JSON-LD) untuk LocalBusiness dan Product
- Title dan description yang mengandung kata kunci utama
- Aksesibilitas dengan ARIA labels dan semantic HTML
- Load cepat dengan lazy loading gambar

## Integrasi Google

Lihat dokumentasi di `docs/google-integration.md` untuk instruksi setup Google Search Console dan Google Business Profile.

## Performa

- Gambar dioptimasi dengan lazy loading
- Kode di-split secara otomatis
- Digunakan komponen ringan dan efisien
- Waktu load halaman cepat untuk pengalaman pengguna terbaik

## Pengembangan Lanjutan

- Konversi gambar ke format WebP untuk performa lebih baik
- Tambahkan fitur filter produk berdasarkan jenis buah
- Implementasi fitur keranjang belanja
- Integrasi dengan sistem pembayaran online