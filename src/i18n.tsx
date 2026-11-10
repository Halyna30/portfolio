import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { content, locales, type Content, type Locale } from './data'

const STORAGE_KEY = 'lang'

function isLocale(value: string | null): value is Locale {
  return locales.some((l) => l.code === value)
}

// Saved choice first, then the browser language, then English.
function initialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLocale(saved)) return saved
  } catch {
    // storage blocked — fall through
  }
  for (const lang of navigator.languages ?? [navigator.language]) {
    const code = lang.slice(0, 2).toLowerCase()
    if (isLocale(code)) return code
  }
  return 'en'
}

type I18n = { locale: Locale; setLocale: (l: Locale) => void; t: Content }

const I18nContext = createContext<I18n | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = content[locale].meta.title
  }, [locale])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      // ignore
    }
  }

  return <I18nContext.Provider value={{ locale, setLocale, t: content[locale] }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
  return ctx
}
