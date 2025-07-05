"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import AboutSection from "@/components/about-section"
import CertificatesSection from "@/components/certificates-section"
import ServicesSection from "@/components/services-section"
import MarineServicesSection from "@/components/marine-services-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        {/* Hero Section - Static until client loads */}
        <section id="home" className="relative h-screen overflow-hidden bg-slate-900">
          {isClient ? (
            <>
              <HeroCarouselClient />
            </>
          ) : (
            <HeroStaticContent />
          )}
        </section>

        <AboutSection />
        <CertificatesSection />
        <ServicesSection />
        <MarineServicesSection />

        {/* Partners Section - Static until client loads */}
        {isClient ? <PartnersSection /> : <PartnersStaticContent />}

        <ContactSection />
      </main>
      <Footer />

      {/* Scroll to top - Only on client */}
      {isClient && <ScrollToTop />}
    </div>
  )
}

// Static content components
function HeroStaticContent() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="text-center text-white max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">MUVU General Trading</h1>
        <p className="text-xl md:text-2xl mb-4 text-blue-400">Your trusted partner in general trading</p>
        <p className="text-lg md:text-xl mb-8 text-slate-300">
          We provide comprehensive trading solutions in the United Arab Emirates
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-blue-600 text-white px-8 py-3 rounded-none border-t-2 border-b-2 border-black font-medium text-lg">
            Discover Our Services
          </div>
          <div className="border-2 border-white border-t-2 border-b-2 border-t-blue-400 border-b-blue-400 text-white px-8 py-3 rounded-none font-medium text-lg bg-transparent">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  )
}

function PartnersStaticContent() {
  return (
    <section id="partners" className="py-20 bg-slate-800 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Partners</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto text-left">
              We work with leading companies and organizations across the UAE and globally to deliver exceptional
              trading and marine services.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white h-48 rounded-none border-2 border-transparent">
                <div className="h-24 bg-gray-50 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-none"></div>
                </div>
                <div className="p-4 text-center">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-100 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Client-only components with dynamic imports
import dynamic from "next/dynamic"

const HeroCarouselClient = dynamic(() => import("@/components/hero-carousel"), {
  ssr: false,
  loading: () => null,
})

const PartnersSection = dynamic(() => import("@/components/partners-section"), {
  ssr: false,
  loading: () => <PartnersStaticContent />,
})

const ScrollToTop = dynamic(() => import("@/components/scroll-to-top"), {
  ssr: false,
  loading: () => null,
})
