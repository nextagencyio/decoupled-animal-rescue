// Base node type
export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredAnimalsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Adoptable Animal
export interface DrupalAnimal extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  species?: DrupalTerm[]
  breed?: string
  age?: string
  gender?: string
  adoptionFee?: string
  animalStatus?: DrupalTerm[]
  photo?: DrupalImage
  goodWithKids?: boolean
  goodWithPets?: boolean
}

export interface AnimalsData {
  nodeAnimals: {
    nodes: DrupalAnimal[]
  }
}

// Event
export interface DrupalEvent extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  eventDate?: {
    timestamp: number
  }
  endDate?: {
    timestamp: number
  }
  location?: string
  eventType?: DrupalTerm[]
  registrationUrl?: string
  image?: DrupalImage
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

// Volunteer Opportunity
export interface DrupalVolunteerOpportunity extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  commitment?: string
  location?: string
  skillsNeeded?: string
  image?: DrupalImage
}

export interface VolunteerOpportunitiesData {
  nodeVolunteerOpportunities: {
    nodes: DrupalVolunteerOpportunity[]
  }
}

// News Article
export interface DrupalNews extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
  category?: DrupalTerm[]
  featured?: boolean
}

export interface NewsData {
  nodeNewsItems: {
    nodes: DrupalNews[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: Array<{
    name: string
    url: string
    width: number
    height: number
  }>
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
