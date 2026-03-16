import ScrollReveal from "./ScrollReveal";

const team = [
  {
    name: "Àlvar Garola Crespo",
    role: "Director Tècnic",
    bio: "Economista per la Universitat de Barcelona. Treballa al Gabinet des dels seus inicis l'any 1989. Ha realitzat estudis de postgrau sobre l'impacte econòmic de les infraestructures, i és Diploma d'Estudis Avançats en Infraestructures de Transport i Gestió del Territori per la UPC. Investigador a la Universitat de Stanford, on, sota la direcció del professor Henry Levin, va treballar en l'aplicació de tècniques de prospectiva en l'àmbit de l'economia territorial i urbana.",
    initials: "AG",
  },
  {
    name: "Àngels Garcia Hernández",
    role: "Directora Tècnica Adjunta",
    bio: "Treballa al Gabinet des dels seus inicis l'any 1989. Arquitecta per l'Escola Tècnica Superior d'Arquitectura de Barcelona. Va iniciar la seva labor professional al despatx de l'arquitecte i professor de Projectes Arquitectònics de la ETSAB Joan Arias Roig, amb el que ha continuat col·laborant en diferents projectes d'arquitectura.",
    initials: "ÀG",
  },
  {
    name: "Gemma Vélez Sabater",
    role: "Analista",
    bio: "Treballa al Gabinet des de l'any 1996. Diplomada en Ciències Empresarials per la Universitat Pompeu Fabra. Llicenciada en Administració i Direcció d'Empreses per la Universitat Autònoma de Bellaterra.",
    initials: "GV",
  },
  {
    name: "Bernat Arias",
    role: "Consultor",
    bio: "Treballa al Gabinet des de l'any 2017. Llicenciat en Economia per la Universitat de Barcelona. Màster recerca, especialitat Història del pensament econòmic per la Universitat París 1 Panthéon-Sorbonne. Ha treballat al sector públic.",
    initials: "BA",
  },
];

export default function QuiSom() {
  return (
    <section id="qui-som" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)]">
              Equip
            </span>
            <h2 className="mt-3 text-4xl font-bold text-[var(--color-primary)] tracking-tight">
              Qui som
            </h2>
            <div className="mt-2 mx-auto h-1 w-16 bg-[var(--color-accent)]" />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 150}>
            <div
              className="flex gap-6 p-8 rounded-xl bg-[var(--color-bg-light)] border border-gray-100 hover:shadow-md transition-shadow h-full"
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {member.initials}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-primary)]">
                  {member.name}
                </h3>
                <span className="inline-block mt-1 text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wide">
                  {member.role}
                </span>
                <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {member.bio}
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
