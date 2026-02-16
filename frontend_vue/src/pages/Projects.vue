<template>
  <!-- HERO SECTION WITH PROJECTS THEME -->
  <section class="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
    <!-- Decorative pattern -->
    <div class="absolute inset-0 opacity-10">
      <svg class="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="100" width="150" height="150" stroke="white" stroke-width="2" stroke-dasharray="8 8"/>
        <rect x="300" y="250" width="150" height="150" stroke="white" stroke-width="2" stroke-dasharray="8 8"/>
        <rect x="500" y="100" width="150" height="150" stroke="white" stroke-width="2" stroke-dasharray="8 8"/>
        <circle cx="175" cy="400" r="60" stroke="white" stroke-width="2" stroke-dasharray="6 6"/>
        <circle cx="600" cy="450" r="60" stroke="white" stroke-width="2" stroke-dasharray="6 6"/>
      </svg>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 py-24 relative">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <RouterLink to="/" class="hover:text-primary transition-colors">Home</RouterLink>
        <span>→</span>
        <span class="text-primary">Projects</span>
      </div>

      <div class="max-w-3xl">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Our <span class="text-primary">Impact</span> in Action
        </h1>

        <p class="text-xl text-gray-300 leading-relaxed">
          A selection of projects that demonstrate our approach to solving
          real-world technology problems across hardware, software,
          and IT systems.
        </p>

        <!-- Quick stats -->
        <div class="flex flex-wrap gap-8 mt-10">
          <div class="flex items-center gap-3">
            <span class="text-primary font-bold text-2xl">50+</span>
            <span class="text-gray-400">Projects Completed</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-primary font-bold text-2xl">3</span>
            <span class="text-gray-400">Service Categories</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-primary font-bold text-2xl">98%</span>
            <span class="text-gray-400">Success Rate</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FILTER SECTION (optional) -->
  <section class="max-w-7xl mx-auto px-6 py-12 border-b">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <span class="text-sm font-medium text-gray-700">Filter by:</span>
        <button 
          v-for="filter in filters" 
          :key="filter"
          @click="selectedFilter = filter"
          class="px-4 py-2 text-sm rounded-full transition-all duration-300"
          :class="selectedFilter === filter 
            ? 'bg-primary text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
        >
          {{ filter }}
        </button>
      </div>
      <div class="text-sm text-gray-500">
        Showing {{ filteredProjects.length }} projects
      </div>
    </div>
  </section>

  <!-- PROJECTS GRID -->
  <section class="max-w-7xl mx-auto px-6 py-20">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        v-for="(project, index) in filteredProjects"
        :key="index"
        :title="project.title"
        :category="project.category"
        :problem="project.problem"
        :solution="project.solution"
        :outcome="project.outcome"
        :icon="project.icon"
        :color="project.color"
        :delay="index * 100"
      />
    </div>

    <!-- Empty state if no projects match filter -->
    <div v-if="filteredProjects.length === 0" class="text-center py-20">
      <span class="text-6xl mb-4 block">🔍</span>
      <h3 class="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
      <p class="text-gray-600">Try selecting a different filter category</p>
    </div>
  </section>

  <!-- CATEGORY HIGHLIGHT SECTION -->
  <section class="bg-gray-50 py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block mb-4">
          By The Numbers
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expertise Across Domains</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Our project portfolio spans multiple technology areas, delivering measurable results for our clients
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(category, index) in categoryStats" :key="index"
             class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" :class="category.bgColor">
            <span class="text-3xl">{{ category.icon }}</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ category.name }}</h3>
          <div class="space-y-3">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Projects</span>
              <span class="font-semibold text-primary">{{ category.count }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-primary h-2 rounded-full" :style="{ width: category.percentage + '%' }"></div>
            </div>
            <p class="text-gray-600 text-sm mt-2">{{ category.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SUCCESS STORY HIGHLIGHT -->
  <section class="max-w-7xl mx-auto px-6 py-20">
    <div class="bg-gradient-to-r from-primary to-secondary rounded-3xl overflow-hidden shadow-2xl">
      <div class="grid md:grid-cols-2">
        <!-- Content -->
        <div class="p-12 text-white">
          <span class="text-white/80 text-sm uppercase tracking-wider mb-4 block">Featured Success Story</span>
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Electronic Document Management System (EDMS)</h2>
          <p class="text-white/90 mb-8 leading-relaxed">
            See how we transformed a client's manual document handling into a streamlined, 
            secure digital workflow that improved efficiency by 70%.
          </p>
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div>
              <div class="text-3xl font-bold">70%</div>
              <div class="text-white/80 text-sm">Faster Retrieval</div>
            </div>
            <div>
              <div class="text-3xl font-bold">100%</div>
              <div class="text-white/80 text-sm">Digital Records</div>
            </div>
          </div>
          <RouterLink 
            to="/projects/edms" 
            class="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            <span>Read Case Study</span>
            <span>→</span>
          </RouterLink>
        </div>
        
        <!-- Image placeholder - replace with actual project image -->
        <div class="hidden md:block bg-gradient-to-br from-white/20 to-white/5 p-12 flex items-center justify-center">
          <div class="w-64 h-64 bg-white/10 rounded-3xl backdrop-blur-sm flex items-center justify-center">
            <span class="text-8xl">📄</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA SECTION -->
  <section class="bg-gray-50 py-20">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Have a Project in Mind?
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
        Let's discuss how we can help solve your technology challenges and create success stories together.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink
          to="/contact"
          class="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center justify-center gap-2 group"
        >
          <span>Start Your Project</span>
          <span class="group-hover:translate-x-1 transition-transform">→</span>
        </RouterLink>
        
        <RouterLink
          to="/services"
          class="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200"
        >
          Explore Services
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@vueuse/head'
import ProjectCard from '../components/ProjectCard.vue'

// Filter options
const filters = ['All', 'Enterprise Software', 'Hardware Engineering', 'Web Development']
const selectedFilter = ref('All')

// Enhanced projects data with your original information
const projects = ref([
  {
    title: 'Electronic Document Management System (EDMS)',
    category: 'Enterprise Software',
    problem: 'Manual document handling caused delays, loss of records, and poor access control.',
    solution: 'Designed and deployed an on-premise EDMS with role-based access, document workflows, and audit tracking.',
    outcome: 'Improved document security, faster retrieval, and streamlined internal operations.',
    icon: '📄',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Chip-Level Laptop Repair & Diagnostics',
    category: 'Hardware Engineering',
    problem: 'Multiple laptops were failing with no clear fault diagnosis and high replacement costs.',
    solution: 'Performed motherboard-level diagnostics and component replacement instead of full board swaps.',
    outcome: 'Significantly reduced repair costs and restored devices to full working condition.',
    icon: '🔧',
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Custom Internal Business Web Application',
    category: 'Web Development',
    problem: 'Business operations relied on manual processes and spreadsheets.',
    solution: 'Built a secure internal web application to manage workflows, records, and reporting.',
    outcome: 'Increased efficiency, reduced errors, and improved operational visibility.',
    icon: '💻',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'IoT-Enabled Asset Tracking System',
    category: 'Hardware Engineering',
    problem: 'Company struggled with tracking valuable equipment across multiple locations.',
    solution: 'Deployed IoT sensors and custom dashboard for real-time asset monitoring.',
    outcome: 'Reduced asset loss by 95% and improved inventory accuracy.',
    icon: '📡',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'E-Commerce Platform Integration',
    category: 'Web Development',
    problem: 'Client needed to unify multiple sales channels into one system.',
    solution: 'Developed custom API integrations connecting stores, inventory, and shipping.',
    outcome: 'Order processing time reduced by 60% and inventory accuracy improved.',
    icon: '🛒',
    color: 'from-red-500 to-rose-500'
  },
  {
    title: 'Network Infrastructure Upgrade',
    category: 'IT Systems',
    problem: 'Office network was slow, unreliable, and had security vulnerabilities.',
    solution: 'Complete network redesign with new hardware, segmentation, and security protocols.',
    outcome: '300% faster network speeds with zero security incidents since deployment.',
    icon: '🌐',
    color: 'from-indigo-500 to-blue-500'
  }
])

// Filtered projects based on selection
const filteredProjects = computed(() => {
  if (selectedFilter.value === 'All') {
    return projects.value
  }
  return projects.value.filter(p => p.category === selectedFilter.value)
})

// Category statistics
const categoryStats = ref([
  {
    name: 'Enterprise Software',
    icon: '📊',
    count: 7,
    percentage: 89,
    description: 'Scalable business solutions and document management systems',
    bgColor: 'bg-blue-100'
  },
  {
    name: 'Hardware Engineering',
    icon: '🔧',
    count: 10,
    percentage: 100,
    description: 'Chip-level repairs, diagnostics, and IoT integration',
    bgColor: 'bg-amber-100'
  },
  {
    name: 'Web Development',
    icon: '💻',
    count: 8,
    percentage: 92,
    description: 'Custom applications and e-commerce solutions',
    bgColor: 'bg-green-100'
  }
])

useHead({
  title: 'Our Projects - Tech Affairs & Innovative Hub | Portfolio & Case Studies',
  meta: [
    {
      name: 'description',
      content: 'Explore our portfolio of successful technology projects including hardware repairs, software development, and IT systems integration. Real solutions for real business problems.'
    }
  ]
})
</script>