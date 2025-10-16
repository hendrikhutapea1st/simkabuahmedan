<template>
  <header class="bg-white shadow-sm animate-slide-in-down" role="banner">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center animate-fade-in-left">
        <img 
          src="/images/Simka Buah Medan_UP.jpg" 
          alt="Logo SIMKA Buah Medan" 
          class="h-12 w-12 rounded-full object-cover mr-3 border-2 border-green-200 shadow-sm"
        />
        <h1 class="text-xl font-bold text-green-600 hidden sm:block">SIMKA Buah Medan</h1>
      </div>

      <!-- Mobile menu button -->
      <button
        class="md:hidden text-gray-600 focus:outline-none animate-fade-in-right"
        @click="toggleMobileMenu"
        :aria-expanded="mobileMenuOpen"
        aria-controls="mobile-menu"
        :aria-label="mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'"
      >
        <svg
          v-if="!mobileMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <!-- Desktop navigation -->
      <nav class="hidden md:flex space-x-8 animate-fade-in-right" role="navigation" aria-label="Navigasi utama">
        <a href="#home" class="text-gray-700 hover:text-green-600 font-medium">Beranda</a>
        <a href="#features" class="text-gray-700 hover:text-green-600 font-medium">Keunggulan</a>
        <a href="#gallery" class="text-gray-700 hover:text-green-600 font-medium">Galeri</a>
        <a href="#testimoni" class="text-gray-700 hover:text-green-600 font-medium">Testimoni</a>
        <a href="#cta" class="text-gray-700 hover:text-green-600 font-medium">Hubungi</a>
      </nav>
    </div>

    <!-- Mobile navigation -->
    <div
      v-if="mobileMenuOpen"
      id="mobile-menu"
      class="md:hidden bg-white py-4 px-4 border-t animate-slide-in-down"
      role="navigation"
      aria-label="Menu navigasi mobile"
    >
      <div class="flex flex-col space-y-3">
        <a href="#home" class="text-gray-700 hover:text-green-600 font-medium py-2">Beranda</a>
        <a href="#features" class="text-gray-700 hover:text-green-600 font-medium py-2">Keunggulan</a>
        <a href="#gallery" class="text-gray-700 hover:text-green-600 font-medium py-2">Galeri</a>
        <a href="#testimoni" class="text-gray-700 hover:text-green-600 font-medium py-2">Testimoni</a>
        <a href="#cta" class="text-gray-700 hover:text-green-600 font-medium py-2">Hubungi</a>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Header',
  setup() {
    const mobileMenuOpen = ref(false)

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    return {
      mobileMenuOpen,
      toggleMobileMenu
    }
  }
}
</script>
