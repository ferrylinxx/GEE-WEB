import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "./ScrollReveal";

export default function Presentacio() {
  const t = useTranslations("presentacio");

  const awards = [
    {
      title: t("award1Title"),
      desc: t("award1Desc"),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
        </svg>
      ),
    },
    {
      title: t("award2Title"),
      desc: t("award2Desc"),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-3.52.97m-3.5 0a6.023 6.023 0 01-3.52-.97" />
        </svg>
      ),
    },
    {
      title: t("award3Title"),
      desc: t("award3Desc"),
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="presentacio" className="min-h-[calc(100vh-5rem)]">
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[#071825]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/8 blur-[120px] translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--color-accent)]/6 blur-[100px] -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-[var(--color-primary-light)]/10 blur-[80px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)]">
                <span className="w-12 h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
                {t("since")}
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
                {t("title")}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full" />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="mt-8 text-lg md:text-xl text-white/60 leading-relaxed">
                {t("heroText")}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <ScrollReveal className="lg:col-span-7">
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-[var(--color-accent)]">
                  <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-text-dark)] font-light">
                    {t("quote")}
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
                  {t("experience")}
                </p>
                <Link href="/que-fem" className="group inline-flex items-center gap-3 text-[var(--color-accent)] font-semibold mt-2">
                  <span className="group-hover:underline underline-offset-4">{t("discoverCta")}</span>
                  <span className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="lg:col-span-5" variant="slide-left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--color-accent)]/5 rounded-2xl -z-10" />
                <div className="bg-gradient-to-b from-[var(--color-bg-light)] to-white rounded-2xl p-10 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1 h-6 bg-[var(--color-accent)] rounded-full" />
                    <h3 className="text-xl font-bold text-[var(--color-primary)]">{t("awardsTitle")}</h3>
                  </div>
                  <div className="space-y-6">
                    {awards.map((award, i) => (
                      <div key={award.title}>
                        <div className="group flex gap-5">
                          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[var(--color-primary)]/5 flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[var(--color-accent)]/20 transition-all duration-300">
                            {award.icon}
                          </div>
                          <div className="pt-1">
                            <h4 className="font-bold text-[var(--color-primary)]">{award.title}</h4>
                            <p className="text-sm text-[var(--color-text-muted)] mt-1 leading-relaxed">{award.desc}</p>
                          </div>
                        </div>
                        {i < awards.length - 1 && <div className="mt-6 h-px bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary-dark)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(200,169,110,0.3) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal variant="scale-in">
            <div className="flex flex-wrap justify-center gap-5">
              <Link href="/que-fem" className="group inline-flex items-center gap-2 px-10 py-4 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent-light)] hover:shadow-xl hover:shadow-[var(--color-accent)]/30 hover:-translate-y-0.5 transition-all duration-300">
                {t("ctaServices")}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="/contacte" className="inline-flex items-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm">
                {t("ctaContact")}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
