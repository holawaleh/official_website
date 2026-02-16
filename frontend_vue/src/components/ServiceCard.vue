<template>
  <div 
    class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative"
    :style="{ animationDelay: delay + 'ms' }"
    :class="{ 'animate-fadeIn': true }"
  >
    <!-- Color bar -->
    <div class="h-2 w-full" :class="`bg-gradient-to-r ${color}`"></div>
    
    <div class="p-6">
      <!-- Header with icon -->
      <div class="flex items-start justify-between mb-6">
        <div class="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
             :class="`bg-gradient-to-br ${color} bg-opacity-10`">
          <span class="text-3xl">{{ icon }}</span>
        </div>
        
        <!-- Popular badge (optional) -->
        <span v-if="popular" class="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
          Most Popular
        </span>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
        {{ title }}
      </h3>

      <!-- Description -->
      <p class="text-gray-600 mb-6 leading-relaxed">
        {{ description }}
      </p>

      <!-- Features list -->
      <div v-if="features" class="mb-6">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">Key Features</span>
        </div>
        <div class="flex flex-wrap gap-2">
          <span v-for="(feature, idx) in features" :key="idx"
                class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
            {{ feature }}
          </span>
        </div>
      </div>

      <!-- Service items list -->
      <ul class="space-y-3 mb-6">
        <li v-for="(item, index) in items" :key="index" 
            class="flex items-start gap-2 text-sm text-gray-600">
          <span class="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs mt-0.5 flex-shrink-0">✓</span>
          <span>{{ item }}</span>
        </li>
      </ul>

      <!-- Footer with link -->
      <div class="pt-4 border-t border-gray-100 flex justify-between items-center">

        <RouterLink 
          to="/contact" 
          class="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group/link"
        >
          <span>Inquire</span>
          <span class="group-hover/link:translate-x-1 transition-transform">→</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
  items: Array,
  features: Array,
  color: {
    type: String,
    default: 'from-primary to-secondary'
  },
  popular: {
    type: Boolean,
    default: false
  },
  delay: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}
</style>