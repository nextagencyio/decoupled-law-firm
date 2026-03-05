'use client'

import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Hartwell & Crane LLP'
  const subtitle = (homepageContent as any)?.heroSubtitle || 'Experienced. Principled. Results-Driven.'
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 text-white py-20 md:py-28">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=2000&q=80&fit=crop"
          alt="Law books and courthouse"
          className="h-full w-full object-cover opacity-18"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/85 to-primary-800/75" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Distinguished Legal Counsel
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl text-slate-300 mb-8">{subtitle}</p>}
          {description && (
            <div className="text-lg text-slate-400 max-w-2xl" dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>
      </div>
    </section>
  )
}
