"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    text: "Desenvolupem treballs dins el camp de l'anàlisi estratègica, urbanístic, empresarial i territorial.",
    image: "/images/image1.png",
  },
  {
    text: "Valorem i quantifiquem l'impacte net que comporta sobre el benestar de la població la posada en funcionament d'una determinada actuació.",
    image: "/images/banner2-lleida.jpeg",
  },
  {
    text: "Gestionem de forma integral i multidisciplinar els diferents aspectes econòmics, urbanístics i socials dels treballs de desenvolupament urbà.",
    image: "/images/banner3-eolics.jpeg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inici" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background images */}
      {slides.map((slide, i) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt=""
          fill
          className={`object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
          sizes="100vw"
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            <span className="block">GABINET</span>
            <span className="block text-[var(--color-accent-light)]">
              ESTUDIS
            </span>
            <span className="block">ECONÒMICS</span>
          </h1>

          <div className="mt-8 min-h-[120px]">
            <p
              key={current}
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl animate-fade-in"
            >
              {slides[current].text}
            </p>
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href="/que-fem"
              className="inline-flex items-center px-8 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-md hover:bg-[var(--color-accent-light)] transition-colors"
            >
              Que fem
            </a>
            <a
              href="/contacte"
              className="inline-flex items-center px-8 py-3.5 border-2 border-white/60 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              Contacte
            </a>
          </div>

          {/* Slide indicators */}
          <div className="mt-12 flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === current
                    ? "w-10 bg-[var(--color-accent)]"
                    : "w-4 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
