<template>
  <section class="max-w-7xl mx-auto px-6 py-20">
    
    <h1 class="text-3xl font-bold text-gray-900 mb-4">
      Our Services
    </h1>

    <p class="text-gray-600 max-w-3xl mb-12">
      We provide end-to-end technology solutions across hardware, software,
      and systems — tailored to individuals, businesses, and institutions.
    </p>

    <div class="grid md:grid-cols-3 gap-6">
      
      <ServiceCard
        icon="🛠"
        title="Hardware Engineering & Repairs"
        description="Advanced diagnostics, component-level repairs, and device maintenance."
        :items="[
          'Chip-level laptop repairs',
          'Hardware upgrades',
          'Preventive maintenance'
        ]"
      />

      <ServiceCard
        icon="💻"
        title="Software Development"
        description="Custom-built applications designed for performance, security, and scale."
        :items="[
          'Web & mobile apps',
          'Internal business systems',
          'Automation tools'
        ]"
      />

      <ServiceCard
        icon="🌐"
        title="IT Systems & IoT Solutions"
        description="Design and deployment of reliable infrastructure and smart systems."
        :items="[
          'Network & server setup',
          'IoT integration',
          'Technical consulting'
        ]"
      />

    </div>

  </section>
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>
