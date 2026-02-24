import { NextResponse } from "next/server";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const language = (formData.get("language") as string) || "id";

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  // ✅ VALIDASI TIPE
  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: "Invalid file type. Only PNG/JPG allowed." },
      { status: 400 }
    );
  }

  // ✅ VALIDASI UKURAN
  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      { error: "File too large. Max 5MB." },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const base64File = buffer.toString("base64");

  const PROMPT_EN = `
You are an agricultural plant disease analysis AI.

TASK:
Analyze the uploaded plant image and return a VALID JSON response identifying possible plant diseases or pest attacks.

IMPORTANT RULES:
- Response MUST be pure JSON
- No markdown
- No explanation text
- No comments
- Do not wrap with backticks
- If unsure, still provide the most probable diagnosis with lower confidence_level

Use this JSON structure:

{
  "plant_type": string,
  "disease_name": string,
  "confidence_level": string,
  "severity_level": string,
  "symptoms_detected": string[],
  "possible_causes": string[],
  "spread_risk": string,
  "treatment_recommendation": string[],
  "prevention_tips": string[],
  "harvest_impact": string
}

CRITERIA:
- confidence_level: Low, Medium, or High
- severity_level: Mild, Moderate, or Severe
- spread_risk: Low, Medium, or High
- symptoms_detected: minimum 2 observable symptoms
- treatment_recommendation: minimum 2 clear actionable steps
- prevention_tips: 2–4 practical prevention tips
- harvest_impact: explain impact on crop yield in simple terms
- Use clear, educational, farmer-friendly English

If the image does not contain a plant, return:
{
  "plant_type": "Unknown",
  "disease_name": "Not a plant image",
  "confidence_level": "0%",
  "severity_level": "None",
  "symptoms_detected": [],
  "possible_causes": [],
  "spread_risk": "None",
  "treatment_recommendation": [
    "No treatment needed because the image does not contain a plant."
  ],
  "prevention_tips": [
    "Ensure the uploaded image clearly shows a plant for accurate analysis."
  ],
  "harvest_impact": "No impact"
}
`;

  const PROMPT_ID = `
Kamu adalah AI analis penyakit dan hama tanaman pertanian.

TUGAS:
Analisa gambar tanaman yang diberikan dan kembalikan hasil dalam format JSON VALID untuk mengidentifikasi kemungkinan penyakit atau serangan hama.

ATURAN PENTING:
- Jawaban HARUS JSON murni
- Tanpa markdown
- Tanpa penjelasan tambahan
- Tanpa komentar
- Jangan dibungkus backticks
- Jika tidak yakin, tetap berikan diagnosis paling mungkin dengan confidence_level lebih rendah

Gunakan struktur JSON berikut:

{
  "plant_type": string,
  "disease_name": string,
  "confidence_level": string,
  "severity_level": string,
  "symptoms_detected": string[],
  "possible_causes": string[],
  "spread_risk": string,
  "treatment_recommendation": string[],
  "prevention_tips": string[],
  "harvest_impact": string
}

KRITERIA:
- confidence_level: Rendah, Sedang, atau Tinggi
- severity_level: Ringan, Sedang, atau Parah
- spread_risk: Rendah, Sedang, atau Tinggi
- symptoms_detected: minimal 2 gejala yang terlihat
- treatment_recommendation: minimal 2 langkah tindakan yang jelas dan bisa langsung dilakukan
- prevention_tips: 2–4 tips pencegahan praktis
- harvest_impact: jelaskan dampak terhadap hasil panen dengan bahasa sederhana
- Gunakan Bahasa Indonesia yang mudah dipahami petani

Jika gambar tidak mengandung tanaman, kembalikan:

{
  "plant_type": "Tidak diketahui",
  "disease_name": "Bukan gambar tanaman",
  "confidence_level": "0%",
  "severity_level": "Tidak ada",
  "symptoms_detected": [],
  "possible_causes": [],
  "spread_risk": "Tidak ada",
  "treatment_recommendation": [
    "Tidak diperlukan tindakan karena gambar tidak mengandung tanaman."
  ],
  "prevention_tips": [
    "Pastikan gambar yang diunggah menampilkan tanaman dengan jelas untuk analisis yang akurat."
  ],
  "harvest_impact": "Tidak ada dampak"
}
`;

  const prompt = language === "en" ? PROMPT_EN : PROMPT_ID;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.GEMINI_API_KEY_PLANT_ANALYZER}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt },
              {
                inline_data: {
                  mime_type: file.type,
                  data: base64File,
                },
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response.json();

  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!rawText) {
    return NextResponse.json(
      { error: "Empty response from AI" },
      { status: 500 }
    );
  }

  try {
    const parsed = JSON.parse(rawText);
    return NextResponse.json(parsed);
  } catch (err) {
    console.error("Invalid AI JSON:", rawText);
    return NextResponse.json(
      { error: "AI response is not valid JSON" },
      { status: 500 }
    );
  }
}
