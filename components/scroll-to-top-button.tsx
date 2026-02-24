"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // ================= SCROLL DETECTION =================
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // ================= SCROLL TO TOP =================
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "w-14 h-14 rounded-full",
        "flex items-center justify-center",
        "bg-gradient-to-br from-green-800 to-green-600",
        "text-white",
        "shadow-[0_0_25px_rgba(34,197,94,0.6)]",
        "transition-all duration-300",
        "hover:scale-110",
        "hover:shadow-[0_0_35px_rgba(34,197,94,0.8)]",
        "animate-bounce",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
