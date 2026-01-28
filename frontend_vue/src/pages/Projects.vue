<template>
  <section class="max-w-7xl mx-auto px-6 py-20">

    <h1 class="text-3xl font-bold text-gray-900 mb-4">
      Projects
    </h1>

    <p class="text-gray-600 max-w-3xl mb-12">
      A selection of projects that demonstrate our approach to solving
      real-world technology problems across hardware, software,
      and IT systems.
    </p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <ProjectCard
        title="Electronic Document Management System (EDMS)"
        category="Enterprise Software"
        problem="Manual document handling caused delays, loss of records, and poor access control."
        solution="Designed and deployed an on-premise EDMS with role-based access, document workflows, and audit tracking."
        outcome="Improved document security, faster retrieval, and streamlined internal operations."
      />

      <ProjectCard
        title="Chip-Level Laptop Repair & Diagnostics"
        category="Hardware Engineering"
        problem="Multiple laptops were failing with no clear fault diagnosis and high replacement costs."
        solution="Performed motherboard-level diagnostics and component replacement instead of full board swaps."
        outcome="Significantly reduced repair costs and restored devices to full working condition."
      />

      <ProjectCard
        title="Custom Internal Business Web Application"
        category="Web Development"
        problem="Business operations relied on manual processes and spreadsheets."
        solution="Built a secure internal web application to manage workflows, records, and reporting."
        outcome="Increased efficiency, reduced errors, and improved operational visibility."
      />

    </div>

  </section>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'
</script>
