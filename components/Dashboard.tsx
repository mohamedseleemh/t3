'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/useLanguage'
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Plus,
  Eye,
  Download,
  RefreshCw
} from 'lucide-react'

interface DashboardProps {
  onStartTransfer: () => void
  onTrackOrder: () => void
}

export function Dashboard({ onStartTransfer, onTrackOrder }: DashboardProps) {
  const { language } = useLanguage()
  const [stats, setStats] = useState({
    totalTransfers: 0,
    successfulTransfers: 0,
    activeTransfers: 0,
    totalMembers: 0
  })
  const [recentTransfers, setRecentTransfers] = useState([])

  const t = (key: string) => {
    const translations = {
      ar: {
        title: 'لوحة التحكم',
        welcome: 'مرحباً بك في TeleTransfer',
        subtitle: 'إدارة عمليات نقل أعضاء تليجرام بسهولة',
        totalTransfers: 'إجمالي العمليات',
        successfulTransfers: 'العمليات الناجحة',
        activeTransfers: 'العمليات النشطة',
        totalMembers: 'إجمالي الأعضاء',
        recentTransfers: 'العمليات الأخيرة',
        newTransfer: 'عملية جديدة',
        trackTransfer: 'تتبع العملية',
        viewAll: 'عرض الكل',
        downloadReport: 'تحميل التقرير',
        refresh: 'تحديث',
        noTransfers: 'لا توجد عمليات نقل حتى الآن',
        startFirst: 'ابدأ أول عملية نقل لك',
        status: 'الحالة',
        completed: 'مكتملة',
        processing: 'قيد المعالجة',
        pending: 'في الانتظار'
      },
      en: {
        title: 'Dashboard',
        welcome: 'Welcome to TeleTransfer',
        subtitle: 'Manage your Telegram member transfers with ease',
        totalTransfers: 'Total Transfers',
        successfulTransfers: 'Successful Transfers',
        activeTransfers: 'Active Transfers',
        totalMembers: 'Total Members',
        recentTransfers: 'Recent Transfers',
        newTransfer: 'New Transfer',
        trackTransfer: 'Track Transfer',
        viewAll: 'View All',
        downloadReport: 'Download Report',
        refresh: 'Refresh',
        noTransfers: 'No transfers yet',
        startFirst: 'Start your first transfer',
        status: 'Status',
        completed: 'Completed',
        processing: 'Processing',
        pending: 'Pending'
      }
    }
    return translations[language][key] || key
  }

  useEffect(() => {
    // Simulate loading stats
    const loadStats = () => {
      setStats({
        totalTransfers: 12,
        successfulTransfers: 11,
        activeTransfers: 1,
        totalMembers: 45230
      })
    }

    loadStats()
  }, [])

  const statCards = [
    {
      title: t('totalTransfers'),
      value: stats.totalTransfers,
      icon: <BarChart3 className="h-6 w-6" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: t('successfulTransfers'),
      value: stats.successfulTransfers,
      icon: <CheckCircle className="h-6 w-6" />,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      title: t('activeTransfers'),
      value: stats.activeTransfers,
      icon: <Clock className="h-6 w-6" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      title: t('totalMembers'),
      value: stats.totalMembers.toLocaleString(),
      icon: <Users className="h-6 w-6" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {t('title')}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {t('subtitle')}
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              onClick={onStartTransfer}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              {t('newTransfer')}
            </Button>
            <Button
              onClick={onTrackOrder}
              variant="outline"
            >
              <Eye className="h-4 w-4 mr-2" />
              {t('trackTransfer')}
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              {t('downloadReport')}
            </Button>
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              {t('refresh')}
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statCards.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <div className={stat.color}>
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Transfers */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
                <TrendingUp className="h-5 w-5" />
                <span>{t('recentTransfers')}</span>
              </CardTitle>
              <Button variant="ghost" size="sm">
                {t('viewAll')}
              </Button>
            </CardHeader>
            <CardContent>
              {recentTransfers.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t('noTransfers')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {t('startFirst')}
                  </p>
                  <Button
                    onClick={onStartTransfer}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    {t('newTransfer')}
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Transfer items would go here */}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}