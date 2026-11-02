import Section, { Reveal, Tag } from './Section'
import { education, jobs } from '../data'

export default function Experience() {
  return (
    <Section id="experience" index="02" kicker="experience" title="Where I've worked">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
          {jobs.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <li className="relative">
                <span
                  className={`absolute top-6 -left-[31px] h-3 w-3 rounded-full ring-4 ring-ink sm:-left-[39px] ${
                    i === 0 ? 'bg-accent' : 'bg-line'
                  }`}
                />
                <div className={`rounded-2xl border p-6 ${i === 0 ? 'border-accent/30 bg-panel' : 'border-line bg-panel/50'}`}>
                  <p className="font-mono text-xs text-muted">{job.period}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{job.title}</h3>
                  <p className="mt-1 text-sm">
                    <span className={i === 0 ? 'text-accent' : 'text-text'}>{job.company}</span>
                    <span className="text-muted"> · {job.place}</span>
                  </p>
                  {job.points && (
                    <ul className="mt-4 space-y-2 text-muted">
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span className="mt-0.5 font-mono text-accent">→</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {job.tags && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <div>
          <Reveal>
            <h3 className="font-mono text-sm text-accent">education</h3>
          </Reveal>
          <div className="mt-5 space-y-4">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 80} className="rounded-2xl border border-line bg-panel p-6">
                <p className="font-mono text-xs text-muted">{e.period}</p>
                <h4 className="mt-2 font-display text-lg font-semibold">{e.title}</h4>
                <p className="mt-1 text-sm text-text">{e.school}</p>
                <p className="mt-2 text-sm text-muted">{e.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
