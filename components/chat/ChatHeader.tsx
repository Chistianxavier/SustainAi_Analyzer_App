"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { ArrowLeft, Bot, MoreVertical, Trash2, RefreshCw } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LanguageSwitcher } from "@/components/language-switcher";

interface ChatHeaderProps {
  t: (key: string) => string;
  onClearChat?: () => void;
  restartHref: string;
}

export function ChatHeader({ t, onClearChat, restartHref }: ChatHeaderProps) {
  return (
    <header className="relative z-10 border-b border-border/50 bg-card/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1>{t("chat.assistant")}</h1>
                <p className="text-xs">{t("chat.online")}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
