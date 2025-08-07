'use client'

import { MainApp } from '@/components/MainApp'
import { useLanguage } from '@/hooks/useLanguage'

export default function Home() {
  const { language } = useLanguage()
  
  return (
    <MainApp />
  )
}
