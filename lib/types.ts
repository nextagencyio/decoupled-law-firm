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
  featuredPracticesTitle?: string
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

// Practice Area
export interface DrupalPracticeArea extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
}

export interface PracticeAreasData {
  nodePracticeAreas: {
    nodes: DrupalPracticeArea[]
  }
}

// Attorney
export interface DrupalAttorney extends DrupalNode {
  body?: {
    processed: string
  }
  practiceArea?: DrupalTerm[]
  role?: DrupalTerm[]
  email?: string
  phone?: string
  office?: string
  photo?: DrupalImage
  education?: {
    processed: string
  }
  barAdmissions?: string
}

export interface AttorneysData {
  nodeAttorneys: {
    nodes: DrupalAttorney[]
  }
}

// Case Study
export interface DrupalCaseStudy extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  practiceArea?: DrupalTerm[]
  outcome?: string
  image?: DrupalImage
}

export interface CaseStudiesData {
  nodeCaseStudies: {
    nodes: DrupalCaseStudy[]
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
