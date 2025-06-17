"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"

export default function PartnersSection() {
  const { t, isLoaded } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // الشركاء الحقيقيين لشركة MUVU - using actual partner images
  const partners = [
    {
      id: 1,
      name: "ETIHAD RAIL",
      logo: "/images/partners/ETIHAD-RAIL.jpg",
      description: "UAE National Railway Network",
    },
    {
      id: 2,
      name: "ABU DHABI NATIONAL OIL COMPANY (ADNOC)",
      logo: "/images/partners/ABU-DHAHI-NATIONAL-OIL-COMPANY-(ADNOC).png",
      description: "Leading Energy Company",
    },
    {
      id: 3,
      name: "ABU DHABI PORTS GROUP (AD PORTS GROUP)",
      logo: "/images/partners/AD-Ports-Group-Logo-PRL.jpg",
      description: "Port Operations & Logistics",
    },
    {
      id: 4,
      name: "DUBAI PORTS WORLD (DP WORLD)",
      logo: "/images/partners/DUBAI-PORTS-WORLD-(DP-World).png",
      description: "Global Port Operator",
    },
    {
      id: 5,
      name: "DRYDOCKS WORLD",
      logo: "/images/partners/Drydocks-World.png",
      description: "Maritime & Offshore Services",
    },
    {
      id: 6,
      name: "GOVERNMENT OF DUBAI",
      logo: "/images/partners/GOVERNMENT-OF-DUBAI.png",
      description: "Dubai Government Entity",
    },
    {
      id: 7,
      name: "AJMAN MUNICIPALITY PLANNING DEPARTMENT",
      logo: "/images/partners/AJMAN-MUNICIPALITY-PLANNING-DEPARTMENT.png",
      description: "Municipal Planning Authority",
    },
    {
      id: 8,
      name: "PORT OF FUJAIRAH",
      logo: "/images/partners/PORT-OF-FUJAIRAH.jpg",
      description: "Strategic Port Operations",
    },
    {
      id: 9,
      name: "SHARJAH GOVERNMENT",
      logo: "/images/partners/SHARJAH-GOVERNMENT.png",
      description: "Sharjah Government Entity",
    },
    {
      id: 10,
      name: "UNION COOP",
      logo: "/images/partners/UNION-COOP.png",
      description: "Consumer Cooperative Society",
    },
  ]

  const itemsPerView = 3
  const maxIndex = Math.max(0, partners.length - itemsPerView)

  useEffect(() => {
    if (!mounted || !isLoaded) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(timer)
  }, [maxIndex, mounted, isLoaded])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  // Show loading state until both mounted and translations are loaded
  if (!mounted || !isLoaded) {
    return (
      <section id="partners" className="py-20 bg-slate-800 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="h-12 bg-slate-700 animate-pulse rounded mb-6 max-w-md mx-auto"></div>
              <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white h-48 animate-pulse rounded-none"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="partners" className="py-20 bg-slate-800 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("partnersTitle")}</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto text-left">{t("partnersDescription")}</p>
          </div>

          {/* Partners Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                }}
              >
                {partners.map((partner) => (
                  <div key={partner.id} className="flex-shrink-0 px-4" style={{ width: `${100 / itemsPerView}%` }}>
                    {/* Fixed height card container */}
                    <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-none border-2 border-transparent hover:border-blue-400 group h-64 flex flex-col">
                      {/* Logo container with fixed height */}
                      <div className="flex-shrink-0 h-32 p-4 flex items-center justify-center bg-gray-50">
                        <div className="relative w-full h-full">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Content container that fills remaining space */}
                      <div className="flex-1 p-4 flex flex-col justify-center text-center">
                        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                          {partner.name}
                        </h3>
                        <p className="text-sm text-slate-600 line-clamp-2">{partner.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 text-white hover:bg-blue-400/20 h-12 w-12 transition-all duration-300 hover:scale-110 rounded-none z-10 shadow-lg hover:shadow-xl backdrop-blur-sm border border-slate-600 hover:border-blue-400"
              onClick={prevSlide}
              type="button"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 text-white hover:bg-blue-400/20 h-12 w-12 transition-all duration-300 hover:scale-110 rounded-none z-10 shadow-lg hover:shadow-xl backdrop-blur-sm border border-slate-600 hover:border-blue-400"
              onClick={nextSlide}
              type="button"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  className={`transition-all duration-300 rounded-none ${
                    index === currentIndex ? "bg-blue-400 w-8 h-3" : "bg-slate-600 hover:bg-slate-500 w-3 h-3"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
