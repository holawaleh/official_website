<template>
  <div class="border rounded-lg p-6 hover:shadow-md transition bg-white">
    <h3 class="text-lg font-semibold text-gray-900 mb-2">
      {{ title }}
    </h3>

    <p class="text-sm text-gray-600 mb-4">
      {{ description }}
    </p>

    <span class="inline-block text-xs font-medium text-primary">
      {{ category }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  category: String
})
</script>
