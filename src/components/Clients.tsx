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
    <section id="clients">
      {/* Premium dark hero header */}
      <div className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[#071825]" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/8 blur-[120px] -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--color-accent)]/6 blur-[100px] translate-x-1/4 translate-y-1/3" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)]">
                <span className="w-12 h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
                Per a qui treballem
              </span>
              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
                Clients
              </h1>
              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full" />
              <p className="mt-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl">
                La nostra independència i imparcialitat ens permet treballar tant per
                a institucions públiques i privades, com per a empreses.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Feature cards on white bg */}
      <div className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 100}>
                <div className="group relative flex gap-5 p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-[var(--color-accent)]/5 transition-all duration-500 h-full">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[var(--color-accent)]/30 rounded-tr-lg" />
                  </div>

                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] flex items-center justify-center text-white shadow-lg shadow-[var(--color-accent)]/20 group-hover:shadow-[var(--color-accent)]/30 transition-shadow duration-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-primary)]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />
    </section>
  );
}
