import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies del lloc web de Gabinet Estudis Econòmics (GLLG). Informació sobre les galetes que utilitzem i com gestionar-les.",
  alternates: { canonical: "https://geeconomics.com/politica-cookies" },
  openGraph: {
    title: "Política de Cookies | Gabinet Estudis Econòmics",
    description:
      "Informació sobre les galetes que utilitzem i com gestionar-les.",
    url: "https://geeconomics.com/politica-cookies",
  },
};

export default function PoliticaCookiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-[var(--color-bg-light)] min-h-[calc(100vh-5rem)]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-2">
            Política de Cookies
          </h1>
          <p className="text-sm text-[var(--color-text-muted)] mb-10">
            Última actualització: 16 de març de 2026
          </p>

          <div className="prose prose-sm max-w-none text-[var(--color-text-muted)] space-y-8">
            {/* 1. Què són les cookies */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                1. Què són les galetes (cookies)?
              </h2>
              <p>
                Les galetes són petits arxius de text que els llocs web emmagatzemen al
                dispositiu de l&apos;usuari (ordinador, tauleta o telèfon mòbil) quan
                hi navega. Serveixen per recordar informació sobre la visita, com les
                preferències d&apos;idioma, les pàgines visitades o les dades de sessió,
                facilitant la navegació i fent-la més útil.
              </p>
            </section>

            {/* 2. Galetes que utilitzem */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                2. Galetes que utilitzem
              </h2>

              {/* Tabla de cookies */}
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-[var(--color-primary)] text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium">Nom</th>
                      <th className="px-4 py-3 text-left font-medium">Proveïdor</th>
                      <th className="px-4 py-3 text-left font-medium">Tipus</th>
                      <th className="px-4 py-3 text-left font-medium">Finalitat</th>
                      <th className="px-4 py-3 text-left font-medium">Durada</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-mono text-xs">_ga</td>
                      <td className="px-4 py-3">Google</td>
                      <td className="px-4 py-3">Analítica</td>
                      <td className="px-4 py-3">Distingeix usuaris únics assignant un número generat aleatòriament.</td>
                      <td className="px-4 py-3">2 anys</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-mono text-xs">_ga_*</td>
                      <td className="px-4 py-3">Google</td>
                      <td className="px-4 py-3">Analítica</td>
                      <td className="px-4 py-3">Manté l&apos;estat de la sessió per a Google Analytics 4.</td>
                      <td className="px-4 py-3">2 anys</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-mono text-xs">_gid</td>
                      <td className="px-4 py-3">Google</td>
                      <td className="px-4 py-3">Analítica</td>
                      <td className="px-4 py-3">Distingeix usuaris i emmagatzema informació de cada pàgina visitada.</td>
                      <td className="px-4 py-3">24 hores</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-mono text-xs">_gat</td>
                      <td className="px-4 py-3">Google</td>
                      <td className="px-4 py-3">Rendiment</td>
                      <td className="px-4 py-3">Limita la velocitat de sol·licituds a Google Analytics.</td>
                      <td className="px-4 py-3">1 minut</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3. Tipus de galetes */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                3. Tipus de galetes segons la seva finalitat
              </h2>

              <h3 className="text-lg font-medium text-[var(--color-primary)] mt-4 mb-2">
                a) Galetes tècniques (necessàries)
              </h3>
              <p>
                Actualment aquest lloc web no utilitza galetes tècniques pròpies. La
                navegació funciona correctament sense emmagatzemar galetes al dispositiu
                de l&apos;usuari per a funcionalitats bàsiques.
              </p>

              <h3 className="text-lg font-medium text-[var(--color-primary)] mt-4 mb-2">
                b) Galetes analítiques (de tercers)
              </h3>
              <p>
                Utilitzem <strong>Google Analytics 4</strong> (propietat de Google LLC)
                per analitzar el comportament dels usuaris al lloc web. Aquestes galetes
                ens permeten conèixer:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>El nombre de visitants i pàgines vistes.</li>
                <li>El temps de permanència a cada pàgina.</li>
                <li>La profunditat de desplaçament (scroll).</li>
                <li>L&apos;origen del trànsit (cercadors, accés directe, etc.).</li>
                <li>El dispositiu i navegador utilitzat.</li>
                <li>La ubicació geogràfica aproximada.</li>
              </ul>
              <p className="mt-2">
                Les dades recollides són anònimes i agregades. L&apos;identificador de
                mesura és <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">G-SKH25BEE1T</code>.
              </p>
            </section>

            {/* 4. Transferències internacionals */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                4. Transferències internacionals de dades
              </h2>
              <p>
                Google Analytics pot transferir dades als servidors de Google als Estats
                Units. Aquestes transferències estan emparades per les{" "}
                <strong>Clàusules Contractuals Tipus</strong> (CCT) aprovades per la
                Comissió Europea, que garanteixen un nivell adequat de protecció de les
                dades personals. Podeu consultar la política de privacitat de Google a{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  policies.google.com/privacy
                </a>
                .
              </p>
            </section>

            {/* 5. Com gestionar les galetes */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                5. Com gestionar i desactivar les galetes
              </h2>
              <p>
                Podeu configurar el vostre navegador per acceptar, rebutjar o eliminar
                les galetes. A continuació, us indiquem com fer-ho als navegadors més
                habituals:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  <strong>Google Chrome:</strong> Configuració &rarr; Privadesa i seguretat &rarr; Galetes i altres dades dels llocs
                </li>
                <li>
                  <strong>Mozilla Firefox:</strong> Opcions &rarr; Privadesa i seguretat &rarr; Galetes i dades del lloc
                </li>
                <li>
                  <strong>Safari:</strong> Preferències &rarr; Privadesa &rarr; Gestió de dades del lloc web
                </li>
                <li>
                  <strong>Microsoft Edge:</strong> Configuració &rarr; Privadesa, cerca i serveis &rarr; Galetes
                </li>
              </ul>
              <p className="mt-3">
                També podeu optar per no participar en el seguiment de Google Analytics
                instal·lant el{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  complement de desactivació de Google Analytics
                </a>{" "}
                al vostre navegador.
              </p>
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm">
                <strong>Nota:</strong> Si desactiveu les galetes, el lloc web continuarà
                funcionant correctament, ja que no utilitzem galetes tècniques necessàries
                per a la navegació bàsica.
              </div>
            </section>

            {/* 6. Base jurídica */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                6. Base jurídica
              </h2>
              <p>
                La base legal per a l&apos;ús de galetes analítiques és el{" "}
                <strong>consentiment</strong> de l&apos;usuari (art. 6.1.a RGPD i
                art. 22.2 de la Llei 34/2002 de Serveis de la Societat de la
                Informació i de Comerç Electrònic - LSSI-CE).
              </p>
            </section>

            {/* 7. Actualització */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                7. Actualització d&apos;aquesta política
              </h2>
              <p>
                GLLG es reserva el dret d&apos;actualitzar aquesta política de cookies
                en qualsevol moment per adaptar-la a canvis legislatius, tècnics o en
                les galetes utilitzades. Es recomana revisar-la periòdicament.
              </p>
            </section>

            {/* 8. Contacte */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                8. Contacte
              </h2>
              <p>
                Per a qualsevol consulta relacionada amb les galetes o la privacitat,
                podeu contactar-nos a:
              </p>
              <ul className="list-none pl-0 mt-2 space-y-1">
                <li>
                  <strong>Correu:</strong>{" "}
                  <a href="mailto:gllg@geeconomics.com" className="text-[var(--color-accent)] hover:underline">
                    gllg@geeconomics.com
                  </a>
                </li>
                <li>
                  <strong>Telèfon:</strong> 932 119 744
                </li>
                <li>
                  <strong>Adreça:</strong> Passatge de Forasté, 4, Bis, Local 7, 08022 Barcelona
                </li>
              </ul>
              <p className="mt-4">
                Per a més informació sobre el tractament de dades personals, consulteu
                la nostra{" "}
                <Link href="/politica-privacitat" className="text-[var(--color-accent)] hover:underline font-medium">
                  Política de Privacitat
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
