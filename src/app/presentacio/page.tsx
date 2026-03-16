import Navbar from "@/components/Navbar";
import Presentacio from "@/components/Presentacio";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Presentació",
  description:
    "Gabinet Estudis Econòmics, fundat el 1989 a Barcelona. Més de 30 anys d'experiència en consultoria econòmica, guanyadors del Premi Catalunya d'Economia i Premi Nacional d'Urbanisme.",
  alternates: { canonical: "https://geeconomics.com/presentacio" },
  openGraph: {
    title: "Presentació | Gabinet Estudis Econòmics",
    description:
      "Consultoria econòmica a Barcelona des de 1989. Premi Catalunya d'Economia i Premi Nacional d'Urbanisme.",
    url: "https://geeconomics.com/presentacio",
  },
};

export default function PresentacioPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Presentacio />
      </div>
      <Footer />
    </>
  );
}
