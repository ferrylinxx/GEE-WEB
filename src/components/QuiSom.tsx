import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

export default function QuiSom() {
  const t = useTranslations("quiSom");

  return (
    <section id="qui-som">
      <div className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[#071825]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/8 blur-[120px] translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--color-accent)]/6 blur-[100px] -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)]">
                <span className="w-12 h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
                {t("badge")}
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">{t("title")}</h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full" />
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[0, 1, 2, 3].map((i) => (
              <ScrollReveal key={i} delay={i * 150} variant={i % 2 === 0 ? "fade-up" : "slide-left"}>
                <div className="group relative flex gap-6 p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-[var(--color-accent)]/5 transition-all duration-500 h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[var(--color-accent)]/30 rounded-tr-lg" />
                  </div>

                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/20 group-hover:shadow-[var(--color-primary)]/30 transition-shadow duration-500">
                    <span className="text-2xl font-bold text-white">{t(`team.${i}.initials`)}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-primary)]">{t(`team.${i}.name`)}</h3>
                    <span className="inline-block mt-1 text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wide">{t(`team.${i}.role`)}</span>
                    <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">{t(`team.${i}.bio`)}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />
    </section>
  );
}
