<script setup lang="ts">
import TheScene from '../components/TheScene.vue'
</script>

<template>
  <div class="relative min-h-screen">
    <TheScene />
    <div class="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl gradient-text">
          Mohammed Majeed
        </h1>
        <p class="mt-6 text-lg leading-8">
          AI Expert | LLM Prompt Engineer | Web/Graphic Designer
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="/expertise" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            View My Work
          </a>
          <a href="/contact" class="text-sm font-semibold leading-6">
            Contact Me <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>