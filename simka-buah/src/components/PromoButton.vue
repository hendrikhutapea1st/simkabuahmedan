<template>
  <div class="fixed bottom-16 right-6 z-40">
    <!-- Floating Button -->
    <div class="relative">
      <!-- Pop-up menu with promotion images -->
      <transition name="fade">
        <div 
          v-show="showPromo"
          class="absolute bottom-16 right-0 mb-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80"
          @click="preventClose"
        >
          <div class="overflow-x-hidden">
            <div class="relative group">
              <!-- Promotion image carousel -->
              <div class="overflow-hidden rounded-lg">
                <div 
                  class="flex transition-transform duration-500 ease-in-out" 
                  :style="{ transform: 'translateX(' + (-currentIndex * 100) + '%)' }"
                >
                  <div v-for="(image, index) in promoImages" :key="index" class="w-full flex-shrink-0">
                    <img 
                      :src="image.src" 
                      :alt="image.alt"
                      class="w-full h-64 object-contain rounded"
                      @error="handleImageError"
                    />
                  </div>
                </div>
              </div>
              
              <!-- Navigation buttons -->
              <button 
                @click="prevImage"
                class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-opacity opacity-0 group-hover:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                @click="nextImage"
                class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-opacity opacity-0 group-hover:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <!-- Indicators -->
              <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                <div 
                  v-for="(image, index) in promoImages" 
                  :key="index"
                  class="w-2.5 h-2.5 rounded-full cursor-pointer"
                  :class="currentIndex === index ? 'bg-green-600' : 'bg-gray-300'"
                  @click="goToSlide(index)"
                ></div>
              </div>
            </div>
            
            <!-- Close button -->
            <button
              @click="closePromo"
              class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Tutup promosi"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </transition>
      
      <!-- Main floating button -->
      <button
        @click="togglePromo"
        class="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-full shadow-lg flex items-center justify-center transition duration-300 transform hover:scale-105 focus:outline-none min-w-[60px]"
        aria-label="Menu Promosi"
      >
        <div class="flex flex-col items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-5 w-5 mb-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <span class="text-xs font-medium">Promosi</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromoButton',
  data() {
    return {
      showPromo: false,
      currentIndex: 0,
      promoImages: [
        { src: '/images/Promo 1_UP.png', alt: 'Promosi 1' },
        { src: '/images/Promo 2_UP.png', alt: 'Promosi 2' },
        { src: '/images/Promo 3_UP.png', alt: 'Promosi 3' }
      ],
      autoSlideInterval: null
    }
  },
  methods: {
    togglePromo(event) {
      event.stopPropagation();
      this.showPromo = !this.showPromo;
      
      // Start auto-rotation when showing, stop when hiding
      if (this.showPromo) {
        this.startAutoSlide();
      } else {
        this.stopAutoSlide();
      }
    },
    closePromo() {
      this.showPromo = false;
      this.stopAutoSlide();
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.promoImages.length) % this.promoImages.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.promoImages.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    preventClose(event) {
      event.stopPropagation();
    },
    startAutoSlide() {
      // Auto-rotate every 5 seconds
      this.autoSlideInterval = setInterval(() => {
        this.nextImage();
      }, 5000);
    },
    stopAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval);
        this.autoSlideInterval = null;
      }
    },
    handleImageError() {
      console.log('Gambar tidak ditemukan');
    }
  },
  mounted() {
    // Close promo when clicking outside
    document.addEventListener('click', this.closePromo);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closePromo);
    this.stopAutoSlide();
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>