<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  {
    title: 'EnhanceMatch',
    role: 'AI Developer',
    description: 'AI-powered recruitment platform integrating advanced filtering algorithms and intelligent agents for automated CV matching.',
    technologies: ['Python', 'Machine Learning', 'NLP', 'FastAPI'],
  },
  {
    title: 'Minions',
    role: 'Research Lead',
    description: 'Master\'s thesis project integrating LLMs with Behavior Trees for intuitive swarm robotics control.',
    technologies: ['LLMs', 'Robotics', 'Python', 'Behavior Trees'],
  }
]

const education = [
  {
    degree: 'Master of Science in Artificial Intelligence',
    school: 'Vrije Universiteit Amsterdam',
    year: '2022-2024',
    location: 'Netherlands'
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Baghdad College of Economic Sciences University',
    year: '2007-2011',
    location: 'Iraq'
  }
]
</script>

<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">About Me</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          AI Expert with a passion for developing cutting-edge solutions
        </p>
      </div>

      <div class="mt-16">
        <h3 class="text-2xl font-semibold mb-8">Featured Projects</h3>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ProjectCard v-for="project in projects" v-bind="project" :key="project.title" />
        </div>
      </div>

      <div class="mt-16">
        <h3 class="text-2xl font-semibold mb-8">Education</h3>
        <div class="space-y-8">
          <div v-for="edu in education" :key="edu.degree" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h4 class="text-lg font-semibold">{{ edu.degree }}</h4>
            <p class="text-indigo-600 dark:text-indigo-400">{{ edu.school }}</p>
            <p class="text-gray-600 dark:text-gray-300">{{ edu.year }} • {{ edu.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>