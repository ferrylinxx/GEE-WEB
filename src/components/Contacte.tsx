"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Contacte() {
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptComms, setAcceptComms] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    nom: "",
    cognom: "",
    email: "",
    empresa: "",
    telefon: "",
    missatge: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, acceptComms }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setFormData({ nom: "", cognom: "", email: "", empresa: "", telefon: "", missatge: "" });
      setAcceptPrivacy(false);
      setAcceptComms(false);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacte" className="py-24 bg-[var(--color-bg-light)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)]">
              Parlem?
            </span>
            <h2 className="mt-3 text-4xl font-bold text-[var(--color-primary)] tracking-tight">
              Contacte
            </h2>
            <div className="mt-2 mx-auto h-1 w-16 bg-[var(--color-accent)]" />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <ScrollReveal className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-6">
                  Gabinet d&apos;Estudis Econòmics
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-text-dark)]">
                        Adreça
                      </p>
                      <p className="text-sm text-[var(--color-text-muted)]">
                        Passatge de Forasté, 4, Bis, Local 7
                        <br />
                        08022 Barcelona
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-text-dark)]">
                        Telèfon
                      </p>
                      <p className="text-sm text-[var(--color-text-muted)]">
                        932 11 97 44
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-text-dark)]">
                        Correu electrònic
                      </p>
                      <p className="text-sm text-[var(--color-text-muted)]">
                        gllg@geeconomics.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.5!2d2.1278!3d41.4133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a29a5d3898c1%3A0x8a21b1543d6e8e0!2sPassatge+de+Forast%C3%A9%2C+4%2C+08022+Barcelona!5e0!3m2!1sca!2ses!4v1710000000000!5m2!1sca!2ses"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicació Gabinet Estudis Econòmics"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={200} className="lg:col-span-3">
            <form
              className="bg-white rounded-2xl p-8 shadow-sm space-y-5"
              onSubmit={handleSubmit}
            >
              {status === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                  Missatge enviat correctament! Ens posarem en contacte amb tu aviat.
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                  Error enviant el missatge. Torna-ho a intentar o contacta&apos;ns per telèfon.
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-1.5">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-1.5">
                    Cognom
                  </label>
                  <input
                    type="text"
                    name="cognom"
                    value={formData.cognom}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-1.5">
                    Correu Electrònic <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-1.5">
                    Empresa <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-1.5">
                  Telèfon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-dark)] mb-1.5">
                  Comentari o Missatge <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="missatge"
                  value={formData.missatge}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-colors resize-none"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptPrivacy}
                    onChange={(e) => setAcceptPrivacy(e.target.checked)}
                    className="mt-1 accent-[var(--color-accent)]"
                    required
                  />
                  <span className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    He llegit i accepto les condicions contingudes en la{" "}
                    <Link
                      href="/politica-privacitat"
                      target="_blank"
                      className="text-[var(--color-primary)] underline hover:text-[var(--color-accent)]"
                    >
                      Política de Privacitat
                    </Link>{" "}
                    sobre el tractament de dades personals.{" "}
                    <span className="text-red-500">*</span>
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptComms}
                    onChange={(e) => setAcceptComms(e.target.checked)}
                    className="mt-1 accent-[var(--color-accent)]"
                  />
                  <span className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    Accepto rebre comunicacions de Gabinet Estudis Economics
                    (GLLG) relacionada amb els nostres serveis
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent-light)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Enviant..." : "Enviar missatge"}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
