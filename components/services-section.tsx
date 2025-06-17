"use client"

import { Package, Cpu, Settings, Handshake } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export default function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Package,
      title: t("fmcgTitle"),
      description: t("fmcgDescription"),
    },
    {
      icon: Cpu,
      title: t("nonFoodTitle"),
      description: t("nonFoodDescription"),
    },
    {
      icon: Settings,
      title: t("privateLabelTitle"),
      description: t("privateLabelDescription"),
    },
    {
      icon: Handshake,
      title: t("tradingServicesTitle"),
      description: t("tradingServicesDescription"),
    },
  ]

  return (
    <section id="services" className="py-20 bg-slate-800 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("servicesTitle")}</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-700/50 p-8 border border-slate-600 hover:border-blue-400 transition-all duration-300 group rounded-none"
              >
                <div className="flex items-start space-x-4 text-left">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-400/20 flex items-center justify-center group-hover:bg-blue-400/30 transition-colors duration-300 rounded-none border border-blue-400/30">
                      <service.icon className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
