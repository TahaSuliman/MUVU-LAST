"use client"

import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export default function Footer() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <footer className="bg-slate-900 border-t-2 border-blue-400">
      <div className="container mx-auto px-4 py-12">
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
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors p-2 border border-slate-600 hover:border-blue-400 rounded-none"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors p-2 border border-slate-600 hover:border-blue-400 rounded-none"
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
                <button
                  onClick={() => scrollToSection("#about")}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {t("about")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {t("services")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#certificates")}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {t("certificates")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#partners")}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {t("partners")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {t("contact")}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("ourServices")}</h3>
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
