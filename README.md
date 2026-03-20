<p align="center">
  <img src="public/logo.png" alt="Gabinet Estudis Econòmics" width="120" />
</p>

<h1 align="center">Gabinet Estudis Econòmics</h1>

<p align="center">
  <strong>Consultoria econòmica, urbanística i social a Barcelona des de 1989</strong>
</p>

<p align="center">
  <a href="https://geeconomics.com">🌐 geeconomics.com</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="https://geeconomics.com/contacte">📧 Contacte</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="https://geeconomics.com/que-fem">📋 Serveis</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/i18n-CA%20|%20ES%20|%20EN-orange" alt="Multilingüe" />
</p>

---

## Sobre el projecte

Lloc web corporatiu de **Gabinet Estudis Econòmics (GEE)**, firma de consultoria fundada el 1989 que assessora institucions públiques i empreses privades en l'àmbit econòmic, urbanístic i social a Catalunya.

El web està dissenyat amb un estil **premium corporatiu**, amb animacions subtils, microinteraccions i una paleta de colors elegant (blau marí + daurat).

## Pàgines

| Pàgina | Descripció |
|--------|-----------|
| **Inici** | Hero slider animat amb 3 imatges, progress bar sincronitzat i CTAs |
| **Presentació** | Història de l'empresa, reconeixements i trajectòria |
| **Què fem** | 6 àrees de consultoria amb cards interactives |
| **Qui som** | Equip de 4 professionals amb targetes animades |
| **Clients** | Sectors d'actuació i àmbits de treball |
| **Contacte** | Formulari funcional amb reCAPTCHA v3 + mapa Google Maps |
| **Política de Privacitat** | Conforme RGPD / LOPDGDD — 11 seccions |
| **Política de Cookies** | Conforme LSSI-CE / RGPD — 10 seccions amb taules detallades |

## Tech Stack

| Tecnologia | Ús |
|-----------|-----|
| [Next.js 16](https://nextjs.org) | Framework React amb App Router i SSG |
| [React 19](https://react.dev) | Llibreria UI amb Server Components |
| [Tailwind CSS 4](https://tailwindcss.com) | Estils utility-first amb CSS variables |
| [TypeScript 5](https://typescriptlang.org) | Tipat estàtic |
| [next-intl v4](https://next-intl.dev) | Internacionalització (CA / ES / EN) |
| [Google Analytics 4](https://analytics.google.com) | Analítica web amb esdeveniments personalitzats |
| [Google reCAPTCHA v3](https://developers.google.com/recaptcha) | Protecció anti-spam al formulari |
| [Vercel](https://vercel.com) | Hosting i desplegament continu |

## Funcionalitats destacades

- **Multilingüe** — Català, castellà i anglès amb detecció automàtica
- **Hero slider premium** — Transicions animades, línia dorada decorativa, progress bar sincronitzat
- **Navbar glassmorphism** — Menú mòbil amb blur, logo, animació stagger al tancar
- **Pàgina 404 personalitzada** — Comptador animat 000→404, brúixola giratòria, cerca, redirecció automàtica
- **Formulari de contacte** — Enviament SMTP, validació, comptador de caràcters, tracking GA4
- **Scroll animations** — Components amb fade-up, slide-left i reveal on scroll
- **SEO optimitzat** — Open Graph, sitemap dinàmic, robots.txt, alt text a imatges
- **Analytics avançat** — Seguiment de: scroll depth, temps a pàgina, clics CTA, links externs, canvi d'idioma
- **Polítiques legals completes** — Privacitat (RGPD) i cookies (LSSI-CE) amb contingut exhaustiu
- **Responsive design** — Optimitzat per a mòbil, tauleta i escriptori
- **Accessibilitat** — ARIA labels, rols semàntics, navegació per teclat

## Estructura del projecte

```
src/
├── app/
│   └── [locale]/           # Rutes per idioma (ca, es, en)
│       ├── page.tsx         # Pàgina principal
│       ├── presentacio/     # Presentació
│       ├── que-fem/         # Serveis
│       ├── qui-som/         # Equip
│       ├── clients/         # Clients
│       ├── contacte/        # Contacte
│       ├── politica-privacitat/
│       ├── politica-cookies/
│       └── not-found.tsx    # Pàgina 404
├── components/              # Components reutilitzables
│   ├── Navbar.tsx           # Navegació amb glassmorphism
│   ├── Hero.tsx             # Slider principal
│   ├── Footer.tsx           # Peu de pàgina
│   ├── Contacte.tsx         # Formulari de contacte
│   ├── GoogleAnalytics.tsx  # Tracking GA4
│   ├── ScrollReveal.tsx     # Animacions on scroll
│   ├── LanguageSwitcher.tsx # Selector d'idioma
│   └── ...
├── i18n/                    # Configuració internacionalització
└── messages/                # Traduccions (ca.json, es.json, en.json)
```

## Desenvolupament

```bash
# Instal·lar dependències
npm install

# Servidor de desenvolupament
npm run dev

# Build de producció
npm run build

# Previsualitzar build
npm run start
```

## Desplegament

Desplegat automàticament a **Vercel**. Cada push a `main` genera un nou desplegament.

```
https://geeconomics.com
```

## Versions recents

| Versió | Descripció |
|--------|-----------|
| **v3.3.0** | Polítiques legals actualitzades, footer premium, contingut Google-compliant |
| **v3.1.0** | Pàgina 404 premium amb 7 funcionalitats |
| **v3.0.0** | Navbar premium amb glassmorphism |
| **v2.10.0** | Hero slider premium amb animacions |

---

<p align="center">
  <sub>© 2026 Gabinet Estudis Econòmics, GLLG. Tots els drets reservats.</sub>
</p>
