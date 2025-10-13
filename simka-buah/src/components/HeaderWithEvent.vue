<template>
  <header class="bg-white shadow-sm animate-slide-in-down" role="banner">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center animate-fade-in-left">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM15.375 12a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM7.5 10.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clip-rule="evenodd" />
        </svg>
        <h1 class="text-xl font-bold text-green-600">SIMKA Buah Medan</h1>
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
        <button 
          @click="$emit('show-coming-soon')" 
          class="text-gray-700 hover:text-green-600 font-medium flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
          Status
        </button>
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
        <button 
          @click="$emit('show-coming-soon')" 
          class="text-gray-700 hover:text-green-600 font-medium py-2 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
          Status Perbaikan
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HeaderWithEvent',
  emits: ['show-coming-soon'], // Menambahkan event yang bisa diemit
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