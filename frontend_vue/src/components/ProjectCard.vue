<template>
  <div class="border rounded-xl p-6 bg-white hover:shadow-md transition">
    
    <span class="inline-block text-xs font-semibold text-primary mb-3">
      {{ category }}
    </span>

    <h3 class="text-lg font-semibold text-gray-900 mb-3">
      {{ title }}
    </h3>

    <div class="space-y-2 text-sm text-gray-600">
      <p>
        <strong class="text-gray-800">Problem:</strong>
        {{ problem }}
      </p>

      <p>
        <strong class="text-gray-800">Solution:</strong>
        {{ solution }}
      </p>

      <p>
        <strong class="text-gray-800">Outcome:</strong>
        {{ outcome }}
      </p>
    </div>

  </div>
</template>

<script setup>
defineProps({
  title: String,
  category: String,
  problem: String,
  solution: String,
  outcome: String
})
</script>
