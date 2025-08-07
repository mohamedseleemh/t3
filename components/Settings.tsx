'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { useLanguage } from '@/hooks/useLanguage'
import { useTheme } from 'next-themes'
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  Sun,
  Save,
  RefreshCw
} from 'lucide-react'

export function Settings() {
  const { language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: true,
    autoRefresh: false,
    darkMode: theme === 'dark',
    language: language
  })

  const t = (key: string) => {
    const translations = {
      ar: {
        title: 'الإعدادات',
        subtitle: 'إدارة تفضيلاتك وإعدادات الحساب',
        profile: 'الملف الشخصي',
        notifications: 'الإشعارات',
        security: 'الأمان',
        appearance: 'المظهر',
        language: 'اللغة',
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        enableNotifications: 'تفعيل الإشعارات',
        emailAlerts: 'تنبيهات البريد الإلكتروني',
        autoRefresh: 'التحديث التلقائي',
        darkMode: 'الوضع المظلم',
        changePassword: 'تغيير كلمة المرور',
        twoFactor: 'المصادقة الثنائية',
        save: 'حفظ التغييرات',
        reset: 'إعادة تعيين',
        arabic: 'العربية',
        english: 'English'
      },
      en: {
        title: 'Settings',
        subtitle: 'Manage your preferences and account settings',
        profile: 'Profile',
        notifications: 'Notifications',
        security: 'Security',
        appearance: 'Appearance',
        language: 'Language',
        name: 'Name',
        email: 'Email',
        enableNotifications: 'Enable Notifications',
        emailAlerts: 'Email Alerts',
        autoRefresh: 'Auto Refresh',
        darkMode: 'Dark Mode',
        changePassword: 'Change Password',
        twoFactor: 'Two-Factor Authentication',
        save: 'Save Changes',
        reset: 'Reset',
        arabic: 'العربية',
        english: 'English'
      }
    }
    return translations[language][key] || key
  }

  const handleSave = () => {
    // Save settings logic here
    console.log('Settings saved:', settings)
  }

  const handleReset = () => {
    setSettings({
      notifications: true,
      emailAlerts: true,
      autoRefresh: false,
      darkMode: false,
      language: 'ar'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
              <SettingsIcon className="h-8 w-8 mr-3" />
              {t('title')}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Profile Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
                  <User className="h-5 w-5" />
                  <span>{t('profile')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('name')}</label>
                  <Input placeholder="أدخل اسمك" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('email')}</label>
                  <Input type="email" placeholder="example@email.com" />
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Bell className="h-5 w-5" />
                  <span>{t('notifications')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">{t('enableNotifications')}</label>
                  <Switch
                    checked={settings.notifications}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, notifications: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">{t('emailAlerts')}</label>
                  <Switch
                    checked={settings.emailAlerts}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, emailAlerts: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">{t('autoRefresh')}</label>
                  <Switch
                    checked={settings.autoRefresh}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, autoRefresh: checked }))
                    }
                  />
                </div>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Shield className="h-5 w-5" />
                  <span>{t('security')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full">
                  {t('changePassword')}
                </Button>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">{t('twoFactor')}</label>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            {/* Appearance Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Globe className="h-5 w-5" />
                  <span>{t('appearance')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium flex items-center">
                    {theme === 'dark' ? <Moon className="h-4 w-4 mr-2" /> : <Sun className="h-4 w-4 mr-2" />}
                    {t('darkMode')}
                  </label>
                  <Switch
                    checked={theme === 'dark'}
                    onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('language')}</label>
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <Button
                      variant={language === 'ar' ? 'default' : 'outline'}
                      onClick={() => setLanguage('ar')}
                      className="flex-1"
                    >
                      {t('arabic')}
                    </Button>
                    <Button
                      variant={language === 'en' ? 'default' : 'outline'}
                      onClick={() => setLanguage('en')}
                      className="flex-1"
                    >
                      {t('english')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 rtl:space-x-reverse mt-8">
            <Button variant="outline" onClick={handleReset}>
              <RefreshCw className="h-4 w-4 mr-2" />
              {t('reset')}
            </Button>
            <Button onClick={handleSave} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <Save className="h-4 w-4 mr-2" />
              {t('save')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}