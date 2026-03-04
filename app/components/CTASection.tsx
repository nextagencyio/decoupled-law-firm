'use client'

import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'Ready to Discuss Your Legal Needs?'
  const description = (homepageContent as any)?.ctaDescription?.processed || ''
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Schedule a Consultation'
  const secondaryLabel = (homepageContent as any)?.ctaSecondary || 'Our Practice Areas'

  return (
    <section className="bg-primary-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 font-display">{title}</h2>
        {description && (
          <div className="text-slate-300 mb-8 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/contact" className="px-8 py-4 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors font-semibold">
            {primaryLabel}
          </a>
          <a href="/practice-areas" className="px-8 py-4 border-2 border-slate-400 text-slate-200 rounded-lg hover:bg-white/10 transition-colors font-semibold">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
