'use client';

import { useState } from 'react';
import { FaGift, FaUserEdit, FaCheckCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';

export default function CompetitionRegisterPage() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    await Swal.fire({
      title: 'اطلاعات با موفقیت ثبت شد',
      icon: 'success',
      confirmButtonText: 'باشه',
      background: '#1a202c',
      color: '#fff',
    });

    window.location.reload();
    // Send data to API here
  };

  const skills = [
    "حفاظت فیزیکی",
    "کمک‌های اولیه",
    "HSE آمادگی در برابر مخاطرات",
    "عکاسی دیجیتال",
    "برنامه‌نویسی پایتون",
    "تعمیر آبگرمکن",
    "برق کشی ساختمان",
    "نصاب و تعمیرکاری کولر های گازی",
    "آشپزی",
    "نانوایی سنتی",
    "رشته آرایشگری",
    "تعمیرکار خودرو",
    "تعمیرکار برق خودرو",
    "دوربین مداربسته",
    "تعمیر سخت‌افزار موبایل",
    "برنامه نویسی توسعه وب",
    "اتوکد",
  ];

  const benefits = [
    "تعیین محل خدمت به انتخاب سرباز",
    "مرخصی تشویقی",
    "اعطای کارت آزمون‌گری",
    "پرداخت تسهیلات وام‌های خود اشتغالی",
    "بخشش اضافه خدمت سنواتی",
    "اولویت گزینش و استخدام در سپاه",
    "پاداش نقدی تا سقف ۱۰ میلیون تومان"
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}><FaUserEdit style={{ marginLeft: '8px' }} />ثبت‌نام در مسابقات مهارت‌آموزی سربازان</h1>
      <p style={styles.paragraph}>
        مسابقات مهارت‌آموزی با هدف شکوفاسازی توانایی‌ها و ارتقای سطح مهارتی سربازان عزیز برگزار می‌شود. شرکت در این رقابت‌ها به شما کمک می‌کند تا مهارت‌های واقعی مورد نیاز بازار کار را کسب کرده و از فرصت‌های ارزشمند خدمتی بهره‌مند شوید.
      </p>

      <h2 style={styles.subtitle}><FaGift style={{ marginLeft: '6px' }} />جوایز و مشوق‌ها</h2>
      <ul style={styles.benefitsList}>
        {benefits.map((item, index) => (
          <li key={index}><FaCheckCircle style={{ color: '#2f855a', marginLeft: '5px' }} /> {item}</li>
        ))}
      </ul>

      <h2 style={styles.subtitle}>فرم ثبت‌نام</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>نام و نام خانوادگی<input type="text" name="name" onChange={handleChange} style={styles.input} /></label>
        <label>کد ملی<input type="text" name="nid" onChange={handleChange} style={styles.input} /></label>
        <label>نام پدر<input type="text" name="father" onChange={handleChange} style={styles.input} /></label>
        <label>تاریخ تولد<input type="text" name="birth" onChange={handleChange} style={styles.input} /></label>
        <label>شماره تماس<input type="text" name="phone" onChange={handleChange} style={styles.input} /></label>
        <label>مدرک تحصیلی<input type="text" name="degree" onChange={handleChange} style={styles.input} /></label>
        <label>شهر محل خدمت<input type="text" name="city" onChange={handleChange} style={styles.input} /></label>

        <label>رشته مورد نظر
          <select name="skill" onChange={handleChange} style={styles.input}>
            <option value="">رشته مورد نظر را انتخاب کنید</option>
            {skills.map((skill) => (
              <option key={skill} value={skill}>{skill}</option>
            ))}
          </select>
        </label>

        <label>سوابق و توضیحات<textarea name="background" placeholder='سوابق خود را در این رشته بنویسید' onChange={handleChange} style={styles.textarea} /></label>

        <button type="submit" style={styles.button}>ثبت‌نام</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Tahoma, sans-serif',
    backgroundColor: '#f9fafb',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    color: '#2a4365',
  },
  paragraph: {
    textAlign: 'justify',
    marginBottom: '2rem',
    lineHeight: '1.8',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.4rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    color: '#2c5282',
  },
  benefitsList: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '2rem',
    lineHeight: '2',
    color: '#2d3748',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '10px',
    border: '1px solid #e2e8f0'
  },
  input: {
    padding: '0.8rem',
    fontSize: '1rem',
    border: '1px solid #cbd5e0',
    borderRadius: '6px',
    backgroundColor: '#edf2f7',
    width: '100%',
    marginTop: '0.5rem',
    color:"#000"
  },
  textarea: {
    padding: '0.8rem',
    fontSize: '1rem',
    height: '120px',
    border: '1px solid #cbd5e0',
    borderRadius: '6px',
    backgroundColor: '#edf2f7',
    width: '100%',
    marginTop: '0.5rem',
    color:"#000"
  },
  button: {
    padding: '1rem',
    fontSize: '1rem',
    backgroundColor: '#2b6cb0',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '1rem'
  },
};
