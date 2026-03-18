import { getTranslations, setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import QuiSom from "@/components/QuiSom";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("quiSomTitle"),
    description: t("quiSomDesc"),
    alternates: {
      canonical: `https://geeconomics.com${locale === "ca" ? "" : `/${locale}`}/qui-som`,
      languages: {
        ca: `https://geeconomics.com/qui-som`,
        es: `https://geeconomics.com/es/qui-som`,
        en: `https://geeconomics.com/en/qui-som`,
        "x-default": `https://geeconomics.com/qui-som`,
      },
    },
    openGraph: {
      title: `${t("quiSomTitle")} | Gabinet Estudis Econòmics`,
      description: t("quiSomDesc"),
      url: `https://geeconomics.com${locale === "ca" ? "" : `/${locale}`}/qui-som`,
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

export default async function QuiSomPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

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
