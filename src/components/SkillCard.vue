<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
  percentage: number
}>()
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <span class="text-sm text-indigo-600 dark:text-indigo-400">{{ percentage }}%</span>
    </div>
    <p class="text-gray-600 dark:text-gray-300 mb-4">{{ description }}</p>
    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div class="bg-indigo-600 h-2 rounded-full" :style="{ width: `${percentage}%` }"></div>
    </div>
  </div>
</template>