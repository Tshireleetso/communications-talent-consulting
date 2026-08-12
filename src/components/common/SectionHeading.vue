<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; description?: string; align?: 'left' | 'center' }>()
</script>
<template>
  <div class="heading" :class="{ 'heading--center': align === 'center' }">
    <span class="eyebrow">{{ eyebrow }}</span>
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="description" class="lead">{{ description }}</p>
  </div>
</template>
<style scoped>
.heading { margin-bottom: clamp(32px, 5vw, 52px); }.heading .lead { margin: 18px 0 0; }
.heading--center { text-align: center; margin-inline: auto; }.heading--center .lead { margin-inline: auto; }
</style>
