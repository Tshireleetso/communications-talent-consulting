<script setup lang="ts">defineProps<{ title: string; description: string }>()</script>
<template><div class="form-intro"><span class="eyebrow">Tell us what you need</span><h2 class="section-title">{{ title }}</h2><p class="lead">{{ description }}</p></div></template>
<style scoped>.form-intro { margin-bottom: 36px; }.form-intro .lead { margin: 16px 0 0; font-size: 1rem; }</style>
