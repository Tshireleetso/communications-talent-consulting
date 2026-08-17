# AGENTS.md

## Scope and filesystem boundary

This file applies to this repository root and every directory beneath it.

- Treat the directory containing this file as the only writable project boundary.
- Create, edit, move, rename, or delete files only inside this directory or one of its descendants.
- Never modify any parent directory, sibling directory, user-profile configuration, global tool configuration, or other location outside this project.
- Reading outside the project is allowed when it is useful for context. In particular, agents may inspect images, documents, and other relevant reference material anywhere on the machine, but must not alter, move, rename, or delete those external files.
- Copy an external reference into the project only when the task requires a project-owned asset. Preserve the external original.
- Keep temporary files, generated artifacts, caches, and downloaded assets inside this project (or use an environment-provided temporary directory without altering existing external content).
- Before any destructive or recursive filesystem operation, resolve the target and verify that it is strictly inside this project directory. If that cannot be verified, do not perform the operation.
- Do not change global packages, global Git settings, editor settings outside this repository, or machine-level configuration. Ask before taking an action that cannot comply with this boundary.

## Project purpose

This is the responsive **PT – Communications** marketing and lead-capture website. It presents two connected services:

1. Strategic public relations, media, reputation, crisis, stakeholder, social, and broader communication support for organisations.
2. Human-reviewed matching of professionals to short-term, project-based opportunities.

The main audiences are organisations seeking communication support, clients/project leads seeking talent, and professionals seeking project opportunities. The tone should remain clear, credible, warm, practical, and human. Avoid inflated claims, recruitment-platform language, or copy that implies automated matching when the service is explicitly human reviewed.

## Technology and commands

- Vue 3 Single-File Components with TypeScript and the Composition API
- Vite
- Vuetify 3 and Material Design Icons
- Vue Router
- Vitest with jsdom and Vue Test Utils

Use the existing npm scripts:

- `npm run dev` — local development server
- `npm run build` — TypeScript checking followed by the production Vite build
- `npm run test` — run the Vitest suite once
- `npm run preview` — inspect the production build locally

Do not introduce a new framework, package manager, state library, CSS system, or dependency unless the requested change genuinely requires it. Do not edit `node_modules/` or hand-edit generated build output.

## Repository map

- `src/views/` contains route-level page compositions.
- `src/components/home/` contains homepage sections.
- `src/components/common/` contains reusable presentation components.
- `src/components/forms/` contains enquiry and application forms.
- `src/components/layout/` contains the shared header and footer.
- `src/data/site.ts` is the source for shared navigation, service, process, and trust content.
- `src/composables/` contains page metadata and simulated form-submission behaviour.
- `src/router/index.ts` owns routes, scrolling, and post-navigation heading focus.
- `src/plugins/vuetify.ts` owns the Vuetify theme and component defaults.
- `src/styles/variables.css` contains design tokens; `src/styles/global.css` contains site-wide layout and typography rules.
- `src/types/` contains shared TypeScript interfaces.
- `src/utils/` contains form validation and its tests.
- `public/` contains static source assets.
- `dist/` and archive files such as `dist*.zip` are generated deliverables, not source files. Rebuild them only when explicitly requested.

## Implementation conventions

- Follow the existing Vue Composition API and `<script setup lang="ts">` patterns.
- Keep route-specific composition in views and extract reusable UI into the appropriate component directory.
- Put shared, repeated content and navigation data in `src/data/site.ts`; keep truly page-specific copy with its view or section.
- Reuse existing CSS custom properties and Vuetify theme colours. When changing a core colour, keep `src/styles/variables.css` and `src/plugins/vuetify.ts` synchronized.
- Use the `@/` alias for source imports where practical.
- Preserve the established responsive layout primitives such as `site-container`, `site-section`, `card-grid`, and `two-grid` instead of duplicating them.
- Keep changes focused. Do not reformat unrelated compact components or rewrite working code solely for stylistic preference.
- Preserve the configured Vite base path unless deployment requirements explicitly change.
- Forms currently simulate submission and transmit or persist no data. Do not claim otherwise in UI copy. Centralize future transport logic in `src/composables/useFormSubmission.ts` (or a clearly named replacement service) and handle loading, success, validation, and network failure states.
- Never add real secrets or personal data to source control. Use ignored environment files and commit only documented example variables when configuration is needed.

## UX, content, and accessibility

- Maintain semantic landmarks and a logical heading hierarchy, normally one `h1` per route.
- Give interactive controls accessible names; associate form inputs with clear labels and errors.
- Preserve keyboard navigation, visible focus states, route-change heading focus, and reduced-motion behaviour.
- Do not communicate meaning through colour alone. Keep readable colour contrast at desktop and mobile sizes.
- Test layouts at narrow mobile widths as well as desktop widths. Avoid horizontal overflow and touch targets that are difficult to use.
- Every new route should include meaningful title and description metadata through `usePageMeta` and should be reflected in navigation only when appropriate.
- Calls to action should clearly identify whether they lead to communication support, talent sourcing, professional opportunities, or a general enquiry.
- Use South African/British English conventions already present in the site (for example, “organisations” and “programme”) unless supplied brand copy says otherwise.

## Verification and change hygiene

- Inspect the relevant implementation and nearby tests before editing.
- Preserve unrelated user changes and untracked files. Do not discard, overwrite, stage, or commit them unless explicitly asked.
- For content-only changes, review the affected route and responsive presentation.
- For logic, component, routing, form, theme, or dependency changes, run `npm run test` and `npm run build` before handoff when feasible.
- Add or update focused Vitest coverage when changing validation or other testable behaviour.
- Treat a successful build as necessary but not sufficient for visual work; inspect the rendered page when layout or styling changes materially.
- Report which checks ran and any checks that could not be completed. Do not hide warnings or failures.
- Do not create commits, branches, deployment artifacts, or publish the site unless the user asks.

