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
You are an environmental waste analysis AI.

TASK:
Analyze the uploaded waste image and return a VALID JSON response.

IMPORTANT RULES:
- Response MUST be pure JSON
- No markdown
- No explanation text
- No comments
- Do not wrap with backticks

Use this JSON structure:

{
  "waste_type": string,
  "recyclable": boolean,
  "recycle_category": string,
  "environmental_impact": string,
  "disposal_instructions": string[],
  "recycling_tips": string[]
}

CRITERIA:
- disposal_instructions: minimum 2 steps
- recycling_tips: 2–4 practical suggestions
- Clear, educational, user-friendly English
`;

  const PROMPT_ID = `
Kamu adalah AI analis sampah dan lingkungan.

TUGAS:
Analisa gambar sampah yang diberikan dan kembalikan hasil dalam format JSON VALID.

ATURAN PENTING:
- Jawaban HARUS JSON murni
- Tanpa markdown
- Tanpa penjelasan tambahan
- Tanpa komentar
- Jangan dibungkus backticks

Gunakan struktur JSON berikut:

{
  "waste_type": string,
  "recyclable": boolean,
  "recycle_category": string,
  "environmental_impact": string,
  "disposal_instructions": string[],
  "recycling_tips": string[]
}

KRITERIA:
- disposal_instructions: minimal 2 langkah jelas
- recycling_tips: 2–4 tips praktis
- Bahasa Indonesia santai tapi edukatif
`;

  const prompt = language === "en" ? PROMPT_EN : PROMPT_ID;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.GEMINI_API_KEY_WASTE_ANALYZER}`,
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
