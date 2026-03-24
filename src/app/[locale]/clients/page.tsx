import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("clientsTitle"),
    description: t("clientsDesc"),
    alternates: {
      canonical: `https://geeconomics.com${locale === "ca" ? "" : `/${locale}`}/clients`,
      languages: {
        ca: `https://geeconomics.com/clients`,
        es: `https://geeconomics.com/es/clients`,
        en: `https://geeconomics.com/en/clients`,
        "x-default": `https://geeconomics.com/clients`,
      },
    },
    openGraph: {
      title: `${t("clientsTitle")} | Gabinet Estudis Econòmics`,
      description: t("clientsDesc"),
      url: `https://geeconomics.com${locale === "ca" ? "" : `/${locale}`}/clients`,
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

export default async function ClientsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

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
