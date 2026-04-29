"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const slideData = [
  { image: "/images/banner1-plano-v2.jpeg", ctaHref: "/que-fem" as const, altKey: "slideAlt0" },
  { image: "/images/banner2-lleida.jpeg", ctaHref: "/presentacio" as const, altKey: "slideAlt1" },
  { image: "/images/banner3-eolics.jpeg", ctaHref: "/qui-som" as const, altKey: "slideAlt2" },
];

export default function Hero() {
  const t = useTranslations("hero");
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const SLIDE_DURATION = 7000;
  const PROGRESS_INTERVAL = 30;

  // Title reveal animation on first load
  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setProgress(0);
      setTimeout(() => {
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 100);
      }, 500);
    },
    [isTransitioning, current]
  );

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slideData.length);
  }, [current, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slideData.length) % slideData.length);
  }, [current, goToSlide]);

  // Auto-play timer
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current as ReturnType<typeof setTimeout>);
    };
  }, [nextSlide, current]);

  // Progress bar
  useEffect(() => {
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (PROGRESS_INTERVAL / SLIDE_DURATION) * 100;
        return next >= 100 ? 100 : next;
      });
    }, PROGRESS_INTERVAL);
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [current]);

  // Reset progress on slide change + track carousel interaction
  useEffect(() => {
    setProgress(0);
    if (typeof window !== "undefined" && typeof window.gtag === "function" && current > 0) {
      window.gtag("event", "carousel_slide", {
        event_category: "engagement",
        event_label: `Slide ${current + 1}`,
        value: current + 1,
      });
    }
  }, [current]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextSlide, prevSlide]);

  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 60) { delta > 0 ? nextSlide() : prevSlide(); }
  };

  return (
    <section
      id="inici"
      className="relative h-screen flex items-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label={t("carouselLabel")}
    >
      {slideData.map((slide, i) => (
        <div key={slide.image} className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"}`} aria-hidden={i !== current}>
          <Image src={slide.image} alt={t(slide.altKey)} fill className={`object-cover ${i === current ? "animate-ken-burns" : ""}`} priority={i === 0} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1920px" quality={85} />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-[1]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="max-w-3xl flex">
          {/* Línea vertical dorada decorativa */}
          <div className="hidden md:flex flex-col items-center mr-8 pt-2">
            <div className={`w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent)]/60 to-transparent transition-all duration-1000 ${hasLoaded ? "h-72 opacity-100" : "h-0 opacity-0"}`} />
            <div className={`w-2 h-2 rounded-full bg-[var(--color-accent)] mt-2 transition-all duration-700 delay-500 ${hasLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} />
          </div>

          <div className="flex-1">
            {/* Badge "Desde 1989" — ahora anima con cada slide */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 transition-all duration-700 ${isTransitioning ? "opacity-0 -translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100"}`}>
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="text-sm font-medium text-white/90 tracking-wide">{t("since")}</span>
            </div>

            {/* Título con animación reveal línea por línea */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[0.9]">
              <span className={`block transition-all duration-700 ${hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                GABINET
              </span>
              <span className={`block text-[var(--color-accent)] drop-shadow-[0_2px_10px_rgba(200,169,110,0.3)] transition-all duration-700 delay-200 ${hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                ESTUDIS
              </span>
              <span className={`block transition-all duration-700 delay-[400ms] ${hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                ECONÒMICS
              </span>
            </h1>

            <div className={`transition-all duration-700 delay-100 ${isTransitioning ? "opacity-0 translate-x-6" : "opacity-100 translate-x-0"}`}>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-sm border-l-2 border-[var(--color-accent)]">
                {t(`slides.${current}.subtitle`)}
              </span>
            </div>

            <div className="mt-5 min-h-[100px]">
              <p className={`text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${isTransitioning ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}`}>
                {t(`slides.${current}.text`)}
              </p>
            </div>

            <div className={`mt-8 flex flex-wrap gap-4 transition-all duration-700 delay-300 ${isTransitioning ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}`}>
              <Link href={slideData[current].ctaHref} className="group inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-md hover:bg-[var(--color-accent-light)] hover:shadow-lg hover:shadow-[var(--color-accent)]/25 transition-all duration-300">
                {t(`slides.${current}.cta`)}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="/contacte" className="inline-flex items-center px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-md hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm">
                {t("contact")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white opacity-60 hover:opacity-100 hover:bg-white/20 transition-all duration-300" aria-label={t("prevSlide")}>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
      </button>
      <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white opacity-60 hover:opacity-100 hover:bg-white/20 transition-all duration-300" aria-label={t("nextSlide")}>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
      </button>

      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {slideData.map((_, i) => (
              <button key={i} onClick={() => goToSlide(i)} className="relative group" aria-label={t("slideLabel", { num: i + 1 })} aria-current={i === current ? "true" : undefined}>
                <div className={`h-1 rounded-full overflow-hidden transition-all duration-500 ${i === current ? "w-16 bg-white/20" : "w-8 bg-white/20 hover:bg-white/30"}`}>
                  {i === current && <div className="h-full bg-[var(--color-accent)] rounded-full transition-none" style={{ width: `${progress}%` }} />}
                  {i < current && <div className="h-full w-full bg-white/50 rounded-full" />}
                </div>
              </button>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-3 text-white/50 text-sm font-mono">
            <span className="text-2xl font-bold text-white tabular-nums">{String(current + 1).padStart(2, "0")}</span>
            <span className="w-8 h-px bg-white/30" />
            <span className="tabular-nums">{String(slideData.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 opacity-60">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-white/80 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
