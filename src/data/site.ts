import type { Feature, NavItem, ServicePath } from '@/types'

export const navigation: NavItem[] = [
  { label: 'Home', to: '/' }, { label: 'Communication Services', to: '/communication-services' },
  { label: 'Find Talent', to: '/find-talent' }, { label: 'Find Opportunities', to: '/opportunities' },
  { label: 'About', to: '/about' }, { label: 'Contact', to: '/contact' },
]

export const communicationServices: Feature[] = [
  { title: 'Public relations strategy', description: 'A focused plan for building understanding, credibility and productive relationships.', icon: 'mdi-compass-outline' },
  { title: 'Media relations', description: 'Clear stories, media materials and thoughtful engagement with relevant journalists.', icon: 'mdi-newspaper-variant-outline' },
  { title: 'Crisis communication', description: 'Practical preparation and calm, timely communication when the stakes are high.', icon: 'mdi-shield-alert-outline' },
  { title: 'Reputation management', description: 'Advice and action that help protect trust over the long term.', icon: 'mdi-account-star-outline' },
  { title: 'Stakeholder communication', description: 'Relevant communication for the people affected by your decisions and work.', icon: 'mdi-account-group-outline' },
  { title: 'Social media strategy', description: 'Purposeful content, channel planning and management aligned to your goals.', icon: 'mdi-message-text-outline' },
  { title: 'Campaign planning', description: 'Coordinated messages, channels and activities built around a clear outcome.', icon: 'mdi-bullhorn-outline' },
  { title: 'Public messaging', description: 'Strong positioning and language that makes complex ideas easier to understand.', icon: 'mdi-message-processing-outline' },
  { title: 'Communication audits', description: 'Research-led reviews that identify gaps, risks and practical opportunities.', icon: 'mdi-clipboard-search-outline' },
]

export const talentServices: Feature[] = [
  { title: 'Requirement assessment', description: 'We clarify the project, deliverables, skills and practical constraints.', icon: 'mdi-file-search-outline' },
  { title: 'Talent sourcing', description: 'We look across suitable professional fields for relevant capability.', icon: 'mdi-account-search-outline' },
  { title: 'Human screening', description: 'Applications, work history and fit are reviewed by a person.', icon: 'mdi-account-check-outline' },
  { title: 'Portfolio review', description: 'Relevant work samples help us assess practical capability.', icon: 'mdi-folder-star-outline' },
  { title: 'Experience review', description: 'We consider the experience that matters for your specific brief.', icon: 'mdi-briefcase-check-outline' },
  { title: 'Relevant shortlist', description: 'You receive a focused selection instead of an unfiltered database.', icon: 'mdi-format-list-checks' },
  { title: 'Client introductions', description: 'We make clear, personal introductions to suitable professionals.', icon: 'mdi-account-switch-outline' },
  { title: 'Project placements', description: 'Support for short-term, project-based professional engagements.', icon: 'mdi-calendar-check-outline' },
]

export const servicePaths: ServicePath[] = [
  { eyebrow: 'For organisations', title: 'Public Relations, Media & Communication', description: 'Get strategic, practical support to communicate clearly, manage reputation and build stronger relationships.', icon: 'mdi-message-badge-outline', items: ['PR and media relations', 'Crisis and reputation support', 'Social and stakeholder communication'], action: 'Explore Communication Services', to: '/communication-services' },
  { eyebrow: 'For clients & project leads', title: 'Project Talent Connections', description: 'Find screened professionals for focused, short-term work—without assessing unfamiliar candidates alone.', icon: 'mdi-account-multiple-check-outline', items: ['Clear project assessment', 'Human-reviewed professionals', 'A relevant, focused shortlist'], action: 'Find Project Talent', to: '/find-talent' },
]

export const processSteps = [
  { title: 'Share the requirement', description: 'Tell us what your project needs.' },
  { title: 'We assess talent', description: 'We identify and review suitable professionals.' },
  { title: 'Receive a shortlist', description: 'We introduce a focused selection of relevant people.' },
  { title: 'Choose who fits', description: 'You select and engage your preferred professional.' },
]

export const trustPoints: Feature[] = [
  { title: 'Human-reviewed applications', description: 'Every application receives a considered review.', icon: 'mdi-account-eye-outline' },
  { title: 'Portfolio and experience assessment', description: 'We look for evidence relevant to the work.', icon: 'mdi-file-certificate-outline' },
  { title: 'Clear project requirements', description: 'A useful match starts with a well-defined brief.', icon: 'mdi-text-box-check-outline' },
  { title: 'Relevant candidate matching', description: 'Shortlists are shaped around each project.', icon: 'mdi-vector-link' },
  { title: 'Personal introductions', description: 'People connect through a supported process.', icon: 'mdi-handshake-outline' },
  { title: 'One connected service', description: 'Communication and project support live within one business.', icon: 'mdi-source-branch' },
]
