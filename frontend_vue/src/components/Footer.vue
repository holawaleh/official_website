<template>
  <footer class="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 relative overflow-hidden">
    <!-- Decorative background pattern -->
    <div class="absolute inset-0 opacity-5">
      <svg class="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="50" stroke="white" stroke-width="2" />
        <circle cx="700" cy="200" r="80" stroke="white" stroke-width="2" />
        <circle cx="200" cy="500" r="60" stroke="white" stroke-width="2" />
        <path d="M400 100 L450 150 L400 200 L350 150 L400 100" stroke="white" stroke-width="2" />
        <path d="M600 400 L650 450 L600 500 L550 450 L600 400" stroke="white" stroke-width="2" />
      </svg>
    </div>

    <!-- Main footer content -->
    <div class="max-w-7xl mx-auto px-6 py-16 relative">

      <!-- Main footer grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="relative">
              <img src="@/assets/logo.png" alt="Tech Affairs Logo" class="h-10 w-10 rounded-lg" />
              <div class="absolute -inset-1 bg-primary/20 rounded-lg blur-sm -z-10"></div>
            </div>
            <span class="text-lg font-bold text-white">Tech Affairs<br><span class="text-sm font-normal text-gray-400">& Innovative Hub</span></span>
          </div>
          <p class="text-sm text-gray-400 mb-4 leading-relaxed">
            Complete technology solutions — software, hardware, and systems. Building the future of technology in Nigeria.
          </p>
          <!-- Social Media Links -->
          <div class="flex gap-3">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" 
               class="w-10 h-10 bg-gray-800 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
               :aria-label="social.name">
              <span class="text-xl group-hover:text-white">{{ social.icon }}</span>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-white mb-4 flex items-center gap-2">
            <span class="w-1 h-4 bg-primary rounded-full"></span>
            Company
          </h4>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.path">
              <RouterLink 
                :to="link.path" 
                class="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 group"
              >
                <span class="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Services Links -->
        <div>
          <h4 class="font-semibold text-white mb-4 flex items-center gap-2">
            <span class="w-1 h-4 bg-primary rounded-full"></span>
            Our Services
          </h4>
          <ul class="space-y-3">
            <li v-for="service in serviceLinks" :key="service.path">
              <RouterLink 
                :to="service.path" 
                class="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 group"
              >
                <span class="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                {{ service.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div>
          <h4 class="font-semibold text-white mb-4 flex items-center gap-2">
            <span class="w-1 h-4 bg-primary rounded-full"></span>
            Get in Touch
          </h4>
          <div class="space-y-4">
            <!-- Address with icon -->
            <div class="flex items-start gap-3 group">
              <span class="text-primary text-lg mt-0.5 group-hover:scale-110 transition-transform">📍</span>
              <div>
                <p class="text-sm text-gray-400">Ilorin, Nigeria</p>
                <p class="text-xs text-gray-500">Kwara State</p>
              </div>
            </div>
            
            <!-- Email with icon -->
            <div class="flex items-start gap-3 group">
              <span class="text-primary text-lg mt-0.5 group-hover:scale-110 transition-transform">✉️</span>
              <div>
                <a href="mailto:techaffairsandinnovation@gmail.com" 
                   class="text-sm text-gray-400 hover:text-white transition-colors break-all">
                  techaffairsandinnovation<br>@gmail.com
                </a>
                <p class="text-xs text-gray-500">Response within 24h</p>
              </div>
            </div>
            
            <!-- Phone with icon -->
            <div class="flex items-start gap-3 group">
              <span class="text-primary text-lg mt-0.5 group-hover:scale-110 transition-transform">📞</span>
              <div>
                <a href="tel:+2348059597963" class="text-sm text-gray-400 hover:text-white transition-colors">
                  +234 805 959 7963
                </a>
                <p class="text-xs text-gray-500">Mon-Fri, 9am-6pm</p>
              </div>
            </div>

            <!-- WhatsApp/Chat button -->
            <a href="https://wa.me/2348059597963" 
               class="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-xl transition-all duration-300 hover:scale-105">
              <span>💬</span>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar with legal links -->
      <div class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-500">
          © {{ new Date().getFullYear() }} Tech Affairs & Innovative Hub. 
          <span class="hidden md:inline mx-2">|</span>
          <br class="md:hidden" />
          All rights reserved.
        </p>
        
        <div class="flex flex-wrap justify-center gap-6 text-xs">
          <RouterLink to="/privacy" class="text-gray-500 hover:text-white transition-colors">
            Privacy Policy
          </RouterLink>
          <RouterLink to="/terms" class="text-gray-500 hover:text-white transition-colors">
            Terms of Service
          </RouterLink>
          <RouterLink to="/cookies" class="text-gray-500 hover:text-white transition-colors">
            Cookie Policy
          </RouterLink>
          <button @click="scrollToTop" class="text-gray-500 hover:text-white transition-colors flex items-center gap-1">
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Social media links
const socialLinks = ref([
  { name: 'LinkedIn', icon: 'in', url: 'https://linkedin.com/holawaleh' },
  { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com/holawaleh' },
  { name: 'GitHub', icon: '⌨', url: 'https://github.com/holawaleh' },
])

// Company links
const companyLinks = ref([
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blog' }
])

// Service links
const serviceLinks = ref([
  { name: 'Hardware Engineering', path: '/services#hardware' },
  { name: 'Software Development', path: '/services#software' },
  { name: 'IT Systems & IoT', path: '/services#it-systems' },
  { name: 'Technical Consulting', path: '/services#consulting' }
])

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
/* Smooth hover transitions */
a, button {
  transition: all 0.3s ease;
}

/* Animation for social icons */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

.group:hover .group-hover\:scale-110 {
  animation: float 2s ease-in-out infinite;
}

/* Gradient animation for the top border */
.border-t {
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
}
</style>