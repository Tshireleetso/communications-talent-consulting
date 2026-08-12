<template>
  <section class="hero">
    <div class="site-container hero-grid">
      <div class="hero-copy">
        <span class="eyebrow">Communication support + project talent</span>
        <h1 class="display-title">Move important work forward.</h1>
        <p class="lead">Get strategic communication support or find a screened professional for a short-term project.</p>
        <p class="action-label">What do you need?</p>
        <div class="hero-actions">
          <v-btn to="/communication-services" color="primary" size="x-large" append-icon="mdi-arrow-right">Communication Support</v-btn>
          <v-btn to="/find-talent" color="primary" size="x-large" append-icon="mdi-arrow-right">Project Talent</v-btn>
        </div>
        <RouterLink class="quiet-link" to="/opportunities">Looking for project work? Join the Talent Network <v-icon icon="mdi-arrow-right" size="18" /></RouterLink>
      </div>
      <aside class="hero-note" aria-label="Available services">
        <v-icon icon="mdi-message-badge-outline" size="32" />
        <span>Two focused services</span>
        <p>Clear advice for your message. Relevant people for your project.</p>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.hero { min-height: calc(100vh - 76px); display: grid; align-items: center; padding: clamp(48px, 7vw, 92px) 0; background: radial-gradient(circle at 88% 12%, var(--color-primary-light) 0, transparent 30%), linear-gradient(135deg, #f3e4ec 0%, var(--color-bg) 65%); }
.hero-grid { display: grid; grid-template-columns: minmax(0, 1fr) 270px; align-items: center; gap: 64px; }
.hero-copy { max-width: 900px; }
.lead { max-width: 650px; margin: 24px 0 30px; color: var(--color-muted); }
.action-label { margin: 0 0 10px; font-size: .82rem; font-weight: 850; letter-spacing: .08em; text-transform: uppercase; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 14px; }
.hero-actions .v-btn { min-width: 250px; min-height: 58px; font-weight: 800; }
.quiet-link { display: inline-flex; align-items: center; gap: 8px; margin-top: 22px; color: var(--color-primary-dark); font-weight: 750; text-decoration-color: var(--color-primary); text-underline-offset: 5px; }
.hero-note { display: grid; gap: 14px; padding: 30px; border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: rgb(255 255 255 / 82%); }
.hero-note > .v-icon { color: var(--color-primary); }
.hero-note span { color: var(--color-text); font-size: .74rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
.hero-note p { margin: 0; font-size: 1.05rem; font-weight: 700; line-height: 1.45; }

@media (max-width: 900px) {
  .hero { min-height: auto; }
  .hero-grid { grid-template-columns: 1fr; }
  .hero-note { display: none; }
}

@media (max-width: 600px) {
  .hero-actions { display: grid; }
  .hero-actions .v-btn { min-width: 0; width: 100%; height: auto; min-height: 52px; padding-block: 10px; white-space: normal; }
  .quiet-link { font-size: .94rem; }
}
</style>
