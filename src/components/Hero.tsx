import { useEffect, useState } from 'react'
import { useI18n } from '../i18n'

// Types out each role, pauses, deletes it, then moves on to the next.
function useTypewriter(words: string[]) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  // Start over when the word list changes (language switch).
  useEffect(() => {
    setText('')
    setI(0)
    setDeleting(false)
  }, [words])

  useEffect(() => {
    const word = words[i % words.length]
    const done = !deleting && text === word
    const cleared = deleting && text === ''
    const delay = done ? 1600 : deleting ? 40 : 85

    const t = setTimeout(() => {
      if (done) setDeleting(true)
      else if (cleared) {
        setDeleting(false)
        setI((n) => n + 1)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, i, words])

  return text
}

const K = ({ children }: { children: string }) => <span className="text-lilac">{children}</span>
const P = ({ children }: { children: string }) => <span className="text-sky">{children}</span>
const S = ({ children }: { children: string }) => <span className="text-mint">'{children}'</span>

function CodeCard() {
  return (
    <div className="float relative w-full max-w-md rounded-2xl border border-line bg-panel/90 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">halyna.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 sm:text-sm">
        <code>
          <K>const</K> <span className="text-text">halyna</span> = {'{'}
          {'\n  '}<P>role</P>: <S>Frontend Developer</S>,
          {'\n  '}<P>experience</P>: <S>5 years</S>,
          {'\n  '}<P>based</P>: <S>Szczecin, PL</S>,
          {'\n  '}<P>stack</P>: [<S>React</S>, <S>TS</S>, <S>Next.js</S>],
          {'\n  '}<P>testing</P>: [<S>Playwright</S>, <S>Jest</S>],
          {'\n  '}<P>a11y</P>: <S>EAA compliant</S>,
          {'\n  '}<P>openToWork</P>: <span className="text-accent">true</span>,
          {'\n'}{'}'}
        </code>
      </pre>
    </div>
  )
}

export default function Hero() {
  const { t } = useI18n()
  const hero = t.hero
  const typed = useTypewriter(hero.roles)

  return (
    <section id="top" className="mx-auto grid min-h-svh max-w-6xl items-center gap-14 px-4 pt-28 pb-16 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1 font-mono text-xs text-mint">
          <span className="h-2 w-2 animate-pulse rounded-full bg-mint" />
          {hero.badge}
        </p>

        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          {hero.greeting} {hero.firstName}
          <span className="text-accent">.</span>
        </h1>

        <p className="mt-5 h-8 font-mono text-lg text-muted sm:text-xl" aria-label={hero.roles.join(', ')}>
          <span className="text-accent">&gt;</span> {typed}
          <span className="caret" aria-hidden />
        </p>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{hero.tagline}</p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-xl bg-accent px-6 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            {hero.ctaWork}
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-line px-6 py-3 font-medium transition-colors hover:border-text"
          >
            {hero.ctaContact}
          </a>
        </div>

        <p className="mt-10 font-mono text-xs text-muted">
          📍 {hero.location} · UA / PL / EN
        </p>
      </div>

      <div className="flex justify-center lg:justify-end">
        <CodeCard />
      </div>
    </section>
  )
}
