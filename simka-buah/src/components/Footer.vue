<template>
  <footer class="bg-gray-800 text-white py-12" role="contentinfo">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold text-green-400 mb-4">SIMKA BUAH MEDAN</h3>
          <p class="text-gray-300">Menyediakan berbagai jenis buah segar. Segar, berkualitas, dan dikemas dengan higienis untuk menjaga nutrisi dan rasa.<strong> Buah - sayur - salad buah segar</strong></p>
          <div class="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.1575017827604!2d98.6518839!3d3.5511431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fe8b5a38691%3A0xde6455fc70b22916!2sSimka%20Buah%20Medan!5e0!3m2!1sid!2sid!4v1760169629647!5m2!1sid!2sid"
              width="100%"
              height="200"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="rounded-lg"
              title="Lokasi SIMKA Buah Medan di peta">
            </iframe>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Kontak</h4>
          <ul class="space-y-2">
            <li class="text-gray-300">Jalan Pajak Cempaka, AA No.Pasar 3, Padang Bulan Selayang II, Kec. Medan Selayang <strong>, Kota Medan, Sumatera Utara 20156</strong></li>
            <li class="text-gray-300">Email: -</li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Jam Operasional</h4>
          <ul class="space-y-2">
            <li class="text-gray-300">Senin - Minggu : 10:00 - 23:00 WIB</li>
            <li class="text-gray-300">Pemesanan Online : 10:00 - 23:00 WIB</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} NEO CYBERTECH <strong> - Simpliy. Innovate. Protect.</strong></p>
        <div class="mt-2 flex justify-center space-x-4" role="navigation" aria-label="Tautan tambahan">
          <a href="#" aria-label="Sitemap" class="text-gray-400 hover:text-white">Sitemap</a>
          <span class="text-gray-500" aria-hidden="true">|</span>
          <a href="#" aria-label="Privacy Policy" class="text-gray-400 hover:text-white">Kebijakan Privasi</a>
          <span class="text-gray-500" aria-hidden="true">|</span>
          <a href="#" aria-label="Terms of Service" class="text-gray-400 hover:text-white">Syarat Layanan</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
