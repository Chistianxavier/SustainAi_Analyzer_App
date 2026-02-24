"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Upload, Cpu, Lightbulb, ArrowRight, type LucideIcon } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const steps = [
  {
    icon: Upload,
    number: "01",
    titleKey: "howItWorks.step1.title",
    descriptionKey: "howItWorks.step1.description",
  },
  {
    icon: Cpu,
    number: "02",
    titleKey: "howItWorks.step2.title",
    descriptionKey: "howItWorks.step2.description",
  },
  {
    icon: Lightbulb,
    number: "03",
    titleKey: "howItWorks.step3.title",
    descriptionKey: "howItWorks.step3.description",
  },
]

function StepCard({ 
  step, 
  index, 
  isInView,
  t,
}: { 
  step: { icon: LucideIcon; number: string; titleKey: string; descriptionKey: string }
  index: number
  isInView: boolean
  t: (key: string) => string
}) {
  const Icon = step.icon
  
  return (
    <div
      className={cn(
        "relative flex flex-col items-center text-center transition-all duration-500",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative p-8 rounded-2xl bg-card/80 border border-border/50 backdrop-blur-sm h-full flex flex-col items-center">
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
          {step.number}
        </div>

        <div className="relative mb-6">
          <div className="absolute -inset-3 rounded-full bg-primary/20 blur-xl" />
          <div className="relative w-24 h-24 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center">
            <Icon className="w-10 h-10 text-primary" />
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            {t(step.titleKey)}
          </h3>
          <p className="text-muted-foreground max-w-xs">{t(step.descriptionKey)}</p>
        </div>
      </div>

      {index < steps.length - 1 && (
        <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
          <ArrowRight className="w-8 h-8 text-primary/50" />
        </div>
      )}
    </div>
  )
}

export function HowItWorksSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const { t } = useLanguage()

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            {t("howItWorks.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4 text-balance">
            {t("howItWorks.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("howItWorks.description")}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                isInView={isInView}
                t={t}
              />
            ))}
          </div>
        </div>

        <div
          className={cn(
            "mt-16 text-center p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm max-w-2xl mx-auto transition-all duration-500",
            isInView ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-muted-foreground italic">
            {t("howItWorks.quote")}
          </p>
        </div>
      </div>
    </section>
  )
}
