import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return {
    title: "Política de Cookies",
    description:
      "Política de cookies del lloc web de Gabinet Estudis Econòmics (GLLG). Informació sobre les galetes que utilitzem i com gestionar-les.",
    alternates: {
      canonical: `https://geeconomics.com${locale === "ca" ? "" : `/${locale}`}/politica-cookies`,
      languages: {
        ca: "https://geeconomics.com/politica-cookies",
        es: "https://geeconomics.com/es/politica-cookies",
        en: "https://geeconomics.com/en/politica-cookies",
        "x-default": "https://geeconomics.com/politica-cookies",
      },
    },
    openGraph: {
      title: "Política de Cookies | Gabinet Estudis Econòmics",
      description: "Informació sobre les galetes que utilitzem i com gestionar-les.",
      url: `https://geeconomics.com${locale === "ca" ? "" : `/${locale}`}/politica-cookies`,
    },
  };
}

const cookieData = [
  { name: "_ga", provider: "Google", type: "Analítica", purpose: "Distingeix usuaris únics assignant un número generat aleatòriament.", duration: "2 anys" },
  { name: "_ga_*", provider: "Google", type: "Analítica", purpose: "Manté l'estat de la sessió per a Google Analytics 4.", duration: "2 anys" },
  { name: "_gid", provider: "Google", type: "Analítica", purpose: "Distingeix usuaris i emmagatzema informació de cada pàgina visitada.", duration: "24 hores" },
  { name: "_gat", provider: "Google", type: "Rendiment", purpose: "Limita la velocitat de sol·licituds a Google Analytics.", duration: "1 minut" },
];

const browsers = [
  { name: "Google Chrome", path: "Configuració → Privadesa i seguretat → Galetes" },
  { name: "Mozilla Firefox", path: "Opcions → Privadesa i seguretat → Galetes" },
  { name: "Safari", path: "Preferències → Privadesa → Gestió de dades" },
  { name: "Microsoft Edge", path: "Configuració → Privadesa, cerca i serveis → Galetes" },
];

function SectionBlock({ id, num, title, children }: { id: string; num: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
        <span className="text-xs font-mono text-[var(--color-accent)]/60 bg-[var(--color-accent)]/8 w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center font-semibold shrink-0">
          {num}
        </span>
        <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-primary)]">{title}</h2>
      </div>
      <div className="pl-0 sm:pl-[48px]">{children}</div>
    </section>
  );
}

export default async function PoliticaCookiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-[var(--color-bg-light)] min-h-[calc(100vh-5rem)]">
        {/* Hero header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary-dark)] py-16 mb-12">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-[var(--color-accent)]/5 blur-3xl" />
            <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-white/3 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium">
                LSSI-CE · RGPD
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Política de Cookies
            </h1>
            <p className="text-white/50 text-sm">
              Última actualització: 16 de març de 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-10">

          {/* 01 */}
          <SectionBlock id="pc-que-son" num="01" title="Què són les galetes (cookies)?">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Les galetes són petits arxius de text que els llocs web emmagatzemen al dispositiu de l&apos;usuari (ordinador, tauleta o telèfon mòbil) quan hi navega. Serveixen per recordar informació sobre la visita, com les preferències d&apos;idioma, les pàgines visitades o les dades de sessió, facilitant la navegació i fent-la més útil.
            </p>
          </SectionBlock>

          {/* 02 */}
          <SectionBlock id="pc-utilitzem" num="02" title="Galetes que utilitzem">
            <div className="space-y-3">
              {cookieData.map((cookie) => (
                <div key={cookie.name} className="bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <code className="text-xs font-mono bg-[var(--color-primary)]/8 text-[var(--color-primary)] px-2 py-0.5 rounded-md font-semibold">
                      {cookie.name}
                    </code>
                    <span className="text-[10px] bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-0.5 rounded-full font-medium">
                      {cookie.type}
                    </span>
                    <span className="text-[10px] text-[var(--color-text-muted)] ml-auto">
                      {cookie.provider} · {cookie.duration}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{cookie.purpose}</p>
                </div>
              ))}
            </div>
          </SectionBlock>

          {/* 03 */}
          <SectionBlock id="pc-tipus" num="03" title="Tipus de galetes segons la seva finalitat">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-gray-400" />
                  <h3 className="text-sm font-semibold text-[var(--color-primary)]">Galetes tècniques (necessàries)</h3>
                </div>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-4">
                  Actualment aquest lloc web no utilitza galetes tècniques pròpies. La navegació funciona correctament sense galetes per a funcionalitats bàsiques.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                  <h3 className="text-sm font-semibold text-[var(--color-primary)]">Galetes analítiques (de tercers)</h3>
                </div>
                <div className="pl-4">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
                    Utilitzem <strong>Google Analytics 4</strong> per analitzar el comportament dels usuaris:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Visitants i pàgines vistes", "Temps de permanència", "Profunditat de scroll", "Origen del trànsit", "Dispositiu i navegador", "Ubicació aproximada"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                        <div className="w-1 h-1 rounded-full bg-[var(--color-accent)] shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 bg-[var(--color-primary)]/5 rounded-lg px-3 py-2 inline-flex items-center gap-2">
                    <span className="text-[10px] text-[var(--color-text-muted)]">ID de mesura:</span>
                    <code className="text-xs font-mono text-[var(--color-primary)] font-semibold">G-SKH25BEE1T</code>
                  </div>
                </div>
              </div>
            </div>
          </SectionBlock>

          {/* 04 */}
          <SectionBlock id="pc-transferencies" num="04" title="Transferències internacionals de dades">
            <div className="bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/15 rounded-xl p-5">
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Google Analytics pot transferir dades als servidors de Google als Estats Units. Aquestes transferències estan emparades per les{" "}
                <strong className="text-[var(--color-primary)]">Clàusules Contractuals Tipus (CCT)</strong> aprovades per la Comissió Europea. Consulteu la{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] font-medium hover:underline">
                  política de privacitat de Google →
                </a>
              </p>
            </div>
          </SectionBlock>

          {/* 05 */}
          <SectionBlock id="pc-gestionar" num="05" title="Com gestionar i desactivar les galetes">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
              Podeu configurar el vostre navegador per acceptar, rebutjar o eliminar les galetes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {browsers.map((browser) => (
                <div key={browser.name} className="bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                  <span className="text-sm font-semibold text-[var(--color-primary)]">{browser.name}</span>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">{browser.path}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3 items-start bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
              <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <p className="text-sm text-[var(--color-text-muted)]">
                També podeu instal·lar el{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] font-medium hover:underline">
                  complement de desactivació de Google Analytics
                </a>{" "}
                al vostre navegador.
              </p>
            </div>
            <div className="mt-4 bg-amber-50 border border-amber-200/50 rounded-xl p-4 flex gap-3 items-start">
              <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <p className="text-sm text-[var(--color-text-muted)]">
                Si desactiveu les galetes, el lloc web continuarà funcionant correctament.
              </p>
            </div>
          </SectionBlock>

          {/* 06 */}
          <SectionBlock id="pc-base-juridica" num="06" title="Base jurídica">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              La base legal per a l&apos;ús de galetes analítiques és el <strong className="text-[var(--color-primary)]">consentiment</strong> de l&apos;usuari (art. 6.1.a RGPD i art. 22.2 de la Llei 34/2002 LSSI-CE).
            </p>
          </SectionBlock>

          {/* 07 */}
          <SectionBlock id="pc-actualitzacio" num="07" title="Actualització d'aquesta política">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              GLLG es reserva el dret d&apos;actualitzar aquesta política en qualsevol moment per adaptar-la a canvis legislatius o tècnics. Es recomana revisar-la periòdicament.
            </p>
          </SectionBlock>

          {/* 08 */}
          <SectionBlock id="pc-contacte" num="08" title="Contacte">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
              Per a qualsevol consulta relacionada amb les galetes o la privacitat:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              <div className="bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] font-semibold">Email</span>
                <p className="text-sm mt-1">
                  <a href="mailto:gllg@geeconomics.com" className="text-[var(--color-primary)] font-medium hover:text-[var(--color-accent)] transition-colors">
                    gllg@geeconomics.com
                  </a>
                </p>
              </div>
              <div className="bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] font-semibold">Telèfon</span>
                <p className="text-sm mt-1 text-[var(--color-text-dark)] font-medium">932 119 744</p>
              </div>
              <div className="bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] font-semibold">Adreça</span>
                <p className="text-xs mt-1 text-[var(--color-text-dark)] font-medium leading-relaxed">Passatge de Forasté, 4, Bis, Local 7, 08022 Barcelona</p>
              </div>
            </div>
            <div className="bg-[var(--color-primary)]/5 rounded-xl p-4">
              <p className="text-sm text-[var(--color-text-muted)]">
                Per a més informació sobre el tractament de dades, consulteu la nostra{" "}
                <Link href="/politica-privacitat" className="text-[var(--color-accent)] font-semibold hover:underline">
                  Política de Privacitat →
                </Link>
              </p>
            </div>
          </SectionBlock>

        </div>
      </main>
      <Footer />
    </>
  );
}
