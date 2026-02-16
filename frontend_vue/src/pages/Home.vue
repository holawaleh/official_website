<template>
  <!-- HERO SECTION WITH ENHANCED ANIMATION -->
  <HeroSection />

  <!-- TRUST STRIP - REDESIGNED WITH ICONS -->
  <section class="border-t border-b bg-gradient-to-r from-gray-50 to-white">
    <div class="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <div v-for="(item, index) in trustItems" :key="index" 
           class="flex items-center gap-3 group hover:translate-y-[-2px] transition-transform duration-200">
        <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <span class="text-primary font-bold text-sm">{{ item.icon }}</span>
        </div>
        <span class="text-sm font-medium text-gray-700">{{ item.text }}</span>
      </div>
    </div>
  </section>

  <!-- SERVICES SECTION - REDESIGNED WITH MODERN LAYOUT -->
  <section class="max-w-7xl mx-auto px-6 py-24">
    <!-- Section header with decorative elements -->
    <div class="text-center mb-16">
      <span class="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block mb-4">
        Our Expertise
      </span>
      
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Comprehensive Technology<br>Solutions Under One Roof
      </h2>

      <p class="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
        From hardware diagnostics to custom software development and complete IT infrastructure, 
        we deliver practical, long-term technology solutions tailored to your needs.
      </p>
    </div>

    <!-- Service cards with improved design -->
    <div class="grid md:grid-cols-3 gap-8">
      <ServiceCard
        v-for="(service, index) in services"
        :key="index"
        :icon="service.icon"
        :title="service.title"
        :description="service.description"
        :features="service.features"
        :delay="index * 100"
      />
    </div>

    <!-- Enhanced CTA with stats -->
    <div class="mt-16 text-center">
      <div class="inline-flex flex-col sm:flex-row items-center gap-6 bg-gray-50 rounded-2xl p-6">
        <div class="flex items-center gap-8">
          <div class="text-left">
            <p class="text-3xl font-bold text-primary">50+</p>
            <p class="text-sm text-gray-600">Projects Completed</p>
          </div>
          <div class="w-px h-10 bg-gray-300 hidden sm:block"></div>
          <div class="text-left">
            <p class="text-3xl font-bold text-primary">98%</p>
            <p class="text-sm text-gray-600">Client Satisfaction</p>
          </div>
        </div>
        <RouterLink
          to="/services"
          class="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center gap-2 group"
        >
          <span>Explore All Services</span>
          <span class="group-hover:translate-x-1 transition-transform">→</span>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- POSITIONING SECTION - REDESIGNED WITH VISUAL ELEMENTS -->
  <section class="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
    <!-- Decorative background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 py-24 relative">
      <div class="text-center mb-16">
        <span class="text-primary font-semibold text-sm uppercase tracking-wider bg-white/10 px-4 py-2 rounded-full inline-block mb-4">
          Why Choose Us
        </span>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Built Different. Built Better.</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(item, index) in positioningItems" :key="index"
             class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
          <div class="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
            <span class="text-2xl">{{ item.icon }}</span>
          </div>
          <h3 class="text-2xl font-bold text-primary mb-3">{{ item.title }}</h3>
          <p class="text-gray-300 leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ENHANCED CTA SECTION -->
  <section class="max-w-7xl mx-auto px-6 py-24">
    <div class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full filter blur-3xl"></div>
      
      <div class="relative">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Technology?
        </h2>

        <p class="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          Let's discuss your project or technical needs. Our team is ready to provide the perfect solution.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink
            to="/contact"
            class="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2 group"
          >
            <span>Get in Touch</span>
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </RouterLink>
          
          <RouterLink
            to="/services"
            class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            <span>View Services</span>
          </RouterLink>
        </div>

        <!-- Contact info -->
        <div class="mt-12 flex flex-wrap justify-center gap-8 text-sm text-white/80">
          <div class="flex items-center gap-2">
            <span>📞</span>
            <span>+234 8059597963</span>
          </div>
          <div class="flex items-center gap-2">
            <span>✉️</span>
            <span>techaffairsandinnovation@gmail.com</span>
          </div>
          <div class="flex items-center gap-2">
            <span>📍</span>
            <span>Ilorin, Nigeria</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import ServiceCard from '../components/ServiceCard.vue'

// Enhanced trust items with icons
const trustItems = ref([
  { icon: '⚙️', text: 'Hardware & software under one roof' },
  { icon: '👥', text: 'Solutions for individuals & businesses' },
  { icon: '🛠️', text: 'On-site and remote technical support' },
  { icon: '🇳🇬', text: 'Based in Nigeria, built to global standards' }
])

// Enhanced services with features
const services = ref([
  {
    icon: '🛠',
    title: 'Hardware Engineering',
    description: 'Professional diagnostics, repairs, and device maintenance for all your hardware needs.',
    features: ['Diagnostics & Repair', 'Device Maintenance', 'Parts Replacement']
  },
  {
    icon: '💻',
    title: 'Software Development',
    description: 'Custom web applications and internal business solutions tailored to your workflow.',
    features: ['Web Applications', 'Business Software', 'API Integration']
  },
  {
    icon: '🌐',
    title: 'IT Systems & IoT',
    description: 'Complete network setup, server management, and smart system integration.',
    features: ['Network Setup', 'Server Management', 'IoT Solutions']
  }
])

// Enhanced positioning items with icons
const positioningItems = ref([
  {
    icon: '🔄',
    title: 'End-to-End',
    description: 'Complete solutions covering hardware, software, and systems under one roof—no third-party coordination needed.'
  },
  {
    icon: '📈',
    title: 'Scalable',
    description: 'Solutions designed to grow with your business, from startups to enterprise-level operations.'
  },
  {
    icon: '🔒',
    title: 'Reliable',
    description: 'Built with stability, security, and performance in mind. We don\'t just fix problems—we prevent them.'
  }
])

useHead({
  title: 'Tech Affairs & Innovative Hub | Complete Technology Solutions',
  meta: [
    {
      name: 'description',
      content: 'Tech Affairs & Innovative Hub provides complete technology solutions including hardware repairs, custom software development, and IT systems in Nigeria. End-to-end technology services for businesses and individuals.'
    }
  ]
})
</script>

<style scoped>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Gradient animations */
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.bg-gradient-to-r.from-primary.to-secondary {
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
}
</style>