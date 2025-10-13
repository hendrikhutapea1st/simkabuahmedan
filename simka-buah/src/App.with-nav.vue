<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Gallery from './components/Gallery.vue'
import Testimoni from './components/Testimoni.vue'
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'
import ComingSoon from './components/ComingSoon.vue'

// State untuk menentukan apakah menampilkan halaman utama atau halaman Coming Soon
const showComingSoon = ref(false)

// Fungsi untuk beralih ke halaman Coming Soon
const goToComingSoon = () => {
  showComingSoon.value = true
}

// Fungsi untuk kembali ke halaman utama
const goToHome = () => {
  showComingSoon.value = false
}
</script>

<template>
  <div v-if="!showComingSoon">
    <Header @show-coming-soon="goToComingSoon" />
    <Hero />
    <Features />
    <Gallery />
    <Testimoni />
    <CTA />
    <Footer />
    <button 
      @click="goToComingSoon"
      class="fixed bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg z-50"
      title="Lihat halaman perbaikan"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </button>
  </div>
  <div v-else>
    <ComingSoon @go-to-home="goToHome" />
  </div>
</template>