import { useEffect, useState } from 'react'
import { locales, profile, sectionIds } from '../data'
import { useI18n } from '../i18n'

function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()
  return (
    <div role="group" aria-label={t.ui.language} className="flex rounded-lg border border-line p-0.5 font-mono text-xs">
      {locales.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-pressed={locale === code}
          onClick={() => setLocale(code)}
          className={`rounded-md px-2 py-1.5 transition-colors ${
            locale === code ? 'bg-accent text-ink' : 'text-muted hover:text-text'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default function Nav() {
  const { t } = useI18n()
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    // Highlight the link of the section currently in the middle of the screen.
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-ink/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-mono text-lg font-bold" onClick={() => setOpen(false)}>
          <span className="text-accent">hp</span>
          <span className="text-muted">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {sectionIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                  active === id ? 'text-text' : 'text-muted hover:text-text'
                }`}
              >
                {active === id && <span className="text-accent">● </span>}
                {t.nav[id]}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cv}
              download
              className="ml-3 rounded-lg border border-accent/50 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent hover:text-ink"
            >
              {t.ui.downloadCv}
            </a>
          </li>
          <li className="ml-3">
            <LanguageSwitcher />
          </li>
        </ul>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line"
            aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-text transition-all ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-text transition-all ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line px-4 pb-4 lg:hidden">
          {sectionIds.map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-text">
                {t.nav[id]}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.cv} download className="mt-2 block rounded-lg bg-accent py-3 text-center font-medium text-ink">
              {t.ui.downloadCv}
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
