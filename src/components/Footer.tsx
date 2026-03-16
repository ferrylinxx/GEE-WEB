import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Inici" },
  { href: "/presentacio", label: "Presentació" },
  { href: "/que-fem", label: "Què fem" },
  { href: "/qui-som", label: "Qui som" },
  { href: "/clients", label: "Clients" },
  { href: "/contacte", label: "Contacte" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[var(--color-primary-dark)] to-[#081a2e]">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="GEE Logo"
                width={44}
                height={44}
                className="rounded-sm opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-widest text-white">
                  GABINET
                </span>
                <span className="text-[11px] tracking-[0.3em] text-[var(--color-accent)]">
                  ESTUDIS ECONÒMICS
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Des de 1989, assessorant institucions públiques i empreses privades
              en l&apos;àmbit econòmic, urbanístic i social.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-5">
              Navegació
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-[var(--color-accent)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-5">
              Contacte
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 mt-0.5 text-[var(--color-accent)] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="leading-relaxed">
                  Passatge de Forasté, 4, Bis,
                  <br />
                  Local 7, 08022 Barcelona
                </span>
              </li>
              <li>
                <a
                  href="tel:+34932120869"
                  className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 text-[var(--color-accent)] shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  +34 932 120 869
                </a>
              </li>
              <li>
                <a
                  href="mailto:gllg@geeconomics.com"
                  className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 text-[var(--color-accent)] shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  gllg@geeconomics.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Gabinet Estudis Econòmics, GLLG.
            Tots els drets reservats.
          </p>
          <div className="flex gap-4">
            <Link
              href="/politica-privacitat"
              className="text-xs text-white/30 hover:text-white/50 transition-colors duration-200"
            >
              Política de privacitat
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/politica-cookies"
              className="text-xs text-white/30 hover:text-white/50 transition-colors duration-200"
            >
              Política de cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
