import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_ATTORNEYS } from '@/lib/queries'
import { AttorneysData } from '@/lib/types'
import Header from '../components/Header'
import AttorneyCard from '../components/AttorneyCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Our Attorneys | Hartwell & Crane LLP',
  description: 'Meet the experienced attorneys at Hartwell & Crane LLP. Our team of dedicated legal professionals brings decades of expertise across litigation, corporate law, real estate, and employment law.',
}

async function getAttorneys() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<AttorneysData>({
      query: GET_ATTORNEYS,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeAttorneys?.nodes || []
  } catch (error) {
    console.error('Error fetching attorneys:', error)
    return []
  }
}

export default async function AttorneysPage() {
  const items = await getAttorneys()

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <section className="bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Our Team
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Our Attorneys
            </h1>
            <p className="text-lg text-slate-300">
              Meet our team of dedicated legal professionals with decades of experience across multiple practice areas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Attorneys Yet</h2>
              <p className="text-gray-500">
                Attorneys will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <AttorneyCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
