import { describe, expect, it } from 'vitest'
import { consent, email, required, url } from './validation'

describe('form validation', () => {
  it('rejects blank required values', () => expect(required('Name')('   ')).toBe('Name is required.'))
  it('accepts a valid email and rejects an invalid one', () => { expect(email('person@example.com')).toBe(true); expect(email('person@')).not.toBe(true) })
  it('allows empty optional URLs and validates supplied URLs', () => { expect(url()('')).toBe(true); expect(url()('https://example.com/work')).toBe(true); expect(url()('example')).not.toBe(true) })
  it('requires explicit consent', () => { expect(consent(true)).toBe(true); expect(consent(false)).not.toBe(true) })
})
