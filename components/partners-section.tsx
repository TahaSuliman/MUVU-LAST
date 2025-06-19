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
  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    setMounted(true)
  }, [])

  // الشركاء الحقيقيين لشركة MUVU - using updated partner images
  const partners = [
    {
      id: 1,
      name: "ETIHAD RAIL",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ETIHAD-RAIL.jpg-Jlwu1jXlzNClDMEiXI99S7xQGvyzJm.jpeg",
      description: "UAE National Railway Network",
    },
    {
      id: 2,
      name: "ABU DHABI NATIONAL OIL COMPANY (ADNOC)",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ABU-DHAHI-NATIONAL-OIL-COMPANY-%28ADNOC%29-LarirO51quWNgICoxxc4IbtRcpDZnd.png",
      description: "Leading Energy Company",
    },
    {
      id: 3,
      name: "ABU DHABI PORTS GROUP (AD PORTS GROUP)",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AD-Ports-Group-Logo-PRL.jpg-O8dARHN8zA7QCWLM8SO7aRten2t7pY.jpeg",
      description: "Port Operations & Logistics",
    },
    {
      id: 4,
      name: "DUBAI PORTS WORLD (DP WORLD)",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DUBAI-PORTS-WORLD-%28DP-World%29-VJWFzz4yp62DvrNV2wDvOYDks59Wpu.png",
      description: "Global Port Operator",
    },
    {
      id: 5,
      name: "DRYDOCKS WORLD",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drydocks-World-tLwVSAGA0OZeISikRqq8uqOJcHMZL7.png",
      description: "Maritime & Offshore Services",
    },
    {
      id: 6,
      name: "GOVERNMENT OF DUBAI",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GOVERNMENT-OF-DUBAI-fbIG3ye0o3ZM4Fp0m85khXwGvfPrX3.png",
      description: "Dubai Government Entity",
    },
    {
      id: 7,
      name: "AJMAN MUNICIPALITY PLANNING DEPARTMENT",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AJMAN-MUNICIPALITY-PLANNING-DEPARTMENT-lb3R418YUWR8ff3vuWYAeRtPhfiT8a.png",
      description: "Municipal Planning Authority",
    },
    {
      id: 8,
      name: "PORT OF FUJAIRAH",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PORT-OF-FUJAIRAH.jpg-MIzjOekXkPH8byJ0c0uWBu8bnzboH3.jpeg",
      description: "Strategic Port Operations",
    },
    {
      id: 9,
      name: "SHARJAH GOVERNMENT",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SHARJAH-GOVERNMENT-bK1L6T6xfYcRSp8PTExC7BSCkIuD08.png",
      description: "Sharjah Government Entity",
    },
    {
      id: 10,
      name: "UNION COOP",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UNION-COOP-cs0LlcZKhqbWxNzuODlH9hfeZbzRmq.png",
      description: "Consumer Cooperative Society",
    },
  ]

  // تحديد عدد العناصر المعروضة حسب حجم الشاشة
  useEffect(() => {
    if (!mounted) return

    const updateItemsPerView = () => {
      const width = window.innerWidth
      if (width < 768) {
        // Mobile: عرض كارد واحد فقط
        setItemsPerView(1)
      } else if (width < 1024) {
        // Tablet: عرض كاردين
        setItemsPerView(2)
      } else {
        // Desktop: عرض 3 كاردات
        setItemsPerView(3)
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)

    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [mounted])

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
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
                  <div
                    key={partner.id}
                    className="flex-shrink-0 px-2 md:px-4"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    {/* Fixed height card container */}
                    <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-none border-2 border-transparent hover:border-blue-400 group h-56 flex flex-col">
                      {/* Logo container with fixed height */}
                      <div className="flex-shrink-0 h-32 p-4 flex items-center justify-center bg-gray-50">
                        <div className="relative w-full h-full">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      </div>

                      {/* Content container that fills remaining space */}
                      <div className="flex-1 p-4 md:p-6 flex flex-col justify-center text-center">
                        <h3 className="text-sm md:text-base lg:text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                          {partner.name}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                          {partner.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - مخفية في الموبايل إذا كان هناك عنصر واحد فقط */}
            {maxIndex > 0 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-4 text-white hover:bg-blue-400/20 h-10 w-10 md:h-12 md:w-12 transition-all duration-300 hover:scale-110 rounded-none z-10 shadow-lg hover:shadow-xl backdrop-blur-sm border border-slate-600 hover:border-blue-400"
                  onClick={prevSlide}
                  type="button"
                >
                  <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-4 text-white hover:bg-blue-400/20 h-10 w-10 md:h-12 md:w-12 transition-all duration-300 hover:scale-110 rounded-none z-10 shadow-lg hover:shadow-xl backdrop-blur-sm border border-slate-600 hover:border-blue-400"
                  onClick={nextSlide}
                  type="button"
                >
                  <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                </Button>
              </>
            )}

            {/* Dots Indicator - يظهر فقط إذا كان هناك أكثر من صفحة واحدة */}
            {maxIndex > 0 && (
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    className={`transition-all duration-300 rounded-none ${
                      index === currentIndex
                        ? "bg-blue-400 w-6 md:w-8 h-2 md:h-3"
                        : "bg-slate-600 hover:bg-slate-500 w-2 md:w-3 h-2 md:h-3"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    type="button"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
