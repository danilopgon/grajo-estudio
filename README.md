# Grajo Estudio

Web de [Grajo Estudio](https://grajoestudio.com) — estudio de desarrollo web y narrativa visual con base en Cuenca, fundado por [@danilopgon](https://github.com/danilopgon) y [@mloherr](https://github.com/mloherr).

Código limpio. Accesibilidad real. Mirada humana.

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16.2 · App Router · Turbopack |
| Estilos | Tailwind v4 (CSS-first via `@theme inline`) |
| Componentes | shadcn/ui sobre Base UI |
| Animaciones | GSAP + ScrollTrigger · Lenis |
| Blog | MDX · `next-mdx-remote-client` · `gray-matter` |
| Formulario | Nodemailer · Zod v4 |
| Lenguaje | TypeScript |

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (Turbopack)
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Variables de entorno

Copia el fichero de ejemplo y rellena los valores SMTP:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_SITE_URL=https://grajoestudio.com

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=hola@grajoestudio.com
SMTP_PASS=tu-app-password

CONTACT_TO=hola@grajoestudio.com   # opcional, por defecto usa SMTP_USER
```

> Con Gmail: activa la verificación en dos pasos y genera una [App Password](https://myaccount.google.com/apppasswords) en lugar de usar tu contraseña normal.

---

## Estructura

```
src/
├── app/
│   ├── api/contact/       # Ruta API — Nodemailer + Zod
│   ├── blog/              # Índice y posts MDX
│   ├── globals.css        # Tokens Tailwind v4 + estilos prose
│   └── page.tsx           # Landing (Hero → Servicios → Manifiesto → Narrativa → Contacto)
├── components/
│   ├── animations/        # FadeUp, StaggerChildren, SmoothScrollProvider
│   ├── layout/            # Header, Footer, MobileNav
│   ├── sections/          # Una sección = un fichero
│   └── ui/                # Componentes shadcn personalizados
├── content/blog/          # Entradas MDX
└── lib/
    ├── fonts.ts
    ├── mdx.ts             # getAllPosts, getPostBySlug, readingTime
    └── utils.ts
```

---

## Comandos

```bash
npm run dev      # Servidor local con Turbopack
npm run build    # Build de producción
npm run start    # Sirve el build
npm run lint     # ESLint
```

---

## Paleta

| Token | Hex | Uso |
|---|---|---|
| `cream` | `#F5EDE3` | Fondo principal |
| `earth` | `#3D3229` | Texto + fondos oscuros |
| `earth-mid` | `#5C4D3C` | Texto secundario |
| `orange` | `#E8724A` | Acento decorativo |
| `orange-accessible` | `#8B3A1E` | **Texto sobre fondo claro** (6.1:1, WCAG AA) |
| `sand` | `#E8DDD0` | Bordes, fondos suaves |

Los tokens están definidos en `@theme inline {}` dentro de `src/app/globals.css`, lo que permite usarlos directamente como clases Tailwind: `text-earth`, `bg-orange`, etc.

---

## Blog

Los posts van en `src/content/blog/` como ficheros `.mdx` con este frontmatter:

```yaml
---
title: "Título del post"
description: "Descripción corta."
date: "2026-03-21"
tags: ["etiqueta", "otra"]
---
```

El tiempo de lectura se calcula automáticamente (media de 230 palabras/min en español).

---

## Accesibilidad

- Contraste mínimo WCAG AA en todos los textos
- `prefers-reduced-motion`: animaciones desactivadas a nivel CSS y JS
- Skip link al contenido principal
- Formulario con errores por campo, `aria-invalid` y `aria-describedby`
- Landmarks semánticos en todas las secciones

---

## Autores

- **Dani** — [@danilopgon](https://github.com/danilopgon)
- **María** — [@mloherr](https://github.com/mloherr)
