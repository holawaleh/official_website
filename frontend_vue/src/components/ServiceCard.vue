<template>
  <div class="bg-white border rounded-xl p-6 hover:shadow-md transition">
    
    <!-- Icon Placeholder -->
    <div
      class="w-10 h-10 mb-4 flex items-center justify-center rounded-lg bg-primary/10 text-primary text-lg font-bold"
    >
      {{ icon }}
    </div>

    <h3 class="text-lg font-semibold text-gray-900 mb-2">
      {{ title }}
    </h3>

    <p class="text-sm text-gray-600 mb-4">
      {{ description }}
    </p>

    <ul v-if="items?.length" class="text-sm text-gray-500 space-y-1">
      <li v-for="item in items" :key="item">• {{ item }}</li>
    </ul>

  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: {
    type: String,
    default: '◆' // placeholder, no image needed
  },
  items: Array
})
</script>
