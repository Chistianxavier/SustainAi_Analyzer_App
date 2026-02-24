"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

const sdgs = [
  { number: 1, titleKey: "sdg.1", color: "#E5243B", active: true },
  { number: 2, titleKey: "sdg.2", color: "#DDA63A", active: true },
  { number: 4, titleKey: "sdg.4", color: "#C5192D", active: true },
  { number: 8, titleKey: "sdg.8", color: "#A21942", active: true },
  { number: 10, titleKey: "sdg.10", color: "#DD1367", active: true },
  { number: 11, titleKey: "sdg.11", color: "#FD9D24", active: true },
  { number: 12, titleKey: "sdg.12", color: "#BF8B2E", active: true },
  { number: 13, titleKey: "sdg.13", color: "#3F7E44", active: true },
  { number: 15, titleKey: "sdg.15", color: "#56C02B", active: true },
]

export function SDGSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const { t } = useLanguage()

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            {t("sdg.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4 text-balance">
            {t("sdg.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("sdg.description")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {sdgs.map((sdg, index) => (
            <div
              key={sdg.number}
              className={cn(
                "group relative transition-all duration-500 cursor-pointer",
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div
                className={cn(
                  "relative w-24 h-24 md:w-28 md:h-28 rounded-xl flex flex-col items-center justify-center",
                  "border-2 transition-all duration-300",
                  "hover:scale-110 hover:shadow-lg"
                )}
                style={{
                  backgroundColor: `${sdg.color}15`,
                  borderColor: `${sdg.color}50`,
                  boxShadow: `0 0 20px ${sdg.color}20`,
                }}
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ boxShadow: `0 0 30px ${sdg.color}40` }}
                />

                <span
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: sdg.color }}
                >
                  {sdg.number}
                </span>
                <span className="text-[10px] md:text-xs text-center px-2 mt-1 text-muted-foreground leading-tight">
                  {t(sdg.titleKey)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "mt-12 text-center transition-all duration-500",
            isInView ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-4"
          )}
        >
          <p className="text-sm text-muted-foreground">
            {t("sdg.legend")}
          </p>
        </div>
      </div>
    </section>
  )
}
