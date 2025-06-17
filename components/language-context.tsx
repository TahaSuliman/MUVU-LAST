"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    services: "Our Services",
    certificates: "Certificates",
    partners: "Our Partners",
    contact: "Contact Us",

    // Hero Section
    heroTitle1: "MUVU General Trading",
    heroSubtitle1: "Your trusted partner in general trading",
    heroDescription1: "We provide comprehensive trading solutions in the United Arab Emirates",
    heroTitle2: "Marine Shipping Services",
    heroSubtitle2: "Advanced logistics solutions",
    heroDescription2: "We provide comprehensive ship services across all major UAE ports",
    heroTitle3: "High Quality Products",
    heroSubtitle3: "Excellence in every detail",
    heroDescription3: "We import and export a diverse range of high-quality products",
    discoverServices: "Discover Our Services",
    contactUs: "Contact Us",

    // About Section
    aboutTitle: "About Us",
    aboutText1:
      "Muvu General Trading L.L.C, founded in 2022 and headquartered in Dubai, is a dynamic trading company specializing in the import & export of a diverse range of products and commodities.",
    aboutText2:
      "In 2025, we proudly expanded into Ship Chandler and Marine Spare Parts Services, serving vessels and ship management companies across all major UAE ports. We provide everything from engine room spares to safety and navigation equipment.",
    aboutText3:
      "The company is committed to providing various high-quality products to customers in the United Arab Emirates and beyond. With a focus on customer satisfaction, we contribute to forming strong relationships with all our customers worldwide.",
    ourMission: "Our Mission",
    missionText:
      "Providing the best and highest quality products and services that exceed the highest expectations of our customers and the capabilities of our strongest competitors.",
    ourVision: "Our Vision",
    visionText:
      "To become the best supplier by providing a variety of products at the best prices to satisfy our customers. We aspire to build strategic relationships with factories around the world.",

    // Certificates
    certificatesTitle: "Our Certificates",
    certificatesText1:
      "We, MUVU, are members of the Mohammed bin Rashid Establishment for SME Development by the Government of Dubai. And also we are holding a membership in the National Program for Small and Medium Enterprises and Projects from the Ministry of Economy.",
    certificatesText2:
      "All of this indicates that the government's support for leading local companies in the field of business. We are also proud to be a contributing part of the wheel of business and economic development in the local and global market to achieve the goals and strategies of the United Arab Emirates.",

    // Services
    servicesTitle: "Products & Services",
    fmcgTitle: "FMCG",
    fmcgDescription:
      "We specialize in the import and export of a diverse range of Food and Beverage products, including Canned Goods, Legumes, Spices, Cooking Oil, Rice, Eggs, Frozen Items, and more.",
    nonFoodTitle: "Non Food",
    nonFoodDescription:
      "We deal in a wide range of products, including Electronics, Drone Components, Automotive Spare Parts, Disposable Items, and more.",
    privateLabelTitle: "Private Label",
    privateLabelDescription:
      "Our products can also be customized to meet the specific needs and preferences of a particular business or target audience. This customization can include everything from packaging design to the ingredients used in the product.",
    tradingServicesTitle: "Trading Services",
    tradingServicesDescription:
      "In addition to our products, we offer a full range of trading services, including logistics, warehousing, and distribution. Our strong network of trusted partners enables us to deliver these services efficiently and reliably.",

    // Marine Services
    marineServicesTitle: "Marine Supply & Ship Chandler Services",
    marineServicesDescription:
      "Muvu now offers full ship supply solutions across major UAE ports, including Jebel Ali, Fujairah, Hamriyah, and Dubai Creek. Our services are designed to ensure vessels are resupplied quickly, reliably, and cost-effectively.",
    whatWeOffer: "What We Offer:",
    engineRoomSpares: "Engine Room Spares",
    engineRoomSparesDesc: "Filters, Pumps, Gaskets, Turbochargers, Compressors",
    deckSafetyEquipment: "Deck & Safety Equipment",
    deckSafetyEquipmentDesc: "Ropes, Chains, Fire Safety Gear, Immersion Suits",
    electricalNavigation: "Electrical & Navigation",
    electricalNavigationDesc: "Lights, Switches, Marine Batteries, GPS Units",
    cleaningCabinSupplies: "Cleaning & Cabin Supplies",
    cleaningCabinSuppliesDesc: "Disposable items, Air fresheners, Medical Waste Bags, Liquid Soap",
    onboardDeliverySupport: "24/7 Onboard Delivery Support",
    onboardDeliverySupportDesc: "Emergency Logistics for all UAE Ports",

    // Partners Section
    partnersTitle: "Our Partners",
    partnersDescription:
      "We work with leading companies and organizations across the UAE and globally to deliver exceptional trading and marine services. Our strong partnerships enable us to provide comprehensive solutions to our clients.",
    trustedPartners: "Trusted Partners",
    countriesServed: "Countries Served",
    supportAvailable: "Support Available",

    // Contact
    contactTitle: "Contact Us",
    contactInfo: "Contact Information",
    phone: "Phone",
    email: "E-mail",
    website: "Website",
    address: "Address",
    addressValue: "Dubai, United Arab Emirates",
    sendMessage: "Send us a message",
    firstName: "First Name",
    lastName: "Last Name",
    phoneNumber: "Phone Number",
    subject: "Subject",
    message: "Message",
    sendButton: "Send Message",
    firstNamePlaceholder: "Enter your first name",
    lastNamePlaceholder: "Enter your last name",
    emailPlaceholder: "Enter your email",
    phonePlaceholder: "Enter your phone number",
    subjectPlaceholder: "Message subject",
    messagePlaceholder: "Write your message here...",

    // Footer
    companyDescription:
      "MUVU General Trading L.L.C - Your trusted partner in trading and marine services in the United Arab Emirates.",
    quickLinks: "Quick Links",
    ourServices: "Our Services",
    generalTrading: "General Trading",
    shipSupply: "Ship Supply",
    marineServices: "Marine Services",
    privateLabel: "Private Label",
    contactInformation: "Contact Information",
    allRightsReserved: "All rights reserved.",

    // Form Messages
    messageSent: "Message sent successfully!",
    messageError: "Error sending message. Please try again.",
    sending: "Sending...",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language] = useState<Language>("en")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  const setLanguage = () => {
    // Language is fixed to English only
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t, isLoaded }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
