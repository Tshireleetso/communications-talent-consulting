export type Rule = (value: unknown) => true | string
export const required = (label: string): Rule => (value) => Boolean(String(value ?? '').trim()) || `${label} is required.`
export const requiredChoice = (label: string): Rule => (value) => Boolean(value) || `Select ${label.toLowerCase()}.`
export const email: Rule = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value ?? '')) || 'Enter a valid email address.'
export const url = (requiredValue = false): Rule => (value) => {
  if (!value && !requiredValue) return true
  try { const parsed = new URL(String(value)); return ['http:', 'https:'].includes(parsed.protocol) || 'Enter a valid web address.' } catch { return 'Enter a valid web address beginning with http:// or https://.' }
}
export const consent: Rule = (value) => value === true || 'Consent is required to submit your application.'
