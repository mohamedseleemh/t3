import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/hooks/useLanguage'
import { Toaster } from '@/components/ui/toaster'
import { ErrorBoundary } from '@/src/components/common/ErrorBoundary'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TeleTransfer - AI-Powered Telegram Member Transfer',
  description: 'Smart tool for transferring Telegram members between groups with 99.8% success rate and complete security',
  keywords: 'telegram, member transfer, AI, نقل أعضاء تليجرام, ذكاء اصطناعي',
  authors: [{ name: 'TeleTransfer Team' }],
  creator: 'TeleTransfer',
  publisher: 'TeleTransfer',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <LanguageProvider>
              {children}
              <Toaster />
            </LanguageProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
