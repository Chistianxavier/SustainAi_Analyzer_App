"use client";

import { useLanguage } from "@/lib/language-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";

export default function privacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <Navbar />

      {/* Main content */}
      <main className="mt-20 container mx-auto px-4 py-8 relative z-10">
        {/* Welcome section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Page Title */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-primary">
                {t("privacypolicy.pageTitle") || "Privacy Policy"}
              </h1>
              <p className="text-muted-foreground">
                {t("privacypolicy.pageSubtitle") ||
                  "Your privacy matters to us."}
              </p>
            </div>

            {/* Policy Card Container */}
            <div className="bg-card/50 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/10">
              {Array.from({ length: 11 }).map((_, index) => {
                const pointNumber = index + 1;
                return (
                  <div key={pointNumber} className="mb-12 last:mb-0 group">
                    {/* Section Title */}
                    <h2 className="text-xl md:text-2xl font-semibold text-primary group-hover:text-primary/80 transition mb-4">
                      {t(`privacypolicy.point${pointNumber}.title`)}
                    </h2>

                    {/* Divider */}
                    <div className="w-16 h-1 bg-primary/40 rounded-full mb-6" />

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {t(`privacypolicy.point${pointNumber}.description`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
