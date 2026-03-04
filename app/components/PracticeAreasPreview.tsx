'use client'

import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_FEATURED_PRACTICE_AREAS } from '@/lib/queries'
import { DrupalHomepage, DrupalPracticeArea } from '@/lib/types'
import { ArrowRight, Scale } from 'lucide-react'
import ResponsiveImage from './ResponsiveImage'

interface PracticeAreasPreviewProps { homepageContent?: DrupalHomepage | null }
interface FeaturedData { nodePracticeAreas: { nodes: DrupalPracticeArea[] } }

export default function PracticeAreasPreview({ homepageContent }: PracticeAreasPreviewProps) {
  const { data, loading, error } = useQuery<FeaturedData>(GET_FEATURED_PRACTICE_AREAS)
  const areas = data?.nodePracticeAreas?.nodes || []
  const sectionTitle = homepageContent?.featuredPracticesTitle || 'Our Practice Areas'

  if (loading) return (
    <section className="py-16 md:py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{sectionTitle}</h2></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{[1,2,3,4].map(i => <div key={i} className="bg-white rounded-xl shadow-sm animate-pulse"><div className="h-48 bg-gray-200 rounded-t-xl" /><div className="p-6"><div className="h-6 bg-gray-200 rounded w-3/4 mb-3" /><div className="h-4 bg-gray-200 rounded w-full" /></div></div>)}</div></div></section>
  )
  if (error || areas.length === 0) return null

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{sectionTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We provide comprehensive legal services across key practice areas to protect your interests.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map(area => (
            <Link key={area.id} href={area.path || `/practice-areas/${area.id}`} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-900">
                {area.image?.url ? <ResponsiveImage src={area.image.url} alt={area.image.alt || area.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" variations={area.image.variations} targetWidth={400} /> : <div className="absolute inset-0 flex items-center justify-center"><Scale className="w-16 h-16 text-white/50" /></div>}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">{area.title}</h3>
                {area.body?.summary && <p className="text-gray-600 text-sm mb-4 line-clamp-2">{area.body.summary}</p>}
                <div className="flex items-center text-amber-600 font-medium group-hover:gap-2 transition-all">Learn more<ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /></div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/practice-areas" className="inline-flex items-center px-8 py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-semibold">View All Practice Areas<ArrowRight className="w-5 h-5 ml-2" /></Link>
        </div>
      </div>
    </section>
  )
}
