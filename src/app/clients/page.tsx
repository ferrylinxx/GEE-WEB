import Navbar from "@/components/Navbar";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Clients",
  description:
    "Treballem per a institucions públiques, ajuntaments, empreses privades i organismes amb independència i imparcialitat. Consultoria econòmica de confiança a Barcelona.",
  alternates: { canonical: "https://geeconomics.com/clients" },
  openGraph: {
    title: "Clients | Gabinet Estudis Econòmics",
    description:
      "Institucions públiques, ajuntaments i empreses confien en la nostra consultoria econòmica.",
    url: "https://geeconomics.com/clients",
  },
};

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Clients />
      </div>
      <Footer />
    </>
  );
}
