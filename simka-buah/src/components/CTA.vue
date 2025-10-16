<template>
  <section id="cta" class="py-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white" aria-labelledby="cta-heading">
    <div class="container mx-auto px-4 text-center">
      <h2 id="cta-heading" class="text-3xl md:text-4xl font-bold mb-6">Siap Menikmati Buah Segar Medan Terbaik?</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto">Dapatkan informasi terupdate, tips & trick, dan promo menarik dari SIMKA Buah Medan melalui akun media sosial kami dibawah ini</p>

      <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8" role="group" aria-label="Tindakan pemesanan">
        <a
          href="https://whatsapp.com/channel/0029VbBW7zD2UPB9UNgfYH3E"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-green-700 text-white hover:bg-green-800 font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 text-lg flex items-center justify-center"
        >
          Saluran Resmi SIMKA Buah Medan
        </a>
      </div>

      <div class="flex justify-center gap-6 mb-12">
        <a
          href="https://www.instagram.com/simka_buah_medan?igsh=MTkybjlyanVvdmEzMw=="
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white text-pink-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 flex items-center"
          aria-label="Ikuti kami di Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.844c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          Instagram
        </a>

        <a
          href="https://www.facebook.com/share/1A2DjPbWMf/"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 flex items-center"
          aria-label="Ikuti kami di Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook
        </a>

        <a
          href="https://www.tiktok.com/@simka_buah_medan?_t=ZS-90SEdaONXpi&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-black text-white hover:bg-gray-800 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 flex items-center"
          aria-label="Ikuti kami di TikTok"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.03-2.9.7-.63.62-.95 1.49-.88 2.4.08.94.63 1.71 1.46 2.08.84.36 1.81.3 2.66.05.9-.26 1.7-.75 2.38-1.4V7.26c-.92-.05-1.88.02-2.78.17-1.04.19-2.09.33-3.08.65-1.7.56-3.08 1.67-3.94 3.23-.67 1.23-.93 2.56-.72 3.93.22 1.44 1.02 2.72 2.18 3.57 1.28.92 2.91 1.32 4.46 1.08 1.43-.2 2.74-.82 3.81-1.79 1.75-1.56 2.79-3.97 2.72-6.54V4.26c-.32-.04-.65-.08-.97-.12-1.15-.19-2.31-.3-3.48-.3-1.25 0-2.5.04-3.74-.05-.76-.07-1.51-.22-2.22-.52-1.08-.45-2.05-1.18-2.77-2.15-.69-.93-1.06-2.04-.98-3.24.08-1.17.61-2.26 1.48-3.05.81-.73 1.87-1.17 2.95-1.22 1.8-.07 3.6.02 5.4-.03z"/>
          </svg>
          TikTok
        </a>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" role="list" aria-label="Keunggulan layanan">
        <div class="flex items-center justify-center" role="listitem" aria-labelledby="benefit-1">
          <div class="mr-4 text-3xl" aria-hidden="true">🚚</div>
          <div>
            <h3 id="benefit-1" class="font-bold text-lg">Pengiriman Cepat</h3>
            <p class="text-green-100">Diantar dalam 1-2 jam (Dengan Shopee, Grab, Gojek)</p>
          </div>
        </div>

        <div class="flex items-center justify-center" role="listitem" aria-labelledby="benefit-2">
          <div class="mr-4 text-3xl" aria-hidden="true">✅</div>
          <div>
            <h3 id="benefit-2" class="font-bold text-lg">Kualitas Terjaga</h3>
            <p class="text-green-100">Langsung dari perkebunan</p>
          </div>
        </div>

        <div class="flex items-center justify-center" role="listitem" aria-labelledby="benefit-3">
          <div class="mr-4 text-3xl" aria-hidden="true">💰</div>
          <div>
            <h3 id="benefit-3" class="font-bold text-lg">Harga Terjangkau</h3>
            <p class="text-green-100">Kualitas premium, harga bersahabat</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WhatsAppButton from './WhatsAppButton.vue'

export default {
  name: 'CTA',
  components: {
    WhatsAppButton
  }
}
</script>
