"use client";

import { useState } from "react";
import Link from "next/link";

export default function CertificateViewer() {
  const [nationalCode, setNationalCode] = useState("");
  const [certificates, setCertificates] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setCertificates([]);
    if (!/^\d{10}$/.test(nationalCode)) {
      setError("کد ملی باید دقیقاً ۱۰ رقم عددی باشد.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/get-certificates?st_nid=${nationalCode}`);
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "خطایی در دریافت اطلاعات رخ داد.");
      }
      const data = await res.json();
      setCertificates(data);
      if (data.length === 0) setError("هیچ مدرکی یافت نشد.");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
        <div className="title"></div>
      <h1>مشاهده مدارک مهارت‌آموزی سپاه ثارالله</h1>
      <p>جهت جستجو کد ملی را وارد نموده و سپس بر روی دکمه جستجو کلیک نمایید</p>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="nationalCode">کد ملی</label>
        <input
          id="nationalCode"
          type="number"
          inputMode="numeric"
          value={nationalCode}
          onChange={(e) => setNationalCode(e.target.value)}
          onWheel={(e) => e.target.blur()}
          placeholder="۱۰ رقم کد ملی"
          required
          maxLength={10}
          className="input"
        />
        <button type="submit" disabled={loading} className="btn">
          {loading ? "در حال بارگذاری..." : "جستجو"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {certificates.length > 0 && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>شماره گواهی</th>
                <th>عنوان آزمون</th>
                <th>کد ملی</th>
                <th>نام</th>
                <th>نام خانوادگی</th>
                <th>پدر</th>
                <th>استان</th>
                <th>مرکز</th>
                <th>کارگاه</th>
                <th>لینک PDF</th>
                <th>لینک JPG</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((c, idx) => (
                <tr key={idx}>
                  <td>{c.standardTitle}</td>
                  <td>{c.examTitle}</td>
                  <td>{c.nationalCode}</td>
                  <td>{c.firstName}</td>
                  <td>{c.lastName}</td>
                  <td>{c.fatherName}</td>
                  <td>{c.province}</td>
                  <td>{c.center}</td>
                  <td>{c.workshop}</td>
                  <td>
                    <Link
                      href={c.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      PDF
                    </Link>
                  </td>
                  <td>
                    <Link
                      href={c.jpgLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      JPG
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <style jsx>{`
        .title{
            display:flex
        }
        .container {
          max-width: 1000px;
          margin: 2rem auto;
          padding: 1rem;
          direction: rtl;
          font-family: Tahoma, sans-serif;
          color: #004d00;
        }

        h1 {
          text-align: center;
          margin-bottom: 1rem;
          color: #006400;
        }

        .form {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        label {
          flex-basis: 100%;
          font-weight: bold;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .input {
          flex: 1 1 250px;
          padding: 0.5rem 0.75rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          outline-color: #4caf50;
        }

        button.btn {
          background-color: #008000;
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          font-size: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          flex-shrink: 0;
        }
        button.btn:disabled {
          background-color: #7caf7c;
          cursor: not-allowed;
        }
        button.btn:hover:not(:disabled) {
          background-color: #004d00;
        }

        .error {
          color: red;
          text-align: center;
          margin-bottom: 1rem;
          font-weight: bold;
        }

        .table-container {
          overflow-x: auto;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 77, 0, 0.15);
        }

        table {
          border-collapse: collapse;
          width: 100%;
          min-width: 900px;
        }

        th,
        td {
          border: 1px solid #006400;
          padding: 8px 12px;
          text-align: center;
          font-size: 0.9rem;
          vertical-align: middle;
        }

        thead {
          background-color: #a4d4a4;
          color: #004d00;
          font-weight: bold;
        }

        tbody tr:nth-child(even) {
          background-color: #e6f2e6;
        }

        .link {
          color: #004d00;
          text-decoration: underline;
        }
        .link:hover {
          color: #002600;
        }

        @media (max-width: 768px) {
          table {
            min-width: 700px;
          }
          .form {
            flex-direction: column;
            align-items: stretch;
          }
          .input {
            flex: 1 1 auto;
          }
          button.btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
