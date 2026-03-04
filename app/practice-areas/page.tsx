import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_PRACTICE_AREAS } from '@/lib/queries'
import { PracticeAreasData } from '@/lib/types'
import Header from '../components/Header'
import PracticeAreaCard from '../components/PracticeAreaCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Practice Areas | Hartwell & Crane LLP',
  description: 'Explore the legal practice areas offered by Hartwell & Crane LLP, including litigation, corporate law, real estate, employment law, estate planning, and family law.',
}

async function getPracticeAreas() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<PracticeAreasData>({
      query: GET_PRACTICE_AREAS,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodePracticeAreas?.nodes || []
  } catch (error) {
    console.error('Error fetching practice areas:', error)
    return []
  }
}

export default async function PracticeAreasPage() {
  const items = await getPracticeAreas()

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <section className="bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Legal Expertise
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Practice Areas
            </h1>
            <p className="text-lg text-slate-300">
              Comprehensive legal services across litigation, corporate law, real estate, employment law, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Practice Areas Yet</h2>
              <p className="text-gray-500">
                Practice Areas will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <PracticeAreaCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
