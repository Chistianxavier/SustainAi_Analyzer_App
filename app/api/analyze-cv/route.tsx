import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const language = (formData.get("language") as string) || "id";
  const MAX_FILE_SIZE = 10 * 1024 * 1024;

  if (file.type !== "application/pdf") {
    return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
  }

  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json({ error: "File too large" }, { status: 400 });
  }

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const base64File = buffer.toString("base64");
  const PROMPT_EN = `
  You are a professional CV analyst AI.
  
  Task:
  Analyze the given CV and return the result in a VALID JSON format.
  
  IMPORTANT RULES:
  - The response MUST be pure JSON
  - DO NOT add any explanations
  - DO NOT use markdown
  - DO NOT add comments
  - DO NOT wrap the JSON with backticks
  
  Use the following JSON structure:
  
  {
    "score": number,
    "score_reason": string,
    "skills": string[],
    "recommendations": string[],
    "main_improvement": string[],
    "job_keywords": string[]
  }
  
  Criteria:
  - score: number between 0–100
  - skills: maximum 3 main skills
  - recommendations: maximum 2 job roles
  - main_improvement:
    - MUST be an ARRAY
    - Each item must be clear, specific, and actionable
    - Minimum 2 items, maximum 4 items
  - job_keywords: LinkedIn / Indeed search keywords
  - Use clear, professional, and friendly English
  `;

  const PROMPT_ID = `
Kamu adalah AI analis CV profesional.

Tugas:
Analisa CV yang diberikan dan kembalikan hasil dalam format JSON yang VALID.

ATURAN PENTING:
- Jawaban HARUS berupa JSON murni
- JANGAN menambahkan teks penjelasan apapun
- JANGAN menggunakan markdown
- JANGAN menambahkan komentar
- JANGAN membungkus JSON dengan \`\`\`

Gunakan struktur JSON berikut:

{
  "score": number,
  "score_reason": string,
  "skills": string[],
  "recommendations": string[],
  "main_improvement": string[],
  "job_keywords": string[]
}

Kriteria:
- score: angka 0–100
- skills: maksimal 3 skill utama
- recommendations: maksimal 2 posisi / role
- main_improvement:
  - BERUPA LIST / ARRAY
  - Setiap poin harus jelas, spesifik, dan mudah dipahami
  - Minimal 2 poin, maksimal 4 poin
- job_keywords: kata kunci pencarian LinkedIn / Indeed
- Bahasa Indonesia santai tapi profesional
`;

  const prompt = language === "en" ? PROMPT_EN : PROMPT_ID;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.GEMINI_API_KEY_CV_ANALYZER}`,
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

  let parsed;
  try {
    parsed = JSON.parse(rawText);
  } catch (err) {
    console.error("Invalid AI JSON:", rawText);
    return NextResponse.json(
      { error: "AI response is not valid JSON" },
      { status: 500 }
    );
  }

  return NextResponse.json(parsed);
}
