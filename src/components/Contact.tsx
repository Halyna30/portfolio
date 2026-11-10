import { useState } from 'react'
import Section, { Reveal } from './Section'
import { profile } from '../data'
import { useI18n } from '../i18n'

export default function Contact() {
  const { t } = useI18n()
  const c = t.contact
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <Section id="contact" index="05" kicker={t.nav.contact.toLowerCase()} title={c.title}>
      <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-panel p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <p className="max-w-2xl text-lg leading-relaxed text-muted">{c.text}</p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 block font-display text-2xl font-semibold break-all transition-colors hover:text-accent sm:text-4xl"
        >
          {profile.email}
        </a>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="rounded-xl bg-accent px-6 py-3 font-medium text-ink">
            {c.send}
          </a>
          <button
            type="button"
            onClick={copy}
            className="rounded-xl border border-line px-6 py-3 font-medium transition-colors hover:border-text"
          >
            {copied ? c.copied : c.copy}
          </button>
          <a
            href={profile.cv}
            download
            className="rounded-xl border border-line px-6 py-3 font-medium transition-colors hover:border-text"
          >
            {t.ui.downloadCv}
          </a>
        </div>

        <dl className="mt-10 grid gap-6 border-t border-line pt-8 font-mono text-sm sm:grid-cols-3">
          <div>
            <dt className="text-muted">{c.phone}</dt>
            <dd className="mt-1">
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:text-accent">
                {profile.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">{c.location}</dt>
            <dd className="mt-1">{c.locationValue}</dd>
          </div>
          <div>
            <dt className="text-muted">{c.languages}</dt>
            <dd className="mt-1">UA · PL C1 · EN B1/B2</dd>
          </div>
        </dl>
      </Reveal>
    </Section>
  )
}
