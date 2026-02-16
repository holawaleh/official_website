<template>
  <!-- HERO SECTION WITH SERVICES THEME -->
  <section class="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
    <!-- Animated background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl animate-pulse delay-1000"></div>
    </div>
    
    <!-- Grid pattern overlay -->
    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0); background-size: 40px 40px;"></div>
    
    <div class="max-w-7xl mx-auto px-6 py-24 relative">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <RouterLink to="/" class="hover:text-primary transition-colors">Home</RouterLink>
        <span>→</span>
        <span class="text-primary">Services</span>
      </div>

      <div class="max-w-4xl">
        <span class="text-primary font-semibold text-sm uppercase tracking-wider bg-white/10 px-4 py-2 rounded-full inline-block mb-6 animate-fadeIn">
          What We Offer
        </span>
        
        <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-slideUp">
          Comprehensive<br>
          <span class="text-primary relative inline-block">
            Technology Solutions
            <span class="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10"></span>
          </span>
        </h1>

        <p class="text-xl text-gray-300 max-w-3xl leading-relaxed animate-slideUp delay-200">
          We provide end-to-end technology solutions across hardware, software,
          and systems — tailored to individuals, businesses, and institutions.
        </p>

        <!-- Quick service highlights -->
        <div class="flex flex-wrap gap-6 mt-10 animate-slideUp delay-400">
          <div v-for="(highlight, index) in highlights" :key="index" 
               class="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
            <span class="text-primary">{{ highlight.icon }}</span>
            <span class="text-sm text-gray-300">{{ highlight.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MAIN SERVICES GRID -->
  <section class="max-w-7xl mx-auto px-6 py-24">
    <!-- Section intro -->
    <div class="text-center mb-16">
      <span class="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block mb-4">
        Our Expertise
      </span>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Solutions That Drive Results</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        From hardware diagnostics to custom software and complete IT infrastructure, 
        we deliver practical, scalable solutions for every challenge.
      </p>
    </div>

    <!-- Service Cards Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ServiceCard
        v-for="(service, index) in services"
        :key="index"
        :icon="service.icon"
        :title="service.title"
        :description="service.description"
        :items="service.items"
        :features="service.features"
        :color="service.color"
        :delay="index * 100"
      />
    </div>

    <!-- Service highlights -->
    <div class="mt-20 grid md:grid-cols-3 gap-8">
      <div v-for="(stat, index) in stats" :key="index"
           class="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
        <div class="text-3xl font-bold text-primary mb-2">{{ stat.value }}</div>
        <div class="text-sm font-semibold text-gray-900 mb-1">{{ stat.label }}</div>
        <div class="text-xs text-gray-500">{{ stat.description }}</div>
      </div>
    </div>
  </section>

  <!-- PROCESS SECTION - How We Work -->
  <section class="bg-gray-50 py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block mb-4">
          Our Process
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Deliver Excellence</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          A systematic approach to ensure every project meets our high standards
        </p>
      </div>

      <div class="grid md:grid-cols-4 gap-6">
        <div v-for="(step, index) in process" :key="index"
             class="relative group">
          <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <span class="text-2xl">{{ step.icon }}</span>
            </div>
            <span class="text-sm text-primary font-semibold mb-2 block">Step {{ index + 1 }}</span>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ step.title }}</h3>
            <p class="text-sm text-gray-600">{{ step.description }}</p>
          </div>
          <!-- Connector line (except last) -->
          <div v-if="index < process.length - 1" 
               class="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- TECHNOLOGY STACK SECTION -->
  <section class="max-w-7xl mx-auto px-6 py-24">
    <div class="text-center mb-16">
      <span class="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block mb-4">
        Technologies We Work With
      </span>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tools & Technologies</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        We leverage modern tools and proven technologies to build reliable solutions
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      <div v-for="(tech, index) in technologies" :key="index"
           class="bg-gray-50 rounded-xl p-4 text-center hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 group">
        <span class="text-3xl mb-2 block group-hover:scale-110 transition-transform">{{ tech.icon }}</span>
        <span class="text-xs font-semibold text-gray-700">{{ tech.name }}</span>
      </div>
    </div>
  </section>

  <!-- INDUSTRIES WE SERVE -->
  <section class="bg-gray-50 py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block mb-4">
            Who We Serve
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Industries We Support</h2>
          <p class="text-gray-600 text-lg mb-8">
            Our solutions are tailored to meet the unique needs of various sectors, 
            delivering technology that drives real business value.
          </p>
          
          <div class="space-y-4">
            <div v-for="(industry, index) in industries" :key="index"
                 class="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <span class="text-2xl">{{ industry.icon }}</span>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">{{ industry.name }}</h3>
                <p class="text-sm text-gray-600">{{ industry.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="relative">
          <div class="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white">
            <span class="text-5xl block mb-4">💡</span>
            <h3 class="text-2xl font-bold mb-4">Custom Solutions for Every Need</h3>
            <p class="text-white/90 mb-6">
              Whether you're a startup looking for your first custom application or 
              an enterprise needing complete IT infrastructure, we have the expertise 
              to deliver.
            </p>
            <RouterLink to="/contact" 
               class="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300">
              <span>Discuss Your Project</span>
              <span>→</span>
            </RouterLink>
          </div>
          
          <!-- Decorative element -->
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- PRICING NOTE / CTA -->
  <section class="max-w-7xl mx-auto px-6 py-24">
    <div class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white text-center relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl"></div>
      
      <div class="relative">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Technology?
        </h2>

        <p class="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          Get in touch for a free consultation. We'll help you identify the right solution 
          for your needs and provide a transparent quote.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink
            to="/contact"
            class="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2 group"
          >
            <span>Request Consultation</span>
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </RouterLink>
          
          <RouterLink
            to="/projects"
            class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            View Our Work
          </RouterLink>
        </div>

        <!-- Trust badges -->
        <div class="flex flex-wrap justify-center gap-8 mt-12 text-sm text-white/60">
          <span class="flex items-center gap-2">✓ No obligation consultation</span>
          <span class="flex items-center gap-2">✓ Transparent pricing</span>
          <span class="flex items-center gap-2">✓ 100% satisfaction guaranteed</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import ServiceCard from '../components/ServiceCard.vue'

// Quick highlights
const highlights = ref([
  { icon: '🔧', text: 'Hardware Engineering' },
  { icon: '💻', text: 'Software Development' },
  { icon: '🌐', text: 'IT Systems & IoT' },
  { icon: '⚡', text: '24/7 Support' }
])

// Enhanced services with your original information
const services = ref([
  {
    icon: '🛠',
    title: 'Hardware Engineering & Repairs',
    description: 'Advanced diagnostics, component-level repairs, and device maintenance.',
    items: [
      'Chip-level laptop repairs',
      'Hardware upgrades',
      'Preventive maintenance',
      'Motherboard diagnostics',
      'Data recovery services'
    ],
    features: ['Expert Technicians', 'Genuine Parts', 'Warranty Included'],
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: '💻',
    title: 'Software Development',
    description: 'Custom-built applications designed for performance, security, and scale.',
    items: [
      'Web & mobile apps',
      'Internal business systems',
      'Automation tools',
      'API integrations',
      'Legacy system modernization'
    ],
    features: ['Modern Stack', 'Scalable Architecture', 'Ongoing Support'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: '🌐',
    title: 'IT Systems & IoT Solutions',
    description: 'Design and deployment of reliable infrastructure and smart systems.',
    items: [
      'Network & server setup',
      'IoT integration',
      'Technical consulting',
      'Cloud solutions',
      'Security implementation'
    ],
    features: ['Enterprise Grade', '24/7 Monitoring', 'Future-proof Design'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: '📊',
    title: 'Business Automation',
    description: 'Streamline operations with custom automation solutions.',
    items: [
      'Workflow automation',
      'CRM integration',
      'Reporting dashboards',
      'Inventory management',
      'Process optimization'
    ],
    features: ['Increased Efficiency', 'Error Reduction', 'Real-time Insights'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '🔒',
    title: 'Cybersecurity Services',
    description: 'Protect your business with comprehensive security solutions.',
    items: [
      'Security audits',
      'Penetration testing',
      'Employee training',
      'Firewall configuration',
      'Incident response'
    ],
    features: ['Proactive Defense', 'Compliance Ready', '24/7 Monitoring'],
    color: 'from-red-500 to-rose-500'
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'Leverage the power of cloud computing for your business.',
    items: [
      'Cloud migration',
      'Hybrid solutions',
      'Backup & recovery',
      'Scalable infrastructure',
      'Cost optimization'
    ],
    features: ['Flexible Scaling', 'High Availability', 'Disaster Recovery'],
    color: 'from-indigo-500 to-blue-500'
  }
])

// Statistics
const stats = ref([
  {
    value: '50+',
    label: 'Projects Completed',
    description: 'Across hardware, software, and IT systems'
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Based on post-project surveys'
  },
  {
    value: '24/7',
    label: 'Support Available',
    description: 'For critical business systems'
  }
])

// Process steps
const process = ref([
  {
    icon: '🔍',
    title: 'Discovery',
    description: 'We analyze your needs, challenges, and goals to understand the full picture.'
  },
  {
    icon: '📋',
    title: 'Planning',
    description: 'We design a tailored solution with clear milestones and timelines.'
  },
  {
    icon: '⚙️',
    title: 'Execution',
    description: 'Our team builds, tests, and deploys your solution with precision.'
  },
  {
    icon: '🚀',
    title: 'Support',
    description: 'We provide ongoing maintenance, updates, and technical support.'
  }
])

// Technology stack
const technologies = ref([
  { name: 'React/Vue', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'IoT', icon: '📡' },
  { name: 'Cloud', icon: '☁️' },
  { name: 'Databases', icon: '🗄️' }
])

// Industries served
const industries = ref([
  {
    icon: '🏢',
    name: 'Corporate',
    description: 'Enterprise solutions for large organizations'
  },
  {
    icon: '🏪',
    name: 'SMEs',
    description: 'Scalable solutions for growing businesses'
  },
  {
    icon: '🏫',
    name: 'Education',
    description: 'Technology for schools and institutions'
  },
  {
    icon: '🏥',
    name: 'Healthcare',
    description: 'Compliant systems for medical facilities'
  }
])

useHead({
  title: 'Our Services - Tech Affairs & Innovative Hub | Hardware, Software & IT Solutions',
  meta: [
    {
      name: 'description',
      content: 'Explore our comprehensive technology services including hardware engineering, custom software development, and IT systems integration. End-to-end solutions for businesses and individuals in Nigeria.'
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

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slideUp {
  opacity: 0;
  animation: slideUp 0.8s ease-out forwards;
}

.animate-pulse {
  animation: pulse 3s ease-in-out infinite;
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
</style>