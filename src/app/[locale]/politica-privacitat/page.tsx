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
    title: "Política de Privacitat",
    description:
      "Política de privacitat i protecció de dades personals de Gabinet Estudis Econòmics (GLLG) conforme al RGPD i la LOPDGDD.",
    alternates: {
      canonical: `https://geeconomics.com${locale === "ca" ? "" : `/${locale}`}/politica-privacitat`,
      languages: {
        ca: "https://geeconomics.com/politica-privacitat",
        es: "https://geeconomics.com/es/politica-privacitat",
        en: "https://geeconomics.com/en/politica-privacitat",
        "x-default": "https://geeconomics.com/politica-privacitat",
      },
    },
    openGraph: {
      title: "Política de Privacitat | Gabinet Estudis Econòmics",
      description: "Protecció de dades personals conforme al RGPD i la LOPDGDD.",
      url: `https://geeconomics.com${locale === "ca" ? "" : `/${locale}`}/politica-privacitat`,
    },
  };
}

function InfoCard({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
      <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] font-semibold">{label}</span>
      <div className="text-sm text-[var(--color-text-dark)] mt-1 font-medium">{value}</div>
    </div>
  );
}

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

function BulletItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
      <div>
        <span className="text-sm font-semibold text-[var(--color-primary)]">{title}</span>
        <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

export default async function PoliticaPrivacitatPage({ params }: Props) {
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium">
                RGPD · LOPDGDD
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Política de Privacitat
            </h1>
            <p className="text-white/50 text-sm">
              Darrera actualització: 20 de març de 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-10">

          {/* 01 - Responsable */}
          <SectionBlock id="pp-responsable" num="01" title="Responsable del tractament">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoCard label="Identitat" value="GLLG, S.L." />
              <InfoCard label="NIF" value="B05462338" />
              <InfoCard label="Adreça" value="Passatge de Forasté, 4, Bis, Local 7, 08022 Barcelona" />
              <InfoCard label="Telèfon" value="932 119 744" />
              <InfoCard label="Email" value={
                <a href="mailto:gllg@geeconomics.com" className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">
                  gllg@geeconomics.com
                </a>
              } />
              <InfoCard label="Web" value={
                <a href="https://geeconomics.com" className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">
                  geeconomics.com
                </a>
              } />
            </div>
          </SectionBlock>

          {/* 02 - Finalitats */}
          <SectionBlock id="pp-finalitats" num="02" title="Finalitats del tractament">
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
              A Gabinet Estudis Econòmics (GLLG) tractem les dades personals amb les següents finalitats:
            </p>
            <div className="space-y-3">
              <BulletItem title="Formulari de contacte" desc="Gestionar les sol·licituds d'informació o contacte rebudes a través del formulari web. Les dades proporcionades s'utilitzen exclusivament per respondre la consulta." />
              <BulletItem title="Serveis professionals" desc="Prestar els serveis professionals de consultoria econòmica sol·licitats, incloent l'elaboració d'estudis, informes i assessorament." />
              <BulletItem title="Comunicacions" desc="Enviar comunicacions comercials sobre els nostres serveis, únicament amb consentiment explícit previ de l'usuari. Pot revocar-se en qualsevol moment." />
              <BulletItem title="Obligacions legals" desc="Complir amb les obligacions legals, fiscals i mercantils aplicables segons la normativa vigent." />
              <BulletItem title="Analítica web" desc="Analitzar la navegació al lloc web mitjançant Google Analytics 4 (GA4) de forma anònima i agregada per millorar l'experiència d'usuari i els nostres serveis." />
              <BulletItem title="Seguretat" desc="Protegir el lloc web contra spam i abusos mitjançant Google reCAPTCHA v3, que analitza el comportament de navegació per distingir humans de bots." />
            </div>
          </SectionBlock>

          {/* 03 - Base jurídica */}
          <SectionBlock id="pp-base-juridica" num="03" title="Base jurídica del tractament">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ["Consentiment", "Art. 6.1.a RGPD", "Consentiment atorgat mitjançant el formulari de contacte."],
                ["Contracte", "Art. 6.1.b RGPD", "Tractament necessari per a l'execució del contracte de serveis."],
                ["Interès legítim", "Art. 6.1.f RGPD", "Anàlisi estadística de la navegació web."],
                ["Obligació legal", "Art. 6.1.c RGPD", "Compliment d'obligacions fiscals i mercantils."],
              ].map(([title, article, desc]) => (
                <div key={title} className="bg-white/60 rounded-xl p-5 border border-[var(--color-primary)]/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[var(--color-primary)]">{title}</span>
                    <span className="text-[10px] font-mono text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded-full">{article}</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </SectionBlock>

          {/* 04 - Dades */}
          <SectionBlock id="pp-dades" num="04" title="Dades que recollim">
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
              A través del formulari de contacte recollim les següents dades personals:
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Nom i cognoms", "Correu electrònic", "Telèfon", "Empresa", "Missatge"].map((item) => (
                <span key={item} className="text-xs bg-[var(--color-primary)]/5 text-[var(--color-primary)] px-3 py-1.5 rounded-full font-medium">
                  {item}
                </span>
              ))}
            </div>
            <div className="space-y-3 mb-5">
              <div className="bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                <span className="text-sm font-semibold text-[var(--color-primary)]">Dades de navegació (anònimes)</span>
                <p className="text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed">
                  Mitjançant Google Analytics 4, es recullen dades anònimes com: pàgines visitades, temps de permanència, profunditat de scroll, dispositiu i navegador, ubicació aproximada (país/ciutat) i origen del trànsit. Aquestes dades <strong>no permeten identificar</strong> l&apos;usuari individualment.
                </p>
              </div>
              <div className="bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                <span className="text-sm font-semibold text-[var(--color-primary)]">Dades de seguretat</span>
                <p className="text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed">
                  Google reCAPTCHA v3 recopila dades de comportament de navegació (moviments del ratolí, interaccions) per avaluar el risc de spam. Aquestes dades es processen per Google i no s&apos;emmagatzemen al nostre servidor.
                </p>
              </div>
            </div>
            <div className="bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/15 rounded-xl p-4">
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Per a informació detallada sobre les galetes i tecnologies de seguiment, consulteu la nostra{" "}
                <Link href="/politica-cookies" className="text-[var(--color-accent)] font-medium hover:underline">
                  Política de Cookies →
                </Link>
              </p>
            </div>
          </SectionBlock>

          {/* 05 - Conservació */}
          <SectionBlock id="pp-conservacio" num="05" title="Conservació de les dades">
            <div className="space-y-3">
              {[
                ["Sol·licituds de contacte", "Durant el temps necessari per atendre la consulta i els terminis legals de prescripció."],
                ["Relació contractual", "Durant la vigència del contracte i fins a 5 anys segons la legislació mercantil."],
                ["Comunicacions comercials", "Fins que l'interessat revoqui el consentiment."],
                ["Dades de navegació", "Google Analytics conserva les dades durant 14 mesos."],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 items-start bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/5 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[var(--color-primary)]">{title}</span>
                    <p className="text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionBlock>

          {/* 06 - Destinataris */}
          <SectionBlock id="pp-destinataris" num="06" title="Destinataris i transferències internacionals">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
              Les dades personals no se cediran a tercers, excepte en els següents casos:
            </p>
            <div className="space-y-3 mb-5">
              <BulletItem title="Obligació legal" desc="Quan existeixi una obligació legal (Agència Tributària, jutjats, forces de seguretat, etc.)." />
              <BulletItem title="Google LLC (EUA)" desc="Google Analytics 4: processament de dades anònimes de navegació. Google reCAPTCHA v3: anàlisi de risc anti-spam. Les dades es poden transferir als servidors de Google als EUA." />
            </div>
            <div className="bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/15 rounded-xl p-4">
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-primary)]">Transferències internacionals:</strong> les transferències de dades a Google LLC (EUA) estan emparades per les <strong>Clàusules Contractuals Tipus (CCT)</strong> aprovades per la Comissió Europea i el <strong>EU-US Data Privacy Framework</strong>. Consulteu la{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] font-medium hover:underline">
                  política de privacitat de Google →
                </a>
              </p>
            </div>
          </SectionBlock>

          {/* 07 - Drets */}
          <SectionBlock id="pp-drets" num="07" title="Drets de l'interessat">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
              D&apos;acord amb el RGPD i la LOPDGDD, vostè té dret a:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {[
                ["Accés", "Conèixer quines dades tractem"],
                ["Rectificació", "Corregir dades inexactes"],
                ["Supressió", "Eliminar les seves dades"],
                ["Oposició", "Oposar-se al tractament"],
                ["Limitació", "Limitar el tractament"],
                ["Portabilitat", "Rebre dades en format estàndard"],
                ["Revocació", "Retirar el consentiment"],
              ].map(([title, desc]) => (
                <div key={title} className="bg-white/60 rounded-xl p-3 border border-[var(--color-primary)]/5 text-center">
                  <span className="text-xs font-semibold text-[var(--color-primary)] block">{title}</span>
                  <span className="text-[10px] text-[var(--color-text-muted)] mt-1 block">{desc}</span>
                </div>
              ))}
            </div>
            <div className="bg-[var(--color-primary)]/5 rounded-xl p-4 space-y-2">
              <p className="text-sm text-[var(--color-text-muted)]">
                Per exercir els seus drets, contacti&apos;ns a{" "}
                <a href="mailto:gllg@geeconomics.com" className="text-[var(--color-accent)] font-medium hover:underline">
                  gllg@geeconomics.com
                </a>{" "}
                adjuntant una còpia del seu document d&apos;identitat.
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                Pot presentar una reclamació davant l&apos;
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] font-medium hover:underline">
                  Agència Espanyola de Protecció de Dades
                </a>.
              </p>
            </div>
          </SectionBlock>

          {/* 08 - Seguretat */}
          <SectionBlock id="pp-seguretat" num="08" title="Mesures de seguretat">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ["SSL/TLS", "Connexió xifrada mitjançant certificat HTTPS"],
                ["SMTP segur", "Enviament de correus amb xifrat TLS"],
                ["Accés restringit", "Control d'accés restringit a les dades personals"],
                ["Còpies de seguretat", "Còpies de seguretat periòdiques"],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-3 items-start bg-white/60 rounded-xl p-4 border border-[var(--color-primary)]/5">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <div>
                    <span className="text-sm font-semibold text-[var(--color-primary)]">{title}</span>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionBlock>

          {/* 09 - Cookies */}
          <SectionBlock id="pp-cookies" num="09" title="Galetes (Cookies)">
            <div className="bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/15 rounded-xl p-5">
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Aquest lloc web utilitza galetes pròpies i de tercers per a finalitats tècniques i analítiques. Per a informació detallada sobre cada galeta, la seva finalitat i durada, consulteu la nostra{" "}
                <Link href="/politica-cookies" className="text-[var(--color-accent)] font-semibold hover:underline">
                  Política de Cookies →
                </Link>
              </p>
            </div>
          </SectionBlock>

          {/* 10 - Menors */}
          <SectionBlock id="pp-menors" num="10" title="Privacitat dels menors">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Els nostres serveis estan dirigits a professionals i empreses. No recollim conscientment dades personals de menors de 14 anys. Si teniu coneixement que un menor ens ha proporcionat dades personals sense el consentiment dels seus pares o tutors legals, contacteu-nos a{" "}
              <a href="mailto:gllg@geeconomics.com" className="text-[var(--color-accent)] font-medium hover:underline">
                gllg@geeconomics.com
              </a>{" "}
              i procedirem a eliminar-les immediatament.
            </p>
          </SectionBlock>

          {/* 11 - Modificacions */}
          <SectionBlock id="pp-modificacions" num="11" title="Modificacions de la política">
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              GLLG es reserva el dret de modificar aquesta política de privacitat per adaptar-la a novetats legislatives, jurisprudencials o tècniques. En cas de canvis significatius, s&apos;informarà els usuaris a través del lloc web. Es recomana revisar periòdicament aquesta pàgina per estar al corrent de qualsevol actualització.
            </p>
          </SectionBlock>

        </div>
      </main>
      <Footer />
    </>
  );
}
