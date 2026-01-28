<template>
  <RouterLink
    :to="to"
    class="font-medium transition"
    :class="{
      'text-primary': isActive,
      'text-gray-600 hover:text-primary': !isActive
    }"
  >
    <slot />
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  to: String
})

const route = useRoute()

const isActive = computed(() => route.path === props.to)
</script>
