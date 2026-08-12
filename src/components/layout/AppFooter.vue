<script setup lang="ts">import { navigation } from '@/data/site'</script>
<template>
  <footer class="footer"><div class="site-container footer-grid">
    <div><RouterLink class="footer-brand" to="/">PT – Communications</RouterLink><p>Strategic communication support and trusted connections to screened professionals for short-term projects.</p></div>
    <div><h2>Explore</h2><nav><RouterLink v-for="item in navigation" :key="item.to" :to="item.to">{{ item.label }}</RouterLink></nav></div>
    <div><h2>Connect</h2><a href="mailto:hello@example.com">hello@example.com</a><div class="socials"><a href="#" aria-label="LinkedIn placeholder">LinkedIn</a><a href="#" aria-label="Instagram placeholder">Instagram</a></div><a href="#">Privacy notice</a></div>
  </div><div class="site-container footer-bottom">© {{ new Date().getFullYear() }} PT – Communications. All rights reserved. <span>Provisional contact and legal details.</span></div></footer>
</template>
<style scoped>
.footer { padding: 72px 0 24px; color: #f8edf3; background: var(--color-primary-dark); }.footer-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 64px; }.footer-brand { color: white; font-size: 1.35rem; font-weight: 800; text-decoration: none; }.footer p { max-width: 430px; color: #ecdbe4; }.footer h2 { margin: 0 0 16px; color: var(--color-primary-light); font-size: .8rem; letter-spacing: .1em; text-transform: uppercase; }.footer nav { display: grid; grid-template-columns: 1fr 1fr; gap: 9px 20px; }.footer a { color: #f8edf3; text-decoration: none; }.footer a:hover { color: white; text-decoration: underline; }.socials { display: flex; gap: 16px; margin: 14px 0; }.footer-bottom { display: flex; justify-content: space-between; gap: 20px; margin-top: 56px; padding-top: 22px; border-top: 1px solid #b87899; color: #e1cbd7; font-size: .82rem; }
@media (max-width: 760px) { .footer-grid { grid-template-columns: 1fr; gap: 36px; }.footer-bottom { flex-direction: column; }.footer nav { grid-template-columns: 1fr; } }
</style>
