import Link from 'next/link'
import { DrupalPracticeArea } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight } from 'lucide-react'

interface PracticeAreaCardProps {
  item: DrupalPracticeArea
}

export default function PracticeAreaCard({ item }: PracticeAreaCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 hover:border-accent-300 transition-colors">
      {(item as any).image?.url && (
        <div className="relative h-40 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
          <ResponsiveImage
            src={(item as any).image.url}
            alt={(item as any).image.alt || item.title}
            fill
            className="object-cover"
            variations={(item as any).image.variations}
            targetWidth={400}
          />
        </div>
      )}

      <div className="text-accent-600 text-xs font-semibold tracking-wider uppercase mb-2">
        Practice Area
      </div>

      <h3 className="text-lg font-semibold text-primary-900 mb-2">
        {item.title}
      </h3>

      {(item as any).body?.processed && (
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">
          {(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}
        </p>
      )}

      <Link
        href={item.path || '#'}
        className="inline-flex items-center text-accent-600 text-sm font-medium hover:text-accent-700 transition-colors"
      >
        Learn More <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  )
}
