<template>
  <section class="max-w-7xl mx-auto px-6 py-20">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">
      Projects
    </h1>

    <p class="text-gray-600 max-w-2xl mb-10">
      A selection of projects showcasing our experience across hardware,
      software, and technology systems.
    </p>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        title="Electronic Document Management System"
        description="An on-premise EDMS with access control, document workflow, and audit trails."
        category="Enterprise Software"
      />

      <ProjectCard
        title="Laptop Chip-Level Repairs"
        description="Advanced motherboard diagnostics and component-level repair services."
        category="Hardware Engineering"
      />

      <ProjectCard
        title="Custom Business Web App"
        description="A tailored web application for internal operations and reporting."
        category="Web Development"
      />
    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'Projects | Tech Affairs & Innovative Hub',
  meta: [
    {
      name: 'description',
      content:
        'Explore selected projects and case studies showcasing our work across software, hardware, and IT systems.'
    }
  ]
})

import ProjectCard from '../components/ProjectCard.vue'
</script>
