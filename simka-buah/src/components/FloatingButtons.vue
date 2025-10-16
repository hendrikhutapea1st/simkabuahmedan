<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
    <!-- Promo Button -->
    <div class="relative">
      <!-- Pop-up menu with promotion images -->
      <transition name="fade">
        <div
          v-show="showPromo"
          class="absolute bottom-0 right-14 mb-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80"
          @click="preventPromoClose"
        >
          <div class="overflow-x-hidden">
            <div class="relative group">
              <!-- Promotion image carousel -->
              <div class="overflow-hidden rounded-lg">
                <div
                  class="flex transition-transform duration-500 ease-in-out"
                  :style="{ transform: 'translateX(' + (-promoIndex * 100) + '%)' }"
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
                @click="prevPromo"
                class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-opacity opacity-0 group-hover:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                @click="nextPromo"
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
                  :class="promoIndex === index ? 'bg-green-600' : 'bg-gray-300'"
                  @click="goToPromoSlide(index)"
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

      <!-- Promo floating button -->
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

    <!-- Customer Service Button -->
    <div class="relative">
      <!-- Pop-up menu -->
      <transition name="fade">
        <div
          v-show="showMenu"
          class="absolute bottom-0 right-14 mb-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
          @click="preventClose"
        >
          <!-- Ganti dengan nomor WA Admin 1 -->
          <a
            href="https://wa.me/6281262662497"
            target="_blank"
            rel="noopener noreferrer"
            class="block px-4 py-3 text-gray-800 hover:bg-green-50 hover:text-green-700 transition duration-200 border-b border-gray-100"
          >
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Customer Service Admin 1</span>
            </div>
          </a>
          <!-- Customer Service Admin 2 -->
          <!-- Ganti dengan nomor WA Admin 2 -->
          <a
            href="https://wa.me/6289508284808"
            target="_blank"
            rel="noopener noreferrer"
            class="block px-4 py-3 text-gray-800 hover:bg-green-50 hover:text-green-700 transition duration-200"
          >
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Customer Service Admin 2</span>
            </div>
          </a>
        </div>
      </transition>

      <!-- Customer Service floating button -->
      <button
        @click="toggleMenu"
        class="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-full shadow-lg flex items-center justify-center transition duration-300 transform hover:scale-105 focus:outline-none min-w-[60px]"
        aria-label="Menu Layanan Pelanggan"
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
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
          <span class="text-xs font-medium">Butuh Bantuan?</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatingButtons',
  data() {
    return {
      showMenu: false,
      showPromo: false,
      promoIndex: 0,
      promoImages: [
        { src: '/images/Promo 1_UP.png', alt: 'Promosi 1' },
        { src: '/images/Promo 2_UP.png', alt: 'Promosi 2' },
        { src: '/images/Promo 3_UP.png', alt: 'Promosi 3' }
      ],
      autoSlideInterval: null
    }
  },
  methods: {
    toggleMenu(event) {
      event.stopPropagation();
      this.showMenu = !this.showMenu;

      // Jika menu dibuka, tutup promo
      if(this.showMenu) {
        this.showPromo = false;
      }
    },
    closeMenu() {
      this.showMenu = false;
    },
    togglePromo(event) {
      event.stopPropagation();
      this.showPromo = !this.showPromo;

      // Start auto-rotation when showing, stop when hiding
      if (this.showPromo) {
        this.startAutoSlide();
        // Jika promo dibuka, tutup menu
        this.showMenu = false;
      } else {
        this.stopAutoSlide();
      }
    },
    closePromo() {
      this.showPromo = false;
      this.stopAutoSlide();
    },
    prevPromo() {
      this.promoIndex = (this.promoIndex - 1 + this.promoImages.length) % this.promoImages.length;
    },
    nextPromo() {
      this.promoIndex = (this.promoIndex + 1) % this.promoImages.length;
    },
    goToPromoSlide(index) {
      this.promoIndex = index;
    },
    preventClose(event) {
      event.stopPropagation();
    },
    preventPromoClose(event) {
      event.stopPropagation();
    },
    startAutoSlide() {
      // Auto-rotate every 5 seconds
      this.autoSlideInterval = setInterval(() => {
        this.nextPromo();
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
    // Close both menus when clicking outside
    document.addEventListener('click', () => {
      this.showMenu = false;
      this.showPromo = false;
      this.stopAutoSlide();
    });
  },
  beforeUnmount() {
    document.removeEventListener('click', () => {
      this.showMenu = false;
      this.showPromo = false;
      this.stopAutoSlide();
    });
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
