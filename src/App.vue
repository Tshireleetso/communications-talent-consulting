<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<template>
  <v-app>
    <AppHeader />
    <v-main>
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </v-main>
    <AppFooter />
  </v-app>
</template>
