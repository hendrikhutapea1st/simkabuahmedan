<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Floating Button -->
    <div class="relative">
      <!-- Pop-up menu -->
      <transition name="fade">
        <div
          v-show="showMenu"
          class="absolute bottom-16 right-0 mb-2 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-64"
          @click="preventClose"
        >
          <div class="py-2">
            <a
              href="https://wa.me/6281262662497"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center px-5 py-4 text-gray-800 hover:bg-green-50 hover:text-green-700 transition duration-200 border-b border-gray-100 last:border-0"
            >
              <div class="flex items-center">
                <div class="bg-green-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div class="text-left">
                  <div class="font-medium">Customer Service</div>
                  <div class="text-xs text-gray-500">Admin 1</div>
                </div>
              </div>
            </a>
            <a
              href="https://wa.me/6289508284808"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center px-5 py-4 text-gray-800 hover:bg-green-50 hover:text-green-700 transition duration-200"
            >
              <div class="flex items-center">
                <div class="bg-green-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div class="text-left">
                  <div class="font-medium">Customer Service</div>
                  <div class="text-xs text-gray-500">Admin 2</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </transition>

      <!-- Main floating button -->
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
  name: 'FloatingButton',
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu(event) {
      event.stopPropagation();
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    },
    preventClose(event) {
      event.stopPropagation();
    }
  },
  mounted() {
    // Close menu when clicking outside
    document.addEventListener('click', this.closeMenu);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeMenu);
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
