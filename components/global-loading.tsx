"use client"

import { Leaf } from "lucide-react"

export function GlobalLoading() {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 backdrop-blur-md animate-loading-fade-in"
      role="status"
      aria-label="Loading content"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Orbital animation container */}
        <div className="relative flex items-center justify-center w-28 h-28">
          {/* Outer orbit ring */}
          <svg
            className="absolute inset-0 w-28 h-28 animate-loading-spin-slow"
            viewBox="0 0 112 112"
            fill="none"
          >
            <circle
              cx="56"
              cy="56"
              r="52"
              stroke="currentColor"
              strokeWidth="1"
              className="text-border/50"
            />
            <circle
              cx="56"
              cy="56"
              r="52"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="80 246"
              className="text-primary"
            />
          </svg>

          {/* Inner orbit ring (reverse) */}
          <svg
            className="absolute w-20 h-20 animate-loading-spin-reverse"
            viewBox="0 0 80 80"
            fill="none"
          >
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="1"
              className="text-border/30"
            />
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="50 176"
              className="text-accent"
            />
          </svg>

          {/* Small orbiting dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-loading-orbit-dot">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_2px] shadow-primary/50" />
            </div>
          </div>

          {/* Center icon with glow */}
          <div className="relative flex items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center animate-loading-scale-pulse animate-loading-glow">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        {/* Loading label + bouncing dots */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-medium tracking-wide text-muted-foreground">
            Loading
          </span>
          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-1.5 h-1.5 rounded-full bg-primary animate-loading-dot-bounce"
                style={{ animationDelay: `${i * 0.16}s` }}
              />
            ))}
          </div>
        </div>

        {/* Screen reader text */}
        <span className="sr-only">Page is loading, please wait.</span>
      </div>
    </div>
  )
}
