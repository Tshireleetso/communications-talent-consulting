<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { navigation } from '@/data/site'
const drawer = ref(false); const route = useRoute()
</script>
<template>
  <v-app-bar class="site-header" height="76" elevation="0">
    <div class="site-container header-inner">
      <RouterLink class="brand" to="/" aria-label="PT Communications home"><span>PT</span><strong>Communications</strong></RouterLink>
      <nav class="desktop-nav" aria-label="Main navigation">
        <RouterLink v-for="item in navigation" :key="item.to" :to="item.to" :class="{ active: route.path === item.to }">{{ item.label }}</RouterLink>
      </nav>
      <v-btn class="header-cta" to="/contact" color="primary">Start an Enquiry</v-btn>
      <v-btn class="menu-button" icon="mdi-menu" variant="text" aria-label="Open navigation" @click="drawer = true" />
    </div>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="right" temporary width="320">
    <div class="drawer-head"><span class="brand"><span>PT</span><strong>Communications</strong></span><v-btn icon="mdi-close" variant="text" aria-label="Close navigation" @click="drawer = false" /></div>
    <nav class="mobile-nav" aria-label="Mobile navigation"><RouterLink v-for="item in navigation" :key="item.to" :to="item.to" :class="{ active: route.path === item.to }" @click="drawer = false">{{ item.label }}<v-icon icon="mdi-arrow-right" size="18" /></RouterLink></nav>
    <v-btn class="mobile-cta" to="/contact" color="primary" size="large" block @click="drawer = false">Start an Enquiry</v-btn>
  </v-navigation-drawer>
</template>
<style scoped>
.site-header { border-bottom: 1px solid rgb(228 221 225 / 85%); background: rgb(248 244 246 / 94%) !important; backdrop-filter: blur(12px); }.header-inner { display: flex; align-items: center; height: 100%; gap: 22px; }
.brand { display: inline-flex; align-items: center; gap: 10px; color: var(--color-text); text-decoration: none; white-space: nowrap; }.brand span { display: grid; place-items: center; width: 37px; height: 37px; border-radius: 50%; color: var(--color-text); background: var(--color-primary); font-size: .76rem; font-weight: 850; letter-spacing: .05em; }.brand strong { font-size: .98rem; }
.desktop-nav { display: flex; align-items: center; gap: 20px; margin-left: auto; }.desktop-nav a { position: relative; padding: 26px 0 24px; color: var(--color-muted); font-size: .82rem; font-weight: 650; text-decoration: none; white-space: nowrap; }.desktop-nav a::after { content: ''; position: absolute; right: 0; bottom: 17px; left: 0; height: 2px; transform: scaleX(0); background: var(--color-primary); transition: transform .2s ease; }.desktop-nav a:hover, .desktop-nav a.active { color: var(--color-text); }.desktop-nav a.active::after { transform: scaleX(1); }.header-cta { margin-left: 6px; }.menu-button { display: none; margin-left: auto; }
.drawer-head { display: flex; align-items: center; justify-content: space-between; padding: 20px; border-bottom: 1px solid var(--color-border); }.mobile-nav { display: grid; padding: 16px; }.mobile-nav a { display: flex; justify-content: space-between; padding: 14px 10px; border-bottom: 1px solid var(--color-border); text-decoration: none; font-weight: 650; }.mobile-nav a.active { color: var(--color-text); background: #f5e9ef; }.mobile-cta { width: calc(100% - 32px); margin: 16px; }
@media (max-width: 1120px) { .desktop-nav, .header-cta { display: none; }.menu-button { display: inline-flex; } }
</style>
