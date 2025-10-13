<template>

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
