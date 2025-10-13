<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center px-4 py-8 md:py-12 relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-pulse-slow"></div>
      <div class="absolute top-40 right-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-pulse-slow animation-delay-2000"></div>
      <div class="absolute -bottom-20 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-pulse-slow animation-delay-4000"></div>
    </div>

    <div class="max-w-2xl w-full text-center z-10 flex-1 flex flex-col justify-center">
      <!-- Branding -->
      <div class="mb-8 md:mb-12 animate-fade-in-down">
        <h1 class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 mb-2">SIMKA BUAH MEDAN</h1>
        <p class="text-gray-600 dark:text-gray-300 text-lg max-w-md mx-auto">Segar, Berkualitas, dan Dikemas dengan Higienis</p>
      </div>

      <!-- Gambar/Ikon Perbaikan dengan animasi kontemporer -->
      <div class="mb-6 md:mb-8 animate-float">
        <div class="inline-block relative">
          <div class="absolute -inset-4 bg-green-500/20 dark:bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
          <div class="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 ring-4 ring-green-100 dark:ring-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 md:h-32 w-24 md:w-32 text-green-500 mx-auto animate-pulse-slower" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Judul Halaman -->
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6 animate-fade-in-up">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">SEGERA HADIR</span> &
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-500">SEDANG PERBAIKAN LAYANAN</span>
      </h2>

      <!-- Deskripsi -->
      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
        Kami sedang melakukan pemeliharaan sistem untuk memberikan pengalaman terbaik bagi Anda.
        Mohon bersabar sementara kami meningkatkan kualitas layanan kami.
      </p>

      <!-- Informasi Kontak -->
      <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 animate-fade-in-up max-w-md mx-auto">
        <p class="text-gray-700 dark:text-gray-300 mb-4">Untuk informasi lebih lanjut:</p>
        <p class="text-lg font-medium text-green-600 dark:text-green-400">+6281262662497</p>
        <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">Hubungi kami melalui WhatsApp</p>
      </div>
    </div>

    <!-- Footer Informasi -->
    <div class="mt-8 md:mt-12 text-center text-gray-500 dark:text-gray-400 text-sm animate-fade-in-up px-4 py-4">
      <p>&copy; {{ new Date().getFullYear() }} NEO CYBERTECH - Simpliy. Innovate. Protect.</p>
    </div>
  </div>
</template>

<style scoped>
/* Tambahkan animasi kontemporer */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.4;
  }
}

@keyframes pulse-slower {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 4s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Tambahkan gaya khusus jika diperlukan */
</style>
