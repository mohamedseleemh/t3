export const APP_CONFIG = {
  name: 'TeleTransfer',
  description: 'AI-Powered Telegram Member Transfer Tool',
  version: '2.1.0',
  author: 'TeleTransfer Team',
  url: 'https://teletransfer.com',
  supportEmail: 'support@teletransfer.com',
  supportPhone: '+1 (555) 123-4567'
} as const

export const PRICING_PLANS = {
  basic: {
    name: 'Basic Plan',
    pricePerMember: 0.008,
    features: ['Regular Transfer', 'Basic Support', 'Simple Report'],
    successRate: 95.5,
    speedMultiplier: 1
  },
  smart: {
    name: 'Smart Plan',
    pricePerMember: 0.012,
    features: [
      'Advanced AI Analysis',
      'Smart Filtering',
      'Secure Transfer',
      'Priority Support',
      'Detailed Report'
    ],
    successRate: 99.8,
    speedMultiplier: 1.5,
    popular: true
  },
  pro: {
    name: 'Pro Plan',
    pricePerMember: 0.018,
    features: [
      'All Smart Plan Features',
      'Money Back Guarantee',
      'Instant Transfer',
      'VIP Support',
      'Advanced Analytics'
    ],
    successRate: 99.9,
    speedMultiplier: 2
  }
} as const

export const DISCOUNT_TIERS = [
  { min: 1000, discount: 0.05 },
  { min: 2000, discount: 0.10 },
  { min: 5000, discount: 0.15 },
  { min: 10000, discount: 0.25 }
] as const

export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  verySlow: 0.8
} as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const