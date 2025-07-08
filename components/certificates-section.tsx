"use client"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"

export default function CertificatesSection() {
  const { t } = useLanguage()
  
  return (
    <section id="certificates" className="py-20 bg-[#09203f] relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("certificatesTitle")}</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-10 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <p className="text-lg text-slate-300 leading-relaxed">{t("certificatesText1")}</p>
              <p className="text-lg text-slate-300 leading-relaxed">{t("certificatesText2")}</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 gap-8">
              <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-2 border-transparent hover:border-blue-400">
                <Image
                  src="/images/mohammed-bin-rashid-certificate.jpg"
                  alt="Mohammed Bin Rashid Establishment for SME Development Certificate"
                  width={400}
                  height={200}
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-2 border-transparent hover:border-blue-400">
                <Image
                  src="/images/national-program-certificate.png"
                  alt="National Program for Small and Medium Enterprises Certificate"
                  width={400}
                  height={200}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}