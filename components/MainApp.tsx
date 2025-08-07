'use client'

import React, { useState } from 'react'
import { LandingPage } from './LandingPage'
import { Dashboard } from './Dashboard'
import { Settings } from './Settings'
import { TransferWizard } from './TransferWizard'
import { OrderTracking } from './OrderTracking'
import { AIAssistant } from './AIAssistant'
import { Layout } from '@/src/components/layout/Layout'
import { useLanguage } from '@/hooks/useLanguage'

type View = 'landing' | 'dashboard' | 'settings' | 'transfer' | 'tracking'

export function MainApp() {
  const { language } = useLanguage()
  const [currentView, setCurrentView] = useState<View>('landing')
  const [currentSection, setCurrentSection] = useState('hero')

  const handleStartTransfer = () => setCurrentView('transfer')
  const handleTrackOrder = () => setCurrentView('tracking')
  const handleGoToDashboard = () => setCurrentView('dashboard')
  const handleGoToSettings = () => setCurrentView('settings')
  const handleBackToLanding = () => setCurrentView('landing')
  const handleNavigate = (section: string) => {
    if (currentView !== 'landing') {
      setCurrentView('landing')
    }
    setCurrentSection(section)
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <Layout showHeader={false} showFooter={false}>
            <Dashboard 
              onStartTransfer={handleStartTransfer}
              onTrackOrder={handleTrackOrder}
            />
          </Layout>
        )
      case 'settings':
        return (
          <Layout showHeader={false} showFooter={false}>
            <Settings />
          </Layout>
        )
      case 'transfer':
        return (
          <Layout showHeader={false} showFooter={false}>
            <TransferWizard onBack={handleBackToLanding} />
          </Layout>
        )
      case 'tracking':
        return (
          <Layout showHeader={false} showFooter={false}>
            <OrderTracking onBack={handleBackToLanding} />
          </Layout>
        )
      default:
        return (
          <Layout 
            currentSection={currentSection}
            onNavigate={handleNavigate}
          >
            <LandingPage 
              onStartTransfer={handleStartTransfer}
              onTrackOrder={handleTrackOrder}
            />
          </Layout>
        )
    }
  }

  return (
    <div className={`${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {renderCurrentView()}
      <AIAssistant />
    </div>
  )
}