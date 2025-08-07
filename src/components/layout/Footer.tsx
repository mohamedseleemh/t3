'use client'

import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { Bot, Heart, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

export function Footer() {
  const { language } = useLanguage()

  const t = (key: string) => {
    const translations = {
      ar: {
        description: 'أداة ذكية لنقل أعضاء تليجرام بأمان وفعالية عالية مدعومة بأحدث تقنيات الذكاء الاصطناعي',
        quickLinks: 'روابط سريعة',
        features: 'المميزات',
        pricing: 'الأسعار',
        demo: 'العرض التوضيحي',
        faq: 'الأسئلة الشائعة',
        support: 'الدعم',
        contact: 'تواصل معنا',
        documentation: 'التوثيق',
        tutorials: 'الدروس التعليمية',
        community: 'المجتمع',
        legal: 'قانوني',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الاستخدام',
        cookies: 'سياسة ملفات تعريف الارتباط',
        followUs: 'تابعنا',
        newsletter: 'النشرة الإخبارية',
        newsletterDesc: 'اشترك للحصول على آخر التحديثات والمميزات الجديدة',
        subscribe: 'اشتراك',
        emailPlaceholder: 'أدخل بريدك الإلكتروني',
        madeWith: 'صنع بـ',
        allRights: 'جميع الحقوق محفوظة',
        aiPowered: 'مدعوم بالذكاء الاصطناعي'
      },
      en: {
        description: 'Smart tool for transferring Telegram members safely and efficiently powered by the latest AI technologies',
        quickLinks: 'Quick Links',
        features: 'Features',
        pricing: 'Pricing',
        demo: 'Live Demo',
        faq: 'FAQ',
        support: 'Support',
        contact: 'Contact Us',
        documentation: 'Documentation',
        tutorials: 'Tutorials',
        community: 'Community',
        legal: 'Legal',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookie Policy',
        followUs: 'Follow Us',
        newsletter: 'Newsletter',
        newsletterDesc: 'Subscribe to get the latest updates and new features',
        subscribe: 'Subscribe',
        emailPlaceholder: 'Enter your email',
        madeWith: 'Made with',
        allRights: 'All rights reserved',
        aiPowered: 'AI Powered'
      }
    }
    return translations[language][key] || key
  }

  const quickLinks = [
    { label: t('features'), href: '#features' },
    { label: t('pricing'), href: '#pricing' },
    { label: t('demo'), href: '#demo' },
    { label: t('faq'), href: '#faq' }
  ]

  const supportLinks = [
    { label: t('contact'), href: '#contact' },
    { label: t('documentation'), href: '#docs' },
    { label: t('tutorials'), href: '#tutorials' },
    { label: t('community'), href: '#community' }
  ]

  const legalLinks = [
    { label: t('privacy'), href: '#privacy' },
    { label: t('terms'), href: '#terms' },
    { label: t('cookies'), href: '#cookies' }
  ]

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: '#', label: 'GitHub' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Bot className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">TeleTransfer</h3>
                <Badge variant="info" className="mt-1">
                  <Bot className="h-3 w-3 mr-1" />
                  {t('aiPowered')}
                </Badge>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t('description')}
            </p>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 rtl:hover:-translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">{t('support')}</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 rtl:hover:-translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@teletransfer.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">{t('newsletter')}</h4>
            <p className="text-gray-300 text-sm mb-4">
              {t('newsletterDesc')}
            </p>
            <div className="flex space-x-2 rtl:space-x-reverse mb-8">
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                {t('subscribe')}
              </Button>
            </div>

            <h5 className="text-md font-semibold mb-4">{t('legal')}</h5>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-400 text-sm mb-4 md:mb-0">
            <span>{t('madeWith')}</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>© 2024 TeleTransfer. {t('allRights')}</span>
          </div>
          <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-400 text-sm">
            <span>v2.1.0</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>{t('aiPowered')}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}