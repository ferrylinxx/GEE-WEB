import { getTranslations, setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Presentacio from "@/components/Presentacio";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("presentacioTitle"),
    description: t("presentacioDesc"),
    alternates: {
      canonical: `https://geeconomics.com${locale === "ca" ? "" : `/${locale}`}/presentacio`,
      languages: {
        ca: `https://geeconomics.com/presentacio`,
        es: `https://geeconomics.com/es/presentacio`,
        en: `https://geeconomics.com/en/presentacio`,
        "x-default": `https://geeconomics.com/presentacio`,
      },
    },
    openGraph: {
      title: `${t("presentacioTitle")} | Gabinet Estudis Econòmics`,
      description: t("presentacioDesc"),
      url: `https://geeconomics.com${locale === "ca" ? "" : `/${locale}`}/presentacio`,
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

export default async function PresentacioPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

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
