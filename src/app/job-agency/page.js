'use client';

import { useState } from 'react';
import { FaWpforms, FaFileInvoice, FaAddressCard } from 'react-icons/fa';
import { SiLevelsdotfyi } from "react-icons/si";
import { AiOutlineAim } from "react-icons/ai";
import Swal from 'sweetalert2';

export default function EmploymentFormPage() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
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
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}><FaWpforms /> فرم ثبت‌نام بنگاه کاریابی</h1>

      <h2 style={styles.stepTitle}><SiLevelsdotfyi /> مراحل اجرای طرح</h2>
      <ul style={styles.stepsList}>
        <li> دریافت مشخصات سربازان دارای مدرک مهارت‌آموزی و پایان خدمت</li>
        <li> شناسایی نیازهای منابع انسانی صنایع، معادن و شرکت‌ها</li>
        <li> معرفی تخصصی سربازان به مجموعه‌های متقاضی</li>
      </ul>

      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.sectionTitle}><FaAddressCard /> اطلاعات فردی</h2>
        <label>نام و نام خانوادگی</label>
        <input name="name" onChange={handleChange} style={styles.input} />
        <label>کد ملی</label>
        <input name="nid" onChange={handleChange} style={styles.input} />
        <label>تاریخ تولد</label>
        <input name="birth" onChange={handleChange} style={styles.input} />
        <label>شماره تماس</label>
        <input name="phone" onChange={handleChange} style={styles.input} />
        <label>مدرک تحصیلی</label>
        <input name="degree" onChange={handleChange} style={styles.input} />
        <label>شهر محل سکونت</label>
        <input name="city" onChange={handleChange} style={styles.input} />

        <h2 style={styles.sectionTitle}><AiOutlineAim /> اطلاعات خدمتی</h2>
        <label>محل خدمت</label>
        <input name="servicePlace" onChange={handleChange} style={styles.input} />
        <label>یگان خدمتی</label>
        <input name="unit" onChange={handleChange} style={styles.input} />
        <label>تاریخ پایان خدمت</label>
        <input name="endDate" onChange={handleChange} style={styles.input} />
        <label>تعداد ماه‌های خدمت</label>
        <input name="monthsServed" onChange={handleChange} style={styles.input} />

        <h2 style={styles.sectionTitle}><FaFileInvoice /> مهارت و سوابق</h2>
        <label>مهارت اصلی</label>
        <input name="skill" onChange={handleChange} style={styles.input} />
        <label>سوابق کاری و آموزشی</label>
        <textarea name="background" onChange={handleChange} style={styles.textarea} />
        <label>آپلود رزومه</label>
        <input type="file" name="resume" onChange={handleChange} style={styles.input} />

        <button type="submit" style={styles.button}>ثبت اطلاعات</button>
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
    backgroundColor: '#f7fafc',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '1.8rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
    color: '#2a4365',
  },
  stepTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#2b6cb0',
    marginBottom: '0.5rem',
  },
  stepsList: {
    listStyle: 'decimal',
    backgroundColor: '#e2e8f0',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '2rem',
    paddingRight:'2rem',
    color: '#2d3748',
    fontSize: '1rem',
    lineHeight: '1.8',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
  },
  sectionTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#2c5282',
    marginTop: '1rem',
  },
  input: {
    padding: '0.8rem',
    fontSize: '1rem',
    border: '1px solid #cbd5e0',
    borderRadius: '6px',
    backgroundColor: '#edf2f7',
  },
  textarea: {
    padding: '0.8rem',
    fontSize: '1rem',
    height: '120px',
    border: '1px solid #cbd5e0',
    borderRadius: '6px',
    backgroundColor: '#edf2f7',
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
    marginTop: '1rem',
  },
};
