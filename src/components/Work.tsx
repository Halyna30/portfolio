import Section, { Reveal, Tag } from './Section'
import { useI18n } from '../i18n'

export default function Work() {
  const { t } = useI18n()

  return (
    <Section id="work" index="03" kicker={t.nav.work.toLowerCase()} title={t.work.title}>
      <div className="grid gap-5 md:grid-cols-2">
        {t.work.items.map((w, i) => (
          <Reveal key={i} delay={(i % 2) * 100}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel p-7 transition-colors hover:border-accent/40">
              <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
              <p className="font-mono text-xs text-accent">{w.kicker}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{w.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{w.text}</p>

              {w.brands && (
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {w.brands.map((b) => (
                    <span key={b} className="rounded-lg border border-line bg-ink px-3 py-2 text-center font-mono text-sm">
                      {b}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {w.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
