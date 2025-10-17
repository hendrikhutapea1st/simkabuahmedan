<template>
  <section id="home" class="bg-gradient-to-r from-green-50 to-emerald-50 py-4 sm:py-6 md:py-8 lg:py-10" aria-label="Bagian utama - SIMKA Buah Medan">
    <div class="container mx-auto px-3 sm:px-4 flex flex-col md:flex-row items-center gap-3 md:gap-6">
      <div class="w-full md:w-1/2 animate-fade-in-left">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-2 sm:mb-3 animate-fade-in-up animate-duration-300 animate-delay-100">
          SIMKA Buah <span class="text-green-600">Medan</span> <br><span class="typewriter-text text-lg sm:text-xl md:text-2xl">{{ currentText }}<span class="cursor">|</span></span>
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 mb-3 max-w-lg text-justify animate-fade-in-up animate-duration-300 animate-delay-200">
          Menyediakan berbagai jenis <strong>buah segar</strong>, buah organik Medan, dan buah lokal Medan terbaik. Berkualitas dan dikemas dengan higienis untuk menjaga nutrisi dan rasa.
        </p>
        <div class="flex flex-col sm:flex-row gap-1.5 sm:gap-2 animate-fade-in-up animate-duration-300 animate-delay-300 flex-wrap" role="group" aria-label="Tautan pemesanan">
          <WhatsAppButton
            :phone-number="'6281262662497'"
            :message="'Halo SIMKA Buah! Saya tertarik dengan buah segar Medan berkualitas. Mohon bantuannya untuk pesan buah segar terbaik yang tersedia saat ini.'"
            button-text="Pesan Via Admin 1"
            button-class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-3 text-xs sm:text-sm rounded-full shadow-lg transition duration-300 text-center flex items-center min-w-[120px] sm:min-w-[140px] animate-bounce animate-duration-500 animate-delay-400"
          />
          <WhatsAppButton
            :phone-number="'6289508284808'"
            :message="'Halo SIMKA Buah! Saya tertarik dengan buah segar Medan berkualitas. Mohon bantuannya untuk pesan buah segar terbaik yang tersedia saat ini.'"
            button-text="Pesan Via Admin 2"
            button-class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-3 text-xs sm:text-sm rounded-full shadow-lg transition duration-300 text-center flex items-center min-w-[120px] sm:min-w-[140px] animate-bounce animate-duration-500 animate-delay-500"
          />
          <a
            href="https://gofood.co.id/medan/restaurant/simka-fresh-pajak-cempaka-jl-cempaka-6a22dc19-3fcd-4025-900a-6fc76cbf8fb7"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 text-xs sm:text-sm rounded-full shadow-lg transition duration-300 text-center flex items-center min-w-[120px] sm:min-w-[140px] animate-bounce animate-duration-500 animate-delay-500"
            aria-label="Pesan melalui GoFood"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 sm:h-4 sm:w-4 inline mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
            GOFOOD
          </a>
          <a
            href="https://r.grab.com/g/2-2-6-C6CTGULVC62XRN"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 text-xs sm:text-sm rounded-full shadow-lg transition duration-300 text-center flex items-center min-w-[120px] sm:min-w-[140px] animate-bounce animate-duration-500 animate-delay-600"
            aria-label="Pesan melalui GrabMart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 sm:h-4 sm:w-4 inline mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
            GRABMART
          </a>
          <a
            href="https://id.shp.ee/BRm3M58"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-3 text-xs sm:text-sm rounded-full shadow-lg transition duration-300 text-center flex items-center min-w-[120px] sm:min-w-[140px] animate-bounce animate-duration-500 animate-delay-700"
            aria-label="Pesan melalui Shopee"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 sm:h-4 sm:w-4 inline mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
            SHOPEE
          </a>
        </div>
      </div>
      <div class="w-full md:w-1/2 animate-fade-in-right">
        <div class="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto overflow-hidden rounded-xl shadow-lg">
          <!-- Gambar slider -->
          <div class="relative h-56 sm:h-64 md:h-72 lg:h-80 w-full">
            <div
              v-for="(image, index) in images"
              :key="index"
              :class="[
                'absolute inset-0 flex items-center justify-center transition-opacity duration-1000',
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              ]"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-full object-cover"
                loading="lazy"
              />
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
  name: 'Hero',
  components: {
    WhatsAppButton
  },
  setup() {
    const texts = [
      '#HadirUntukAnda',
      '#HealthyFruitHealthyLife',
      '#BuahUntukSetiapAcara',
      '#BuahKupasAntiRibet',
      '#BerbagiKasihUntukOrangTersayang'
    ];

    const currentText = ref('');
    const textIndex = ref(0);
    const charIndex = ref(0);
    const isDeleting = ref(false);

    // Daftar gambar untuk slider
    const images = [
      {
        src: '/images/Photo 2_UP.png',
        alt: 'Buah musiman Medan segar'
      },
      {
        src: '/images/Apel Merah_UP.jpg',
        alt: 'Buah segar Medan berkualitas'
      },
      {
        src: '/images/Photo 1_Up.png',
        alt: 'Buah segar Medan berkualitas'
      },
      {
        src: '/images/Photo 3_UP.png',
        alt: 'Buah organik Medan'
      },
      {
        src: '/images/Photo 4_UP.jpg',
        alt: 'Paket buah campur Medan'
      }
    ]

    const currentIndex = ref(0)
    let slideInterval

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % images.length
    }

    const prevSlide = () => {
      currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
    }

    const goToSlide = (index) => {
      currentIndex.value = index
    }

    // Auto-play slider
    const startSlideShow = () => {
      slideInterval = setInterval(() => {
        nextSlide()
      }, 5000) // Ganti gambar setiap 5 detik
    }

    const stopSlideShow = () => {
      clearInterval(slideInterval)
    }

    const typeWriter = () => {
      const current = texts[textIndex.value];

      if (isDeleting.value) {
        // Menghapus karakter
        currentText.value = current.substring(0, charIndex.value - 1);
        charIndex.value--;
      } else {
        // Menambah karakter
        currentText.value = current.substring(0, charIndex.value + 1);
        charIndex.value++;
      }

      // Tentukan kecepatan mengetik
      let typingSpeed = 150;

      if (isDeleting.value) {
        typingSpeed /= 2; // Kecepatan menghapus lebih cepat
      }

      // Jika selesai mengetik
      if (!isDeleting.value && charIndex.value === current.length) {
        typingSpeed = 1500; // Jeda sebelum menghapus
        isDeleting.value = true;
      }
      // Jika selesai menghapus
      else if (isDeleting.value && charIndex.value === 0) {
        isDeleting.value = false;
        textIndex.value = (textIndex.value + 1) % texts.length; // Pindah ke teks berikutnya
      }

      setTimeout(typeWriter, typingSpeed);
    };

    onMounted(() => {
      setTimeout(typeWriter, 500); // Mulai setelah 0.5 detik
      startSlideShow(); // Mulai slideshow gambar
    });

    // Membersihkan interval ketika komponen dihancurkan
    onUnmounted(() => {
      stopSlideShow();
    });

    return {
      currentText,
      images,
      currentIndex,
      nextSlide,
      prevSlide,
      goToSlide
    };
  }
}
</script>

<style scoped>
.typewriter-text {
  color: #16a34a; /* Warna hijau untuk efek yang menarik */
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background-color: #16a34a;
  margin-left: 2px;
  animation: blink 1s infinite;
  vertical-align: middle;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
