<template>
  <!-- HERO -->
  <HeroSection />

  <!-- TRUST STRIP -->
<section class="border-t border-b bg-gray-50">
  <div
    class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-700"
  >
    <div class="flex items-start gap-2">
      <span class="text-primary font-bold">✔</span>
      <span>Hardware & software under one roof</span>
    </div>

    <div class="flex items-start gap-2">
      <span class="text-primary font-bold">✔</span>
      <span>Solutions for individuals & businesses</span>
    </div>

    <div class="flex items-start gap-2">
      <span class="text-primary font-bold">✔</span>
      <span>On-site and remote technical support</span>
    </div>

    <div class="flex items-start gap-2">
      <span class="text-primary font-bold">✔</span>
      <span>Based in Nigeria, built to global standards</span>
    </div>
  </div>
</section>


  <!-- SERVICES PREVIEW -->
  <!-- SERVICES PREVIEW -->
<section class="max-w-7xl mx-auto px-6 py-20">
  
  <!-- Bridge copy -->
  <p class="text-gray-500 max-w-3xl mb-4">
    Whether you’re solving a hardware issue, building a new system,
    or improving existing infrastructure, we provide practical,
    long-term technology solutions.
  </p>

  <!-- Section heading -->
  <h2 class="text-2xl font-bold text-gray-900 mb-4">
    What We Do
  </h2>

  <p class="text-gray-600 max-w-3xl mb-10">
    We deliver complete technology solutions across hardware, software,
    and IT systems — tailored for real-world business needs.
  </p>

  <div class="grid md:grid-cols-3 gap-6">
    <ServiceCard
      icon="🛠"
      title="Hardware Engineering"
      description="Professional diagnostics, repairs, and device maintenance."
    />
    <ServiceCard
      icon="💻"
      title="Software Development"
      description="Custom web and internal business applications."
    />
    <ServiceCard
      icon="🌐"
      title="IT Systems & IoT"
      description="Network setup, servers, and smart system integration."
    />
  </div>

  <div class="mt-10">
    <RouterLink
      to="/services"
      class="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-secondary transition"
    >
      View All Services
    </RouterLink>
  </div>
</section>


  <!-- TRUST / POSITIONING -->
  <section class="bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8 text-center">
      <div>
        <h3 class="text-3xl font-bold text-primary">End-to-End</h3>
        <p class="text-gray-600 mt-2">
          Hardware, software, and systems under one roof.
        </p>
      </div>

      <div>
        <h3 class="text-3xl font-bold text-primary">Scalable</h3>
        <p class="text-gray-600 mt-2">
          Solutions designed to grow with your business.
        </p>
      </div>

      <div>
        <h3 class="text-3xl font-bold text-primary">Reliable</h3>
        <p class="text-gray-600 mt-2">
          Built with stability, security, and performance in mind.
        </p>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="max-w-7xl mx-auto px-6 py-20 text-center">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">
      Ready to Get Started?
    </h2>

    <p class="text-gray-600 mb-8">
      Talk to us about your project or technical needs.
    </p>

    <RouterLink
      to="/contact"
      class="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-secondary transition"
    >
      Contact Us
    </RouterLink>
  </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Tech Affairs & Innovative Hub | Complete Technology Solutions',
  meta: [
    {
      name: 'description',
      content:
        'Tech Affairs & Innovative Hub provides complete technology solutions including hardware repairs, custom software development, and IT systems in Nigeria.'
    }
  ]
})

import HeroSection from '../components/HeroSection.vue'
import ServiceCard from '../components/ServiceCard.vue'
</script>
