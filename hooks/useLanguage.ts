'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'ar' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  ar: {
    // Header & Navigation
    title: 'TeleTransfer - نقل أعضاء تليجرام بالذكاء الاصطناعي',
    'status.online': 'متصل',
    
    // Hero Section
    'hero.badge': 'مدعوم بالذكاء الاصطناعي',
    'hero.title': 'نقل ذكي لأعضاء تليجرام',
    'hero.subtitle': 'أداة ذكية لنقل أعضاء تليجرام بين المجموعات بمعدل نجاح 99.8% وبأمان كامل',
    'hero.startButton': 'ابدأ النقل الآن',
    'hero.trackButton': 'تتبع الطلب',
    'hero.noLogin': 'بدون تسجيل دخول',
    'hero.automated': 'آلي بالكامل',
    'hero.secure': 'آمن 100%',
    
    // Features
    'features.title': 'مميزات متقدمة بالذكاء الاصطناعي',
    'features.subtitle': 'تقنيات ثورية لنقل الأعضاء بذكاء وأمان',
    'features.feature1.title': 'تحليل ذكي بالـ AI',
    'features.feature1.description': 'يحلل الأعضاء ويحدد الحقيقيين والنشطين فقط',
    'features.feature2.title': 'أمان متقدم',
    'features.feature2.description': 'حماية كاملة بدون الحاجة لتسجيل دخول تليجرام',
    'features.feature3.title': 'معدل نجاح عالي',
    'features.feature3.description': 'نحقق معدل نجاح 99.8% في جميع عمليات النقل',
    'features.feature4.title': 'بدون مخاطر',
    'features.feature4.description': 'تقنيات متطورة تضمن عدم التعرض للحظر',
    'features.feature5.title': 'فلترة ذكية',
    'features.feature5.description': 'يستبعد البوتات والحسابات الوهمية تلقائياً',
    'features.feature6.title': 'دعم متواصل',
    'features.feature6.description': 'فريق دعم متخصص متاح 24/7',
    
    // How It Works
    'howItWorks.title': 'كيف يعمل النظام',
    'howItWorks.subtitle': 'عملية بسيطة وآمنة في 4 خطوات',
    'howItWorks.step1.title': 'أدخل رابط المجموعة',
    'howItWorks.step1.description': 'أدخل رابط المجموعة المصدر والهدف',
    'howItWorks.step2.title': 'تحليل ذكي',
    'howItWorks.step2.description': 'الذكاء الاصطناعي يحلل ويفلتر الأعضاء',
    'howItWorks.step3.title': 'الدفع الآمن',
    'howItWorks.step3.description': 'اختر طريقة الدفع المناسبة لك',
    'howItWorks.step4.title': 'النقل التلقائي',
    'howItWorks.step4.description': 'النظام ينقل الأعضاء تلقائياً وبأمان',
    
    // Footer
    'footer.description': 'أداة ذكية لنقل أعضاء تليجرام بأمان وفعالية عالية',
    'footer.made': 'صنع بـ ❤️',
    'footer.rights': 'جميع الحقوق محفوظة'
  },
  en: {
    // Header & Navigation
    title: 'TeleTransfer - AI-Powered Telegram Member Transfer',
    'status.online': 'Online',
    
    // Hero Section
    'hero.badge': 'AI-Powered Technology',
    'hero.title': 'Smart Telegram Member Transfer',
    'hero.subtitle': 'Smart tool for transferring Telegram members between groups with 99.8% success rate and complete security',
    'hero.startButton': 'Start Transfer Now',
    'hero.trackButton': 'Track Order',
    'hero.noLogin': 'No Login Required',
    'hero.automated': 'Fully Automated',
    'hero.secure': '100% Secure',
    
    // Features
    'features.title': 'Advanced AI Features',
    'features.subtitle': 'Revolutionary technologies for smart and secure member transfer',
    'features.feature1.title': 'Smart AI Analysis',
    'features.feature1.description': 'Analyzes members and identifies only real and active ones',
    'features.feature2.title': 'Advanced Security',
    'features.feature2.description': 'Complete protection without needing Telegram login',
    'features.feature3.title': 'High Success Rate',
    'features.feature3.description': 'We achieve 99.8% success rate in all transfer operations',
    'features.feature4.title': 'Risk-Free',
    'features.feature4.description': 'Advanced techniques ensure no risk of bans',
    'features.feature5.title': 'Smart Filtering',
    'features.feature5.description': 'Automatically excludes bots and fake accounts',
    'features.feature6.title': '24/7 Support',
    'features.feature6.description': 'Specialized support team available 24/7',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Simple and secure process in 4 steps',
    'howItWorks.step1.title': 'Enter Group Link',
    'howItWorks.step1.description': 'Enter source and target group links',
    'howItWorks.step2.title': 'Smart Analysis',
    'howItWorks.step2.description': 'AI analyzes and filters members',
    'howItWorks.step3.title': 'Secure Payment',
    'howItWorks.step3.description': 'Choose your preferred payment method',
    'howItWorks.step4.title': 'Automatic Transfer',
    'howItWorks.step4.description': 'System transfers members automatically and safely',
    
    // Footer
    'footer.description': 'Smart tool for transferring Telegram members safely and efficiently',
    'footer.made': 'Made with ❤️',
    'footer.rights': 'All rights reserved'
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}