'use client'

import React, { useState } from 'react'
import { SmartHeader } from '@/components/SmartHeader'
import { AIHeroSection } from '@/components/sections/AIHeroSection'
import { InteractiveFeatures } from '@/components/sections/InteractiveFeatures'
import { LiveDemoSection } from '@/components/sections/LiveDemoSection'
import { SmartPricingCalculator } from '@/components/sections/SmartPricingCalculator'
import { IntelligentFAQ } from '@/components/sections/IntelligentFAQ'
import { TransferWizard } from '@/components/TransferWizard'
import { OrderTracking } from '@/components/OrderTracking'
import { useLanguage } from '@/hooks/useLanguage'

type View = 'landing' | 'transfer' | 'tracking'

export function LandingPage() {
  const { language } = useLanguage()
  const [currentView, setCurrentView] = useState<View>('landing')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  const handleStartTransfer = () => setCurrentView('transfer')
  const handleTrackOrder = () => setCurrentView('tracking')
  const handleBackToLanding = () => setCurrentView('landing')

  if (currentView === 'transfer') {
    return <TransferWizard onBack={handleBackToLanding} />
  }

  if (currentView === 'tracking') {
    return <OrderTracking onBack={handleBackToLanding} />
  }

  return (
    <div className={`min-h-screen overflow-hidden ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <SmartHeader />
      <main className="relative z-10">
        <AIHeroSection 
          onStartTransfer={handleStartTransfer}
          onTrackOrder={handleTrackOrder}
          mousePosition={mousePosition}
        />
        <InteractiveFeatures />
        <LiveDemoSection />
        <SmartPricingCalculator />
        <IntelligentFAQ />
      </main>
    </div>
  )
}
