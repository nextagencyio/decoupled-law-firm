/**
 * Demo Mode Module
 *
 * This file contains ALL demo/mock mode functionality.
 * To remove demo mode from a real project:
 * 1. Delete this file (lib/demo-mode.ts)
 * 2. Delete the data/mock/ directory
 * 3. Delete app/components/DemoModeBanner.tsx
 * 4. Remove DemoModeBanner from app/layout.tsx
 * 5. Remove the demo mode check from app/api/graphql/route.ts
 */

import homepageData from '@/data/mock/homepage.json'
import practiceAreasData from '@/data/mock/practice-areas.json'
import attorneysData from '@/data/mock/attorneys.json'
import caseStudiesData from '@/data/mock/case-studies.json'
import newsData from '@/data/mock/news.json'
import routesData from '@/data/mock/routes.json'

export function isDemoMode(): boolean {
  return process.env.NEXT_PUBLIC_DEMO_MODE !== 'false'
}

const mockDataMap: Record<string, any> = {
  'homepage.json': homepageData,
  'practice-areas.json': practiceAreasData,
  'attorneys.json': attorneysData,
  'case-studies.json': caseStudiesData,
  'news.json': newsData,
  'routes.json': routesData,
}

function loadMockData(filename: string): any {
  return mockDataMap[filename] || null
}

export function handleMockQuery(body: string): any {
  try {
    const { query, variables } = JSON.parse(body)

    if (variables?.path) {
      const routePath = variables.path
      const routes = loadMockData('routes.json')
      if (routes && routes[routePath]) {
        return routes[routePath]
      }
    }

    if (query.includes('GetHomepageData') || query.includes('nodeHomepages')) {
      return loadMockData('homepage.json')
    }

    if (query.includes('GetPracticeAreas') || query.includes('nodePracticeAreas')) {
      return loadMockData('practice-areas.json')
    }

    if (query.includes('GetAttorneys') || query.includes('nodeAttorneys')) {
      return loadMockData('attorneys.json')
    }

    if (query.includes('GetCaseStudies') || query.includes('nodeCaseStudies')) {
      return loadMockData('case-studies.json')
    }

    if (query.includes('GetNews') || query.includes('nodeNews')) {
      return loadMockData('news.json')
    }

    return { data: {} }
  } catch (error) {
    console.error('Mock query error:', error)
    return { data: {}, errors: [{ message: 'Mock data error' }] }
  }
}
