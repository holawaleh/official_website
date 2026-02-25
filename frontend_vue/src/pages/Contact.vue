<template>
  <!-- HERO SECTION WITH MAP BACKGROUND -->
  <section class="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
    <!-- Decorative world map pattern -->
    <div class="absolute inset-0 opacity-10">
      <svg class="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M200,100 L250,150 L300,100 L350,150 L400,100 L450,150 L500,100" stroke="white" stroke-width="2"/>
        <path d="M200,200 L250,250 L300,200 L350,250 L400,200 L450,250 L500,200" stroke="white" stroke-width="2"/>
        <path d="M200,300 L250,350 L300,300 L350,350 L400,300 L450,350 L500,300" stroke="white" stroke-width="2"/>
        <circle cx="250" cy="150" r="3" fill="white"/>
        <circle cx="350" cy="250" r="3" fill="white"/>
        <circle cx="450" cy="350" r="3" fill="white"/>
      </svg>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 py-24 relative">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <RouterLink to="/" class="hover:text-primary transition-colors">Home</RouterLink>
        <span>→</span>
        <span class="text-primary">Contact</span>
      </div>

      <div class="max-w-3xl">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Let's <span class="text-primary">Build Something</span><br>
          Amazing Together
        </h1>

        <p class="text-xl text-gray-300 leading-relaxed">
          Have a project in mind? Need technical support? We're here to help turn your ideas into reality.
        </p>
      </div>
    </div>
  </section>

  <!-- CONTACT SECTION -->
  <section class="max-w-7xl mx-auto px-6 py-20">
    <div class="grid lg:grid-cols-2 gap-12">
      
      <!-- LEFT COLUMN - CONTACT INFO -->
      <div>
        <!-- Section header -->
        <div class="mb-8">
          <span class="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block mb-4">
            Get in Touch
          </span>
          <h2 class="text-3xl font-bold text-gray-900 mb-4">We'd Love to Hear From You</h2>
          <p class="text-gray-600 text-lg">
            Tell us about your project or technical needs. We'll get back to you within 24 hours.
          </p>
        </div>

        <!-- Contact cards -->
        <div class="space-y-6 mb-8">
          <div v-for="(item, index) in contactMethods" :key="index"
               class="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-primary/5 transition-all duration-300 group">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <span class="text-2xl">{{ item.icon }}</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">{{ item.title }}</h3>
              <p class="text-gray-600">{{ item.details }}</p>
              <p v-if="item.subtext" class="text-sm text-gray-500 mt-1">{{ item.subtext }}</p>
            </div>
          </div>
        </div>

        <!-- Business hours -->
        <div class="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6">
          <h3 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span class="text-primary">🕒</span>
            Business Hours
          </h3>
          <div class="space-y-2 text-gray-600">
            <div class="flex justify-between">
              <span>Monday - Friday</span>
              <span class="font-medium">9:00 AM - 6:00 PM</span>
            </div>
            <div class="flex justify-between">
              <span>Saturday</span>
              <span class="font-medium">10:00 AM - 4:00 PM</span>
            </div>
            <div class="flex justify-between">
              <span>Sunday</span>
              <span class="font-medium">Closed</span>
            </div>
          </div>
          <p class="text-sm text-gray-500 mt-4 flex items-center gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Emergency support available 24/7 for existing clients
          </p>
        </div>
      </div>

      <!-- RIGHT COLUMN - CONTACT FORM -->
      <div class="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <!-- Form header -->
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
          <p class="text-gray-600">Fill out the form below and we'll respond shortly.</p>
        </div>

        <form
          action="https://formspree.io/f/xqebkkpy"
          method="POST"
          class="space-y-6"
        >
          <!-- Name field with icon -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span class="text-primary">*</span>
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span class="text-gray-400">👤</span>
              </div>
              <input
                type="text"
                name="name"
                required
                placeholder="Ajagbe Olatunji"
                class="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          <!-- Email field with icon -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span class="text-primary">*</span>
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span class="text-gray-400">✉️</span>
              </div>
              <input
                type="email"
                name="email"
                required
                placeholder="olatunji@example.com"
                class="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          <!-- Subject field (optional) -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <select
              name="subject"
              class="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white"
            >
              <option value="">Select a topic</option>
              <option value="hardware">Hardware Support</option>
              <option value="software">Software Development</option>
              <option value="it">IT Systems & IoT</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

          <!-- Message field with icon -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Message <span class="text-primary">*</span>
            </label>
            <div class="relative">
              <div class="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                <span class="text-gray-400">📝</span>
              </div>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Tell us about your project or technical needs..."
                class="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
              ></textarea>
            </div>
          </div>

          <!-- Form footer with submit button -->
          <div class="space-y-4">
            <button
              type="submit"
              class="w-full bg-primary text-white px-6 py-4 rounded-xl font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <p class="text-xs text-gray-500 text-center">
              By submitting this form, you agree to our 
              <RouterLink to="/privacy" class="text-primary hover:underline">Privacy Policy</RouterLink>.
              We'll never share your information.
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- FAQ PREVIEW SECTION -->
  <section class="max-w-7xl mx-auto px-6 py-20">
    <div class="text-center mb-12">
      <span class="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full inline-block mb-4">
            Quick Answers
          </span>
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
      <p class="text-gray-600">Find quick answers to common questions</p>
    </div>

    <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <div v-for="(faq, index) in faqs" :key="index"
           class="p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group">
        <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <span class="text-primary group-hover:scale-110 transition-transform">❓</span>
          {{ faq.question }}
        </h3>
        <p class="text-gray-600 text-sm">{{ faq.answer }}</p>
      </div>
    </div>

    <div class="text-center mt-8">
      <RouterLink to="/faq" class="text-primary font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all">
        View all FAQs <span>→</span>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

// Contact methods
const contactMethods = ref([
  {
    icon: '📞',
    title: 'Phone',
    details: '+234 8059597963',
    subtext: 'Mon-Fri, 9am-6pm'
  },
  {
    icon: '✉️',
    title: 'Email',
    details: 'techaffairsandinnovation@gmail.com',
    subtext: 'We reply within 24 hours'
  },
  {
    icon: '📍',
    title: 'Office',
    details: '133 Ibrahim Taiwo Road, Ilorin, Nigeria',
    subtext: 'Visit us during business hours'
  }
])

// FAQs
const faqs = ref([
  {
    question: 'How quickly do you respond to inquiries?',
    answer: 'We typically respond within 24 hours during business days.'
  },
  {
    question: 'Do you offer emergency support?',
    answer: 'Yes, existing clients have access to 24/7 emergency support.'
  },
  {
    question: 'Can I visit your office without an appointment?',
    answer: 'While appointments are preferred, walk-ins are welcome during business hours.'
  },
  {
    question: 'Do you work with clients outside Nigeria?',
    answer: 'Absolutely! We work with clients globally through remote consultations.'
  }
])

useHead({
  title: 'Contact Us - Tech Affairs & Innovative Hub | Get in Touch',
  meta: [
    {
      name: 'description',
      content: 'Contact Tech Affairs & Innovative Hub for hardware repairs, software development, and IT solutions in Nigeria. Reach out via phone, email, or visit our Lagos office.'
    }
  ]
})
</script>

<style scoped>
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Smooth transitions */
input, textarea, select {
  transition: all 0.3s ease;
}

input:hover, textarea:hover, select:hover {
  border-color: #3b82f6;
}
</style>