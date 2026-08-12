# PT – Communications

A responsive service website for a two-part consulting business: strategic communication support and human-reviewed connections to professionals for short-term projects.

## Technology

- Vue 3 with TypeScript and Composition API
- Vite
- Vuetify 3
- Vue Router
- Vitest

## Project structure

```text
src/
  components/   Reusable common, layout, home and form components
  composables/  Simulated submission and route metadata logic
  data/         Typed service, navigation and process content
  plugins/      Vuetify configuration
  router/       Routes and navigation behaviour
  styles/       Design tokens and global styles
  types/        Shared TypeScript interfaces
  utils/        Form validation helpers
  views/        Route-level page compositions
```

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, run tests with `npm run test`, and inspect the production build with `npm run preview`.

## Change the visual system

The Vuetify theme is configured in `src/plugins/vuetify.ts`. Shared CSS variables are in `src/styles/variables.css`, and site-wide typography and layout rules are in `src/styles/global.css`.

To change the primary colour, update `primary` in the Vuetify theme and `--color-primary` plus `--color-primary-dark` in `variables.css`.

## Update content

Shared navigation, service lists, process steps and trust points live in `src/data/site.ts`. Page-specific explanatory copy lives in the matching file under `src/views`, while homepage section copy lives in `src/components/home`.

## Connect a future API

All forms use `src/composables/useFormSubmission.ts`. Replace its simulated delay with an injected API request, retain the exposed loading and result states, and handle server-side validation or network errors there. No form data is currently transmitted or stored.
