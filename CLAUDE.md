@AGENTS.md

# Grajo Estudio — Project Context

## What this is

Single-page marketing landing for **Grajo Estudio**, a web development studio based in Cuenca, Spain. Contact: hola@grajoestudio.com.

Six sections on `/`: Hero → Servicios → Manifiesto → Narrativa → Contacto. All navigation is anchor-based (`#servicios`, `#manifiesto`, etc.) — there are no secondary route pages.

Blog lives at `/blog` (MDX-powered, static).

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2, App Router, Turbopack |
| Styling | Tailwind v4 (CSS-first — config is in `globals.css`, not `tailwind.config.ts`) |
| Components | shadcn/ui built on **@base-ui/react** (NOT Radix UI) |
| Animations | GSAP + ScrollTrigger, Lenis smooth scroll |
| Validation | Zod v4 |
| Email | Nodemailer via `/api/contact` |
| Language | TypeScript throughout |

---

## Critical gotchas

### Tailwind v4
`tailwind.config.ts` does not drive runtime config. The `@theme inline {}` block in `src/app/globals.css` is authoritative. Add/change tokens there.

### shadcn on Base UI (not Radix)
- Props use `render` instead of `asChild`. e.g. `<Dialog.Trigger render={<Button />}>`, NOT `<Dialog.Trigger asChild><Button /></Dialog.Trigger>`
- `Button` from `@base-ui/react/button` expects a native `<button>` — do **not** use `render={<a>}` on it.
- For link-styled buttons, use `<a className={cn(buttonVariants({ variant, size }))}>` directly.

### buttonVariants — server-safe import
`src/components/ui/button-variants.ts` has no `'use client'` — import from here in Server Components.
`src/components/ui/button.tsx` re-exports it for Client Components that already import Button.

### Zod v4
`z.string().email()` is deprecated. Use `z.email()` (standalone, not chained).

### GSAP initial state
Never use Tailwind opacity/transform classes as GSAP initial state — they conflict (different CSS variable systems). Use `gsap.set(el, { opacity: 0, y: 40 })` inside the effect instead. Gate everything on `prefers-reduced-motion`.

### prefers-reduced-motion
Two layers:
1. CSS: `@media (prefers-reduced-motion: reduce)` block in `globals.css` (collapses transitions/animations)
2. JS: `window.matchMedia('(prefers-reduced-motion: reduce)')` check in every animation component — reveal elements immediately (`el.style.opacity = '1'`) and return early.

---

## Design system

**Palette** (CSS custom properties in `:root`):

| Token | Hex | Usage |
|---|---|---|
| `--cream` | `#F5EDE3` | Page background |
| `--cream-light` | `#FAF6F1` | Cards |
| `--sand` | `#E8DDD0` | Borders, muted |
| `--earth` | `#3D3229` | Primary text, dark bg |
| `--earth-mid` | `#5C4D3C` | Secondary text |
| `--orange` | `#E8724A` | Brand accent (decorative/large text only — 2.9:1 on cream) |
| `--orange-soft` | `#F2A47C` | Subtle accent |
| `--orange-accessible` | `#8B3A1E` | **Text on light bg** (6.1:1 on cream — WCAG AA) |
| `--white` | `#FFFDF9` | Button text on orange |

**Typography:** DM Serif Display (`--font-display`) for headings/hero, Instrument Sans (`--font-body`) for body.

**Shadows:**
- `.clay` — soft neumorphic (cards)
- `.neo-shadow` — hard 4px offset (buttons)
- `.border-neo` — 2.5px earth border

**Accessibility rule:** Never use `--orange` for body text. Use `--orange-accessible` instead.

---

## File structure

```
src/
├── app/
│   ├── api/contact/route.ts     # Nodemailer + Zod validation
│   ├── blog/                    # MDX blog (static)
│   ├── globals.css              # Tailwind v4 theme + Grajo tokens
│   ├── layout.tsx               # Header + SmoothScrollProvider + Footer
│   └── page.tsx                 # Composes all landing sections
├── components/
│   ├── animations/
│   │   ├── fade-up.tsx          # GSAP ScrollTrigger fade-up (client)
│   │   ├── stagger-children.tsx # GSAP stagger wrapper (client)
│   │   └── smooth-scroll-provider.tsx  # Lenis (client)
│   ├── layout/
│   │   ├── header.tsx           # Fixed nav + CTA
│   │   ├── footer.tsx           # Dark footer
│   │   └── mobile-nav.tsx       # Sheet-based mobile nav
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── servicios.tsx
│   │   ├── manifiesto.tsx       # Client — GSAP timeline per item
│   │   ├── narrativa.tsx
│   │   └── contacto.tsx         # Client — form with fetch to /api/contact
│   └── ui/
│       ├── button-variants.ts   # CVA variants — NO 'use client', safe for SSR
│       ├── button.tsx           # Base UI Button wrapper — 'use client'
│       ├── card.tsx             # Clay-style card
│       └── badge.tsx            # + accent variant
└── lib/
    ├── fonts.ts
    ├── mdx.ts
    └── utils.ts
```

---

## Commands

```bash
npm run dev      # Dev server (Turbopack)
npm run build    # Production build — run this to verify before committing
npm run lint
```

---

## Environment variables

Copy `.env.local.example` → `.env.local`. Required for contact form:

```
SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS
CONTACT_TO   # defaults to SMTP_USER if unset
```

---

## Conventions

- **English** for all variable/token/class names. Spanish only in UI copy.
- Server Components by default; `'use client'` only when GSAP or React state is needed.
- No `<Button render={<a>}>` — use `<a className={cn(buttonVariants({...}))}>` for anchor CTAs.
- Keys from stable IDs (not array index) in lists.
- `clamp()` for fluid sizing, never fixed `px` for section spacing.
