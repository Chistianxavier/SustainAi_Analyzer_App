"use client"

import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import type { Language } from "@/lib/translations"

const languages: { code: Language; labelKey: string; flag: string }[] = [
  { code: "en", labelKey: "lang.english", flag: "/flags/gb.svg" },
  { code: "id", labelKey: "lang.indonesian", flag: "/flags/id.svg" },
]

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage()

  const current = languages.find((l) => l.code === language) ?? languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "flex items-center justify-center w-9 h-9 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm",
          "hover:border-primary/50 hover:bg-primary/10 transition-all duration-200",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          className
        )}
        aria-label="Switch language"
      >
        <Image
          src={current.flag}
          alt={t(current.labelKey)}
          width={22}
          height={22}
          className="rounded-full object-cover w-[22px] h-[22px]"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[160px] bg-card/95 backdrop-blur-xl border-border/50"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={cn(
              "flex items-center gap-3 cursor-pointer py-2",
              language === lang.code
                ? "text-primary font-medium"
                : "text-foreground"
            )}
          >
            <Image
              src={lang.flag}
              alt={t(lang.labelKey)}
              width={20}
              height={20}
              className="rounded-full object-cover w-5 h-5"
            />
            <span>{t(lang.labelKey)}</span>
            {language === lang.code && (
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
