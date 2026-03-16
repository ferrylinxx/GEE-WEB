"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Inici" },
  { href: "/presentacio", label: "Presentació" },
  { href: "/que-fem", label: "Que fem" },
  { href: "/qui-som", label: "Qui som" },
  { href: "/clients", label: "Clients" },
  { href: "/contacte", label: "Contacte" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor =
    isHome && !scrolled ? "text-white" : "text-[var(--color-primary)]";

  return (
    <header role="banner">
    <nav
      aria-label="Navegació principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span
              className={`text-lg font-bold tracking-widest transition-colors ${textColor}`}
            >
              GABINET
            </span>
            <span
              className={`text-xs tracking-[0.3em] transition-colors ${
                isHome && !scrolled
                  ? "text-[var(--color-accent-light)]"
                  : "text-[var(--color-accent)]"
              }`}
            >
              ESTUDIS ECONÒMICS
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/" && !link.href.includes("#")
                  : !link.href.includes("#") && pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[var(--color-accent)] ${
                    isActive ? "text-[var(--color-accent)]" : textColor
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 transition-all ${
                  scrolled || !isHome
                    ? "bg-[var(--color-primary)]"
                    : "bg-white"
                } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 transition-all ${
                  scrolled || !isHome
                    ? "bg-[var(--color-primary)]"
                    : "bg-white"
                } ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 transition-all ${
                  scrolled || !isHome
                    ? "bg-[var(--color-primary)]"
                    : "bg-white"
                } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 shadow-none"
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium tracking-wide uppercase text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
    </header>
  );
}
