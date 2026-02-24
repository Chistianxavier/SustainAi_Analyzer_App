"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Users, Globe, TrendingUp, Heart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const values = [
  {
    icon: Users,
    titleKey: "vision.inclusivity.title",
    descriptionKey: "vision.inclusivity.description",
  },
  {
    icon: Globe,
    titleKey: "vision.accessibility.title",
    descriptionKey: "vision.accessibility.description",
  },
  {
    icon: TrendingUp,
    titleKey: "vision.scalability.title",
    descriptionKey: "vision.scalability.description",
  },
  {
    icon: Heart,
    titleKey: "vision.longterm.title",
    descriptionKey: "vision.longterm.description",
  },
]

export function VisionSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const { t } = useLanguage()

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={cn(
              "transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t("vision.label")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              {t("vision.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              {t("vision.p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {t("vision.p2")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.titleKey}
                className={cn(
                  "p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm",
                  "hover:border-primary/30 transition-all duration-300",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t(value.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(value.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
