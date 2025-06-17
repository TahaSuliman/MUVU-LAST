"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  const toggleVisibility = useCallback(() => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])

  useEffect(() => {
    if (!isReady) return

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [isReady, toggleVisibility])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  if (!isReady) {
    return null
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={scrollToTop}
        className={`bg-blue-600 hover:bg-blue-700 text-white p-3 shadow-lg hover:shadow-xl transition-all duration-300 rounded-none border-2 border-blue-400 hover:border-blue-300 hover:scale-110 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        size="icon"
        type="button"
        aria-label="العودة للأعلى"
      >
        <ChevronUp className="h-6 w-6" />
      </Button>
    </div>
  )
}
