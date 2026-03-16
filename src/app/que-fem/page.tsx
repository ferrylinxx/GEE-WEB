import Navbar from "@/components/Navbar";
import QueFem from "@/components/QueFem";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Que fem",
  description:
    "Serveis de consultoria econòmica: anàlisi estratègica, estudis d'impacte econòmic, avaluació urbanística, valoració d'intangibles i dictàmens pericials a Barcelona.",
  alternates: { canonical: "https://geeconomics.com/que-fem" },
  openGraph: {
    title: "Que fem | Gabinet Estudis Econòmics",
    description:
      "Anàlisi estratègica, impacte econòmic, avaluació urbanística i dictàmens pericials.",
    url: "https://geeconomics.com/que-fem",
  },
};

export default function QueFemPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <QueFem />
      </div>
      <Footer />
    </>
  );
}
