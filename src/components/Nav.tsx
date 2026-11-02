import { useEffect, useState } from 'react'
import { nav, profile } from '../data'

export default function Nav() {
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
    nav.forEach(({ id }) => {
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
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-mono text-lg font-bold" onClick={() => setOpen(false)}>
          <span className="text-accent">hp</span>
          <span className="text-muted">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                  active === id ? 'text-text' : 'text-muted hover:text-text'
                }`}
              >
                {active === id && <span className="text-accent">● </span>}
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cv}
              download
              className="ml-3 rounded-lg border border-accent/50 px-4 py-2 text-sm text-accent transition-colors hover:bg-accent hover:text-ink"
            >
              Download CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-line md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-text transition-all ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-text transition-all ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-line px-4 pb-4 md:hidden">
          {nav.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-text">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.cv} download className="mt-2 block rounded-lg bg-accent py-3 text-center font-medium text-ink">
              Download CV
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
