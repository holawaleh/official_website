<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

      <!-- Brand -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-2">
          Tech Affairs & Innovative Hub
        </h3>
        <p class="text-sm text-gray-400">
          Complete technology solutions — software, hardware, and systems.
        </p>
      </div>

      <!-- Links -->
      <div>
        <h4 class="font-semibold text-white mb-3">Company</h4>
        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/about" class="hover:text-white">About</RouterLink></li>
          <li><RouterLink to="/services" class="hover:text-white">Services</RouterLink></li>
          <li><RouterLink to="/projects" class="hover:text-white">Projects</RouterLink></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="font-semibold text-white mb-3">Contact</h4>
        <p class="text-sm">Ilorin, Nigeria</p>
        <p class="text-sm">techaffairsandinnovation@gmail.com</p>
        <p class="text-sm">+2348059597963</p>
      </div>

    </div>

    <div class="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
      © {{ new Date().getFullYear() }} Tech Affairs & Innovative Hub. All rights reserved.
    </div>
  </footer>
</template>
