'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/hooks/useLanguage'
import { Calculator, Zap, CheckCircle, Sparkles, TrendingUp } from 'lucide-react'
import { PRICING_PLANS, DISCOUNT_TIERS } from '@/src/lib/constants'
import { motion } from 'framer-motion'

interface PricingCalculatorProps {
  onStartTransfer?: (plan: string, memberCount: number) => void
}

export function PricingCalculator({ onStartTransfer }: PricingCalculatorProps) {
  const { language } = useLanguage()
  const [memberCount, setMemberCount] = useState([1000])
  const [selectedPlan, setSelectedPlan] = useState<keyof typeof PRICING_PLANS>('smart')
  const [calculatedPrice, setCalculatedPrice] = useState(0)
  const [estimatedTime, setEstimatedTime] = useState('')
  const [discount, setDiscount] = useState(0)

  const t = (key: string) => {
    const translations = {
      ar: {
        title: 'حاسبة التسعير الذكية',
        subtitle: 'احسب التكلفة والوقت المتوقع بدقة',
        memberCount: 'عدد الأعضاء',
        selectPlan: 'اختر الخطة',
        totalCost: 'التكلفة الإجمالية',
        estimatedTime: 'الوقت المتوقع',
        successRate: 'معدل النجاح',
        features: 'المميزات',
        startTransfer: 'ابدأ النقل',
        save: 'وفر',
        popular: 'الأكثر شعبية',
        minutes: 'دقيقة',
        hours: 'ساعة',
        days: 'يوم',
        perMember: 'لكل عضو'
      },
      en: {
        title: 'Smart Pricing Calculator',
        subtitle: 'Calculate cost and expected time accurately',
        memberCount: 'Member Count',
        selectPlan: 'Select Plan',
        totalCost: 'Total Cost',
        estimatedTime: 'Estimated Time',
        successRate: 'Success Rate',
        features: 'Features',
        startTransfer: 'Start Transfer',
        save: 'Save',
        popular: 'Most Popular',
        minutes: 'minutes',
        hours: 'hours',
        days: 'days',
        perMember: 'per member'
      }
    }
    return translations[language][key] || key
  }

  // Calculate pricing and estimates
  useEffect(() => {
    const plan = PRICING_PLANS[selectedPlan]
    const members = memberCount[0]
    const basePrice = members * plan.pricePerMember
    
    // Find applicable discount
    const applicableDiscount = DISCOUNT_TIERS
      .filter(tier => members >= tier.min)
      .reduce((max, tier) => tier.discount > max ? tier.discount : max, 0)
    
    setDiscount(applicableDiscount)
    const finalPrice = basePrice * (1 - applicableDiscount)
    setCalculatedPrice(finalPrice)

    // Calculate estimated time
    const baseTimeMinutes = members / (50 * plan.speedMultiplier)
    let timeString = ''
    if (baseTimeMinutes < 60) {
      timeString = `${Math.ceil(baseTimeMinutes)} ${t('minutes')}`
    } else if (baseTimeMinutes < 1440) {
      timeString = `${Math.ceil(baseTimeMinutes / 60)} ${t('hours')}`
    } else {
      timeString = `${Math.ceil(baseTimeMinutes / 1440)} ${t('days')}`
    }
    setEstimatedTime(timeString)
  }, [memberCount, selectedPlan, language])

  const handleStartTransfer = () => {
    if (onStartTransfer) {
      onStartTransfer(selectedPlan, memberCount[0])
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Calculator */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 rtl:space-x-reverse">
              <Calculator className="h-6 w-6 text-blue-500" />
              <span>{t('title')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Member Count Slider */}
            <div className="space-y-4">
              <label className="text-sm font-medium">{t('memberCount')}</label>
              <Slider
                value={memberCount}
                onValueChange={setMemberCount}
                max={50000}
                min={100}
                step={100}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>100</span>
                <span className="font-bold text-lg text-blue-600">
                  {memberCount[0].toLocaleString()}
                </span>
                <span>50,000</span>
              </div>
              <Input
                type="number"
                value={memberCount[0]}
                onChange={(e) => setMemberCount([parseInt(e.target.value) || 100])}
                min={100}
                max={50000}
                className="text-center font-bold text-lg"
              />
            </div>

            {/* Plan Selection */}
            <div className="space-y-4">
              <label className="text-sm font-medium">{t('selectPlan')}</label>
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(PRICING_PLANS).map(([key, plan]) => (
                  <motion.div
                    key={key}
                    onClick={() => setSelectedPlan(key as keyof typeof PRICING_PLANS)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedPlan === key
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          {key === 'basic' && <TrendingUp className="h-5 w-5 text-blue-600" />}
                          {key === 'smart' && <Sparkles className="h-5 w-5 text-blue-600" />}
                          {key === 'pro' && <Zap className="h-5 w-5 text-blue-600" />}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <h4 className="font-semibold">{plan.name}</h4>
                            {plan.popular && (
                              <Badge variant="info" className="text-xs">
                                {t('popular')}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {plan.successRate}% {t('successRate')}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">${plan.pricePerMember}</div>
                        <div className="text-xs text-gray-500">{t('perMember')}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Results */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        {/* Price Summary */}
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">
              {language === 'ar' ? 'ملخص التكلفة' : 'Cost Summary'}
            </h3>

            <div className="space-y-6">
              {/* Total Cost */}
              <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-xl">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{t('totalCost')}</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  ${calculatedPrice.toFixed(2)}
                </div>
                {discount > 0 && (
                  <Badge variant="success" className="text-sm">
                    {t('save')} {Math.round(discount * 100)}%
                  </Badge>
                )}
              </div>

              {/* Estimates */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-1">{estimatedTime}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{t('estimatedTime')}</div>
                </div>
                <div className="text-center p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {PRICING_PLANS[selectedPlan].successRate}%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{t('successRate')}</div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold mb-3">{t('features')}</h4>
                <div className="space-y-2">
                  {PRICING_PLANS[selectedPlan].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button 
                onClick={handleStartTransfer}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="h-5 w-5 mr-2" />
                {t('startTransfer')}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Discount Tiers */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-4 text-center">
              {language === 'ar' ? 'خصومات الكمية' : 'Volume Discounts'}
            </h4>
            <div className="space-y-3">
              {DISCOUNT_TIERS.map((tier, index) => (
                <div 
                  key={index}
                  className={`flex justify-between items-center p-3 rounded-lg transition-all duration-300 ${
                    memberCount[0] >= tier.min 
                      ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 scale-105' 
                      : 'bg-gray-50 dark:bg-gray-700/50'
                  }`}
                >
                  <span className="text-sm">
                    {tier.min.toLocaleString()}+ {language === 'ar' ? 'عضو' : 'members'}
                  </span>
                  <Badge 
                    variant={memberCount[0] >= tier.min ? 'success' : 'secondary'}
                    className="font-bold"
                  >
                    {Math.round(tier.discount * 100)}% {language === 'ar' ? 'خصم' : 'OFF'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}