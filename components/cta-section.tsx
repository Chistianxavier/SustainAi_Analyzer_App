"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function CTASection() {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={cn(
            "relative max-w-4xl mx-auto text-center p-12 md:p-16 rounded-3xl transition-all duration-700",
            "bg-card/30 border border-border/50 backdrop-blur-xl",
            "shadow-2xl shadow-primary/10",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Decorative gradient border */}
          <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-primary/50 via-transparent to-accent/50 -z-10">
            <div className="w-full h-full rounded-3xl bg-card" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              {t("cta.badge")}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("cta.titleStart")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {t("cta.titleHighlight1")}
            </span>
            {t("cta.titleMid")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              {t("cta.titleHighlight2")}
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            {t("cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#solutions">
              <Button
                size="lg"
                className="group text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
              >
                {t("cta.cta1")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <a href="#team">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary/50 text-foreground hover:bg-primary/10 bg-transparent"
              >
                {t("cta.cta2")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
