'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Scale, BookOpen, Briefcase, Shield, FileText, Users } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const practiceHighlights = [
  { icon: Scale, title: 'Litigation & Dispute Resolution', description: 'Strategic advocacy in complex commercial, civil, and appellate litigation with a proven track record of favorable outcomes.' },
  { icon: BookOpen, title: 'Corporate & Securities', description: 'Comprehensive corporate counsel for mergers, acquisitions, governance, and regulatory compliance matters.' },
  { icon: Briefcase, title: 'Real Estate & Land Use', description: 'Full-service real estate representation from acquisition and development to leasing and zoning matters.' },
  { icon: Shield, title: 'Employment & Labor', description: 'Protecting the interests of employers and employees through proactive counsel and vigorous representation.' },
  { icon: FileText, title: 'Estate Planning & Probate', description: 'Thoughtful estate planning strategies and skilled probate administration to preserve and transfer wealth.' },
  { icon: Users, title: 'Family Law', description: 'Compassionate and effective representation in divorce, custody, support, and other family law proceedings.' },
]

const credentials = [
  'Best Lawyers in America',
  'Super Lawyers',
  'Martindale-Hubbell AV Rated',
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Practice Highlights Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-accent-600 text-sm font-semibold tracking-wider uppercase mb-2">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-display">
              Practice Areas
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our attorneys bring decades of experience and a commitment to excellence across a broad range of legal disciplines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceHighlights.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:border-accent-300 transition-colors"
                >
                  <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Professional Credentials Section */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">
              Professional Recognition
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {credentials.map((cred, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">{cred}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Icon Showcase Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 font-display">
              A Tradition of Legal Excellence
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { icon: Scale, label: 'Litigation' },
              { icon: BookOpen, label: 'Corporate' },
              { icon: Briefcase, label: 'Real Estate' },
              { icon: Shield, label: 'Employment' },
              { icon: FileText, label: 'Estate Planning' },
              { icon: Users, label: 'Family Law' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <span className="text-xs text-slate-600 text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-accent-600 text-sm font-semibold tracking-wider uppercase mb-2">
              Our Firm
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-display">
              Principled Advocacy, Proven Results
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              From the courtroom to the boardroom, we deliver the legal expertise and strategic counsel our clients depend on.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=600&q=80&fit=crop', alt: 'Law library with legal volumes' },
              { src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80&fit=crop', alt: 'Scales of justice in courtroom' },
              { src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&fit=crop', alt: 'Legal document signing' },
              { src: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80&fit=crop', alt: 'Professional office meeting' },
            ].map((photo, i) => (
              <div key={i} className="relative h-56 rounded-lg overflow-hidden group">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-primary-900/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Footer */}
      <footer className="bg-primary-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center">
                  <Scale className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white font-display">Hartwell & Crane</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Distinguished legal counsel for individuals and businesses. Experienced. Principled. Results-Driven.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Practice Areas</h4>
              <ul className="space-y-2.5 text-slate-400 text-sm">
                <li><a href="/practice-areas" className="hover:text-accent-400 transition-colors">Litigation</a></li>
                <li><a href="/practice-areas" className="hover:text-accent-400 transition-colors">Corporate Law</a></li>
                <li><a href="/practice-areas" className="hover:text-accent-400 transition-colors">Real Estate</a></li>
                <li><a href="/practice-areas" className="hover:text-accent-400 transition-colors">Employment Law</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Firm</h4>
              <ul className="space-y-2.5 text-slate-400 text-sm">
                <li><a href="/attorneys" className="hover:text-accent-400 transition-colors">Our Attorneys</a></li>
                <li><a href="/case-studies" className="hover:text-accent-400 transition-colors">Case Studies</a></li>
                <li><a href="/news" className="hover:text-accent-400 transition-colors">News</a></li>
                <li><a href="/contact" className="hover:text-accent-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Contact</h4>
              <ul className="space-y-2.5 text-slate-400 text-sm">
                <li>One Liberty Plaza, Suite 4000</li>
                <li>New York, NY 10006</li>
                <li className="pt-1">
                  <a href="mailto:info@hartwellcrane.com" className="hover:text-accent-400 transition-colors">info@hartwellcrane.com</a>
                </li>
                <li>
                  <a href="tel:5558001234" className="hover:text-accent-400 transition-colors">(555) 800-1234</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Hartwell & Crane LLP. All rights reserved.
            </p>
            <div className="flex gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
