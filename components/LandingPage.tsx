'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TransferWizard } from '@/components/TransferWizard'
import { OrderTracking } from '@/components/OrderTracking'
import { LanguageToggle } from '@/components/LanguageToggle'
import { useLanguage } from '@/hooks/useLanguage'
import { 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  Lock,
  Phone,
  MessageSquare,
  CheckCircle,
  Star,
  ArrowRight,
  Play
} from 'lucide-react'

type View = 'landing' | 'transfer' | 'tracking'

export function LandingPage() {
  const { language, t } = useLanguage()
  const [currentView, setCurrentView] = useState<View>('landing')

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('title')}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {t('status.online')}
            </div>
            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            {t('hero.badge')}
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={handleStartTransfer}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              {t('hero.startButton')}
            </Button>
            
            <Button 
              onClick={handleTrackOrder}
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              {t('hero.trackButton')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <CheckCircle className="w-5 h-5 text-green-500" />
              {t('hero.noLogin')}
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Zap className="w-5 h-5 text-yellow-500" />
              {t('hero.automated')}
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Shield className="w-5 h-5 text-blue-500" />
              {t('hero.secure')}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              icon: Brain, 
              title: t('features.feature1.title'), 
              description: t('features.feature1.description'),
              color: 'text-purple-600'
            },
            { 
              icon: Shield, 
              title: t('features.feature2.title'), 
              description: t('features.feature2.description'),
              color: 'text-blue-600'
            },
            { 
              icon: TrendingUp, 
              title: t('features.feature3.title'), 
              description: t('features.feature3.description'),
              color: 'text-green-600'
            },
            { 
              icon: Lock, 
              title: t('features.feature4.title'), 
              description: t('features.feature4.description'),
              color: 'text-red-600'
            },
            { 
              icon: Users, 
              title: t('features.feature5.title'), 
              description: t('features.feature5.description'),
              color: 'text-indigo-600'
            },
            { 
              icon: Phone, 
              title: t('features.feature6.title'), 
              description: t('features.feature6.description'),
              color: 'text-orange-600'
            }
          ].map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardHeader>
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 bg-white/30 dark:bg-gray-900/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              step: '1', 
              title: t('howItWorks.step1.title'), 
              description: t('howItWorks.step1.description') 
            },
            { 
              step: '2', 
              title: t('howItWorks.step2.title'), 
              description: t('howItWorks.step2.description') 
            },
            { 
              step: '3', 
              title: t('howItWorks.step3.title'), 
              description: t('howItWorks.step3.description') 
            },
            { 
              step: '4', 
              title: t('howItWorks.step4.title'), 
              description: t('howItWorks.step4.description') 
            }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'ar' ? 'ابدأ النقل الآن' : 'Start Your Transfer Now'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {language === 'ar' ? 'انضم إلى آلاف المستخدمين الذين يثقون في خدمتنا' : 'Join thousands of users who trust our service'}
          </p>
          
          <Button 
            onClick={handleStartTransfer}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-xl"
          >
            <ArrowRight className="w-6 h-6 mr-2" />
            {t('hero.startButton')}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Brain className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl font-bold">TeleTransfer</h3>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            {t('footer.description')}
          </p>
          
          <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
            <span>{t('footer.made')}</span>
            <span>•</span>
            <span>© 2024 {t('footer.rights')}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
