"use client"

import Image from "next/image"
import { Anchor, Shield, Zap, Wrench, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import LightParticleBackground from "@/components/light-particle-background"
import VerticalCarousel from "@/components/vertical-carousel"

export default function MarineServicesSection() {
  const { t } = useLanguage()

  const marineServices = [
    {
      icon: Wrench,
      title: t("engineRoomSpares"),
      description: t("engineRoomSparesDesc"),
    },
    {
      icon: Shield,
      title: t("deckSafetyEquipment"),
      description: t("deckSafetyEquipmentDesc"),
    },
    {
      icon: Zap,
      title: t("electricalNavigation"),
      description: t("electricalNavigationDesc"),
    },
    {
      icon: Anchor,
      title: t("cleaningCabinSupplies"),
      description: t("cleaningCabinSuppliesDesc"),
    },
    {
      icon: Clock,
      title: t("onboardDeliverySupport"),
      description: t("onboardDeliverySupportDesc"),
    },
  ]

  return (
    <section className="py-20 bg-[#09203f] relative scroll-mt-20 overflow-hidden">
      {/* Light Particle Background */}
      <div className="absolute inset-0">
        <LightParticleBackground />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {t("marineServicesTitle")}
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8 shadow-lg"></div>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto drop-shadow-md text-left">
              {t("marineServicesDescription")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 overflow-hidden border border-slate-600 hover:border-blue-400 transition-colors duration-300 rounded-none shadow-lg hover:shadow-xl">
                  <Image
                    src="/images/marine-supply-warehouse.jpg"
                    alt="Marine Supply Warehouse Operations"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="relative h-48 overflow-hidden border border-slate-600 hover:border-blue-400 transition-colors duration-300 rounded-none shadow-lg hover:shadow-xl">
                  <Image
                    src="/images/marine-supply-port.jpg"
                    alt="Port Operations and Container Ships"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 hover:bg-transparent transition-colors duration-300"></div>
                </div>
              </div>
              <div className="relative h-full overflow-hidden border border-slate-600 hover:border-blue-400 transition-colors duration-300 rounded-none shadow-lg hover:shadow-xl">
                <VerticalCarousel
                  images={[
                    "/images/marine-supply-001.png",
                    "/images/marine-supply-002.png",
                    "/images/marine-supply-003.png",
                    "/images/marine-supply-004.png",
                    "/images/marine-supply-005.png"
                  ]}
                  altText="Marine Supply & Ship Chandler Services"
                />
              </div>
            </div>

            <div className="space-y-6 text-left">
              <h3 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">{t("whatWeOffer")}</h3>
              <div className="space-y-6">
                {marineServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-slate-800/70 backdrop-blur-sm border border-slate-700 hover:border-blue-400 transition-all duration-300 rounded-none shadow-lg hover:shadow-xl hover:bg-slate-800/90 space-x-4 text-left"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-400/20 backdrop-blur-sm flex items-center justify-center border border-blue-400/30 rounded-none shadow-md">
                        <service.icon className="h-6 w-6 text-blue-400 drop-shadow-sm" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 drop-shadow-sm">{service.title}</h4>
                      <p className="text-slate-300 text-sm drop-shadow-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
