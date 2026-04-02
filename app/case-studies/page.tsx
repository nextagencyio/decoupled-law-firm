import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_CASE_STUDIES } from '@/lib/queries'
import { CaseStudiesData } from '@/lib/types'
import Header from '../components/Header'
import CaseStudyCard from '../components/CaseStudyCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Case Studies | Hartwell & Crane LLP',
  description: 'Explore notable case outcomes and legal victories achieved by Hartwell & Crane LLP across litigation, corporate law, real estate, and employment disputes.',
}

async function getCaseStudies() {
  try {
    const client = getClient()
    const data = await client.raw(GET_CASE_STUDIES, { first: 50 })
    return data?.nodeCaseStudies?.nodes || []
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return []
  }
}

export default async function CaseStudiesPage() {
  const items = await getCaseStudies()

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <section className="bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Results
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Case Studies
            </h1>
            <p className="text-lg text-slate-300">
              Notable case outcomes and legal victories achieved by our attorneys across multiple practice areas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Case Studies Yet</h2>
              <p className="text-gray-500">
                Case Studies will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item: any) => (
                <CaseStudyCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
