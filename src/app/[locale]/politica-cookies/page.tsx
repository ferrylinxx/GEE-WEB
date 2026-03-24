import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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

const analyticsCookies = [
  { name: "_ga", provider: "Google Analytics", type: "Analítica", purpose: "Distingeix usuaris únics assignant un identificador generat aleatòriament. S'inclou a cada sol·licitud de pàgina i s'utilitza per calcular dades de visitants, sessions i campanyes.", duration: "2 anys" },
  { name: "_ga_SKH25BEE1T", provider: "Google Analytics 4", type: "Analítica", purpose: "Manté l'estat de la sessió per a Google Analytics 4. Registra una identificació única per generar dades estadístiques sobre com l'usuari utilitza el lloc web.", duration: "2 anys" },
  { name: "_gid", provider: "Google Analytics", type: "Analítica", purpose: "Registra una identificació única per generar dades estadístiques sobre com l'usuari utilitza el lloc web durant les últimes 24 hores.", duration: "24 hores" },
  { name: "_gat_gtag", provider: "Google Analytics", type: "Rendiment", purpose: "S'utilitza per limitar la velocitat de les sol·licituds al servidor de Google Analytics, evitant la sobrecàrrega en llocs amb molt trànsit.", duration: "1 minut" },
];


const functionalCookies = [
  { name: "_GRECAPTCHA", provider: "Google reCAPTCHA v3", type: "Seguretat", purpose: "Proporciona anàlisi de risc per distingir humans de bots automatitzats. Protegeix el formulari de contacte contra enviaments de spam.", duration: "6 mesos" },
  { name: "rc::a", provider: "Google reCAPTCHA", type: "Seguretat", purpose: "Distingeix entre humans i bots. Necessari per garantir la seguretat del lloc web.", duration: "Persistent" },
  { name: "rc::c", provider: "Google reCAPTCHA", type: "Seguretat", purpose: "Llegeix i filtra sol·licituds de bots per protegir el lloc web.", duration: "Sessió" },
  { name: "cookie_consent", provider: "geeconomics.com", type: "Necessària", purpose: "Emmagatzema la preferència de l'usuari sobre l'acceptació o el rebuig de galetes analítiques.", duration: "1 any" },
  { name: "NEXT_LOCALE", provider: "geeconomics.com", type: "Necessària", purpose: "Recorda la preferència d'idioma seleccionada per l'usuari (català, castellà o anglès).", duration: "Sessió" },
];


const browsers = [
  { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647", path: "Configuració → Privadesa i seguretat → Galetes i altres dades del lloc" },
  { name: "Mozilla Firefox", url: "https://support.mozilla.org/ca/kb/galetes-informacio-que-els-llocs-web-emmagatzemen", path: "Opcions → Privadesa i seguretat → Galetes i dades del lloc" },
  { name: "Safari", url: "https://support.apple.com/guide/safari/manage-cookies-sfri11471", path: "Preferències → Privadesa → Gestió de dades del lloc web" },
  { name: "Microsoft Edge", url: "https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09", path: "Configuració → Privadesa, cerca i serveis → Galetes" },
  { name: "Opera", url: "https://help.opera.com/en/latest/web-preferences/#cookies", path: "Configuració → Avançat → Privadesa i seguretat → Galetes" },
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

function CookieTable({ cookies }: { cookies: { name: string; provider: string; type: string; purpose: string; duration: string }[] }) {
  return (
    <div className="space-y-3">
      {cookies.map((cookie) => (
        <div key={cookie.name} className="bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <code className="text-xs font-mono bg-[var(--color-primary)]/8 text-[var(--color-primary)] px-2 py-0.5 rounded-md font-semibold">
              {cookie.name}
            </code>
            <span className="text-[10px] bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-0.5 rounded-full font-medium">
              {cookie.type}
            </span>
            <span className="text-[10px] text-[var(--color-text-muted)] sm:ml-auto">
              {cookie.provider} · {cookie.duration}
            </span>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{cookie.purpose}</p>
        </div>
      ))}
    </div>
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
              Última actualització: 20 de març de 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-10">

          {/* 01 */}
          <SectionBlock id="pc-que-son" num="01" title="Què són les galetes (cookies)?">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
              Les galetes (cookies) són petits arxius de text que els llocs web emmagatzemen al dispositiu de l&apos;usuari (ordinador, tauleta o telèfon mòbil) quan hi navega. Serveixen per recordar informació sobre la visita, com les preferències d&apos;idioma, les pàgines visitades o les dades de sessió, facilitant la navegació i fent-la més útil.
            </p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
              En aquest lloc web, <strong className="text-[var(--color-primary)]">geeconomics.com</strong>, propietat de <strong className="text-[var(--color-primary)]">GLLG, S.L.</strong> (NIF: B05462338), utilitzem galetes pròpies i de tercers amb les finalitats que es detallen a continuació.
            </p>
            <div className="bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/15 rounded-xl p-4">
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Aquesta política de galetes forma part de la nostra{" "}
                <Link href="/politica-privacitat" className="text-[var(--color-accent)] font-medium hover:underline">
                  Política de Privacitat
                </Link>{" "}
                i ha estat elaborada conforme al <strong className="text-[var(--color-primary)]">Reglament (UE) 2016/679 (RGPD)</strong>, la <strong className="text-[var(--color-primary)]">Llei Orgànica 3/2018 (LOPDGDD)</strong> i la <strong className="text-[var(--color-primary)]">Llei 34/2002 (LSSI-CE)</strong>.
              </p>
            </div>
          </SectionBlock>

          {/* 02 */}
          <SectionBlock id="pc-titular" num="02" title="Titular del lloc web">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] font-semibold">Identitat</span>
                <div className="text-sm text-[var(--color-text-dark)] mt-1 font-medium">GLLG, S.L.</div>
              </div>
              <div className="bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] font-semibold">NIF</span>
                <div className="text-sm text-[var(--color-text-dark)] mt-1 font-medium">B05462338</div>
              </div>
              <div className="bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] font-semibold">Adreça</span>
                <div className="text-sm text-[var(--color-text-dark)] mt-1 font-medium">Passatge de Forasté, 4, Bis, Local 7, 08022 Barcelona</div>
              </div>
              <div className="bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] font-semibold">Email</span>
                <div className="text-sm mt-1">
                  <a href="mailto:gllg@geeconomics.com" className="text-[var(--color-primary)] font-medium hover:text-[var(--color-accent)] transition-colors">
                    gllg@geeconomics.com
                  </a>
                </div>
              </div>
            </div>
          </SectionBlock>

          {/* 03 */}
          <SectionBlock id="pc-tipus" num="03" title="Tipus de galetes que utilitzem">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5">
              A continuació es detallen totes les galetes que utilitza aquest lloc web, classificades per la seva finalitat:
            </p>

            {/* Necessàries */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <h3 className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-wide">Galetes necessàries i de seguretat</h3>
              </div>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3 pl-4">
                Són imprescindibles per al funcionament del lloc web. Inclouen galetes de preferències d&apos;idioma, consentiment de galetes i protecció anti-spam (reCAPTCHA). No requereixen consentiment ja que són estrictament necessàries.
              </p>
              <CookieTable cookies={functionalCookies} />
            </div>

            {/* Analítiques */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
                <h3 className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-wide">Galetes analítiques</h3>
              </div>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3 pl-4">
                Utilitzem <strong className="text-[var(--color-primary)]">Google Analytics 4</strong> (ID: <code className="text-xs font-mono bg-[var(--color-primary)]/8 text-[var(--color-primary)] px-1.5 py-0.5 rounded">G-SKH25BEE1T</code>) per analitzar el comportament dels usuaris de forma anònima i agregada. Les dades recollides inclouen:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4 pl-4">
                {["Nombre de visitants", "Pàgines vistes", "Temps de permanència", "Profunditat de scroll", "Origen del trànsit", "Dispositiu i navegador", "Ubicació aproximada", "Esdeveniments d'interacció", "Rendiment de càrrega"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                    <div className="w-1 h-1 rounded-full bg-[var(--color-accent)] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <CookieTable cookies={analyticsCookies} />
            </div>

          </SectionBlock>

          {/* 04 - Consentiment */}
          <SectionBlock id="pc-consentiment" num="04" title="Consentiment i configuració de galetes">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
              Quan visiteu el nostre lloc web per primera vegada, se us mostra un <strong className="text-[var(--color-primary)]">bàner de consentiment</strong> que us permet acceptar o rebutjar les galetes no essencials (analítiques).
            </p>
            <div className="space-y-3 mb-4">
              <div className="flex gap-3 items-start bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold text-[var(--color-primary)]">Si accepteu</span>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed">S&apos;activen totes les galetes (necessàries i analítiques). El consentiment s&apos;emmagatzema durant 1 any.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold text-[var(--color-primary)]">Si rebutgeu</span>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed">Només s&apos;utilitzen galetes estrictament necessàries (idioma, consentiment, reCAPTCHA). No es carreguen galetes analítiques.</p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/15 rounded-xl p-4">
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Podeu canviar la vostra preferència en qualsevol moment eliminant les galetes del navegador. En la vostra propera visita, se us tornarà a mostrar el bàner de consentiment.
              </p>
            </div>
          </SectionBlock>

          {/* 05 */}
          <SectionBlock id="pc-transferencies" num="05" title="Transferències internacionals de dades">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
              Algunes galetes de tercers poden implicar transferències de dades fora de l&apos;Espai Econòmic Europeu (EEE):
            </p>
            <div className="space-y-3">
              <div className="bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-[var(--color-primary)]">Google LLC</span>
                  <span className="text-[10px] font-mono text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded-full">EUA</span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  Google Analytics i Google reCAPTCHA poden transferir dades als servidors de Google als Estats Units. Aquestes transferències estan emparades per les <strong>Clàusules Contractuals Tipus (CCT)</strong> aprovades per la Comissió Europea i el <strong>EU-US Data Privacy Framework</strong>.
                </p>
              </div>
            </div>
            <div className="mt-4 flex gap-3 items-start">
              <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <p className="text-sm text-[var(--color-text-muted)]">
                Consulteu la{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] font-medium hover:underline">
                  política de privacitat de Google →
                </a>
              </p>
            </div>
          </SectionBlock>

          {/* 06 */}
          <SectionBlock id="pc-gestionar" num="06" title="Com gestionar i desactivar les galetes">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
              A més del bàner de consentiment, podeu configurar el vostre navegador per acceptar, rebutjar o eliminar les galetes. A continuació trobareu les instruccions per als navegadors més habituals:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {browsers.map((browser) => (
                <a key={browser.name} href={browser.url} target="_blank" rel="noopener noreferrer" className="bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5 hover:border-[var(--color-accent)]/30 hover:shadow-sm transition-all group">
                  <span className="text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">{browser.name}</span>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">{browser.path}</p>
                </a>
              ))}
            </div>
            <div className="flex gap-3 items-start bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5 mb-4">
              <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <div>
                <p className="text-sm text-[var(--color-text-muted)] mb-2">
                  Eines addicionals per gestionar galetes de tercers:
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-[var(--color-text-muted)]">
                    •{" "}
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] font-medium hover:underline">
                      Complement de desactivació de Google Analytics
                    </a>
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    •{" "}
                    <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] font-medium hover:underline">
                      Your Online Choices (gestió de galetes de tercers)
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200/50 rounded-xl p-4 flex gap-3 items-start">
              <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <p className="text-sm text-[var(--color-text-muted)]">
                Si desactiveu les galetes analítiques, el lloc web continuarà funcionant correctament. Únicament deixarem de recopilar dades estadístiques.
              </p>
            </div>
          </SectionBlock>

          {/* 07 */}
          <SectionBlock id="pc-base-juridica" num="07" title="Base jurídica">
            <div className="space-y-3">
              <div className="flex gap-3 items-start bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/5 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold text-[var(--color-primary)]">Galetes necessàries</span>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed">Basades en l&apos;<strong>interès legítim</strong> (art. 6.1.f RGPD) i l&apos;exempció de l&apos;art. 22.2 LSSI-CE per a galetes estrictament necessàries.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/5 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold text-[var(--color-primary)]">Galetes analítiques</span>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed">Basades en el <strong>consentiment</strong> de l&apos;usuari (art. 6.1.a RGPD i art. 22.2 de la Llei 34/2002 LSSI-CE). L&apos;usuari pot atorgar o revocar el consentiment en qualsevol moment.</p>
                </div>
              </div>
            </div>
          </SectionBlock>

          {/* 08 */}
          <SectionBlock id="pc-drets" num="08" title="Drets de l'usuari">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
              En relació amb les dades personals recollides mitjançant galetes, l&apos;usuari té els següents drets:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {["Accés", "Rectificació", "Supressió", "Oposició", "Limitació", "Portabilitat", "Revocació"].map((dret) => (
                <div key={dret} className="bg-white/60 rounded-xl p-3 border border-[var(--color-primary)]/5 text-center">
                  <span className="text-xs font-semibold text-[var(--color-primary)]">{dret}</span>
                </div>
              ))}
            </div>
            <div className="bg-[var(--color-primary)]/5 rounded-xl p-4">
              <p className="text-sm text-[var(--color-text-muted)]">
                Per exercir els seus drets, contacti&apos;ns a{" "}
                <a href="mailto:gllg@geeconomics.com" className="text-[var(--color-accent)] font-medium hover:underline">
                  gllg@geeconomics.com
                </a>{" "}
                o consulteu la nostra{" "}
                <Link href="/politica-privacitat" className="text-[var(--color-accent)] font-semibold hover:underline">
                  Política de Privacitat →
                </Link>
              </p>
            </div>
          </SectionBlock>

          {/* 09 */}
          <SectionBlock id="pc-actualitzacio" num="09" title="Actualització d'aquesta política">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              GLLG es reserva el dret d&apos;actualitzar aquesta política de galetes en qualsevol moment per adaptar-la a canvis legislatius, jurisprudencials o tècnics. En cas de canvis significatius, s&apos;informarà els usuaris mitjançant el bàner de consentiment. Es recomana revisar-la periòdicament.
            </p>
          </SectionBlock>

          {/* 10 */}
          <SectionBlock id="pc-contacte" num="10" title="Contacte">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
              Per a qualsevol consulta relacionada amb les galetes, la privacitat o l&apos;exercici dels seus drets:
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
