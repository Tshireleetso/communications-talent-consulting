<script setup lang="ts">
import type { ServicePath } from '@/types'
defineProps<{ service: ServicePath; index: number }>()
</script>
<template>
  <article class="service-card">
    <div class="service-card__top"><span>0{{ index + 1 }}</span><v-icon :icon="service.icon" size="32" aria-hidden="true" /></div>
    <p class="service-card__eyebrow">{{ service.eyebrow }}</p>
    <h2>{{ service.title }}</h2>
    <p class="service-card__description">{{ service.description }}</p>
    <details><summary>See what this includes</summary><ul><li v-for="item in service.items" :key="item"><v-icon icon="mdi-check" size="17" aria-hidden="true" />{{ item }}</li></ul></details>
    <v-btn :to="service.to" color="primary" size="large" append-icon="mdi-arrow-right" block>{{ service.action }}</v-btn>
  </article>
</template>
<style scoped>
.service-card { display: flex; flex-direction: column; min-height: 430px; padding: clamp(28px, 4vw, 44px); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: white; box-shadow: var(--shadow-card); }
.service-card__top { display: flex; justify-content: space-between; color: var(--color-text); }.service-card__top span { color: var(--color-accent); font-weight: 800; letter-spacing: .08em; }
.service-card__eyebrow { margin: 40px 0 12px; color: var(--color-text); font-size: .76rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
h2 { margin: 0; font-size: clamp(1.75rem, 3vw, 2.4rem); line-height: 1.12; letter-spacing: -.035em; }.service-card__description { margin: 18px 0 22px; color: var(--color-muted); }
details{margin:0 0 26px;color:var(--color-text)}summary{cursor:pointer;font-weight:750;text-decoration:underline;text-decoration-color:var(--color-accent);text-underline-offset:4px}ul{display:grid;gap:10px;padding:14px 0 0;margin:0;list-style:none;color:var(--color-text)}li{display:flex;gap:10px;align-items:center}.v-btn{margin-top:auto;min-height:52px;font-weight:800}
@media (max-width: 700px) { .service-card { min-height: auto; } }
</style>
