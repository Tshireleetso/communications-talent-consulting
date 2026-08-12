<script setup lang="ts">
import { reactive, ref, nextTick } from 'vue'
import type { VForm } from 'vuetify/components'
import { useFormSubmission } from '@/composables/useFormSubmission'
import { consent, email, required, requiredChoice, url } from '@/utils/validation'
import FormIntro from './FormIntro.vue'
const form=ref<InstanceType<typeof VForm>>(); const success=ref<HTMLElement>()
const model=reactive({name:'',email:'',phone:'',field:null as string|null,skills:'',experience:'',portfolio:'',linkedin:'',availability:'',consent:false})
const fields=['Communication & media','Technology & digital','Research & analysis','Design & creative','Project & operations','Finance & administration','Training & facilitation','Other']
const {status,submit,dismiss}=useFormSubmission()
async function handleSubmit(){dismiss();const result=await form.value?.validate();if(!result?.valid)return;await submit(()=>form.value?.reset());await nextTick();success.value?.focus()}
</script>
<template><v-card class="form-shell"><FormIntro title="Join the talent network" description="Share your practical experience, strengths and availability. Every application is reviewed before introductions are considered."/>
  <div v-if="status==='success'" ref="success" class="success-panel" tabindex="-1" role="status"><h3>Your application has been captured.</h3><p>This prototype has simulated submission. Joining the network does not guarantee project work.</p><v-btn variant="text" color="primary" @click="dismiss">Submit another application</v-btn></div>
  <v-form v-else ref="form" @submit.prevent="handleSubmit"><div class="form-grid">
    <v-text-field v-model="model.name" label="Full name" autocomplete="name" :rules="[required('Full name')]" required/><v-text-field v-model="model.email" label="Email" type="email" autocomplete="email" :rules="[required('Email'),email]" required/>
    <v-text-field v-model="model.phone" label="Phone number" type="tel" autocomplete="tel" :rules="[required('Phone number')]" required/><v-select v-model="model.field" label="Professional field" :items="fields" :rules="[requiredChoice('Professional field')]" required/>
    <v-textarea v-model="model.skills" class="full" label="Skills" rows="3" :rules="[required('Skills')]" required/><v-textarea v-model="model.experience" class="full" label="Experience summary" rows="5" :rules="[required('Experience summary')]" required/>
    <v-text-field v-model="model.portfolio" label="Portfolio URL" placeholder="https://" :rules="[required('Portfolio URL'),url(true)]" required/><v-text-field v-model="model.linkedin" label="LinkedIn URL (optional)" placeholder="https://" :rules="[url()]"/>
    <v-textarea v-model="model.availability" class="full" label="Availability" rows="2" :rules="[required('Availability')]" required/><v-checkbox v-model="model.consent" class="full" :rules="[consent]" label="I consent to PT – Communications reviewing my information and contacting me about suitable project opportunities." required/>
  </div><div class="form-actions"><v-btn type="submit" color="primary" size="large" :loading="status==='loading'">Submit Application</v-btn><span class="text-muted">Applications are reviewed; work is not guaranteed.</span></div></v-form>
</v-card></template>
<style scoped>h3{margin:0 0 6px}.success-panel p{margin:0 0 12px}@media(max-width:600px){.form-actions{align-items:flex-start;flex-direction:column}.form-actions .v-btn{width:100%}}</style>
