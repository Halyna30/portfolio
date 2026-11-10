import Section, { Reveal } from './Section'
import { useI18n } from '../i18n'

export default function About() {
  const { t } = useI18n()
  const about = t.about

  return (
    <Section id="about" index="01" kicker={t.nav.about.toLowerCase()} title={about.title}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={120} className="rounded-2xl border border-line bg-panel p-6">
          <h3 className="font-mono text-sm text-accent">{about.languagesTitle}</h3>
          <ul className="mt-5 space-y-4">
            {about.languages.map((l) => (
              <li key={l.name}>
                <div className="flex justify-between text-sm">
                  <span>{l.name}</span>
                  <span className="font-mono text-muted">{l.level}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
                  <div className="h-full rounded-full bg-gradient-to-r from-accent to-lilac" style={{ width: `${l.pct}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {about.stats.map((s, i) => (
          <Reveal key={i} delay={i * 80} className="rounded-2xl border border-line bg-panel p-6">
            <p className="font-display text-4xl font-bold">
              {s.value}
              <span className="text-xl text-accent">{s.suffix}</span>
            </p>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
