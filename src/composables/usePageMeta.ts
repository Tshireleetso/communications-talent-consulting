import { watchEffect } from 'vue'
import type { PageMeta } from '@/types'

function setMeta(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!element) { element = document.createElement('meta'); element.setAttribute('property', property); document.head.appendChild(element) }
  element.content = content
}

export function usePageMeta(meta: PageMeta) {
  watchEffect(() => {
    document.title = `${meta.title} | PT – Communications`
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', meta.description)
    setMeta('og:title', meta.title); setMeta('og:description', meta.description); setMeta('og:type', 'website')
  })
}
