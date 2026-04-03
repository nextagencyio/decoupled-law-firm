// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeAttorney {
  id: string;
  barAdmissions: string;
  body: { value: string; summary?: string };
  education: { value: string };
  email: string;
  office: string;
  path: string;
  phone: string;
  photo: { url: string; alt: string; width: number; height: number };
  practiceArea: any[];
  role: any[];
  title: string;
}

export interface NodeCaseStudy {
  id: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  outcome: string;
  path: string;
  practiceArea: any[];
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredPracticesTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeNews {
  id: string;
  body: { value: string; summary?: string };
  category: any[];
  featured: boolean;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodePracticeArea {
  id: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  title: string;
}
