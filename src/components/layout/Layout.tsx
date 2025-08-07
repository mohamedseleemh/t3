'use client'

import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { PageTransition } from '@/components/common/PageTransition'

interface LayoutProps {
  children: React.ReactNode
  showHeader?: boolean
  showFooter?: boolean
  currentSection?: string
  onNavigate?: (section: string) => void
}

export function Layout({ 
  children, 
  showHeader = true, 
  showFooter = true,
  currentSection,
  onNavigate
}: LayoutProps) {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        {showHeader && (
          <Header 
            currentSection={currentSection}
            onNavigate={onNavigate}
          />
        )}
        
        <main className="flex-1">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        
        {showFooter && <Footer />}
      </div>
    </ErrorBoundary>
  )
}