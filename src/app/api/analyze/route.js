import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.json();

    const prompt = `
اطلاعات زیر مربوط به یک سرباز است که فرم نیازسنجی مهارتی را پر کرده است:
${JSON.stringify(formData, null, 2)}

لطفاً بر اساس این اطلاعات، پیشنهاد بدهید کدام رشته‌های مهارتی برای این فرد مناسب هستند و دلیلش را هم کوتاه بنویس.
`;
    const messages = [{ role: "user", content: prompt }];
    const response = await fetch("https://api.talkbot.ir/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TALKBOT_API_KEY}`, // کلید تاک‌بات
      },
      body: JSON.stringify({
        messages, // ورودی به ربات
        model: "gpt-4o-mini",
      }),
    });

    const data = await response.json();
    const analysis = data.choices[0].message.content || "پاسخی دریافت نشد.";

    return NextResponse.json({ analysis });
  } catch (error) {
    console.error("Error in /api/analyze:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
