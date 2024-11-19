<script setup lang="ts">
import SkillCard from '../components/SkillCard.vue'

const skills = [
  {
    title: 'AI/ML',
    description: 'Expert in Large Language Models, NLP, Machine Learning, and Deep Learning',
    icon: 'brain',
    percentage: 90
  },
  {
    title: 'LLM Engineering',
    description: 'Specialized in GPTs, Claude, Gemini, and LLaMA models',
    icon: 'code',
    percentage: 95
  },
  {
    title: 'Web Development',
    description: 'Full-stack development with modern frameworks and tools',
    icon: 'web',
    percentage: 85
  },
  {
    title: 'Graphic Design',
    description: 'Creative design using industry-standard tools',
    icon: 'design',
    percentage: 80
  }
]
</script>

<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">Expertise & Skills</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Combining AI expertise with creative design to deliver innovative solutions
        </p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <SkillCard v-for="skill in skills" v-bind="skill" :key="skill.title" />
      </div>
    </div>
  </div>
</template>