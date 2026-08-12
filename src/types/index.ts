export interface NavItem { label: string; to: string }
export interface Feature { title: string; description: string; icon: string }
export interface ServicePath extends Feature { eyebrow: string; items: string[]; action: string; to: string }
export interface PageMeta { title: string; description: string }
export type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error'
