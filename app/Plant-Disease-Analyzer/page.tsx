"use client";

import React from "react";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { useEffect } from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Leaf,
  ArrowRight,
  ArrowLeft,
  Upload,
  FileText,
  Building2,
  MapPin,
  Users,
  Check,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";

type AnalysisResult = {
  plant_type: string;
  disease_name: string;
  confidence_level: string;
  severity_level: string;
  symptoms_detected: string[];
  possible_causes: string[];
  spread_risk: string;
  treatment_recommendation: string[];
  prevention_tips: string[];
  harvest_impact: string;
};

export default function SubmitDataPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const { t } = useLanguage();
  const [isFileLoading, setIsFileLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(
    null,
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { language } = useLanguage(); // "en" | "id"
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      toast.error(t("form.Waste.alertinfo1"));

      e.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast.error(t("form.Waste.alertinfo2"));

      e.target.value = "";
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setFileName(file.name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const input = document.getElementById("file-upload") as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      toast.error(t("form.Waste.alertinfo3"));

      return;
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      toast.error(t("form.Waste.alertinfo4")); // buat key baru

      input.value = "";
      return;
    }

    // ✅ VALIDASI UKURAN FILE
    if (file.size > MAX_FILE_SIZE) {
      toast.error(t("form.Waste.alertinfo5"));

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
      const res = await fetch("/api/analyze-plant", {
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
            {t("form.Plant.label")}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            {t("form.Plant.title")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto px-2 text-pretty">
            {t("form.Plant.description")}
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
                          {t("form.Waste.supportingDocs")}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {t("form.Waste.supportingDocsDesc")}
                        </p>
                      </div>
                    </div>

                    {/* SINGLE INPUT ONLY */}
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      onChange={handleFileChange}
                      accept="image/png, image/jpeg"
                    />

                    {!previewUrl ? (
                      /* ================= EMPTY STATE ================= */
                      <label
                        htmlFor="file-upload"
                        className="border-2 border-dashed border-border/50 rounded-xl p-10 text-center hover:border-primary/50 transition-colors cursor-pointer block"
                      >
                        <Upload className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
                        <p className="font-medium">Klik untuk mengunggah</p>
                        <p className="text-sm text-muted-foreground">
                          PNG, JPG, JPEG (Max 5MB)
                        </p>
                      </label>
                    ) : (
                      /* ================= PREVIEW STATE ================= */
                      <div className="p-6 rounded-2xl border bg-card shadow-sm space-y-4">
                        {/* === SQUARE PREVIEW 1:1 === */}
                        <div className="relative w-full max-w-sm mx-auto aspect-square overflow-hidden rounded-xl border">
                          <img
                            src={previewUrl}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />

                          {/* FULL PREVIEW BUTTON */}
                          <button
                            type="button"
                            onClick={() => setIsPreviewOpen(true)}
                            className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-md text-xs hover:bg-black/80 transition"
                          >
                            ⛶
                          </button>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground truncate">
                            {fileName}
                          </span>

                          <label
                            htmlFor="file-upload"
                            className="px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-sm cursor-pointer transition"
                          >
                            {t("form.Waste.changeFile")}
                          </label>
                        </div>
                      </div>
                    )}
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
                <div className="mt-6 space-y-10">
                  {/* ================= HEADER ================= */}
                  <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-primary">
                      {t("form.Plant.result")}
                    </h2>
                    <p className="text-muted-foreground">
                      {t("form.Plant.diagnosis")}
                    </p>
                  </div>

                  {/* ================= IMAGE ================= */}
                  <div className="w-full h-72 overflow-hidden rounded-2xl border shadow-sm">
                    <img
                      src={previewUrl || ""}
                      alt="Analyzed Plant"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* ================= MAIN DIAGNOSIS CARD ================= */}
                  <div className="p-6 rounded-2xl border bg-card shadow-md space-y-4">
                    <div className="flex justify-between items-center flex-wrap gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary">
                          {analysisResult.disease_name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {t("form.Plant.plantType")}{" "}
                          {analysisResult.plant_type}
                        </p>
                      </div>

                      <div className="flex gap-3 flex-wrap">
                        {/* Confidence Badge */}
                        <span className="px-4 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                          {t("form.Plant.confidence")}{" "}
                          {analysisResult.confidence_level}
                        </span>

                        {/* Severity Badge */}
                        <span
                          className={`px-4 py-1 rounded-full text-sm font-medium ${
                            analysisResult.severity_level === "Parah" ||
                            analysisResult.severity_level === "Severe"
                              ? "bg-red-100 text-red-700"
                              : analysisResult.severity_level === "Sedang" ||
                                  analysisResult.severity_level === "Moderate"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                          }`}
                        >
                          {t("form.Plant.severity")}{" "}
                          {analysisResult.severity_level}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ================= SYMPTOMS ================= */}
                  <div className="p-6 rounded-2xl border bg-card shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">
                      {t("form.Plant.symptom")}
                    </h3>
                    <ul className="space-y-3">
                      {analysisResult.symptoms_detected.map((symptom, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-7 h-7 flex items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
                            {idx + 1}
                          </div>
                          <span className="text-sm leading-relaxed">
                            {symptom}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ================= POSSIBLE CAUSES ================= */}
                  <div className="p-6 rounded-2xl border bg-card shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">
                      {t("form.Plant.cause")}
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      {analysisResult.possible_causes.map((cause, idx) => (
                        <li key={idx}>{cause}</li>
                      ))}
                    </ul>
                  </div>

                  {/* ================= SPREAD RISK ================= */}
                  <div className="p-6 rounded-2xl border-l-4 border-orange-500 bg-orange-50">
                    <h3 className="text-lg font-semibold text-orange-700 mb-2">
                      {t("form.Plant.risk")}
                    </h3>
                    <p className="text-sm text-orange-900">
                      {t("form.Plant.riskLevel")}{" "}
                      <strong>{analysisResult.spread_risk}</strong>
                    </p>
                  </div>

                  {/* ================= TREATMENT ================= */}
                  <div className="p-6 rounded-2xl border bg-card shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">
                      {t("form.Plant.recomendationCare")}
                    </h3>
                    <ul className="space-y-3">
                      {analysisResult.treatment_recommendation.map(
                        (step, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-green-100 text-green-700 text-sm font-bold">
                              {idx + 1}
                            </div>
                            <span className="text-sm leading-relaxed">
                              {step}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  {/* ================= PREVENTION ================= */}
                  <div className="p-6 rounded-2xl border bg-card shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">
                      {t("form.Plant.prevention")}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {analysisResult.prevention_tips.map((tip, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-secondary border text-sm"
                        >
                          🌱 {tip}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ================= HARVEST IMPACT ================= */}
                  <div className="p-6 rounded-2xl border-l-4 border-red-500 bg-red-50">
                    <h3 className="text-lg font-semibold text-red-700 mb-2">
                      {t("form.Plant.impatct")}
                    </h3>
                    <p className="text-sm text-red-900 leading-relaxed">
                      {analysisResult.harvest_impact}
                    </p>
                  </div>

                  {/* ================= RESET BUTTON ================= */}
                  <div className="flex justify-center pt-4">
                    <button
                      onClick={() => window.location.reload()}
                      className="px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition shadow-lg shadow-primary/20"
                    >
                      {t("form.Plant.submitAgain")}
                    </button>
                  </div>
                </div>
              )}
              {isPreviewOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm rounded-lg border-2 border-primary">
                  <div className="relative max-w-4xl w-full p-4">
                    <button
                      onClick={() => setIsPreviewOpen(false)}
                      className="absolute -top-8 right-4 bg-white/20 text-white px-3 py-1 rounded-md hover:bg-white/40 transition"
                    >
                      <p className="text-2xl text-red-400 font-bold">✕</p>
                    </button>

                    <img
                      src={previewUrl || ""}
                      alt="Full Preview"
                      className="w-full max-h-[85vh] object-contain rounded-xl"
                    />
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
