import { socialLinks } from "../data/socialLinks"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 px-8 text-gray-400 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 border-t-2 border-gray-700 py-8 sm:flex-row">
        <p className="text-sm">
          © {year} Pranav Kumar. Built with React.
        </p>

        <nav aria-label="Social media">
          <ul className="flex items-center gap-3">
            {socialLinks.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-800 bg-gray-900 text-teal-400 transition hover:-translate-y-0.5 hover:border-teal-700 hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                >
                  <Icon className="text-lg" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}