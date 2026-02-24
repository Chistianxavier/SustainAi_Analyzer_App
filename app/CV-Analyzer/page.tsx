"use client";

import React from "react";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { useEffect } from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import toast from "react-hot-toast";

// Data fetch dari API akan memiliki format seperti ini
type AnalysisResult = {
  score: number;
  score_reason: string;
  skills: string[];
  recommendations: string[];
  main_improvement: string[];
  job_keywords: string[];
};

export default function SubmitDataPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const { t } = useLanguage();
  const [isFileLoading, setIsFileLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { language } = useLanguage();
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // VALIDASI TIPE FILE PDF
    if (file.type !== "application/pdf") {
      toast.error(t("form.CV.alertinfo1"));
      e.target.value = "";
      return;
    }

    // VALIDASI UKURAN FILE MAKSIMAL
    if (file.size > MAX_FILE_SIZE) {
      toast.error(t("form.CV.alertinfo2"));
      e.target.value = "";
      return;
    }

    // ✅ FILE VALID → PROSES PREVIEW
    setIsFileLoading(true);
    setFileName(file.name);

    // 🔥 bersihkan preview lama (memory leak prevention)
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    // ⏳ simulasi animasi loading
    setTimeout(() => {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setIsFileLoading(false);
    }, 800);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const input = document.getElementById("file-upload") as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      toast.error(t("form.CV.alertinfo3"));
      return;
    }

    // ✅ VALIDASI MIME TYPE
    if (file.type !== "application/pdf") {
      toast.error(t("form.CV.alertinfo4"));
      input.value = ""; // reset input
      return;
    }

    // ✅ VALIDASI UKURAN FILE
    if (file.size > MAX_FILE_SIZE) {
      toast.error(t("form.CV.alertinfo5"));
      input.value = "";
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("language", language);

    setIsLoading(true);
    setErrorMessage(null);
    setAnalysisResult(null);

    try {
      const res = await fetch("/api/analyze-cv", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();
      setAnalysisResult(data);
    } catch (err) {
      setErrorMessage("Ada masalah dengan server, silakan coba lagi nanti.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(74, 222, 128, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(74, 222, 128, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Header */}
      <ChatHeader t={t} restartHref="/chat" />

      <div className="relative z-10 container mx-auto px-4 py-4 mt-8 sm:py-8 sm:mt-0">
        {/* Page title */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            {t("form.CV.label")}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            {t("form.CV.title")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto px-2 text-pretty">
            {t("form.CV.description")}
          </p>
        </div>

        {/* Form card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50" />

            <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-8">
              {errorMessage && (
                <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700 text-center">
                  {errorMessage}
                </div>
              )}

              {!analysisResult && (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* File upload section */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/50 flex items-center justify-center">
                        <Upload className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-foreground">
                          {t("form.CV.supportingDocs")}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {t("form.CV.supportingDocsDesc")}
                        </p>
                      </div>
                    </div>

                    <div className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
                      <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        onChange={handleFileChange}
                        accept=".pdf"
                      />

                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
                          <Upload className="w-6 h-6 text-muted-foreground" />
                        </div>
                        {isFileLoading ? (
                          <div className="flex items-center gap-2 text-primary">
                            <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                            Loading file...
                          </div>
                        ) : fileName ? (
                          <div className="text-primary font-medium truncate w-64">
                            {fileName}
                          </div>
                        ) : (
                          <>
                            <p className="text-foreground font-medium mb-1">
                              {t("form.CV.uploadText")}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {t("form.CV.uploadFormats")}
                            </p>
                          </>
                        )}
                        {previewUrl && (
                          <div className="mt-4 text-sm">
                            <button
                              type="button"
                              onClick={() => {
                                if (previewUrl) {
                                  window.open(previewUrl, "_blank");
                                }
                              }}
                              className="text-white hover:text-primary/80 px-4 py-2 bg-primary/60 rounded-md border bg-primary/60 hover:bg-primary/10 transition"
                            >
                              Preview file PDF
                            </button>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 group py-6"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        {t("form.CV.processing")}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        {t("form.CV.submitButton")}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </Button>
                </form>
              )}
              {analysisResult && (
                <div className="mt-2 space-y-6">
                  <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold text-primary">
                      {t("form.CV.resultsTitle")}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-2">
                      {t("form.CV.resultsDescription")}
                    </p>
                  </div>
                  {/* ===================== */}
                  {/* 1. SKOR CV */}
                  {/* ===================== */}
                  <div className="p-6 rounded-xl border bg-card">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold">Skor CV</h3>
                      <span className="text-2xl font-bold text-primary">
                        {analysisResult.score}/100
                      </span>
                    </div>

                    <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          analysisResult.score >= 75
                            ? "bg-green-500"
                            : analysisResult.score >= 50
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${analysisResult.score}%` }}
                      />
                    </div>

                    <p className="mt-4 text-sm text-muted-foreground">
                      {analysisResult.score_reason}
                    </p>
                  </div>

                  {/* ===================== */}
                  {/* 2. SKILLS */}
                  {/* ===================== */}
                  <div className="p-6 rounded-xl border bg-card">
                    <h3 className="text-lg font-semibold mb-4">
                      {t("form.CV.mainSkills")}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {analysisResult.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-secondary text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ===================== */}
                  {/* 3. REKOMENDASI POSISI */}
                  {/* ===================== */}
                  <div className="p-6 rounded-xl border bg-card">
                    <h3 className="text-lg font-semibold mb-4">
                      {t("form.CV.positionRecommendations")}
                    </h3>

                    <ul className="space-y-3">
                      {analysisResult.recommendations.map((role, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1">💼</span>
                          <span className="text-sm">{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ===================== */}
                  {/* 4. PERBAIKAN UTAMA */}
                  {/* ===================== */}
                  <div className="p-6 rounded-xl border-l-4 border-orange-500 bg-orange-50">
                    <h3 className="text-lg font-semibold mb-3 text-orange-700">
                      {t("form.CV.upgradeTips")}
                    </h3>

                    <ul className="space-y-2 list-disc list-inside text-sm text-orange-800">
                      {analysisResult.main_improvement.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ===================== */}
                  {/* 5. KATA KUNCI LOKER */}
                  {/* ===================== */}
                  <div className="p-6 rounded-xl border bg-card">
                    <h3 className="text-lg font-semibold mb-4">
                      {t("form.CV.jobKeywords")}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {analysisResult.job_keywords.map((keyword, idx) => (
                        <a
                          key={idx}
                          href={`https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(
                            keyword
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 rounded-full border text-sm hover:bg-secondary transition"
                        >
                          {keyword}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center pt-2">
                    <button
                      onClick={() => window.location.reload()}
                      className="w-full py-4 rounded-lg border text-sm font-medium bg-primary/50 hover:bg-secondary transition"
                    >
                      {t("form.CV.seeOtherCV")}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
