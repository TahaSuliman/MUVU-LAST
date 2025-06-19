"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Phone, Mail, Globe, MapPin, CheckCircle, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export default function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<any>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      setSubmitResult({
        success: false,
        message: "Please fill in all required fields",
      })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitResult({
          success: true,
          message: result.message,
          messageId: result.messageId,
          timestamp: result.timestamp,
          recipient: result.recipient,
          status: result.status,
        })

        // Clear form on success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitResult({
          success: false,
          message: result.error || "Error sending message",
        })
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitResult({
        success: false,
        message: "Connection error. Please try again or contact us directly at info@muvu.ae",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#09203f] relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("contactTitle")}</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-700/50 p-8 border border-slate-600 rounded-none">
                <h3 className="text-2xl font-bold text-white mb-6">{t("contactInfo")}</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-400/20 flex items-center justify-center rounded-none border border-blue-400/30">
                      <Phone className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{t("phone")}</p>
                      <p className="text-slate-300">+971 56 682 4101</p>
                      <p className="text-slate-300">+971 56 777 0180</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-400/20 flex items-center justify-center rounded-none border border-blue-400/30">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{t("email")}</p>
                      <p className="text-blue-400 font-semibold">info@muvu.ae</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-400/20 flex items-center justify-center rounded-none border border-blue-400/30">
                      <Globe className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{t("website")}</p>
                      <p className="text-slate-300">www.muvu.ae</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-400/20 flex items-center justify-center rounded-none border border-blue-400/30">
                      <MapPin className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{t("address")}</p>
                      <p className="text-slate-300">{t("addressValue")}</p>
                    </div>
                  </div>
                </div>

                {/* Dubai SME Badge */}
                <div className="mt-8 flex justify-center">
                  <Image
                    src="/images/proud-contributor.png"
                    alt="Proud Contributor to Dubai's Economy"
                    width={128}
                    height={128}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-700/50 p-8 border border-slate-600 rounded-none">
              <h3 className="text-2xl font-bold text-white mb-6">{t("sendMessage")}</h3>
              <div className="bg-blue-400/10 border border-blue-400/30 p-4 rounded-none mb-6">
                <p className="text-blue-300 text-sm">
                  📧 Messages will be sent to: <span className="text-blue-400 font-semibold">info@muvu.ae</span>
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t("firstName")}</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder={t("firstNamePlaceholder")}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t("lastName")}</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder={t("lastNamePlaceholder")}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">{t("email")}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder={t("emailPlaceholder")}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">{t("phoneNumber")}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder={t("phonePlaceholder")}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">{t("subject")}</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder={t("subjectPlaceholder")}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">{t("message")}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 text-white placeholder-slate-400 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-vertical"
                    placeholder={t("messagePlaceholder")}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {submitResult && (
                  <div
                    className={`text-sm p-4 border rounded-none ${
                      submitResult.success
                        ? "border-green-500 bg-green-500/10 text-green-300"
                        : "border-red-500 bg-red-500/10 text-red-300"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {submitResult.success ? (
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Clock className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                      )}
                      <div>
                        <p className="font-medium">{submitResult.message}</p>
                        {submitResult.success && submitResult.messageId && (
                          <p className="text-xs mt-2 opacity-75">
                            Message ID: {submitResult.messageId}
                            {submitResult.timestamp && <span className="block">Time: {submitResult.timestamp}</span>}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white py-3 px-4 border-t-2 border-b-2 border-black transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending to info@muvu.ae...</span>
                    </>
                  ) : (
                    <span>{t("sendButton")}</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
