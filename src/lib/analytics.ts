interface AnalyticsEvent {
  name: string
  properties?: Record<string, any>
}

class Analytics {
  private isEnabled: boolean = false

  constructor() {
    // Enable analytics in production
    this.isEnabled = process.env.NODE_ENV === 'production'
  }

  track(event: AnalyticsEvent) {
    if (!this.isEnabled) {
      console.log('Analytics Event:', event)
      return
    }

    // Implement your analytics provider here
    // Example: Google Analytics, Mixpanel, etc.
    try {
      // gtag('event', event.name, event.properties)
    } catch (error) {
      console.error('Analytics error:', error)
    }
  }

  page(path: string, title?: string) {
    if (!this.isEnabled) {
      console.log('Page View:', { path, title })
      return
    }

    try {
      // gtag('config', 'GA_MEASUREMENT_ID', {
      //   page_path: path,
      //   page_title: title
      // })
    } catch (error) {
      console.error('Analytics page error:', error)
    }
  }

  identify(userId: string, traits?: Record<string, any>) {
    if (!this.isEnabled) {
      console.log('User Identify:', { userId, traits })
      return
    }

    try {
      // gtag('config', 'GA_MEASUREMENT_ID', {
      //   user_id: userId,
      //   custom_map: traits
      // })
    } catch (error) {
      console.error('Analytics identify error:', error)
    }
  }
}

export const analytics = new Analytics()

// Common event tracking functions
export const trackEvent = {
  startTransfer: (plan: string, memberCount: number) => {
    analytics.track({
      name: 'start_transfer',
      properties: { plan, member_count: memberCount }
    })
  },

  viewPricing: (plan?: string) => {
    analytics.track({
      name: 'view_pricing',
      properties: { plan }
    })
  },

  watchDemo: () => {
    analytics.track({
      name: 'watch_demo'
    })
  },

  contactSupport: (method: string) => {
    analytics.track({
      name: 'contact_support',
      properties: { method }
    })
  },

  languageChange: (from: string, to: string) => {
    analytics.track({
      name: 'language_change',
      properties: { from, to }
    })
  },

  themeChange: (theme: string) => {
    analytics.track({
      name: 'theme_change',
      properties: { theme }
    })
  }
}