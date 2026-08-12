import { ref } from 'vue'
import type { SubmissionStatus } from '@/types'

export function useFormSubmission() {
  const status = ref<SubmissionStatus>('idle')
  async function submit(onSuccess: () => void) {
    if (status.value === 'loading') return
    status.value = 'loading'
    await new Promise((resolve) => window.setTimeout(resolve, 850))
    onSuccess()
    status.value = 'success'
  }
  function dismiss() { status.value = 'idle' }
  return { status, submit, dismiss }
}
