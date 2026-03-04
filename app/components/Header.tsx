'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { Menu, X, Scale, Phone, Mail, Clock } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Practice Areas', href: '/practice-areas' },
  { name: 'Attorneys', href: '/attorneys' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bannerHeight, setBannerHeight] = useState(0)

  useEffect(() => {
    const updateBannerHeight = () => {
      const bannerEl = document.querySelector('[class*="bg-amber-500"]') as HTMLElement
      setBannerHeight(bannerEl ? bannerEl.offsetHeight : 0)
    }
    updateBannerHeight()
    const observer = new MutationObserver(updateBannerHeight)
    observer.observe(document.body, { childList: true, subtree: true, attributes: true })
    window.addEventListener('resize', updateBannerHeight)
    return () => { observer.disconnect(); window.removeEventListener('resize', updateBannerHeight) }
  }, [])

  const getActiveTab = () => {
    if (pathname === '/') return 'Home'
    for (const item of navigationItems) {
      if (item.href !== '/' && pathname.startsWith(item.href)) {
        return item.name
      }
    }
    return null
  }

  const activeTab = getActiveTab()

  return (
    <header className="sticky z-50" style={{ top: bannerHeight }}>
      {/* Utility Bar */}
      <div className="bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-xs">
            <div className="hidden md:flex items-center space-x-6">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Phone className="w-3 h-3" /> (555) 800-1234
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Mail className="w-3 h-3" /> info@hartwellcrane.com
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3 h-3" /> Mon-Fri 8:30 AM - 6:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-accent-400" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-primary-900 font-display">Hartwell & Crane</span>
                <span className="text-xs text-slate-400 block -mt-1 tracking-wider uppercase">Attorneys at Law</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'px-4 py-2 text-sm font-medium transition-colors relative',
                    activeTab === item.name
                      ? 'text-primary-900 border-b-2 border-accent-600'
                      : 'text-slate-600 hover:text-primary-900'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center bg-accent-600 text-white px-5 py-2 rounded-lg hover:bg-accent-700 transition-colors duration-200 font-semibold text-sm"
              >
                Free Consultation
              </Link>

              <button
                type="button"
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-primary-900 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-200 py-4">
              <nav className="flex flex-col space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                      activeTab === item.name
                        ? 'bg-primary-50 text-primary-900'
                        : 'text-slate-600 hover:text-primary-900 hover:bg-slate-50'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
