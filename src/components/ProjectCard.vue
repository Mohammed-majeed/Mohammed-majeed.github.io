<script setup lang="ts">
defineProps<{
  title: string
  description: string
  role: string
  technologies: string[]
  link?: string
}>()
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-sm text-indigo-600 dark:text-indigo-400 mb-4">{{ role }}</p>
    <p class="text-gray-600 dark:text-gray-300 mb-4">{{ description }}</p>
    <div class="flex flex-wrap gap-2">
      <span v-for="tech in technologies" :key="tech" class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full">
        {{ tech }}
      </span>
    </div>
    <a v-if="link" :href="link" target="_blank" rel="noopener" class="mt-4 inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
      View Project <span class="ml-1">→</span>
    </a>
  </div>
</template>