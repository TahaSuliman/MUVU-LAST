"use client"

import type React from "react"

import { useState, useEffect } from "react"
import HeroCarousel from "@/components/hero-carousel"
import ParticleBackground from "@/components/particle-background"
import PartnersSection from "@/components/partners-section"
import ScrollToTop from "@/components/scroll-to-top"

interface ClientOnlyWrapperProps {
  children: React.ReactNode
}

export default function ClientOnlyWrapper({ children }: ClientOnlyWrapperProps) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return (
      <div className="min-h-screen bg-slate-900">
        {/* Static loading content that matches server rendering */}
        {children}
      </div>
    )
  }

  // Render actual interactive components only after mounting
  return (
    <>
      {children.toString().includes("particle-background") && <ParticleBackground />}
      {children.toString().includes("hero-carousel") && <HeroCarousel />}
      {children.toString().includes("partners-section") && <PartnersSection />}
      {children.toString().includes("scroll-to-top") && <ScrollToTop />}
    </>
  )
}
