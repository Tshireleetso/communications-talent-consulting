<script setup lang="ts">defineProps<{ number: number; title: string; description: string }>()</script>
<template><article class="step"><span>{{ String(number).padStart(2, '0') }}</span><h3>{{ title }}</h3><p>{{ description }}</p></article></template>
<style scoped>.step { padding: 26px 24px 10px 0; border-top: 1px solid #bd8ca6; }.step span { color: var(--color-primary-light); font-size: .8rem; font-weight: 800; letter-spacing: .1em; }h3 { margin: 22px 0 8px; font-size: 1.2rem; }p { margin: 0; color: #f1e7ec; }</style>
