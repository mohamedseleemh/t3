'use client'

import React, { useState } from 'react'
import { AIHeroSection } from '@/components/sections/AIHeroSection'
import { InteractiveFeatures } from '@/components/sections/InteractiveFeatures'
import { LiveDemoSection } from '@/components/sections/LiveDemoSection'
import { SmartPricingCalculator } from '@/components/sections/SmartPricingCalculator'
import { IntelligentFAQ } from '@/components/sections/IntelligentFAQ'
import { useLanguage } from '@/hooks/useLanguage'

interface LandingPageProps {
  onStartTransfer: () => void
  onTrackOrder: () => void
}

export function LandingPage({ onStartTransfer, onTrackOrder }: LandingPageProps) {
  const { language } = useLanguage()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden">
      <AIHeroSection 
        onStartTransfer={onStartTransfer}
        onTrackOrder={onTrackOrder}
        mousePosition={mousePosition}
      />
      <InteractiveFeatures />
      <LiveDemoSection />
      <SmartPricingCalculator />
      <IntelligentFAQ />
    </div>
  )
}
