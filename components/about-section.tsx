"use client"

import { Target, Eye } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export default function AboutSection() {
  const { t, isLoaded } = useLanguage()

  if (!isLoaded) {
    return (
      <section id="about" className="py-20 bg-slate-800 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="h-12 bg-slate-700 animate-pulse rounded mb-6"></div>
              <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="about" className="py-20 bg-slate-800 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("aboutTitle")}</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <p className="text-lg text-slate-300 leading-relaxed">{t("aboutText1")}</p>
              <p className="text-lg text-slate-300 leading-relaxed">{t("aboutText2")}</p>
              <p className="text-lg text-slate-300 leading-relaxed">{t("aboutText3")}</p>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-700/50 p-8 border border-slate-600 hover:border-blue-400 transition-colors duration-300 rounded-none">
                <div className="w-full mb-4 text-left">
                  <div className="inline-flex items-center">
                    <Target className="h-8 w-8 text-blue-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">{t("ourMission")}</h3>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed text-left">{t("missionText")}</p>
              </div>

              <div className="bg-slate-700/50 p-8 border border-slate-600 hover:border-blue-400 transition-colors duration-300 rounded-none">
                <div className="w-full mb-4 text-left">
                  <div className="inline-flex items-center">
                    <Eye className="h-8 w-8 text-blue-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">{t("ourVision")}</h3>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed text-left">{t("visionText")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
