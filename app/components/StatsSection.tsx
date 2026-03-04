'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

const defaultStats = [
  { value: '35+', label: 'Years of Experience' },
  { value: '5,000+', label: 'Cases Resolved' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '40+', label: 'Attorneys' },
]

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []
  const displayStats = stats.length > 0 ? stats : defaultStats

  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center divide-x divide-slate-200">
          {displayStats.map((stat: any, i: number) => (
            <div key={stat.id || i} className="px-8 py-4 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-600">{stat.value || stat.statValue}</div>
              <div className="text-slate-500 text-sm mt-1">{stat.label || stat.statLabel || stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
