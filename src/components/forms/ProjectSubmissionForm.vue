<script setup lang="ts">
import { reactive, ref, nextTick } from 'vue'
import type { VForm } from 'vuetify/components'
import { useFormSubmission } from '@/composables/useFormSubmission'
import { email, required, requiredChoice } from '@/utils/validation'
import FormIntro from './FormIntro.vue'
const form = ref<InstanceType<typeof VForm>>(); const success = ref<HTMLElement>()
const model = reactive({ name:'', organisation:'', email:'', phone:'', category:null as string|null, skills:'', description:'', duration:'', start:'', budget:'' })
const categories = ['Communication & media', 'Technology & digital', 'Research & analysis', 'Design & creative', 'Project & operations', 'Finance & administration', 'Training & facilitation', 'Other']
const { status, submit, dismiss } = useFormSubmission()
async function handleSubmit(){ dismiss(); const result=await form.value?.validate(); if(!result?.valid)return; await submit(()=>form.value?.reset()); await nextTick(); success.value?.focus() }
</script>
<template><v-card class="form-shell"><FormIntro title="Submit your project" description="Give us enough context to understand the work, the capability required and the practical timeline." />
  <div v-if="status==='success'" ref="success" class="success-panel" tabindex="-1" role="status"><h3>Your project brief has been captured.</h3><p>This prototype has simulated submission. A live service would review the requirement and contact you about the next step.</p><v-btn variant="text" color="primary" @click="dismiss">Submit another project</v-btn></div>
  <v-form v-else ref="form" @submit.prevent="handleSubmit"><div class="form-grid">
    <v-text-field v-model="model.name" label="Full name" autocomplete="name" :rules="[required('Full name')]" required/><v-text-field v-model="model.organisation" label="Organisation" autocomplete="organization" :rules="[required('Organisation')]" required/>
    <v-text-field v-model="model.email" label="Email" type="email" autocomplete="email" :rules="[required('Email'),email]" required/><v-text-field v-model="model.phone" label="Phone number (optional)" type="tel" autocomplete="tel"/>
    <v-select v-model="model.category" class="full" label="Project category" :items="categories" :rules="[requiredChoice('Project category')]" required/><v-textarea v-model="model.skills" class="full" label="Required skills" rows="3" :rules="[required('Required skills')]" required/>
    <v-textarea v-model="model.description" class="full" label="Project description" rows="5" :rules="[required('Project description')]" required/><v-text-field v-model="model.duration" label="Expected duration" placeholder="e.g. 6 weeks" :rules="[required('Expected duration')]" required/>
    <v-text-field v-model="model.start" label="Estimated start date" type="date" :rules="[required('Estimated start date')]" required/><v-text-field v-model="model.budget" class="full" label="Budget range (optional)" placeholder="Add an amount and currency, or write ‘to discuss’"/>
  </div><div class="form-actions"><v-btn type="submit" color="primary" size="large" :loading="status==='loading'">Submit Project</v-btn><span class="text-muted">No payment is taken on this website.</span></div></v-form>
</v-card></template>
<style scoped>h3{margin:0 0 6px}.success-panel p{margin:0 0 12px}@media(max-width:600px){.form-actions{align-items:flex-start;flex-direction:column}.form-actions .v-btn{width:100%}}</style>
