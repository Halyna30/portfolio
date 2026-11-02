import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          Built with <span className="text-text">React</span>, <span className="text-text">TypeScript</span> &{' '}
          <span className="text-text">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}
