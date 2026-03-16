import Navbar from "@/components/Navbar";
import Contacte from "@/components/Contacte";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contacte",
  description:
    "Contacta amb Gabinet Estudis Econòmics a Barcelona. Passatge de Forasté, 4, Bis, Local 7, 08022 Barcelona. Consultoria econòmica personalitzada.",
  alternates: { canonical: "https://geeconomics.com/contacte" },
  openGraph: {
    title: "Contacte | Gabinet Estudis Econòmics",
    description:
      "Contacta amb nosaltres a Barcelona per a serveis de consultoria econòmica.",
    url: "https://geeconomics.com/contacte",
  },
};

export default function ContactePage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Contacte />
      </div>
      <Footer />
    </>
  );
}
