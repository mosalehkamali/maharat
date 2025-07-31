import axios from "axios";
import * as cheerio from "cheerio";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const st_nid = searchParams.get("st_nid");

    if (!st_nid) {
      return new Response(
        JSON.stringify({ error: "کد ملی (st_nid) ارسال نشده است" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const formData = new URLSearchParams();
    formData.append("st_nid", st_nid);
    formData.append("st_iid", "0");
    formData.append("st_nationality", "1");
    formData.append("dlpdf", "1");

    const response = await axios.post(
      "https://azmoon.portaltvto.com/estelam/estelam/index/",
      formData.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Mozilla/5.0 (compatible; Next.js API)",
        },
      }
    );

    const $ = cheerio.load(response.data);

    const certificates = [];

    $("table.CForm_ViewItesmGrid tr").each((index, element) => {
      if (index === 0) return; // رد کردن سطر هدر

      const tds = $(element).find("td");
      if (tds.length === 0) return;

      const certificateNumber = $(tds[0]).text().trim();
      const pdfLink = `https://pws1.portaltvto.com/card_files/gavahi/${certificateNumber}.pdf`;
      const jpgLink = `https://pws1.portaltvto.com/card_files/gavahi/${certificateNumber}.jpg`;

      certificates.push({
        certificateNumber,
        pdfLink,
        jpgLink,
        examTitle: $(tds[3]).text().trim(),
        nationalCode: $(tds[4]).text().trim(),
        electronicCertificateNumber: $(tds[5]).text().trim(),
        firstName: $(tds[6]).text().trim(),
        lastName: $(tds[7]).text().trim(),
        fatherName: $(tds[8]).text().trim(),
        shenasnameh: $(tds[9]).text().trim(),
        standardTitle: $(tds[10]).text().trim(),
        standardCode: $(tds[11]).text().trim(),
        hours: parseInt($(tds[12]).text().trim(), 10) || null,
        examDate: $(tds[13]).text().trim(),
        province: $(tds[14]).text().trim(),
        center: $(tds[15]).text().trim(),
        workshop: $(tds[16]).text().trim(),
      });
    });

    return new Response(JSON.stringify(certificates), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
    return new Response(
      JSON.stringify({ error: "مشکلی در دریافت اطلاعات پیش آمده است." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
