'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaTools, FaCertificate, FaClipboardList, FaBell, FaSearch, FaTrophy } from 'react-icons/fa';
import { GrServices } from "react-icons/gr";
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

const sliderImages = ['/slider-image-1.jpg', '/slider-image-2.jpg', '/slider-image-3.jpg'];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <style jsx>{`
        .container {
          font-family: 'Tahoma', sans-serif;
          line-height: 1.8;
          padding: 0;
          margin: 0;
        }

        .slider {
          position: relative;
          width: 100%;
          height: 350px;
          overflow: hidden;
        }

        .slider #slideImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .slider #slideImg.active {
          opacity: 1;
          z-index: 0;
        }

        .slider::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(6px);
          background-color: rgba(0, 0, 0, 0.45);
          z-index: 1;
        }

        .slider-title-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }

        .slider-title-container img {
          width: 10rem;
          height: 10rem;
          object-fit: contain;
          filter: drop-shadow( 2px 2px 8px rgba(0, 0, 0, 0.9));
        }

        .slider-title {
          color: #fff;
          font-size: 2.2rem;
          font-weight: 900;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
          letter-spacing: 0.1em;
          white-space: nowrap;
        }

        .services-section {
          padding: 2rem 2rem 1rem 2rem;
        }

        .services-title {
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1.5rem;
          color: #2c3e50;
          font-family: Tahoma, sans-serif;
        }

        .services {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          text-align: center;
        }

        .service-button {
          padding: 1rem;
          color: white;
          font-weight: bold;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          user-select: none;
        }

        .service-button:hover {
          transform: scale(1.07);
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
        }

        .news-section {
          padding: 2rem;
        }

        .news-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          color: #2c3e50;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .news-card:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .news-card h4 {
          margin-bottom: 1rem;
          font-size: 1.4rem;
          color: #2c3e50;
          font-weight: 700;
        }

        .news-card p {
          font-size: 1.1rem;
          line-height: 1.5;
          color: #555;
        }

        .about-section {
          padding: 2rem 2rem 3rem 2rem;
          background-color: #fafafa;
          line-height: 1.9;
          font-size: 1.1rem;
          text-align: justify;
          color: #333;
          max-width: 900px;
          margin: 0 auto;
          font-family: Tahoma, sans-serif;
        }

        .about-section h3 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: #2c3e50;
          font-weight: 700;
        }

        .footer {
          padding: 2.5rem 1rem;
          text-align: center;
          background-color: #222;
          color: #ccc;
          font-size: 1rem;
          font-family: Tahoma, sans-serif;
          margin-top: 3rem;
          letter-spacing: 0.03em;
        }

        @media (max-width: 600px) {
          .slider-title {
            font-size: 1.3rem;
            white-space: normal;
            text-align: center;
          }

          .slider-title-container img{
            width: 60px;
            height: 60px;
          }

          .slider-title-container {
            flex-direction: column;
            gap: 1rem;
          }

          .services-title {
            font-size: 1.6rem;
          }

          .news-title {
            font-size: 1.6rem;
          }

          .news-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .news-card {
            padding: 1.5rem;
            border-radius: 12px;
          }

          .about-section {
            padding: 1.5rem 1rem 2rem 1rem;
            font-size: 1rem;
          }

          .footer {
            font-size: 0.9rem;
            padding: 2rem 1rem;
          }
        }
      `}</style>

      {/* Slider */}
      <div className="slider">
        {sliderImages.map((src, i) => (
          <img
          id='slideImg'
            key={i}
            src={src}
            className={i === currentIndex ? 'active' : ''}
            alt={`slide-${i}`}
          />
        ))}
        <div className="slider-title-container">
          <img src="/logo1.png" alt="logo1" />
          <div className="slider-title">قرارگاه مهارت‌آموزی سپاه ثارالله استان کرمان</div>
          <img src="/logo2.png" alt="logo2" />
        </div>
      </div>

      {/* میز خدمات */}
      <section className="services-section">
      
        <h2 className="services-title"><GrServices />  میز خدمات</h2>
        <div className="services">
          <Link href="/needs-assessment-form" passHref>
            <div className="service-button" style={{ backgroundColor: '#007bff' }}>
              <FaSearch size={30} />
              <span>نیازسنجی و مشاوره شغلی</span>
            </div>
          </Link>
          <Link href="/certificate" passHref>
            <div className="service-button" style={{ backgroundColor: '#28a745' }}>
              <FaCertificate size={30} />
              <span>دریافت گواهی مهارتی</span>
            </div>
          </Link>
          <Link href="/exam/register" passHref>
            <div className="service-button" style={{ backgroundColor: '#ffc107', color:'#222' }}>
              <FaClipboardList size={30} />
              <span>ثبت‌نام در آزمون</span>
            </div>
          </Link>
          <Link href="/exam/tracking" passHref>
            <div className="service-button" style={{ backgroundColor: '#17a2b8' }}>
              <FaTools size={30} />
              <span>پیگیری نمرات و کارت ورود</span>
            </div>
          </Link>
          <Link href="/skills-competition" passHref>
            <div className="service-button" style={{ backgroundColor: '#6f42c1' }}>
              <FaTrophy size={30} />
              <span>ثبت‌نام در مسابقات مهارتی</span>
            </div>
          </Link>
        </div>
      </section>

      {/* اخبار */}
      <section className="news-section">
        <h2 className="news-title"><FaBell /> اخبار و اطلاعیه‌ها</h2>
        <div className="news-grid">
          {[ 
            {
              title: 'شروع دوره‌های جدید',
              description: 'ثبت‌نام دوره‌های برق، کامپیوتر، جوشکاری و مکانیک خودرو برای ترم جدید آغاز شد. فرصت عالی برای افزایش مهارت‌های عملی.'
            },
            {
              title: 'آزمون جامع',
              description: 'زمان‌بندی و شرایط برگزاری آزمون جامع مهارت‌های فنی منتشر شده است. تمامی شرکت‌کنندگان ملزم به رعایت پروتکل‌ها هستند.'
            },
            {
              title: 'برترین‌های مسابقات',
              description: 'اسامی نفرات برتر مسابقات مهارتی سال جاری اعلام شد. این رقابت‌ها فرصتی برای نشان دادن استعدادهای برتر است.'
            },
            {
              title: 'کارگاه‌های تخصصی',
              description: 'کارگاه‌های عملی ویژه مهارت‌های برق صنعتی و تعمیرات لوازم خانگی در ماه آینده برگزار خواهد شد.'
            },
            {
              title: 'دوره‌های آنلاین',
              description: 'ثبت‌نام دوره‌های آنلاین آموزش برنامه‌نویسی و طراحی وب برای سربازان علاقه‌مند شروع شده است.'
            },
            {
              title: 'حمایت از کسب‌وکارها',
              description: 'طرح حمایت از کسب‌وکارهای کوچک در حوزه مهارت‌آموزی سربازان به زودی اجرایی می‌شود.'
            },
            {
              title: 'امتیازات جدید',
              description: 'اعلام امتیازات جدید برای شرکت‌کنندگان فعال در دوره‌ها و مسابقات مهارتی.'
            },
            {
              title: 'همکاری‌های جدید',
              description: 'قراردادهای همکاری با مراکز فنی حرفه‌ای استان‌های مختلف برای گسترش آموزش‌ها منعقد شد.'
            },
            {
              title: 'بازدید مسئولین',
              description: 'مسئولین ارشد وزارت دفاع از روند آموزش مهارتی در قرارگاه بازدید کردند و بر حمایت بیشتر تاکید کردند.'
            },
            {
              title: 'اطلاعیه مهم',
              description: 'تغییرات جدید در شرایط ثبت‌نام دوره‌های مهارتی اعلام شد. لطفاً اطلاعیه‌ها را به دقت مطالعه کنید.'
            }
          ].map(({title, description}, i) => (
            <MotionDiv key={i} whileHover={{ scale: 1.03 }}
             style={{ 
              "backgroundColor":" #f9f9f9",
              "padding": "2rem",
              "borderRadius":"16px",
              "boxShadow":" 0 4px 14px rgba(0, 0, 0, 0.12)",
              "transition": "boxShadow 0.3s ease",
              "cursor": "default"
              }}>
              <h4>{title}</h4>
              <p>{description}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* درباره مهارت‌آموزی */}
      <section className="about-section">
        <h3>درباره مهارت‌آموزی در خدمت سربازی</h3>
        <p>
          طرح مهارت‌آموزی در خدمت سربازی با هدف افزایش توانمندی نیروهای وظیفه در راستای ورود مؤثر به بازار کار پس از پایان خدمت طراحی شده است. این برنامه با همکاری سازمان فنی و حرفه‌ای کشور و قرارگاه مهارت‌آموزی سپاه ثارالله استان کرمان اجرا می‌شود.
        </p>
        <p>
          در این طرح، سربازان فرصت شرکت در دوره‌های تخصصی و متنوع آموزشی را دارند که مهارت‌های فنی و حرفه‌ای آنان را ارتقاء می‌بخشد و زمینه‌ساز اشتغال پایدار پس از خدمت می‌شود.
        </p>
        <p>
          این دوره‌ها شامل آموزش‌هایی همچون برق صنعتی، جوشکاری، مکانیک خودرو، کامپیوتر و تعمیرات لوازم خانگی است که به صورت عملی و تئوری برگزار می‌شوند.
        </p>
        <p>
          علاوه بر آموزش، خدمات مشاوره شغلی و هدایت استعدادها به سمت مشاغل مورد نیاز بازار کار، یکی از اهداف کلیدی این طرح است که موجب افزایش رضایت و موفقیت سربازان در آینده خواهد شد.
        </p>
        <p>
          هدف نهایی طرح مهارت‌آموزی کاهش نرخ بیکاری جوانان و افزایش بهره‌وری نیروی انسانی کشور از طریق استفاده بهینه از دوران خدمت سربازی است.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} قرارگاه مهارت‌آموزی سپاه ثارالله استان کرمان
      </footer>
    </div>
  );
}
