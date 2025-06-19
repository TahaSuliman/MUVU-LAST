"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { href: "#home", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#certificates", label: t("certificates") },
    { href: "#partners", label: t("partners") },
    { href: "#contact", label: t("contact") },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 border-b border-blue-400`}>
      <div className="relative w-full h-full">
        {/* Dark background when scrolled */}
        <div className={`absolute inset-0 transition-opacity duration-300 bg-[#09203f]
          ${scrolled ? 'opacity-100' : 'opacity-0'} ${isMenuOpen ? 'opacity-0' : ''}`} />
          
        {/* White background with slanted edge - always visible for logo area */}
        <div className={`absolute top-0 left-0 h-full md:w-[30%] w-[75%] bg-white shadow-lg 
          clip-navbar-bg before:content-[''] before:absolute before:inset-0 
          before:bg-gradient-to-b before:from-white/50 before:to-transparent z-20`} />

        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full relative z-30">
            {/* Logo section */}
            <button
              onClick={() => scrollToSection("home")}
              className="relative flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/images/muvu-logo.png"
                alt="MUVU General Trading L.L.C"
                width={120}
                height={56}
                className="h-14 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                item.href === "#contact" ? (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="border-2 border-white border-t-2 border-b-2 border-t-blue-400 border-b-blue-400 
                      text-white hover:bg-white hover:text-slate-900 px-6 py-2.5 transition-all duration-300 
                      hover:scale-105 rounded-none cursor-pointer font-medium text-lg z-20 relative 
                      bg-transparent transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
                  >
                    {item.label}
                  </button>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-slate-100 hover:text-blue-400 transition-colors 
                      duration-300 relative py-2 group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 
                      transition-all duration-300 group-hover:w-full" />
                  </button>
                )
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden transition-colors p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 transition-all duration-300 ${
            isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          {/* Dark overlay that doesn't cover the logo area */}
          <div className="absolute inset-0 bg-[#09203f] backdrop-blur-sm">
            <div className="absolute top-0 left-0 h-20 w-[75%] bg-transparent" />
          </div>
          <div className="container mx-auto px-4 py-24">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-white text-lg font-medium text-center transition-all duration-300 ${
                    item.href === "#contact"
                      ? "border-2 border-white border-t-2 border-b-2 border-t-blue-400 border-b-blue-400 text-white hover:bg-white hover:text-slate-900 px-6 py-3 transition-all duration-300 hover:scale-105 rounded-none cursor-pointer bg-transparent transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
                      : "hover:text-blue-400 hover:bg-slate-800 bg-slate-900/80 backdrop-blur-sm px-6 py-3 w-full"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="container mx-auto px-4 py-20">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-white text-lg font-medium text-center ${
                    item.href === "#contact"
                      ? "border-2 border-white border-t-2 border-b-2 border-t-blue-400 border-b-blue-400 text-white hover:bg-white hover:text-slate-900 px-6 py-3 transition-all duration-300 hover:scale-105 rounded-none cursor-pointer bg-transparent transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
                      : "hover:text-blue-400 transition-colors bg-slate-900 px-6 py-3 w-full hover:bg-slate-800"
                  }`}
                  style={{
                    backgroundColor: scrolled ? '#0f172a' : 'transparent'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
