import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacitat",
  description:
    "Política de privacitat i protecció de dades personals de Gabinet Estudis Econòmics (GLLG).",
  alternates: { canonical: "https://geeconomics.com/politica-privacitat" },
};

export default function PoliticaPrivacitatPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-[var(--color-bg-light)] min-h-[calc(100vh-5rem)]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-8">
            Política de Privacitat
          </h1>

          <div className="prose prose-sm max-w-none text-[var(--color-text-muted)] space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                Dades del responsable del tractament
              </h2>
              <ul className="space-y-1 list-none pl-0">
                <li><strong>Identitat:</strong> GLLG</li>
                <li><strong>NIF:</strong> B05462338</li>
                <li><strong>Adreça postal:</strong> Passatge Forasté 4bis Local 7, 08022 Barcelona</li>
                <li><strong>Telèfon:</strong> 932 119 744</li>
                <li><strong>Correu electrònic:</strong> gllg@geeconomics.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                Finalitat del tractament
              </h2>
              <p>
                En Gabinet Estudis Econòmics, GLLG, tractem la informació que ens
                facilita amb la finalitat de prestar-los el servei sol·licitat o
                enviar-li la informació requerida.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                Conservació de les dades
              </h2>
              <p>
                Les dades proporcionades es conservaran mentre no ens sol·liciti el
                cessament de l&apos;activitat. Les dades no se cediran a tercers
                excepte en els casos en què existeixi una obligació legal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                Drets de l&apos;interessat
              </h2>
              <p>
                Vostè té dret a obtenir informació sobre si en GLLG estem tractant
                les seves dades personals, per la qual cosa pot exercir els seus
                drets d&apos;accés, rectificació, supressió i portabilitat de dades
                i oposició i limitació al seu tractament davant GLLG, Passatge
                Forasté 4bis Local 7 08022 Barcelona o en l&apos;adreça de correu
                electrònic{" "}
                <a
                  href="mailto:gllg@geeconomics.com"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  gllg@geeconomics.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                Base jurídica
              </h2>
              <p>
                La base legal per al tractament de les seves dades és el
                consentiment atorgat per l&apos;interessat mitjançant la
                sol·licitud de contacte o informació a través del nostre formulari
                web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                Galetes (Cookies)
              </h2>
              <p>
                Aquest lloc web utilitza galetes pròpies i de tercers (Google
                Analytics) per analitzar la navegació dels usuaris i millorar els
                nostres serveis. Podeu configurar el vostre navegador per rebutjar
                les galetes, tot i que algunes funcionalitats del lloc podrien
                veure&apos;s afectades.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
