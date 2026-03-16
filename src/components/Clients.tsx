import ScrollReveal from "./ScrollReveal";

export default function Clients() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Independència i Imparcialitat",
      desc: "La nostra independència i imparcialitat ens permet treballar tant per a institucions públiques i privades, com per a empreses.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: "Col·laboracions Professionals",
      desc: "Hem establert col·laboracions estretes amb altres despatxos professionals especialitzats i bufets d'advocats.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
      title: "Qualitat i Confidencialitat",
      desc: "Estem compromesos amb els més alts estàndards de qualitat i proporcionem un elevat nivell de servei mitjançant el tracte personalitzat.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      title: "Valoracions Pericials",
      desc: "Col·laborem amb diferents bufets d'advocats realitzant valoracions pericials de forma rigorosa i independent.",
    },
  ];

  return (
    <section id="clients" className="py-24 bg-[var(--color-primary)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)]">
              Per a qui treballem
            </span>
            <h2 className="mt-3 text-4xl font-bold text-white tracking-tight">
              Clients
            </h2>
            <div className="mt-2 mx-auto h-1 w-16 bg-[var(--color-accent)]" />
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              La nostra independència i imparcialitat ens permet treballar tant per
              a institucions públiques i privades, com per a empreses.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 100}>
            <div
              className="flex gap-5 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--color-accent)] flex items-center justify-center text-white">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
