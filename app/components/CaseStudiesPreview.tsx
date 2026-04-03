'use client'

import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GQL_FEATURED_CASE_STUDIES } from '@/lib/queries'
import { DrupalCaseStudy } from '@/lib/types'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface Data { nodeCaseStudies: { nodes: DrupalCaseStudy[] } }

export default function CaseStudiesPreview() {
  const { data, loading, error } = useQuery<Data>(GQL_FEATURED_CASE_STUDIES)
  const cases = data?.nodeCaseStudies?.nodes || []
  if (loading) return <section className="py-16 md:py-20 bg-slate-900 text-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold mb-4">Notable Results</h2></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{[1,2,3].map(i => <div key={i} className="bg-white/10 rounded-xl p-6 animate-pulse"><div className="h-6 bg-white/20 rounded w-3/4 mb-4" /><div className="h-4 bg-white/20 rounded w-1/2" /></div>)}</div></div></section>
  if (error || cases.length === 0) return null
  return (
    <section className="py-16 md:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12"><div><h2 className="text-3xl md:text-4xl font-bold mb-4">Notable Results</h2><p className="text-lg text-slate-300 max-w-2xl">Our track record speaks for itself. Here are some of our most significant achievements.</p></div><Link href="/case-studies" className="hidden md:flex items-center text-amber-500 hover:text-amber-400 font-medium">All Case Studies<ArrowRight className="w-4 h-4 ml-1" /></Link></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map(cs => (
            <Link key={cs.id} href={cs.path || `/case-studies/${cs.id}`} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              {cs.practiceArea && cs.practiceArea.length > 0 && <span className="inline-block text-amber-500 text-sm font-medium mb-2">{cs.practiceArea[0].name}</span>}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{cs.title}</h3>
              {cs.outcome && <div className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" /><span>{cs.outcome}</span></div>}
            </Link>
          ))}
        </div>
        <div className="text-center mt-10"><Link href="/case-studies" className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-colors font-bold">View All Case Studies<ArrowRight className="w-5 h-5 ml-2" /></Link></div>
      </div>
    </section>
  )
}
