import Navbar from "@/components/Navbar";
import QuiSom from "@/components/QuiSom";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Qui som",
  description:
    "Coneix l'equip de Gabinet Estudis Econòmics: economistes i arquitectes especialitzats en consultoria econòmica i territorial a Barcelona des de 1989.",
  alternates: { canonical: "https://geeconomics.com/qui-som" },
  openGraph: {
    title: "Qui som | Gabinet Estudis Econòmics",
    description:
      "L'equip de professionals de Gabinet Estudis Econòmics a Barcelona.",
    url: "https://geeconomics.com/qui-som",
  },
};

export default function QuiSomPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <QuiSom />
      </div>
      <Footer />
    </>
  );
}
