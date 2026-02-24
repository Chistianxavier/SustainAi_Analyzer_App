"use client";

import { Leaf } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import Link from "next/link";

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    solutions: [
      { labelKey: "footer.cvChecker", href: "/CV-Analyzer" },
      {
        labelKey: "footer.wasteClassification",
        href: "/Plant-Disease-Analyzer",
      },
      { labelKey: "footer.plantDiseaseDetection", href: "/Waste-Analyzer" },
    ],
    company: [
      { labelKey: "footer.ourTeam", href: "/#team" },
      { labelKey: "footer.companySolution", href: "/#solutions" },
    ],
    resources: [
      { labelKey: "footer.sdgAlignment", href: "https://sdgs.un.org/goals" },
    ],
  };

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                SustainAI
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">
              {t("footer.solutions")}
            </h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.labelKey}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">
              {t("footer.company")}
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.labelKey}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">
              {t("footer.resources")}
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.labelKey}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex gap-6">
            <Link
              href="/Privacy-Policy"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="/Terms-of-Service"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
