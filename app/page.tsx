'use client'

import { LandingPage } from '@/components/LandingPage'
import { AIAssistant } from '@/components/AIAssistant'
import { useLanguage } from '@/hooks/useLanguage'

export default function Home() {
  const { language } = useLanguage()
  
  return (
    <div className={`${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <LandingPage />
      <AIAssistant />
    </div>
  )
}
