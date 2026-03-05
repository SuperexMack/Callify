"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a button placeholder with same dimensions to prevent hydration mismatch
    return (
      <button
        className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        aria-label="Toggle theme"
        disabled
      >
        <span className="block h-5 w-5" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700" />
      )}
    </button>
  )
}
