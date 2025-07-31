import { NextResponse } from "next/server";

// اگر از OpenAI استفاده می‌کنید، این بسته را نصب کنید:
// npm install openai

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // کلید API را در env تعریف کنید
});

export async function POST(request) {
  try {
    const formData = await request.json();

    // نمونه متن ورودی برای هوش مصنوعی که باید تحلیل کند
    const prompt = `
اطلاعات زیر مربوط به یک سرباز است که فرم نیازسنجی مهارتی را پر کرده است:
${JSON.stringify(formData, null, 2)}

لطفاً بر اساس این اطلاعات، پیشنهاد بدهید کدام رشته‌های مهارتی برای این فرد مناسب هستند و دلیلش را هم کوتاه بنویس.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
    });

    const analysis = response.choices[0].message.content;

    return NextResponse.json({ analysis });
  } catch (error) {
    console.error("Error in /api/analyze:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
