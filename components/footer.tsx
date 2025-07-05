"use client"

import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useLanguage } from "@/components/language-context"
function Footer() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    // منع السلوك الافتراضي للرابط
    return false
  }

  return (
    <footer className="bg-[#09203f] border-t border-blue-400 relative">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='none'/%3E%3Cpath d='M0 0H120V120H0Z' fill='none' stroke='%23ffffff08' stroke-width='1'/%3E%3Cpath d='M0 15H120' stroke='%23ffffff06' stroke-width='0.5'/%3E%3Cpath d='M0 30H120' stroke='%23ffffff08' stroke-width='0.5'/%3E%3Cpath d='M0 45H120' stroke='%23ffffff06' stroke-width='0.5'/%3E%3Cpath d='M0 60H120' stroke='%23ffffff10' stroke-width='0.8'/%3E%3Cpath d='M0 75H120' stroke='%23ffffff06' stroke-width='0.5'/%3E%3Cpath d='M0 90H120' stroke='%23ffffff08' stroke-width='0.5'/%3E%3Cpath d='M0 105H120' stroke='%23ffffff06' stroke-width='0.5'/%3E%3Cpath d='M15 0V120' stroke='%23ffffff06' stroke-width='0.5'/%3E%3Cpath d='M30 0V120' stroke='%23ffffff08' stroke-width='0.5'/%3E%3Cpath d='M45 0V120' stroke='%23ffffff06' stroke-width='0.5'/%3E%3Cpath d='M60 0V120' stroke='%23ffffff10' stroke-width='0.8'/%3E%3Cpath d='M75 0V120' stroke='%23ffffff06' stroke-width='0.5'/%3E%3Cpath d='M90 0V120' stroke='%23ffffff08' stroke-width='0.5'/%3E%3Cpath d='M105 0V120' stroke='%23ffffff06' stroke-width='0.5'/%3E%3Cpath d='M0 0L120 120' stroke='%23ffffff12' stroke-width='0.6'/%3E%3Cpath d='M120 0L0 120' stroke='%23ffffff12' stroke-width='0.6'/%3E%3Cpath d='M-30 0L120 150' stroke='%23ffffff08' stroke-width='0.4'/%3E%3Cpath d='M0 -30L150 120' stroke='%23ffffff08' stroke-width='0.4'/%3E%3Cpath d='M150 0L0 150' stroke='%23ffffff08' stroke-width='0.4'/%3E%3Cpath d='M120 -30L-30 120' stroke='%23ffffff08' stroke-width='0.4'/%3E%3Cpath d='M-15 30L135 180' stroke='%23ffffff06' stroke-width='0.3'/%3E%3Cpath d='M30 -15L180 135' stroke='%23ffffff06' stroke-width='0.3'/%3E%3Cpath d='M135 -15L-15 135' stroke='%23ffffff06' stroke-width='0.3'/%3E%3Cpath d='M120 30L-30 180' stroke='%23ffffff06' stroke-width='0.3'/%3E%3Ccircle cx='30' cy='30' r='2' fill='%23ffffff15'/%3E%3Ccircle cx='90' cy='30' r='1.5' fill='%23ffffff12'/%3E%3Ccircle cx='30' cy='90' r='1.5' fill='%23ffffff12'/%3E%3Ccircle cx='90' cy='90' r='2' fill='%23ffffff15'/%3E%3Ccircle cx='60' cy='60' r='2.5' fill='%23ffffff18'/%3E%3Ccircle cx='15' cy='60' r='1' fill='%23ffffff10'/%3E%3Ccircle cx='105' cy='60' r='1' fill='%23ffffff10'/%3E%3Ccircle cx='60' cy='15' r='1' fill='%23ffffff10'/%3E%3Ccircle cx='60' cy='105' r='1' fill='%23ffffff10'/%3E%3Ccircle cx='45' cy='45' r='1' fill='%23ffffff08'/%3E%3Ccircle cx='75' cy='45' r='1' fill='%23ffffff08'/%3E%3Ccircle cx='45' cy='75' r='1' fill='%23ffffff08'/%3E%3Ccircle cx='75' cy='75' r='1' fill='%23ffffff08'/%3E%3Cpath d='M30 30L90 30' stroke='%23ffffff08' stroke-width='0.5'/%3E%3Cpath d='M30 30L30 90' stroke='%23ffffff08' stroke-width='0.5'/%3E%3Cpath d='M90 30L90 90' stroke='%23ffffff08' stroke-width='0.5'/%3E%3Cpath d='M30 90L90 90' stroke='%23ffffff08' stroke-width='0.5'/%3E%3Cpath d='M30 30L60 60' stroke='%23ffffff10' stroke-width='0.6'/%3E%3Cpath d='M90 30L60 60' stroke='%23ffffff10' stroke-width='0.6'/%3E%3Cpath d='M30 90L60 60' stroke='%23ffffff10' stroke-width='0.6'/%3E%3Cpath d='M90 90L60 60' stroke='%23ffffff10' stroke-width='0.6'/%3E%3Cpath d='M15 60L105 60' stroke='%23ffffff06' stroke-width='0.4'/%3E%3Cpath d='M60 15L60 105' stroke='%23ffffff06' stroke-width='0.4'/%3E%3Crect x='58' y='58' width='4' height='4' fill='none' stroke='%23ffffff08' stroke-width='0.5'/%3E%3Crect x='28' y='28' width='4' height='4' fill='none' stroke='%23ffffff06' stroke-width='0.5'/%3E%3Crect x='88' y='28' width='4' height='4' fill='none' stroke='%23ffffff06' stroke-width='0.5'/%3E%3Crect x='28' y='88' width='4' height='4' fill='none' stroke='%23ffffff06' stroke-width='0.5'/%3E%3Crect x='88' y='88' width='4' height='4' fill='none' stroke='%23ffffff06' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px',
        backgroundRepeat: 'repeat'
      }}></div>
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='none'/%3E%3Cpath d='M0 50L200 50' stroke='%23ffffff04' stroke-width='0.8'/%3E%3Cpath d='M0 100L200 100' stroke='%23ffffff06' stroke-width='1'/%3E%3Cpath d='M0 150L200 150' stroke='%23ffffff04' stroke-width='0.8'/%3E%3Cpath d='M50 0L50 200' stroke='%23ffffff04' stroke-width='0.8'/%3E%3Cpath d='M100 0L100 200' stroke='%23ffffff06' stroke-width='1'/%3E%3Cpath d='M150 0L150 200' stroke='%23ffffff04' stroke-width='0.8'/%3E%3Cpath d='M0 0L200 200' stroke='%23ffffff03' stroke-width='0.5'/%3E%3Cpath d='M200 0L0 200' stroke='%23ffffff03' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='3' fill='%23ffffff10'/%3E%3Ccircle cx='150' cy='50' r='2' fill='%23ffffff08'/%3E%3Ccircle cx='50' cy='150' r='2' fill='%23ffffff08'/%3E%3Ccircle cx='150' cy='150' r='3' fill='%23ffffff10'/%3E%3Ccircle cx='100' cy='100' r='4' fill='%23ffffff12'/%3E%3Cpath d='M50 50L150 50' stroke='%23ffffff06' stroke-width='0.6'/%3E%3Cpath d='M50 50L50 150' stroke='%23ffffff06' stroke-width='0.6'/%3E%3Cpath d='M150 50L150 150' stroke='%23ffffff06' stroke-width='0.6'/%3E%3Cpath d='M50 150L150 150' stroke='%23ffffff06' stroke-width='0.6'/%3E%3Cpath d='M50 50L100 100' stroke='%23ffffff08' stroke-width='0.8'/%3E%3Cpath d='M150 50L100 100' stroke='%23ffffff08' stroke-width='0.8'/%3E%3Cpath d='M50 150L100 100' stroke='%23ffffff08' stroke-width='0.8'/%3E%3Cpath d='M150 150L100 100' stroke='%23ffffff08' stroke-width='0.8'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
        backgroundRepeat: 'repeat',
        opacity: 0.4
      }}></div>
      <div className="container mx-auto px-4 py-12 z-10">
        <div className="grid md:grid-cols-4 gap-8 text-left">
          {/* Company Info */}
          <div className="space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/images/muvu-logo-footer.png"
                alt="MUVU General Trading L.L.C"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </button>
            <p className="text-slate-400 text-sm">{t("companyDescription")}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors p-2 border border-slate-600 hover:border-blue-400 rounded-none"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors p-2 border border-slate-600 hover:border-blue-400 rounded-none"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/muvu-general-trading-l-l-c/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors p-2 border border-slate-600 hover:border-blue-400 rounded-none"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/muvu.ae/?igshid=dmp5YXQxczVkc2Iy&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors p-2 border border-slate-600 hover:border-blue-400 rounded-none"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  {t("about")}
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  {t("services")}
                </a>
              </li>
              <li>
                <a href="#certificates" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("certificates");
                }} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  {t("certificates")}
                </a>
              </li>
              <li>
                <a href="#partners" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("partners");
                }} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  {t("partners")}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("services")}</h3>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm">{t("generalTrading")}</li>
              <li className="text-slate-400 text-sm">{t("shipSupply")}</li>
              <li className="text-slate-400 text-sm">{t("marineServices")}</li>
              <li className="text-slate-400 text-sm">{t("privateLabel")}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("contactInformation")}</h3>
            <div className="space-y-2 text-sm">
              <p className="text-slate-400">{t("addressValue")}</p>
              <p className="text-slate-400">+971 56 682 4101</p>
              <p className="text-slate-400">info@muvu.ae</p>
              <p className="text-slate-400">www.muvu.ae</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} MUVU General Trading L.L.C. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
