import { getTranslations, setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Contacte from "@/components/Contacte";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("contacteTitle"),
    description: t("contacteDesc"),
    alternates: {
      canonical: `https://geeconomics.com${locale === "ca" ? "" : `/${locale}`}/contacte`,
      languages: {
        ca: `https://geeconomics.com/contacte`,
        es: `https://geeconomics.com/es/contacte`,
        en: `https://geeconomics.com/en/contacte`,
        "x-default": `https://geeconomics.com/contacte`,
      },
    },
    openGraph: {
      title: `${t("contacteTitle")} | Gabinet Estudis Econòmics`,
      description: t("contacteDesc"),
      url: `https://geeconomics.com${locale === "ca" ? "" : `/${locale}`}/contacte`,
      locale: locale === "ca" ? "ca_ES" : locale === "es" ? "es_ES" : "en_US",
      alternateLocale:
        locale === "ca"
          ? ["es_ES", "en_US"]
          : locale === "es"
            ? ["ca_ES", "en_US"]
            : ["ca_ES", "es_ES"],
    },
  };
}

export default async function ContactePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

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
