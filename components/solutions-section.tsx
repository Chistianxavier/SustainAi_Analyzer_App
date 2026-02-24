"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { FileCheck, Recycle, Sprout, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

const solutions = [
  {
    icon: FileCheck,
    titleKey: "solutions.cv.title",
    problemKey: "solutions.cv.problem",
    solutionKey: "solutions.cv.solution",
    sdgs: [
      { number: 8, titleKey: "solutions.sdg.decentWork" },
      { number: 4, titleKey: "solutions.sdg.qualityEducation" },
      { number: 10, titleKey: "solutions.sdg.reducedInequalities" },
    ],
    gradient: "from-primary via-primary/80 to-accent",
    link: "/CV-Analyzer",
  },
  {
    icon: Recycle,
    titleKey: "solutions.waste.title",
    problemKey: "solutions.waste.problem",
    solutionKey: "solutions.waste.solution",
    sdgs: [
      { number: 12, titleKey: "solutions.sdg.responsibleConsumption" },
      { number: 11, titleKey: "solutions.sdg.sustainableCities" },
      { number: 13, titleKey: "solutions.sdg.climateAction" },
    ],
    gradient: "from-accent via-accent/80 to-primary",
    link: "/Waste-Analyzer",
  },
  {
    icon: Sprout,
    titleKey: "solutions.plant.title",
    problemKey: "solutions.plant.problem",
    solutionKey: "solutions.plant.solution",
    sdgs: [
      { number: 2, titleKey: "solutions.sdg.zeroHunger" },
      { number: 1, titleKey: "solutions.sdg.noPoverty" },
      { number: 15, titleKey: "solutions.sdg.lifeOnLand" },
    ],
    gradient: "from-chart-3 via-primary/80 to-accent",
    link: "/Plant-Disease-Analyzer",
  },
];

function SDGBadge({ number, titleKey }: { number: number; titleKey: string }) {
  const { t } = useLanguage();
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
      <span className="text-xs font-bold text-primary">SDG {number}</span>
      <span className="text-xs text-muted-foreground hidden sm:inline">
        {t(titleKey)}
      </span>
    </div>
  );
}

export function SolutionsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            {t("solutions.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4 text-balance">
            {t("solutions.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("solutions.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.titleKey}
              className={cn(
                "group relative rounded-2xl overflow-hidden transition-all duration-500",
                "bg-card/30 border border-border/50 backdrop-blur-xl",
                "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-sm" />
              </div>

              <div className="relative p-8">
                <div
                  className={cn(
                    "w-16 h-16 rounded-xl flex items-center justify-center mb-6",
                    "bg-gradient-to-br shadow-lg",
                    solution.gradient
                  )}
                >
                  <solution.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">
                  {t(solution.titleKey)}
                </h3>

                <div className="mb-4">
                  <span className="text-sm font-medium text-primary">
                    {t("solutions.theChallenge")}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t(solution.problemKey)}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-sm font-medium text-accent">
                    {t("solutions.ourSolution")}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t(solution.solutionKey)}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {solution.sdgs.map((sdg) => (
                    <SDGBadge
                      key={sdg.number}
                      number={sdg.number}
                      titleKey={sdg.titleKey}
                    />
                  ))}
                </div>

                <a href={t(solution.link)}>
                  <Button
                    variant="ghost"
                    className="group/btn bg-primary/10 text-primary hover:text-primary hover:bg-primary/30 p-0"
                  >
                    {t("solutions.learnMore")}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
