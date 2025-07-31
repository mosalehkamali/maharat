'use client';

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Tahoma', sans-serif;
          line-height: 1.8;
        }

        .title {
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .description {
          text-align: justify;
          color: #34495e;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .card {
          background: #f2f2f2;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card h2 {
          color: #0070f3;
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
        }

        .card p {
          color: #333;
        }

        .button {
          display: inline-block;
          margin: 0.5rem 1rem 2rem 0;
          padding: 0.8rem 1.5rem;
          font-size: 1rem;
          font-weight: bold;
          text-align: center;
          color: white;
          background-color: #28a745;
          border-radius: 8px;
          text-decoration: none;
          transition: background-color 0.2s;
        }

        .button:hover {
          background-color: #218838;
        }

        .button.secondary {
          background-color: #007bff;
        }

        .button.secondary:hover {
          background-color: #0069d9;
        }

        footer {
          text-align: center;
          color: #777;
          font-size: 0.9rem;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .title {
            font-size: 2rem;
          }

          .description {
            font-size: 1rem;
          }

          .button {
            width: 100%;
            display: block;
            text-align: center;
          }
          .btns{
            display:flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>

      <header>
        <h1 className="title">طرح مهارت‌آموزی سپاه ثارالله</h1>
        <p className="description">
          این طرح با هدف توانمندسازی سربازان در دوران خدمت طراحی شده است تا با کسب مهارت‌های فنی و کاربردی، مسیر موفقیت شغلی پس از خدمت برای آنان هموار شود. با بهره‌گیری از اساتید مجرب، تجهیزات تخصصی، و آموزش‌های هدفمند، این طرح فرصت ارزشمندی برای ورود به بازار کار و ارتقای سطح دانش فنی ایجاد می‌کند.
        </p>
      </header>
      <div className='btns'>

      <Link href="/needs-assessment-form">
        <p className="button">تکمیل فرم نیازسنجی مهارتی</p>
      </Link>

      <Link href="/certificate">
        <p className="button secondary">دریافت گواهینامه فنی حرفه‌ای</p>
      </Link>
      </div>

      <section className="grid">
        <div className="card">
          <h2>آموزش‌های فنی و مهارتی</h2>
          <p>دوره‌هایی شامل برق صنعتی، جوشکاری، مکانیک خودرو، کامپیوتر، تعمیرات لوازم خانگی و بسیاری مهارت‌های مورد نیاز بازار کار.</p>
        </div>

        <div className="card">
          <h2>فرصت‌های اشتغال پس از خدمت</h2>
          <p>اخذ گواهی معتبر فنی‌حرفه‌ای، آمادگی برای ورود به بازار کار، و حمایت از راه‌اندازی کسب‌وکارهای کوچک پس از پایان خدمت.</p>
        </div>

        <div className="card">
          <h2>مشاوره و هدایت شغلی</h2>
          <p>مشاوره‌های تخصصی برای شناسایی استعدادها، انتخاب مسیر شغلی متناسب، و برنامه‌ریزی آموزشی بر پایه نیازهای فردی و منطقه‌ای.</p>
        </div>

        <div className="card">
          <h2>یادگیری ترکیبی و درون‌پادگانی</h2>
          <p>آموزش‌های منعطف و ترکیبی با استفاده از کارگاه‌های مجهز در پادگان، محتوای دیجیتال، و روش‌های نوین تدریس برای بیشترین اثرگذاری.</p>
        </div>
      </section>

      <Link href="/needs-assessment-form" className="button">
        تکمیل فرم نیازسنجی مهارتی
      </Link>

      <Link href="/certificate" className="button secondary">
        دریافت گواهینامه فنی حرفه‌ای
      </Link>

      <footer>
        طراحی شده برای طرح مهارت‌آموزی سپاه ثارالله استان کرمان — تابستان ۱۴۰۴
      </footer>
    </div>
  );
}
