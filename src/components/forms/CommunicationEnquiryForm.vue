<script setup lang="ts">
import { reactive, ref, nextTick } from 'vue'
import type { VForm } from 'vuetify/components'
import { useFormSubmission } from '@/composables/useFormSubmission'
import { email, required, requiredChoice } from '@/utils/validation'
import FormIntro from './FormIntro.vue'
const form = ref<InstanceType<typeof VForm>>(); const success = ref<HTMLElement>()
const model = reactive({ name: '', organisation: '', email: '', phone: '', support: null as string | null, challenge: '', contact: null as string | null })
const supportOptions = ['PR strategy', 'Media relations', 'Crisis communication', 'Reputation management', 'Stakeholder communication', 'Social media', 'Campaign planning', 'Communication audit', 'Other']
const { status, submit, dismiss } = useFormSubmission()
async function handleSubmit() { dismiss(); const result = await form.value?.validate(); if (!result?.valid) return; await submit(() => { form.value?.reset() }); await nextTick(); success.value?.focus() }
</script>
<template><v-card class="form-shell"><FormIntro title="Request communication support" description="Share the challenge, context and support you are looking for. We will use this to guide the first conversation." />
  <div v-if="status === 'success'" ref="success" class="success-panel" tabindex="-1" role="status"><h3>Thank you—your enquiry is ready for review.</h3><p>This prototype has simulated a successful submission. In production, your details would be sent securely to the PT – Communications team.</p><v-btn variant="text" color="primary" @click="dismiss">Send another enquiry</v-btn></div>
  <v-form v-else ref="form" @submit.prevent="handleSubmit"><div class="form-grid">
    <v-text-field v-model="model.name" label="Full name" autocomplete="name" :rules="[required('Full name')]" required />
    <v-text-field v-model="model.organisation" label="Organisation" autocomplete="organization" :rules="[required('Organisation')]" required />
    <v-text-field v-model="model.email" label="Email" type="email" autocomplete="email" :rules="[required('Email'), email]" required />
    <v-text-field v-model="model.phone" label="Phone number (optional)" type="tel" autocomplete="tel" />
    <v-select v-model="model.support" class="full" label="Type of communication support" :items="supportOptions" :rules="[requiredChoice('Type of support')]" required />
    <v-textarea v-model="model.challenge" class="full" label="Describe the challenge" rows="5" :rules="[required('Challenge description')]" required />
    <v-select v-model="model.contact" class="full" label="Preferred contact method" :items="['Email', 'Phone']" :rules="[requiredChoice('Preferred contact method')]" required />
  </div><div class="form-actions"><v-btn type="submit" color="primary" size="large" :loading="status === 'loading'">Submit Enquiry</v-btn><span class="text-muted">Fields marked required must be completed.</span></div></v-form>
</v-card></template>
<style scoped>h3 { margin: 0 0 6px; }.success-panel p { margin: 0 0 12px; }@media(max-width:600px){.form-actions{align-items:flex-start;flex-direction:column}.form-actions .v-btn{width:100%}}</style>
