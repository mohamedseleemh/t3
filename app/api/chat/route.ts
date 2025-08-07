import { streamText } from 'ai'
import { openai } from '@ai-sdk/openai'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const result = await streamText({
      model: openai('gpt-4o'),
      messages,
      system: `أنت مساعد ذكي متخصص في خدمة TeleTransfer لنقل أعضاء تليجرام. 
      مهمتك مساعدة المستخدمين في:
      - شرح كيفية عمل النظام
      - الإجابة على أسئلة التسعير
      - توضيح مميزات الأمان
      - مساعدة في عملية النقل
      - حل المشاكل التقنية
      
      كن مفيداً ومهذباً واستخدم اللغة العربية عند الحاجة.`
    })

    return result.toTextStreamResponse()
  } catch (error) {
    console.error('Chat API Error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
