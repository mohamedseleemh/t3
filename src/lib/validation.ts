import { z } from 'zod'

// Telegram group link validation
export const telegramGroupSchema = z.string()
  .url('يجب أن يكون رابط صحيح')
  .refine(
    (url) => url.includes('t.me/') || url.includes('telegram.me/'),
    'يجب أن يكون رابط تليجرام صحيح'
  )

// Transfer form validation
export const transferFormSchema = z.object({
  sourceGroup: telegramGroupSchema,
  targetGroup: telegramGroupSchema,
  memberCount: z.number()
    .min(100, 'الحد الأدنى 100 عضو')
    .max(50000, 'الحد الأقصى 50,000 عضو'),
  plan: z.enum(['basic', 'smart', 'pro']),
  paymentMethod: z.enum(['crypto', 'paypal', 'bank', 'card']).optional()
})

// Contact form validation
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'الاسم يجب أن يكون أكثر من حرفين')
    .max(50, 'الاسم يجب أن يكون أقل من 50 حرف'),
  email: z.string()
    .email('البريد الإلكتروني غير صحيح'),
  subject: z.string()
    .min(5, 'الموضوع يجب أن يكون أكثر من 5 أحرف')
    .max(100, 'الموضوع يجب أن يكون أقل من 100 حرف'),
  message: z.string()
    .min(10, 'الرسالة يجب أن تكون أكثر من 10 أحرف')
    .max(1000, 'الرسالة يجب أن تكون أقل من 1000 حرف')
})

// Newsletter subscription validation
export const newsletterSchema = z.object({
  email: z.string().email('البريد الإلكتروني غير صحيح')
})

// Order tracking validation
export const orderTrackingSchema = z.object({
  orderId: z.string()
    .min(6, 'رقم الطلب يجب أن يكون أكثر من 6 أحرف')
    .max(20, 'رقم الطلب يجب أن يكون أقل من 20 حرف')
})

export type TransferFormData = z.infer<typeof transferFormSchema>
export type ContactFormData = z.infer<typeof contactFormSchema>
export type NewsletterData = z.infer<typeof newsletterSchema>
export type OrderTrackingData = z.infer<typeof orderTrackingSchema>