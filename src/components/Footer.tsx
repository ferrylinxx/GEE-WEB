import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-widest text-white">
                GABINET
              </span>
              <span className="text-xs tracking-[0.3em] text-[var(--color-accent)]">
                ESTUDIS ECONÒMICS
              </span>
            </Link>
            <p className="mt-3 text-sm text-white/50">
              Passatge de Forasté, 4, Bis, Local 7, 08022 Barcelona
            </p>
          </div>

          <div className="flex gap-8 text-sm text-white/50">
            <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">
              Inici
            </Link>
            <Link href="/presentacio" className="hover:text-[var(--color-accent)] transition-colors">
              Presentació
            </Link>
            <Link href="/que-fem" className="hover:text-[var(--color-accent)] transition-colors">
              Que fem
            </Link>
            <Link href="/contacte" className="hover:text-[var(--color-accent)] transition-colors">
              Contacte
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Gabinet Estudis Econòmics, GLLG.
          Tots els drets reservats.
        </div>
      </div>
    </footer>
  );
}
