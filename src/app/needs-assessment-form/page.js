"use client";
import { useState } from "react";

export default function NeedsAssessmentForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Input changed:", name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      if (res.ok) {
        console.log("Analysis result:", data.analysis);
        alert("نتیجه تحلیل:\n" + data.analysis);
      } else {
        alert("خطا در دریافت تحلیل");
      }
    } catch (err) {
      alert("خطا در ارسال داده‌ها");
      console.error(err);
    }
  };
  


  return (
    <form onSubmit={handleSubmit} className="needs-form">
      <style jsx>{`
        .needs-form {
          max-width: 768px;
          margin: 2.5rem auto 0 auto;
          padding: 2rem;
          background: linear-gradient(to top right, #ffffff, #e6f4ea, #ffffff);
          border-radius: 1rem;
          box-shadow: 0 10px 20px rgba(72, 187, 120, 0.25);
          text-align: right;
          border: 1px solid #a7d49b;
          font-family: Tahoma, sans-serif;
          color: #1e3a1a;
          line-height: 1.6;
        }

        h2 {
          font-weight: 800;
          font-size: 2rem;
          margin-bottom: 1.5rem;
          text-align: center;
          color: #1b4d23;
          letter-spacing: 0.05em;
        }

        p {
          color: #4a5d68;
          margin-bottom: 2rem;
          text-align: center;
          font-size: 1.1rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #145214;
        }

        input[type="text"],
        input[type="number"],
        select,
        textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #7fc57f;
          border-radius: 0.75rem;
          font-size: 1rem;
          outline: none;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
          font-family: Tahoma, sans-serif;
          color: #ffffff;
          box-sizing: border-box;
        }

        input[type="text"]:focus,
        input[type="number"]:focus,
        select:focus,
        textarea:focus {
          border-color: #4aaf4a;
          box-shadow: 0 0 8px rgba(74, 175, 74, 0.5);
        }

        .mb-5 {
          margin-bottom: 1.25rem;
        }

        .mb-8 {
          margin-bottom: 2rem;
        }

        textarea {
          resize: vertical;
          min-height: 4.5rem;
        }

        .btn-submit {
          background-color: #2c8e29;
          color: white;
          font-size: 1.125rem;
          font-weight: 700;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          box-shadow: 0 6px 15px rgba(44, 142, 41, 0.7);
          transition: background-color 0.3s ease;
          display: block;
          margin: 0 auto;
        }

        .btn-submit:hover {
          background-color: #1f6b1c;
        }

        .flex-center {
          display: flex;
          justify-content: center;
        }
      `}</style>

      <h2>فرم نیازسنجی مهارتی سربازان</h2>

      <p>
        لطفاً فرم زیر را با دقت تکمیل نمایید تا بهترین دوره‌های آموزشی برای شما
        برنامه‌ریزی شود.
      </p>

      {[
        {
          label: "آیا دوره فنی‌حرفه‌ای گذرانده‌اید؟",
          name: "hasCertificate",
          options: ["بله", "خیر"],
        },
        {
          label: "هدف شما از آموزش چیست؟",
          name: "goal",
          options: [
            "اشتغال بعد از خدمت",
            "راه‌اندازی کسب‌وکار",
            "ارتقاء وضعیت خدمت",
          ],
        },
        {
          label: "ترجیح روش آموزش",
          name: "method",
          options: [
            "کارگاهی حضوری",
            "درون‌پادگانی",
            "محیط واقعی کار",
            "ترکیبی",
          ],
        },
        {
          label: "آیا مایل به شرکت در آزمون کتبی و عملی هستید؟",
          name: "examConsent",
          options: ["بله", "خیر"],
        },
        {
          label: "آیا مشاوره شغلی قبلا دریافت کرده‌اید؟",
          name: "hasCounseling",
          options: ["بله", "خیر"],
        },
      ].map(({ label, name, options }) => (
        <div className="mb-5" key={name}>
          <label>{label}</label>
          <select name={name} onChange={handleChange}>
            <option value="">انتخاب کنید</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ))}

      {[
        {
          label: "مدرک تحصیلی شما چیست؟",
          name: "educational",
          placeholder: "مثال: دیپلم ریاضی، کاردانی الکترونیک کارشناسی مکانیک...",
        },
        {
          label: "سابقه کاری شما چیست؟",
          name: "workExperience",
          placeholder: "مثال: ۲ سال جوشکاری، ۱ سال تعمیر موتور...",
        },
        {
          label: "در چه زمینه‌هایی مهارت دارید؟",
          name: "currentSkills",
          placeholder: "مثال: جوشکاری، ICDL، تعمیر موتور...",
        },
        {
          label: "علاقه‌مندی شما به کدام حوزه‌ها است؟",
          name: "interests",
          placeholder: "مثال: برق صنعتی، لوله‌کشی، مکانیک...",
        },
        {
          label: "بازخورد یا توضیحات بیشتر",
          name: "feedback",
          placeholder: "نکات تکمیلی یا پیشنهاد خاصی دارید؟",
        },
      ].map(({ label, name, placeholder }) => (
        <div className="mb-5" key={name}>
          <label>{label}</label>
          <textarea
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            rows={3}
          />
        </div>
      ))}

      <div className="flex-center">
        <button type="submit" className="btn-submit">
          ثبت اطلاعات
        </button>
      </div>

      {result && (
        <div className="mt-8 bg-green-50 border border-green-300 text-green-900 p-5 rounded-xl shadow-inner">
          <h3 className="font-bold mb-2">تحلیل هوش مصنوعی:</h3>
          <p>{result}</p>
        </div>
      )}
    </form>
  );
}
