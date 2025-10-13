<template>
  <section id="home" class="bg-gradient-to-r from-green-50 to-emerald-50 py-16 md:py-24" aria-label="Bagian utama - SIMKA Buah Medan">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-12 md:mb-0 animate-fade-in-left">
        <h1 class="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-4 animate-fade-in-up animate-duration-300 animate-delay-100">
          SIMKA Buah <span class="text-green-600">Medan</span> <br><span class="typewriter-text">{{ currentText }}<span class="cursor">|</span></span>
        </h1>
        <p class="text-lg text-gray-600 mb-8 max-w-lg text-justify animate-fade-in-up animate-duration-300 animate-delay-200">
          Menyediakan berbagai jenis buah - sayur segar, salad buah, parcel buah, herbal. Berkualitas dan dikemas dengan higienis untuk menjaga nutrisi dan rasa. Dapat dipesan secara online dan siap diantar ke lokasi Anda di Medan dan sekitarnya.
        </p>
        <div class="flex flex-col sm:flex-row gap-2 animate-fade-in-up animate-duration-300 animate-delay-300" role="group" aria-label="Tautan pemesanan">
          <WhatsAppButton
            :phone-number="'6281262662497'"
            :message="'Halo SIMKA Buah! Saya tertarik dengan buah segar Medan berkualitas. Mohon bantuannya untuk pesan buah segar terbaik yang tersedia saat ini.'"
            button-text="Pesan Buah Segar Medan via WhatsApp"
            button-class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transition duration-300 text-center flex items-center animate-bounce animate-duration-500 animate-delay-400"
          />
          <a
            href="https://gofood.co.id/medan/restaurant/simka-fresh-pajak-cempaka-jl-cempaka-6a22dc19-3fcd-4025-900a-6fc76cbf8fb7"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-full shadow-lg transition duration-300 text-center flex items-center animate-bounce animate-duration-500 animate-delay-500"
            aria-label="Pesan melalui GoFood"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
            GOFOOD
          </a>
          <a
            href="https://r.grab.com/g/2-2-6-C6CTGULVC62XRN"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full shadow-lg transition duration-300 text-center flex items-center animate-bounce animate-duration-500 animate-delay-600"
            aria-label="Pesan melalui GrabMart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
            GRABMART
          </a>
          <a
            href="https://shopee.co.id/Semangka-non-biji-1-buah-3kg-4kg-khusus-medan-i.82706026.4033514681"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-full shadow-lg transition duration-300 text-center flex items-center animate-bounce animate-duration-500 animate-delay-700"
            aria-label="Pesan melalui Shopee"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
            SHOPEE
          </a>
        </div>
      </div>
      <div class="w-full md:w-1/2 flex justify-center animate-fade-in-right mt-8 md:mt-0">
        <ImageSlider />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import WhatsAppButton from './WhatsAppButton.vue'
import ImageSlider from './ImageSlider.vue'

export default {
  name: 'Hero',
  components: {
    WhatsAppButton,
    ImageSlider
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
    });

    return {
      currentText
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
