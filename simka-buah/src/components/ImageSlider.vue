<template>
  <div class="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto overflow-hidden rounded-xl shadow-lg">
    <!-- Gambar slider -->
    <div class="relative h-64 sm:h-72 md:h-96 w-full">
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
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'ImageSlider',
  setup() {
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

    onMounted(() => {
      startSlideShow()
    })

    onUnmounted(() => {
      stopSlideShow()
    })

    return {
      images,
      currentIndex,
      nextSlide,
      prevSlide,
      goToSlide
    }
  }
}
</script>
