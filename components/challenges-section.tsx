"use client"

import { Briefcase, Recycle, Leaf } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

const challenges = [
  {
    icon: Briefcase,
    titleKey: "challenges.employment.title",
    descriptionKey: "challenges.employment.description",
    color: "from-primary to-accent",
  },
  {
    icon: Recycle,
    titleKey: "challenges.waste.title",
    descriptionKey: "challenges.waste.description",
    color: "from-accent to-primary",
  },
  {
    icon: Leaf,
    titleKey: "challenges.agriculture.title",
    descriptionKey: "challenges.agriculture.description",
    color: "from-primary to-chart-3",
  },
]

export function ChallengesSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("challenges.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("challenges.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.titleKey}
              className={cn(
                "group relative p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-500",
                "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={cn(
                  "w-16 h-16 rounded-xl flex items-center justify-center mb-6",
                  "bg-gradient-to-br",
                  challenge.color,
                  "shadow-lg group-hover:shadow-xl transition-shadow"
                )}
              >
                <challenge.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">{t(challenge.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(challenge.descriptionKey)}</p>

              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
