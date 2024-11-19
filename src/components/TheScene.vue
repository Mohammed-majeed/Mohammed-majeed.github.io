<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import { reactive } from 'vue'

const gl = reactive({
  clearColor: '#000000',
  shadows: true,
  alpha: true,
})
</script>

<template>
  <div class="absolute inset-0 -z-10">
    <TresCanvas v-bind="gl">
      <TresPerspectiveCamera :position="[0, 0, 5]" />
      <OrbitControls :enableZoom="false" :enablePan="false" :autoRotate="true" />
      <TresAmbientLight :intensity="0.5" />
      <TresDirectionalLight :position="[1, 1, 1]" :intensity="0.8" />
      <TresMesh :position="[0, 0, 0]">
        <TresTorusKnotGeometry :args="[1, 0.3, 128, 16]" />
        <TresMeshStandardMaterial :color="0x6366f1" :metalness="0.5" :roughness="0.2" />
      </TresMesh>
    </TresCanvas>
  </div>
</template>