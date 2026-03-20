"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAV_LINKS = [
  { href: "/presentacio" as const, key: "presentation", icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" },
  { href: "/que-fem" as const, key: "services", icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" },
  { href: "/qui-som" as const, key: "team", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
  { href: "/clients" as const, key: "clients", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" },
  { href: "/contacte" as const, key: "contact", icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" },
];

const REDIRECT_SECONDS = 15;

export default function NotFound() {
  const t = useTranslations("notFound");
  const navT = useTranslations("nav");
  const router = useRouter();

  // Animated 404 counter
  const [counter, setCounter] = useState(0);
  const [counterDone, setCounterDone] = useState(false);

  // Parallax mouse
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Search
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<typeof NAV_LINKS>([]);
  const [showSearch, setShowSearch] = useState(false);

  // Auto-redirect countdown
  const [countdown, setCountdown] = useState(REDIRECT_SECONDS);
  const [redirectPaused, setRedirectPaused] = useState(false);

  // Stagger animation
  const [visible, setVisible] = useState(false);

  // Compass rotation
  const compassRef = useRef(0);
  const [compassAngle, setCompassAngle] = useState(0);

  // Counter animation: 000 → 404
  useEffect(() => {
    let frame = 0;
    const totalFrames = 30;
    const interval = setInterval(() => {
      frame++;
      if (frame >= totalFrames) {
        setCounter(404);
        setCounterDone(true);
        clearInterval(interval);
      } else {
        const progress = frame / totalFrames;
        const eased = 1 - Math.pow(1 - progress, 3);
        setCounter(Math.round(eased * 404));
      }
    }, 35);
    return () => clearInterval(interval);
  }, []);

  // Stagger entrance delay
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Parallax mouse tracking
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMouse({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Compass spinning animation (lost needle)
  useEffect(() => {
    let raf: number;
    const spin = () => {
      compassRef.current += 2.5 + Math.sin(Date.now() / 800) * 3;
      setCompassAngle(compassRef.current);
      raf = requestAnimationFrame(spin);
    };
    raf = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Auto-redirect countdown
  useEffect(() => {
    if (redirectPaused) return;
    if (countdown <= 0) {
      router.push("/");
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, redirectPaused, router]);

  // Search filter
  useEffect(() => {
    if (search.trim() === "") {
      setSearchResults([]);
      return;
    }
    const q = search.toLowerCase();
    const results = NAV_LINKS.filter((link) => {
      const label = navT(link.key).toLowerCase();
      const href = link.href.toLowerCase();
      return label.includes(q) || href.includes(q);
    });
    setSearchResults(results);
  }, [search, navT]);

  const stagger = (index: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 120}ms`,
  });

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen relative overflow-hidden"
        onMouseEnter={() => setRedirectPaused(true)}
        onMouseLeave={() => setRedirectPaused(false)}
      >
        {/* Full dark premium background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[#050e18]" />

        {/* Animated gradient orbs — PARALLAX */}
        <div
          className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/8 blur-[140px] animate-float-slow"
          style={{ transform: `translate(${mouse.x * 30}px, ${mouse.y * 20}px)` }}
        />
        <div
          className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--color-primary-light)]/10 blur-[160px] animate-float"
          style={{ transform: `translate(${mouse.x * -25}px, ${mouse.y * -15}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[var(--color-accent)]/5 blur-[100px]"
          style={{ transform: `translate(calc(-50% + ${mouse.x * 15}px), calc(-50% + ${mouse.y * 15}px))` }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Dot pattern layer */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(200,169,110,0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen pt-20 pb-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Compass Illustration */}
              <div className="flex justify-center lg:justify-end order-2 lg:order-1" style={stagger(0)}>
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  {/* Outer rings */}
                  <div className="absolute inset-0 rounded-full border border-white/5" />
                  <div className="absolute inset-4 rounded-full border border-white/5" />
                  <div className="absolute inset-8 rounded-full border border-[var(--color-accent)]/10" />

                  {/* Orbiting dot */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-orbit">
                      <div className="w-3 h-3 rounded-full bg-[var(--color-accent)] shadow-lg shadow-[var(--color-accent)]/50" />
                    </div>
                  </div>

                  {/* Center illustration - SPINNING compass (lost) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative animate-float">
                      <div className="absolute -inset-8 rounded-full bg-[var(--color-accent)]/5 blur-xl" />
                      <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-2xl">
                        <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 80 80" fill="none">
                          {/* Compass circles */}
                          <circle cx="40" cy="40" r="28" stroke="rgba(200,169,110,0.3)" strokeWidth="1.5" strokeDasharray="4 6" />
                          <circle cx="40" cy="40" r="20" stroke="rgba(200,169,110,0.5)" strokeWidth="1" />

                          {/* SPINNING Compass needle group */}
                          <g style={{ transform: `rotate(${compassAngle}deg)`, transformOrigin: "40px 40px" }}>
                            <path d="M40 20 L43 38 L40 42 L37 38 Z" fill="rgba(200,169,110,0.8)" />
                            <path d="M40 60 L43 42 L40 38 L37 42 Z" fill="rgba(200,169,110,0.3)" />
                          </g>

                          {/* Center dot */}
                          <circle cx="40" cy="40" r="3" fill="#c8a96e" />

                          {/* Cardinal marks */}
                          <line x1="40" y1="10" x2="40" y2="14" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
                          <line x1="40" y1="66" x2="40" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
                          <line x1="10" y1="40" x2="14" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
                          <line x1="66" y1="40" x2="70" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />

                          {/* Question mark */}
                          <text x="52" y="28" fontSize="18" fontWeight="bold" fill="rgba(200,169,110,0.6)" fontFamily="sans-serif">?</text>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute top-8 right-12 w-2 h-2 rounded-full bg-[var(--color-accent)]/40 animate-float" style={{ animationDelay: "1s" }} />
                  <div className="absolute bottom-16 left-8 w-1.5 h-1.5 rounded-full bg-white/20 animate-float-slow" style={{ animationDelay: "2s" }} />
                  <div className="absolute top-1/3 left-4 w-1 h-1 rounded-full bg-[var(--color-accent)]/30 animate-float" style={{ animationDelay: "0.5s" }} />
                  <div className="absolute bottom-1/4 right-6 w-2 h-2 rounded-full bg-white/10 animate-float-slow" style={{ animationDelay: "3s" }} />
                  <div className="absolute top-12 left-1/3 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/20 animate-float" style={{ animationDelay: "1.5s" }} />
                </div>
              </div>

              {/* Right: Text content with stagger */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                {/* Badge */}
                <div style={stagger(1)}>
                  <div className="inline-flex items-center gap-3 mb-6">
                    <span className="w-12 h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-accent)]">
                      Error 404
                    </span>
                  </div>
                </div>

                {/* Animated 404 counter */}
                <div style={stagger(2)}>
                  <div className="relative mb-6">
                    <p
                      className={`text-8xl sm:text-9xl lg:text-[11rem] font-black leading-none tracking-tighter text-transparent bg-clip-text ${counterDone ? "animate-shimmer" : ""}`}
                      style={{
                        backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.08) 0%, rgba(200,169,110,0.25) 25%, rgba(255,255,255,0.15) 50%, rgba(200,169,110,0.25) 75%, rgba(255,255,255,0.08) 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                      }}
                    >
                      {String(counter).padStart(3, "0")}
                    </p>
                    <div className="h-1 w-24 lg:w-32 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full mx-auto lg:mx-0 mt-2" />
                  </div>
                </div>

                <div style={stagger(3)}>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
                    {t("heading")}
                  </h1>
                </div>

                <div style={stagger(4)}>
                  <p className="text-lg text-white/50 max-w-md mx-auto lg:mx-0 mb-3 leading-relaxed">
                    {t("description")}
                  </p>
                  <p className="text-sm text-white/30 max-w-sm mx-auto lg:mx-0 mb-6">
                    {t("subdescription")}
                  </p>
                </div>

                {/* Search bar */}
                <div style={stagger(5)}>
                  <div className="relative max-w-md mx-auto lg:mx-0 mb-8">
                    <div className="relative">
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                      <input
                        type="text"
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setShowSearch(true); }}
                        onFocus={() => setShowSearch(true)}
                        onBlur={() => setTimeout(() => setShowSearch(false), 200)}
                        placeholder={t("searchPlaceholder")}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[var(--color-accent)]/40 focus:bg-white/[0.08] transition-all duration-300 backdrop-blur-sm"
                      />
                    </div>
                    {/* Search results dropdown */}
                    {showSearch && search.trim() !== "" && (
                      <div className="absolute top-full left-0 right-0 mt-2 rounded-xl bg-[var(--color-primary-dark)]/95 border border-white/10 backdrop-blur-xl overflow-hidden z-20 shadow-2xl">
                        {searchResults.length > 0 ? (
                          searchResults.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="flex items-center gap-3 px-5 py-3 hover:bg-white/[0.06] transition-colors"
                            >
                              <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                              </svg>
                              <span className="text-sm text-white/70">{navT(link.key)}</span>
                            </Link>
                          ))
                        ) : (
                          <div className="px-5 py-3 text-sm text-white/30">{t("noResults")}</div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Action buttons */}
                <div style={stagger(6)}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                    <Link
                      href="/"
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[var(--color-accent)]/30 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                      </svg>
                      {t("backHome")}
                    </Link>
                    <Link
                      href="/contacte"
                      className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/15 text-white/80 font-semibold rounded-xl hover:bg-white/5 hover:border-[var(--color-accent)]/40 hover:text-white transition-all duration-300 backdrop-blur-sm"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      {t("contactUs")}
                    </Link>
                  </div>
                </div>

                {/* Auto-redirect countdown */}
                <div style={stagger(7)}>
                  <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
                    <div className="relative w-8 h-8">
                      <svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                        <circle
                          cx="18" cy="18" r="15" fill="none"
                          stroke="rgba(200,169,110,0.6)" strokeWidth="2"
                          strokeLinecap="round"
                          strokeDasharray={`${(countdown / REDIRECT_SECONDS) * 94.25} 94.25`}
                          className="transition-all duration-1000 ease-linear"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white/40 tabular-nums">
                        {countdown}
                      </span>
                    </div>
                    <span className="text-xs text-white/25">
                      {t("redirecting", { seconds: countdown })}
                    </span>
                    <button
                      onClick={() => setRedirectPaused((p) => !p)}
                      className="text-xs text-[var(--color-accent)]/60 hover:text-[var(--color-accent)] transition-colors underline underline-offset-2"
                    >
                      {redirectPaused ? t("resumeRedirect") : t("pauseRedirect")}
                    </button>
                  </div>
                </div>

                {/* Quick nav with glow hover */}
                <div style={stagger(8)}>
                  <div className="mt-14 pt-8 border-t border-white/10">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/25 mb-5 font-medium">
                      {t("sections")}
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                      {NAV_LINKS.slice(0, 4).map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="group relative flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[var(--color-accent)]/40 hover:bg-white/[0.06] transition-all duration-300 backdrop-blur-sm"
                        >
                          {/* Golden glow on hover */}
                          <div className="absolute inset-0 rounded-xl bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/[0.06] group-hover:shadow-[0_0_20px_rgba(200,169,110,0.15)] transition-all duration-300" />
                          <svg className="relative w-4 h-4 text-[var(--color-accent)]/60 group-hover:text-[var(--color-accent)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                          </svg>
                          <span className="relative text-sm text-white/50 group-hover:text-white/80 transition-colors font-medium">
                            {navT(link.key)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050e18] to-transparent z-[5]" />
      </main>
      <Footer />
    </>
  );
}
