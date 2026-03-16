import ScrollReveal from "./ScrollReveal";

export default function Presentacio() {
  return (
    <section id="presentacio" className="py-24 bg-white min-h-[calc(100vh-5rem)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <ScrollReveal>
            <span className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)]">
              Des de 1989
            </span>
            <h2 className="mt-3 text-4xl font-bold text-[var(--color-primary)] tracking-tight">
              Presentació
            </h2>
            <div className="mt-2 h-1 w-16 bg-[var(--color-accent)]" />

            <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-muted)]">
              Gabinet Estudis Econòmics va ser fundat l&apos;any 1989 pels
              economistes Pere Lleonart, Alvar Garola i l&apos;arquitecte Àngels
              Garcia, per a la realització d&apos;estudis econòmics.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
              Durant tots aquests anys hem mantingut la mateixa filosofia de
              treball adaptant-nos a la realitat de cada moment i utilitzant
              diferents metodologies; amb tants anys de trajectòria hem acumulat
              molta experiència i un coneixement molt valuós a l&apos;hora
              d&apos;afrontar nous projectes de forma rigorosa, independent i a
              la mida de cada client.
            </p>
          </ScrollReveal>

          {/* Right - Awards */}
          <ScrollReveal delay={200}>
            <div className="bg-[var(--color-bg-light)] rounded-2xl p-10">
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-8">
                Reconeixements
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Premi Nacional d'Urbanisme",
                    desc: "Pel PGOU d'Hostalric (Girona)",
                  },
                  {
                    title: "Premi Catalunya d'Economia",
                    desc: "Per l'Institut d'Estudis Catalans, a la seva primera convocatòria",
                  },
                  {
                    title: "Despatx Professional de l'any",
                    desc: "Pel Col·legi d'Economistes de Catalunya (2008)",
                  },
                ].map((award) => (
                  <div key={award.title} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-primary)]">
                        {award.title}
                      </h4>
                      <p className="text-sm text-[var(--color-text-muted)]">
                        {award.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
