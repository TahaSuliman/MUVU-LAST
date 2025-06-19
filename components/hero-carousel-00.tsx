"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const { t, isLoaded } = useLanguage()

  const slides = [
    {
      id: 1,
      image: "/images/dubai-skyline.png",
      title: "MUVU General Trading",
      subtitle: "Your trusted partner in general trading",
      description: "We provide comprehensive trading solutions in the United Arab Emirates",
    },
    {
      id: 2,
      image: "/images/port-operations-new.jpg",
      title: "Marine Shipping Services",
      subtitle: "Advanced logistics solutions",
      description: "We provide comprehensive ship services across all major UAE ports",
    },
    {
      id: 3,
      image: "/images/marine-shipping.png",
      title: "High Quality Products",
      subtitle: "Excellence in every detail",
      description: "We import and export a diverse range of high-quality products",
    },
  ]

  useEffect(() => {
    // Small delay to ensure client-side rendering
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isReady) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [slides.length, isReady])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const scrollToSection = useCallback((sectionId: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }
    // Accept both with and without #
    const id = sectionId.replace(/^#/, "")
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      } else {
        // fallback: try querySelector
        const el = document.querySelector(sectionId.startsWith('#') ? sectionId : `#${sectionId}`)
        if (el) {
          (el as HTMLElement).scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }, 100);
  }, [])

  const handleDiscoverServices = useCallback(
    (event: React.MouseEvent) => {
      scrollToSection("services", event)
    },
    [scrollToSection],
  )

  const handleContactUs = useCallback(
    (event: React.MouseEvent) => {
      scrollToSection("contact", event)
    },
    [scrollToSection],
  )

  if (!isReady) {
    return null
  }

  return (
    <>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-[#09203f]/60" />

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white max-w-4xl px-4">
              <h1
                className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1200 ease-out ${
                  index === currentSlide ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
                }`}
                style={{ transitionDelay: index === currentSlide ? "200ms" : "0ms" }}
              >
                {isLoaded ? t(`heroTitle${slide.id}`) : slide.title}
              </h1>
              <p
                className={`text-xl md:text-2xl mb-4 text-blue-400 transition-all duration-1200 ease-out ${
                  index === currentSlide ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
                }`}
                style={{ transitionDelay: index === currentSlide ? "400ms" : "0ms" }}
              >
                {isLoaded ? t(`heroSubtitle${slide.id}`) : slide.subtitle}
              </p>
              <p
                className={`text-lg md:text-xl mb-8 text-slate-300 transition-all duration-1200 ease-out ${
                  index === currentSlide ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
                }`}
                style={{ transitionDelay: index === currentSlide ? "600ms" : "0ms" }}
              >
                {isLoaded ? t(`heroDescription${slide.id}`) : slide.description}
              </p>
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1200 ease-out ${
                  index === currentSlide
                    ? "opacity-100 transform translate-y-0 scale-100"
                    : "opacity-0 transform translate-y-8 scale-95"
                }`}
                style={{ transitionDelay: index === currentSlide ? "800ms" : "0ms" }}
              >
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105 rounded-none border-t-2 border-b-2 border-black cursor-pointer font-medium text-lg z-20 relative transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
                  onClick={handleDiscoverServices}
                  type="button"
                >
                  {isLoaded ? t("discoverServices") : "Discover Our Services"}
                </button>
                <button
                  className="border-2 border-white border-t-2 border-b-2 border-t-blue-400 border-b-blue-400 text-white hover:bg-white hover:text-slate-900 px-8 py-3 transition-all duration-300 hover:scale-105 rounded-none cursor-pointer font-medium text-lg z-20 relative bg-transparent transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
                  onClick={handleContactUs}
                  type="button"
                >
                  {isLoaded ? t("contactUs") : "Contact Us"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 transition-all duration-300 hover:scale-110 rounded-none z-30 shadow-lg hover:shadow-xl backdrop-blur-sm"
        onClick={prevSlide}
        type="button"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 transition-all duration-300 hover:scale-110 rounded-none z-30 shadow-lg hover:shadow-xl backdrop-blur-sm"
        onClick={nextSlide}
        type="button"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-500 ease-out rounded-none shadow-md hover:shadow-lg ${
              index === currentSlide
                ? "bg-blue-400 w-8 h-3 scale-110"
                : "bg-white/50 hover:bg-white/70 w-3 h-3 hover:scale-125"
            }`}
            onClick={() => setCurrentSlide(index)}
            type="button"
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <button
          onClick={(e) => scrollToSection("about", e)}
          className="w-6 h-10 border-2 border-white/50 flex justify-center rounded-none hover:border-blue-400 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:scale-110 shadow-lg"
          type="button"
        >
          <div className="w-1 h-3 bg-white/70 mt-2 animate-pulse rounded-none"></div>
        </button>
      </div>

      {/* Slide Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800/50 z-30">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-5000 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </>
  )
}
