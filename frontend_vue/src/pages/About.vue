<template>
  <!-- HERO SECTION WITH STORYTELLING -->
  <section class="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
    <!-- Animated background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl animate-pulse delay-1000"></div>
    </div>
    
    <!-- Grid pattern overlay -->
    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0); background-size: 40px 40px;"></div>
    
    <div class="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <RouterLink to="/" class="hover:text-primary transition-colors">Home</RouterLink>
        <span>→</span>
        <span class="text-primary">About Us</span>
      </div>

      <!-- Main heading with animation -->
      <div class="max-w-4xl">
        <span class="text-primary font-semibold text-sm uppercase tracking-wider bg-white/10 px-4 py-2 rounded-full inline-block mb-6 animate-fadeIn">
          Our Story
        </span>
        
        <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-slideUp">
          Building the Future of<br>
          <span class="text-primary relative inline-block">
            Technology in Nigeria
            <span class="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10"></span>
          </span>
        </h1>

        <p class="text-xl text-gray-300 max-w-3xl leading-relaxed animate-slideUp delay-200">
          Tech Affairs & Innovative Hub bridges the gap between complex technology and practical solutions, 
          delivering reliable hardware services, custom software, and innovative digital systems for individuals, 
          businesses, and institutions across Nigeria.
        </p>

        <!-- Stats with counter animation -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slideUp delay-400">
          <div v-for="(stat, index) in stats" :key="index" class="text-center md:text-left">
            <div class="text-3xl md:text-4xl font-bold text-primary mb-2">{{ stat.value }}</div>
            <div class="text-sm text-gray-400 uppercase tracking-wider">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MISSION & VISION SECTION -->
  <section class="max-w-7xl mx-auto px-6 py-24">
    <div class="grid md:grid-cols-2 gap-12 items-start">
      <!-- Mission -->
      <div class="group hover:translate-y-[-4px] transition-all duration-300">
        <div class="bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-8 border border-gray-100 h-full">
          <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <span class="text-3xl">🎯</span>
          </div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p class="text-gray-600 leading-relaxed text-lg">
            To democratize access to quality technology solutions in Nigeria by providing 
            reliable, affordable, and innovative services that empower individuals and 
            businesses to thrive in the digital age.
          </p>
          <div class="mt-6 h-1 w-20 bg-primary rounded-full group-hover:w-32 transition-all duration-300"></div>
        </div>
      </div>

      <!-- Vision -->
      <div class="group hover:translate-y-[-4px] transition-all duration-300">
        <div class="bg-gradient-to-br from-secondary/5 to-transparent rounded-3xl p-8 border border-gray-100 h-full">
          <div class="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <span class="text-3xl">👁️</span>
          </div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p class="text-gray-600 leading-relaxed text-lg">
            To become Nigeria's most trusted technology partner, recognized for excellence 
            in hardware engineering, software development, and IT systems integration across 
            Africa.
          </p>
          <div class="mt-6 h-1 w-20 bg-secondary rounded-full group-hover:w-32 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- OUR STORY TIMELINE -->
  <section class="bg-gray-50 py-24">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section header -->
      <div class="text-center mb-16">
        <span class="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block mb-4">
          Our Journey
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Path That Brought Us Here</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          From a small workshop to a comprehensive technology solutions provider
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 hidden md:block"></div>
        
        <div class="space-y-12">
          <div v-for="(milestone, index) in timeline" :key="index"
               class="relative flex flex-col md:flex-row items-center gap-8"
               :class="{ 'md:flex-row-reverse': index % 2 === 1 }">
            
            <!-- Timeline dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg hidden md:block"></div>
            
            <!-- Content -->
            <div class="md:w-1/2" :class="{ 'md:text-right': index % 2 === 0 }">
              <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span class="text-primary font-bold text-sm">{{ milestone.year }}</span>
                <h3 class="text-xl font-bold text-gray-900 mt-2 mb-3">{{ milestone.title }}</h3>
                <p class="text-gray-600">{{ milestone.description }}</p>
              </div>
            </div>
            
            <!-- Empty div for spacing -->
            <div class="md:w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- VALUES SECTION -->
  <section class="max-w-7xl mx-auto px-6 py-24">
    <div class="text-center mb-16">
      <span class="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block mb-4">
        What Drives Us
      </span>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Principles that guide every decision, every solution, and every interaction
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="(value, index) in values" :key="index"
           class="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
        <div class="w-20 h-20 mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <span class="text-4xl">{{ value.icon }}</span>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">{{ value.title }}</h3>
        <p class="text-gray-600">{{ value.description }}</p>
      </div>
    </div>
  </section>

  <!-- CTA SECTION -->
  <section class="max-w-7xl mx-auto px-6 py-24">
    <div class="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full filter blur-3xl"></div>
      
      <div class="relative">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Work With Us?
        </h2>

        <p class="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          Let's discuss how we can help solve your technology challenges and drive your business forward.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink
            to="/contact"
            class="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2 group"
          >
            <span>Start a Conversation</span>
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </RouterLink>
          
          <RouterLink
            to="/services"
            class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Explore Our Services
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

// Statistics
const stats = ref([
  { value: '2018', label: 'Year Founded' },
  { value: '50+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' }
])

// Timeline milestones
const timeline = ref([
  {
    year: '2018',
    title: 'The Beginning',
    description: 'Started as a small hardware repair workshop in Lagos, serving local businesses and individuals.'
  },
  {
    year: '2020',
    title: 'Expansion into Software',
    description: 'Launched our software development division to provide custom web applications for businesses.'
  },
  {
    year: '2022',
    title: 'IT Systems Integration',
    description: 'Added network setup, server management, and IoT solutions to our service offerings.'
  },
  {
    year: '2024',
    title: 'Today & Beyond',
    description: 'Now a comprehensive technology hub serving clients across Nigeria with end-to-end solutions.'
  }
])

// Core values
const values = ref([
  {
    icon: '🔧',
    title: 'Technical Excellence',
    description: 'We stay at the forefront of technology to deliver solutions that are both innovative and reliable.'
  },
  {
    icon: '🤝',
    title: 'Client Partnership',
    description: 'We don\'t just provide services—we build lasting relationships focused on your success.'
  },
  {
    icon: '🌍',
    title: 'Local Impact',
    description: 'Proudly Nigerian, we\'re committed to elevating the local tech ecosystem.'
  },
  {
    icon: '⚡',
    title: 'Agile & Adaptive',
    description: 'We move quickly and adapt to changing needs without compromising quality.'
  },
  {
    icon: '🔒',
    title: 'Trust & Integrity',
    description: 'Honest communication, transparent processes, and reliable results.'
  },
  {
    icon: '💡',
    title: 'Innovation First',
    description: 'Always exploring new ways to solve problems and create value.'
  }
])

useHead({
  title: 'About Us - Tech Affairs & Innovative Hub | Our Story & Mission',
  meta: [
    {
      name: 'description',
      content: 'Learn about Tech Affairs & Innovative Hub - Nigeria\'s trusted technology solutions provider. Discover our mission, vision, values, and the team behind our success in hardware, software, and IT systems.'
    }
  ]
})
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slideUp {
  opacity: 0;
  animation: slideUp 0.8s ease-out forwards;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.delay-1000 {
  animation-delay: 1s;
}

/* Aspect ratio utility */
.aspect-w-1 {
  position: relative;
  padding-bottom: 100%;
}

.aspect-w-1 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>