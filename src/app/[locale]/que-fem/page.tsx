import { getTranslations, setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import QueFem from "@/components/QueFem";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("queFemTitle"),
    description: t("queFemDesc"),
    alternates: {
      canonical: `https://geeconomics.com${locale === "ca" ? "" : `/${locale}`}/que-fem`,
      languages: {
        ca: `https://geeconomics.com/que-fem`,
        es: `https://geeconomics.com/es/que-fem`,
        en: `https://geeconomics.com/en/que-fem`,
        "x-default": `https://geeconomics.com/que-fem`,
      },
    },
    openGraph: {
      title: `${t("queFemTitle")} | Gabinet Estudis Econòmics`,
      description: t("queFemDesc"),
      url: `https://geeconomics.com${locale === "ca" ? "" : `/${locale}`}/que-fem`,
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

export default async function QueFemPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

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
