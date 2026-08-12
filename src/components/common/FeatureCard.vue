<script setup lang="ts">
import type { Feature } from '@/types'
defineProps<{ feature: Feature }>()
</script>
<template>
  <article class="feature-card">
    <v-icon class="feature-card__icon" :icon="feature.icon" size="26" aria-hidden="true" />
    <h3>{{ feature.title }}</h3>
    <p>{{ feature.description }}</p>
  </article>
</template>
<style scoped>
.feature-card { height: 100%; padding: 26px; border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface); transition: transform .2s ease, border-color .2s ease; }
.feature-card:hover { transform: translateY(-3px); border-color: var(--color-primary-light); }.feature-card__icon { color: var(--color-primary); margin-bottom: 18px; }
h3 { margin: 0 0 8px; font-size: 1.12rem; line-height: 1.3; }p { margin: 0; color: var(--color-muted); font-size: .95rem; }
</style>
