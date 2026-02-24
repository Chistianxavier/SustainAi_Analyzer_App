"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function NavigationProgress() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const prevPathRef = useRef(pathname)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startProgress = useCallback(() => {
    setVisible(true)
    setProgress(0)

    if (timerRef.current) clearInterval(timerRef.current)

    let current = 0
    timerRef.current = setInterval(() => {
      current += Math.random() * 15 + 5
      if (current >= 90) {
        current = 90
        if (timerRef.current) clearInterval(timerRef.current)
      }
      setProgress(current)
    }, 200)
  }, [])

  const completeProgress = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    setProgress(100)
    setTimeout(() => {
      setVisible(false)
      setProgress(0)
    }, 300)
  }, [])

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      startProgress()
      // Use a small delay to let the route settle, then complete
      const timeout = setTimeout(() => {
        completeProgress()
      }, 400)
      prevPathRef.current = pathname
      return () => clearTimeout(timeout)
    }
  }, [pathname, searchParams, startProgress, completeProgress])

  if (!visible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-0.5">
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
      {/* Glow effect */}
      <div
        className="h-1 bg-primary/50 blur-sm transition-all duration-300 ease-out -mt-0.5"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
