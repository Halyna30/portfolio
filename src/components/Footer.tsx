import { profile } from '../data'
import { useI18n } from '../i18n'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          {t.footer.builtWith} <span className="text-text">React</span>, <span className="text-text">TypeScript</span> &{' '}
          <span className="text-text">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}
