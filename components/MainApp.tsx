'use client'

import React, { useState } from 'react'
import { LandingPage } from '@/components/LandingPage'
import { Dashboard } from '@/components/Dashboard'
import { Settings } from '@/components/Settings'
import { TransferWizard } from '@/components/TransferWizard'
import { OrderTracking } from '@/components/OrderTracking'
import { AIAssistant } from '@/components/AIAssistant'
import { useLanguage } from '@/hooks/useLanguage'

type View = 'landing' | 'dashboard' | 'settings' | 'transfer' | 'tracking'

export function MainApp() {
  const { language } = useLanguage()
  const [currentView, setCurrentView] = useState<View>('landing')

  const handleStartTransfer = () => setCurrentView('transfer')
  const handleTrackOrder = () => setCurrentView('tracking')
  const handleGoToDashboard = () => setCurrentView('dashboard')
  const handleGoToSettings = () => setCurrentView('settings')
  const handleBackToLanding = () => setCurrentView('landing')

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <Dashboard 
            onStartTransfer={handleStartTransfer}
            onTrackOrder={handleTrackOrder}
          />
        )
      case 'settings':
        return <Settings />
      case 'transfer':
        return <TransferWizard onBack={handleBackToLanding} />
      case 'tracking':
        return <OrderTracking onBack={handleBackToLanding} />
      default:
        return <LandingPage />
    }
  }

  return (
    <div className={`${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {renderCurrentView()}
      <AIAssistant />
    </div>
  )
}