"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Sliding underline refs
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const navLinks = [
    { href: "/" as const, label: t("home") },
    { href: "/presentacio" as const, label: t("presentation") },
    { href: "/que-fem" as const, label: t("services") },
    { href: "/qui-som" as const, label: t("team") },
    { href: "/clients" as const, label: t("clients") },
    { href: "/contacte" as const, label: t("contact") },
  ];

  const getActiveIndex = useCallback(() => {
    return navLinks.findIndex((link) =>
      link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
    );
  }, [pathname]);

  const updateUnderline = useCallback(() => {
    const activeIndex = getActiveIndex();
    const activeLink = linkRefs.current[activeIndex];
    const nav = navRef.current;

    if (activeLink && nav) {
      const navRect = nav.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setUnderlineStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    } else {
      setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [getActiveIndex]);

  useEffect(() => {
    updateUnderline();
  }, [pathname, updateUnderline]);

  useEffect(() => {
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [updateUnderline]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu with stagger-out animation
  const handleCloseMenu = useCallback(() => {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 500);
  }, []);

  const textColor =
    isHome && !scrolled ? "text-white" : "text-[var(--color-primary)]";

  const menuVisible = menuOpen && !menuClosing;

  return (
    <header role="banner">
      <nav
        aria-label={t("menu")}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(200,169,110,0.15)] border-b border-[var(--color-accent)]/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo with image + hover animation */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/logo.png"
                alt="GEE Logo"
                width={38}
                height={38}
                className={`rounded-sm transition-all duration-300 ${
                  isHome && !scrolled ? "brightness-0 invert opacity-90" : "opacity-80"
                } group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-3`}
              />
              <div className="flex flex-col leading-tight">
                <span
                  className={`text-lg font-bold tracking-widest transition-colors ${textColor}`}
                >
                  GABINET
                </span>
                <span
                  className={`text-[10px] tracking-[0.3em] transition-colors ${
                    isHome && !scrolled
                      ? "text-[var(--color-accent-light)]"
                      : "text-[var(--color-accent)]"
                  }`}
                >
                  ESTUDIS ECONÒMICS
                </span>
              </div>
            </Link>

            {/* Desktop links + Language switcher */}
            <div className="hidden md:flex items-center gap-3 lg:gap-5">
              <div ref={navRef} className="relative flex items-center gap-3 lg:gap-5">
                {navLinks.map((link, index) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      ref={(el) => { linkRefs.current[index] = el; }}
                      className={`text-xs lg:text-sm font-medium tracking-wide uppercase transition-colors hover:text-[var(--color-accent)] ${
                        isActive ? "text-[var(--color-accent)]" : textColor
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                {/* Sliding underline */}
                <span
                  className="absolute -bottom-1 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full transition-all duration-300 ease-out"
                  style={{
                    left: underlineStyle.left,
                    width: underlineStyle.width,
                    opacity: underlineStyle.opacity,
                  }}
                />
              </div>
              <div className="ml-2 border-l border-current/20 pl-4">
                <LanguageSwitcher
                  textColor={isHome && !scrolled ? "light" : "dark"}
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden relative z-[60] p-2"
              onClick={() => {
                if (menuOpen) {
                  handleCloseMenu();
                } else {
                  setMenuOpen(true);
                }
              }}
              aria-label={t("menu")}
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-6 transition-all duration-300 ${
                    menuOpen
                      ? "bg-white rotate-45 translate-y-2"
                      : scrolled || !isHome
                        ? "bg-[var(--color-primary)]"
                        : "bg-white"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 transition-all duration-300 ${
                    menuOpen
                      ? "bg-white opacity-0 scale-x-0"
                      : scrolled || !isHome
                        ? "bg-[var(--color-primary)]"
                        : "bg-white"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 transition-all duration-300 ${
                    menuOpen
                      ? "bg-white -rotate-45 -translate-y-2"
                      : scrolled || !isHome
                        ? "bg-[var(--color-primary)]"
                        : "bg-white"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen mobile menu */}
      <div
        className={`fixed inset-0 z-[55] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary-dark)]" />

        {/* Close button */}
        <button
          onClick={handleCloseMenu}
          className="absolute top-6 right-6 z-10 p-2 text-white/60 hover:text-white transition-colors"
          aria-label="Tancar menú"
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[var(--color-accent)]/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-[var(--color-accent)]/5 blur-3xl" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-10">
          {/* Logo in mobile menu */}
          <div
            className={`absolute top-7 left-10 flex items-center gap-2.5 transition-all duration-500 ${
              menuVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
            style={{ transitionDelay: menuVisible ? "100ms" : "0ms" }}
          >
            <Image
              src="/logo.png"
              alt="GEE Logo"
              width={32}
              height={32}
              className="rounded-sm brightness-0 invert opacity-80"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold tracking-widest text-white">
                GABINET
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[var(--color-accent-light)]">
                ESTUDIS ECONÒMICS
              </span>
            </div>
          </div>

          {/* Navigation links */}
          <div className="space-y-2">
            {navLinks.map((link, index) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleCloseMenu}
                  className={`block transition-all duration-500 ${
                    menuVisible
                      ? "opacity-100 translate-x-0"
                      : menuClosing
                        ? "opacity-0 translate-x-8"
                        : "opacity-0 -translate-x-8"
                  }`}
                  style={{
                    transitionDelay: menuVisible
                      ? `${150 + index * 60}ms`
                      : menuClosing
                        ? `${(navLinks.length - 1 - index) * 50}ms`
                        : "0ms",
                  }}
                >
                  <div className="group flex items-center gap-4 py-3 border-b border-white/10">
                    <span className={`text-xs font-mono ${
                      isActive ? "text-[var(--color-accent)]" : "text-white/30"
                    }`}>
                      0{index + 1}
                    </span>
                    <span className={`text-2xl font-semibold tracking-wide uppercase transition-colors ${
                      isActive
                        ? "text-[var(--color-accent)]"
                        : "text-white/80 group-hover:text-[var(--color-accent)]"
                    }`}>
                      {link.label}
                    </span>
                    {isActive && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Golden separator */}
          <div
            className={`mt-10 transition-all duration-500 ${
              menuVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{
              transitionDelay: menuVisible ? "520ms" : "0ms",
              transformOrigin: "left",
            }}
          >
            <div className="h-px bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent)]/40 to-transparent" />
          </div>

          {/* Language switcher at bottom */}
          <div
            className={`mt-6 transition-all duration-500 ${
              menuVisible
                ? "opacity-100 translate-y-0"
                : menuClosing
                  ? "opacity-0 -translate-y-4"
                  : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: menuVisible ? "550ms" : "0ms" }}
          >
            <LanguageSwitcher textColor="light" />
          </div>

          {/* Contact info */}
          <div
            className={`mt-6 space-y-2 transition-all duration-500 ${
              menuVisible
                ? "opacity-100 translate-y-0"
                : menuClosing
                  ? "opacity-0 -translate-y-4"
                  : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: menuVisible ? "620ms" : "0ms" }}
          >
            <a href="tel:+34932119744" className="block text-sm text-white/40 hover:text-[var(--color-accent)] transition-colors">
              +34 932 119 744
            </a>
            <a href="mailto:gllg@geeconomics.com" className="block text-sm text-white/40 hover:text-[var(--color-accent)] transition-colors">
              gllg@geeconomics.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
