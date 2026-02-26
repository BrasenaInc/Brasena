"use client"

/**
 * Language context: stores en/es, persists to localStorage, provides t() for
 * auth and shared UI strings. Used across the app for i18n.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { translations, type TranslationKey } from "./translations"

const STORAGE_KEY = "brasena-lang"

type Language = "en" | "es"

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "en"
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === "es" || stored === "en") return stored
  return "en"
}

export function LanguageProvider({ children }: { children: ReactNode }): JSX.Element {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    setLanguageState(getStoredLanguage())
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang)
    }
  }, [])

  const t = useCallback(
    (key: TranslationKey): string => {
      const dict = translations[language]
      return (dict[key] ?? translations.en[key] ?? key) as string
    },
    [language]
  )

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return ctx
}
