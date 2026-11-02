import Section, { Reveal } from './Section'
import { about, languages, stats } from '../data'

export default function About() {
  return (
    <Section id="about" index="01" kicker="about" title="A bit about me">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={120} className="rounded-2xl border border-line bg-panel p-6">
          <h3 className="font-mono text-sm text-accent">languages</h3>
          <ul className="mt-5 space-y-4">
            {languages.map((l) => (
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
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="rounded-2xl border border-line bg-panel p-6">
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
