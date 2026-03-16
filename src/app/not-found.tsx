import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pàgina no trobada",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-[var(--color-bg-light)] pt-20">
        <div className="text-center px-6">
          <p className="text-8xl font-bold text-[var(--color-accent)]">404</p>
          <h1 className="mt-4 text-3xl font-bold text-[var(--color-primary)]">
            Pàgina no trobada
          </h1>
          <p className="mt-4 text-[var(--color-text-muted)] max-w-md mx-auto">
            Ho sentim, la pàgina que busqueu no existeix o ha estat moguda.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block px-8 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent-light)] transition-colors"
          >
            Tornar a l&apos;inici
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
