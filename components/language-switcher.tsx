"use client"

import { useLanguage } from "@/components/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-slate-400" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
        className="text-slate-300 hover:text-orange-500 transition-colors duration-200 font-medium"
      >
        {language === "ar" ? "English" : "العربية"}
      </Button>
    </div>
  )
}
