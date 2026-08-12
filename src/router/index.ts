import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) { if (savedPosition) return savedPosition; if (to.hash) return { el: to.hash, top: 90, behavior: 'smooth' }; return { top: 0 } },
  routes: [
    { path: '/', component: HomeView },
    { path: '/communication-services', component: () => import('@/views/CommunicationServicesView.vue') },
    { path: '/find-talent', component: () => import('@/views/FindTalentView.vue') },
    { path: '/opportunities', component: () => import('@/views/OpportunitiesView.vue') },
    { path: '/about', component: () => import('@/views/AboutView.vue') },
    { path: '/contact', component: () => import('@/views/ContactView.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('@/views/NotFoundView.vue') },
  ],
})
router.afterEach(() => { window.setTimeout(() => { const heading = document.querySelector<HTMLElement>('main h1'); if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }) } }, 0) })
export default router
