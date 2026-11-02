import Section, { Reveal } from './Section'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="skills" index="04" kicker="skills" title="My toolbox">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={(i % 3) * 80} className="rounded-2xl border border-line bg-panel p-6">
            <h3 className="font-mono text-sm text-accent">
              <span className="text-muted">{'// '}</span>
              {s.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line bg-ink px-3 py-1.5 text-sm transition-colors hover:border-accent/60 hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
