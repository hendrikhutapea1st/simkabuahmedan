<template>
  <section id="gallery" class="py-8 sm:py-12 md:py-16 bg-gray-50" aria-labelledby="gallery-heading">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8 sm:mb-10">
        <h2 id="gallery-heading" class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Galeri SIMKA BUAH MEDAN</h2>
        <p class="text-gray-600 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">Beberapa contoh produk <strong>buah - salad buah - parcel buah </strong> berkualitas yang kami sediakan untuk Anda</p>
      </div>

      <div class="relative overflow-hidden py-6 sm:py-8">
        <div class="carousel-wrapper">
          <div class="carousel-track" ref="carouselTrackRef">
            <!-- Set pertama gambar -->
            <div
              v-for="(image, index) in images"
              :key="'first-'+index"
              class="carousel-item overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow mx-2 flex-shrink-0 w-56 sm:w-60 md:w-64 relative"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-40 sm:h-48 md:h-64 object-cover"
                loading="lazy"
              />
              <div v-if="image.label" class="absolute top-2 left-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md z-10 transform transition duration-300 hover:scale-105">
                {{ image.label }}
              </div>
              <div class="p-3 sm:p-4 bg-white">
                <h3 class="font-bold text-gray-800 text-sm sm:text-base">{{ image.title }}</h3>
                <p class="text-gray-600 text-xs sm:text-sm">{{ image.description }}</p>
              </div>
            </div>
            <!-- Duplikat set gambar untuk efek looping -->
            <div
              v-for="(image, index) in images"
              :key="'second-'+index"
              class="carousel-item overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow mx-2 flex-shrink-0 w-56 sm:w-60 md:w-64 relative"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-40 sm:h-48 md:h-64 object-cover"
                loading="lazy"
              />
              <div v-if="image.label" class="absolute top-2 left-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md z-10 transform transition duration-300 hover:scale-105">
                {{ image.label }}
              </div>
              <div class="p-3 sm:p-4 bg-white">
                <h3 class="font-bold text-gray-800 text-sm sm:text-base">{{ image.title }}</h3>
                <p class="text-gray-600 text-xs sm:text-sm">{{ image.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import WhatsAppButton from './WhatsAppButton.vue'

export default {
  name: 'Gallery',
  components: {
    WhatsAppButton
  },
  setup() {
    const images = [
      {
        src: '/images/Apel Fuji.png',
        alt: '',
        title: 'Apel Fuji Premium',
        description: 'Kualitas premium dan kesegaran terjamin, siap untuk Anda nikmati',
        label: null
      },
      {
        src: '/images/Photo 2_UP.png',
        alt: '',
        title: 'Parcel Buah Segar',
        description: 'Berbagai jenis buah lokal pilihan dan satu paket praktis',
        label: 'Best Seller'
      },
      {
        src: '/images/Apel Hijau_UP.jpg',
        alt: '',
        title: 'Apel Hijau Segar',
        description: 'Kesegaran alami dalam setiap gigitan. Nikmati renyahnya apel hijau pilihan kami.',
        label: null
      },
      {
        src: '/images/Apel Merah_UP.jpg',
        alt: '',
        title: 'Apel Merah Premium',
        description: 'Pilihan terbaik untuk kesegaran dan rasa manis yang sempurna',
        label: 'Produk Paling Dicari'
      },
      {
        src: '/images/Pepaya_UP.jpg',
        alt: '',
        title: 'Pepaya Segar & Manis',
        description: 'Manisnya tropis, kaya vitamin. Nikmati pepaya matang pilihan kami',
        label: null
      },
      {
        src: '/images/Jeruk Medan_UP.png',
        alt: '',
        title: 'Jeruk Medan Juicy',
        description: 'Nikmati kesegaran dan rasa manis asam dari jeruk Medan',
        label: 'Asli Produk Lokal'
      },
      {
        src: '/images/Mangga Harum Manis_UP.png',
        alt: '',
        title: 'Mangga Harum Manis Matang Sempurna',
        description: 'Nikmati kelezatan mangga pilihan, siap memanjakan lidah Anda',
        label: null
      },
      {
        src: '/images/Buah Potong_UP.webp',
        alt: '',
        title: 'Buah Potong Tropis Segar',
        description: 'Kombinasi buah naga, pepaya, dan jeruk yang manis dan menyegarkan. Pilihan sehat untuk setiap saat',
        label: 'Pilihan Pelanggan Praktis'
      }
    ];

    const carouselTrackRef = ref(null);
    let animationFrameId = null;
    let position = 0;
    const speed = 1; // Kecepatan carousel

    const animateCarousel = () => {
      if (carouselTrackRef.value) {
        position -= speed;
        
        // Mendapatkan lebar dari satu set gambar (setengah dari total elemen)
        const singleSetWidth = carouselTrackRef.value.children[0].offsetWidth * (carouselTrackRef.value.children.length / 2);

        // Jika posisi melewati lebar satu set, reset secara halus ke posisi yang sesuai
        if (Math.abs(position) >= singleSetWidth) {
          // Set posisi ke awal set kedua agar looping terlihat tanpa jeda
          position = 0;
          carouselTrackRef.value.style.transition = 'none'; // Hilangkan transisi sementara
          carouselTrackRef.value.style.transform = `translateX(${position}px)`;
          
          // Tunggu sebentar sebelum melanjutkan animasi
          setTimeout(() => {
            if (carouselTrackRef.value) {
              carouselTrackRef.value.style.transition = 'transform 0.05s linear';
            }
          }, 10);
        } else {
          carouselTrackRef.value.style.transform = `translateX(${position}px)`;
        }
      }
      animationFrameId = requestAnimationFrame(animateCarousel);
    };

    onMounted(() => {
      // Mulai animasi carousel
      animationFrameId = requestAnimationFrame(animateCarousel);
    });

    onUnmounted(() => {
      // Hentikan animasi saat komponen di-unmount
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    });

    return {
      images,
      carouselTrackRef
    };
  }
};
</script>

<style scoped>
.carousel-wrapper {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.carousel-track {
  display: flex;
  transition: transform 0.05s linear; /* Transisi halus untuk animasi */
}

.carousel-item {
  transition: transform 0.3s ease;
}

/* Efek hover */
.carousel-item:hover {
  transform: scale(1.03);
}
</style>
