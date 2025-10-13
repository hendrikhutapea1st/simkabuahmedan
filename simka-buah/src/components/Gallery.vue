<template>
  <section id="gallery" class="py-16 bg-gray-50" aria-labelledby="gallery-heading">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 id="gallery-heading" class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Gallery Buah Segar Kami</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">Beberapa contoh buah segar berkualitas yang kami sediakan untuk Anda</p>
      </div>

      <div class="relative overflow-hidden py-8">
        <div class="carousel-wrapper">
          <div class="carousel-track" ref="carouselTrackRef">
            <!-- Set pertama gambar -->
            <div
              v-for="(image, index) in images"
              :key="'first-'+index"
              class="carousel-item overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow mx-2 flex-shrink-0 w-64"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-64 object-cover"
                loading="lazy"
              />
              <div class="p-4 bg-white">
                <h3 class="font-bold text-gray-800">{{ image.title }}</h3>
                <p class="text-gray-600 text-sm">{{ image.description }}</p>
              </div>
            </div>
            <!-- Duplikat set gambar untuk efek looping -->
            <div
              v-for="(image, index) in images"
              :key="'second-'+index"
              class="carousel-item overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow mx-2 flex-shrink-0 w-64"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-64 object-cover"
                loading="lazy"
              />
              <div class="p-4 bg-white">
                <h3 class="font-bold text-gray-800">{{ image.title }}</h3>
                <p class="text-gray-600 text-sm">{{ image.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <div class="inline-block">
          <WhatsAppButton
            :phone-number="'6281262662497'"
            :message="'Halo SIMKA Buah! Saya tertarik dengan berbagai jenis buah segar yang tersedia. Bisa bantu rekomendasikan buah terbaik hari ini?'"
            button-text="Lihat Katalog Lengkap"
            button-class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
          />
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
        src: '/images/Photo 1_Up.png',
        alt: 'Semangka segar Medan, buah segar berkualitas tinggi',
        title: 'Semangka Segar',
        description: 'Buah semangka segar langsung dari perkebunan'
      },
      {
        src: '/images/Photo 2_UP.png',
        alt: 'Buah musiman Medan, berbagai jenis buah segar',
        title: 'Buah Musiman',
        description: 'Berbagai jenis buah musiman berkualitas'
      },
      {
        src: '/images/Photo 3_UP.png',
        alt: 'Buah organik Medan, buah tanpa bahan kimia',
        title: 'Buah Organik',
        description: 'Buah-buahan organik tanpa bahan kimia'
      },
      {
        src: '/images/Photo 4_UP.jpg',
        alt: 'Paket buah campur Medan, pilihan buah terbaik dalam satu paket',
        title: 'Paket Buah Campur',
        description: 'Pilihan buah campur terbaik dalam satu paket'
      },
      {
        src: '/images/Photo 1_Up.png',
        alt: 'Buah lokal Medan segar dan manis',
        title: 'Buah Lokal',
        description: 'Berbagai jenis buah lokal pilihan'
      },
      {
        src: '/images/Photo 2_UP.png',
        alt: 'Salad buah segar Medan untuk kesehatan',
        title: 'Salad Buah',
        description: 'Salad buah segar untuk gaya hidup sehat'
      }
    ];

    const carouselTrackRef = ref(null);
    let animationFrameId = null;
    let position = 0;
    const speed = 1; // Kecepatan carousel

    const animateCarousel = () => {
      if (carouselTrackRef.value) {
        position -= speed;
        // Menghitung lebar satu set gambar
        const singleSetWidth = carouselTrackRef.value.children[0].offsetWidth * images.length;

        // Jika posisi melewati lebar satu set, reset ke awal untuk efek looping
        if (Math.abs(position) >= singleSetWidth) {
          position = 0;
        }

        carouselTrackRef.value.style.transform = `translateX(${position}px)`;
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
