<template>
  <nav class="bg-white border-b">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      
      <!-- logo and Brand -->
      <div class="flex items-center gap-2 text-xl font-bold text-primary">
      <img src="@/assets/logo.png" alt="Tech Affairs Logo" class="h-8 w-8" />
      <span>Tech Affairs</span>
       </div>


      <!-- Desktop Nav -->
      <div class="hidden md:flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <!-- Mobile Button -->
      <button
        @click="open = !open"
        class="md:hidden text-gray-700 focus:outline-none"
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="open" class="md:hidden border-t bg-white">
      <div class="px-6 py-4 flex flex-col gap-4">
        <NavLink @click="open = false" to="/">Home</NavLink>
        <NavLink @click="open = false" to="/services">Services</NavLink>
        <NavLink @click="open = false" to="/projects">Projects</NavLink>
        <NavLink @click="open = false" to="/about">About</NavLink>
        <NavLink @click="open = false" to="/contact">Contact</NavLink>
      </div>
    </div>

  </nav>
</template>

<script setup>
import { ref } from 'vue'
import NavLink from './NavLink.vue'

const open = ref(false)
</script>
