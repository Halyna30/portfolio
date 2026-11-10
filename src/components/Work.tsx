import Section, { Reveal, Tag } from './Section'
import { petProject } from '../data'
import { useI18n } from '../i18n'

function PetProject() {
  const { t } = useI18n()
  const pet = t.work.pet

  return (
    <Reveal className="mb-5">
      <article className="relative overflow-hidden rounded-3xl border border-accent/40 bg-panel p-7 sm:p-10">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              {pet.badge}
            </p>
            <h3 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">{petProject.name}</h3>
            <p className="mt-2 text-lg text-text">{pet.subtitle}</p>
            <p className="mt-4 leading-relaxed text-muted">{pet.text}</p>
            <ul className="mt-6 space-y-2 text-muted">
              {pet.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-0.5 font-mono text-accent">→</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6 lg:border-l lg:border-line lg:pl-10">
            <div className="flex flex-wrap gap-2">
              {petProject.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <p className="font-mono text-xs leading-relaxed text-muted">{pet.status}</p>
            <a
              href={petProject.url}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 self-start rounded-xl bg-accent px-6 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              {pet.link} <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Work() {
  const { t } = useI18n()

  return (
    <Section id="work" index="03" kicker={t.nav.work.toLowerCase()} title={t.work.title}>
      <PetProject />
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
                {w.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
