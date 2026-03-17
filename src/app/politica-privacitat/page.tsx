import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Política de Privacitat",
  description:
    "Política de privacitat i protecció de dades personals de Gabinet Estudis Econòmics (GLLG) conforme al RGPD i la LOPDGDD.",
  alternates: { canonical: "https://geeconomics.com/politica-privacitat" },
  openGraph: {
    title: "Política de Privacitat | Gabinet Estudis Econòmics",
    description:
      "Protecció de dades personals conforme al RGPD i la LOPDGDD.",
    url: "https://geeconomics.com/politica-privacitat",
  },
};

export default function PoliticaPrivacitatPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-[var(--color-bg-light)] min-h-[calc(100vh-5rem)]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-2">
            Política de Privacitat
          </h1>
          <p className="text-sm text-[var(--color-text-muted)] mb-10">
            Última actualització: 16 de març de 2026
          </p>

          <div className="prose prose-sm max-w-none text-[var(--color-text-muted)] space-y-8">
            {/* 1. Responsable */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                1. Responsable del tractament
              </h2>
              <ul className="space-y-1 list-none pl-0">
                <li><strong>Identitat:</strong> GLLG, S.L.</li>
                <li><strong>NIF:</strong> B05462338</li>
                <li><strong>Adreça postal:</strong> Passatge de Forasté, 4, Bis, Local 7, 08022 Barcelona</li>
                <li><strong>Telèfon:</strong> 932 119 744</li>
                <li><strong>Correu electrònic:</strong>{" "}
                  <a href="mailto:gllg@geeconomics.com" className="text-[var(--color-accent)] hover:underline">
                    gllg@geeconomics.com
                  </a>
                </li>
                <li><strong>Lloc web:</strong>{" "}
                  <a href="https://geeconomics.com" className="text-[var(--color-accent)] hover:underline">
                    geeconomics.com
                  </a>
                </li>
              </ul>
            </section>

            {/* 2. Finalitats */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                2. Finalitats del tractament
              </h2>
              <p>
                A Gabinet Estudis Econòmics (GLLG) tractem les dades personals que ens
                facilita amb les següents finalitats:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Gestionar les sol·licituds d&apos;informació o contacte rebudes a través del formulari web.</li>
                <li>Prestar els serveis professionals de consultoria econòmica sol·licitats.</li>
                <li>Enviar comunicacions comercials sobre els nostres serveis, únicament si ha atorgat el seu consentiment explícit.</li>
                <li>Complir amb les obligacions legals i fiscals aplicables.</li>
                <li>Analitzar la navegació al lloc web mitjançant Google Analytics per millorar la nostra oferta de serveis.</li>
              </ul>
            </section>

            {/* 3. Base jurídica */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                3. Base jurídica del tractament
              </h2>
              <p>Les bases legals per al tractament de les seves dades són:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Consentiment:</strong> l&apos;interessat ha atorgat el seu consentiment per al tractament de les dades personals mitjançant el formulari de contacte (art. 6.1.a RGPD).</li>
                <li><strong>Execució d&apos;un contracte:</strong> el tractament és necessari per a l&apos;execució del contracte de serveis professionals (art. 6.1.b RGPD).</li>
                <li><strong>Interès legítim:</strong> anàlisi estadística de la navegació web per millorar els nostres serveis (art. 6.1.f RGPD).</li>
                <li><strong>Obligació legal:</strong> compliment d&apos;obligacions fiscals i mercantils (art. 6.1.c RGPD).</li>
              </ul>
            </section>

            {/* 4. Dades recollides */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                4. Dades que recollim
              </h2>
              <p>A través del formulari de contacte recollim:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Nom i cognoms</li>
                <li>Adreça de correu electrònic</li>
                <li>Número de telèfon</li>
                <li>Nom de l&apos;empresa</li>
                <li>Contingut del missatge</li>
              </ul>
              <p className="mt-3">
                Mitjançant Google Analytics, es recullen dades anònimes de navegació
                (pàgines visitades, temps de permanència, dispositiu, ubicació
                aproximada). Consulteu la nostra{" "}
                <Link href="/politica-cookies" className="text-[var(--color-accent)] hover:underline">
                  Política de Cookies
                </Link>{" "}
                per a més informació.
              </p>
            </section>

            {/* 5. Conservació */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                5. Conservació de les dades
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Sol·licituds de contacte:</strong> les dades es conservaran durant el temps necessari per atendre la consulta i, posteriorment, durant els terminis legals de prescripció aplicables.</li>
                <li><strong>Relació contractual:</strong> les dades es conservaran durant la vigència del contracte i els terminis legals posteriors (fins a 5 anys segons la legislació mercantil).</li>
                <li><strong>Comunicacions comercials:</strong> fins que l&apos;interessat revoqui el consentiment.</li>
                <li><strong>Dades de navegació:</strong> Google Analytics conserva les dades durant 14 mesos.</li>
              </ul>
            </section>

            {/* 6. Destinataris */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                6. Destinataris de les dades
              </h2>
              <p>Les dades personals no se cediran a tercers, excepte:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Quan existeixi una obligació legal (Agència Tributària, jutjats, etc.).</li>
                <li><strong>Google LLC</strong> (Google Analytics): processament de dades anònimes de navegació. Google actua com a encarregat del tractament i les dades es poden transferir als EUA sota les clàusules contractuals tipus aprovades per la Comissió Europea.</li>
                <li><strong>IONOS</strong> (proveïdor de correu electrònic): els missatges enviats a través del formulari de contacte es transmeten via SMTP a través dels servidors d&apos;IONOS.</li>
              </ul>
            </section>

            {/* 7. Drets */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                7. Drets de l&apos;interessat
              </h2>
              <p>D&apos;acord amb el RGPD i la LOPDGDD, vostè té dret a:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Accés:</strong> conèixer quines dades personals tractem sobre vostè.</li>
                <li><strong>Rectificació:</strong> sol·licitar la correcció de dades inexactes o incompletes.</li>
                <li><strong>Supressió:</strong> sol·licitar l&apos;eliminació de les seves dades quan ja no siguin necessàries.</li>
                <li><strong>Oposició:</strong> oposar-se al tractament de les dades en determinades circumstàncies.</li>
                <li><strong>Limitació:</strong> sol·licitar la limitació del tractament en els supòsits previstos legalment.</li>
                <li><strong>Portabilitat:</strong> rebre les seves dades en un format estructurat d&apos;ús comú.</li>
                <li><strong>Revocació del consentiment:</strong> retirar el consentiment atorgat en qualsevol moment, sense que afecti la licitud del tractament previ.</li>
              </ul>
              <p className="mt-3">
                Per exercir els seus drets, pot contactar-nos a{" "}
                <a href="mailto:gllg@geeconomics.com" className="text-[var(--color-accent)] hover:underline">
                  gllg@geeconomics.com
                </a>{" "}
                o a l&apos;adreça postal indicada anteriorment, adjuntant una còpia del
                seu document d&apos;identitat.
              </p>
              <p className="mt-2">
                Si considera que el tractament de les seves dades no s&apos;ajusta a la
                normativa vigent, pot presentar una reclamació davant l&apos;
                <strong>Agència Espanyola de Protecció de Dades</strong> (
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
                  www.aepd.es
                </a>
                ).
              </p>
            </section>

            {/* 8. Mesures de seguretat */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                8. Mesures de seguretat
              </h2>
              <p>
                Hem adoptat les mesures tècniques i organitzatives adequades per
                garantir la seguretat de les seves dades personals, incloent-hi:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Connexió xifrada mitjançant certificat SSL/TLS (HTTPS).</li>
                <li>Enviament de correus electrònics mitjançant SMTP amb xifrat TLS.</li>
                <li>Control d&apos;accés restringit a les dades personals.</li>
                <li>Còpies de seguretat periòdiques.</li>
              </ul>
            </section>

            {/* 9. Cookies */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                9. Galetes (Cookies)
              </h2>
              <p>
                Aquest lloc web utilitza galetes pròpies i de tercers. Per a informació
                detallada sobre les galetes que utilitzem, la seva finalitat i com
                gestionar-les, consulteu la nostra{" "}
                <Link href="/politica-cookies" className="text-[var(--color-accent)] hover:underline font-medium">
                  Política de Cookies
                </Link>
                .
              </p>
            </section>

            {/* 10. Modificacions */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                10. Modificacions de la política
              </h2>
              <p>
                GLLG es reserva el dret de modificar aquesta política de privacitat per
                adaptar-la a novetats legislatives o jurisprudencials. En cas de canvis
                significatius, s&apos;informarà els usuaris a través del lloc web.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
