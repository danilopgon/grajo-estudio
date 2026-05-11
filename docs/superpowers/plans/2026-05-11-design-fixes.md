# Design Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix five design/UX issues identified in the /critique audit: nav contrast, hero text contrast, contact friction (floating CTA), form success state + stale copy, and the Accesibilidad section's fear-first framing.

**Architecture:** Targeted edits to existing components plus one new client component (`FloatingCta`). No new dependencies. The floating CTA uses IntersectionObserver on the `#top` section to know when to appear. All other changes are copy or className swaps.

**Tech Stack:** Next.js App Router, Tailwind v4 (token names match `--color-*` entries in `globals.css` `@theme` block), TypeScript.

---

## Files

| Action | Path | What changes |
|--------|------|--------------|
| Modify | `src/components/layout/header.tsx` | nav hover color |
| Modify | `src/components/sections/hero.tsx` | service description opacity |
| **Create** | `src/components/layout/floating-cta.tsx` | new sticky CTA |
| Modify | `src/app/layout.tsx` | render FloatingCta |
| Modify | `src/components/sections/contacto.tsx` | success state copy + stale tagline |
| Modify | `src/components/sections/accesibilidad-eaa.tsx` | reorder content |

---

## Task 1 — Nav hover contrast

**Files:**
- Modify: `src/components/layout/header.tsx:55`

The nav links use `hover:text-orange` (`#E8724A`), which yields ~2.9:1 on the cream background. WCAG AA requires 4.5:1 for normal-weight text. `text-orange-accessible` (`#8B3A1E`) gives 6.1:1 — already used everywhere else for text.

- [ ] **Step 1: Apply the fix**

In `src/components/layout/header.tsx` line 55, change the className on the `<a>` inside the nav map:

```tsx
className="font-body text-[0.92rem] font-medium text-earth transition-colors hover:text-orange-accessible focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-accessible rounded-sm"
```

(Only change: `hover:text-orange` → `hover:text-orange-accessible`)

- [ ] **Step 2: Verify**

Run `npm run dev` and hover each nav link. The hover color should be a darker terracotta-brown, not the bright orange. Check in browser devtools that the computed color on hover is `#8B3A1E`.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/header.tsx
git commit -m "fix(a11y): nav hover uses orange-accessible (6.1:1) not orange (2.9:1)"
```

---

## Task 2 — Hero service description contrast

**Files:**
- Modify: `src/components/sections/hero.tsx:109`

The service description spans inside the dark feature card use `text-cream/55` at `0.75rem`. At 55% opacity of `#FFFDF9` on `#3D3229`, the effective contrast is marginal for 12px text, which requires 4.5:1 under WCAG AA. Raising to 70% brings it above threshold while keeping the visual hierarchy (name above > description below).

- [ ] **Step 1: Apply the fix**

In `src/components/sections/hero.tsx`, find line 109 and change `text-cream/55` to `text-cream/70`:

```tsx
<span className="font-body text-[0.75rem] leading-[1.45] text-cream/70">
  {s.d}
</span>
```

- [ ] **Step 2: Verify**

Visually inspect the dark feature card in the browser. The description line should be slightly more readable than before, with the service name still clearly more prominent. The hierarchy (name > description) should still read.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/hero.tsx
git commit -m "fix(a11y): hero service description opacity 55%->70% for WCAG contrast"
```

---

## Task 3 — Floating CTA

**Files:**
- Create: `src/components/layout/floating-cta.tsx`
- Modify: `src/app/layout.tsx`

A sticky "Hablemos →" button that appears after the hero (`#top`) scrolls out of view. This gives high-intent visitors a shortcut to the contact form without scrolling through all 9 sections.

Implementation: IntersectionObserver watches the `#top` section. When it leaves the viewport, the button fades in. CSS `transition-all` handles the animation. Respects `prefers-reduced-motion` by skipping the transition class.

- [ ] **Step 1: Create the component**

Create `src/components/layout/floating-cta.tsx`:

```tsx
'use client'

import { useEffect, useState } from 'react'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/utils'

export function FloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href="#contacto"
      aria-label="Ir al formulario de contacto"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        buttonVariants({ variant: 'grajo-primary', size: 'pill' }),
        'fixed bottom-6 right-6 z-40 motion-safe:transition-all motion-safe:duration-300',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      )}
    >
      Hablemos →
    </a>
  )
}
```

Key details:
- `aria-hidden` and `tabIndex={-1}` when invisible: screen readers skip it.
- `motion-safe:transition-all` means the slide-fade only runs when the user hasn't requested reduced motion. When they have, it snaps instantly.
- Bottom-right at `bottom-6 right-6` works on all screen sizes. On mobile, the header CTA is already hidden, so this fills the gap.

- [ ] **Step 2: Add to layout**

In `src/app/layout.tsx`, import and render `FloatingCta`. It must be inside `SmoothScrollProvider` (so it has access to the scrolled DOM), but it can sit anywhere in the render order — place it after `<Header />`:

```tsx
import { FloatingCta } from '@/components/layout/floating-cta'

// ... inside RootLayout, inside <SmoothScrollProvider>:
<SmoothScrollProvider>
  <Header />
  <FloatingCta />
  {children}
  <Footer />
</SmoothScrollProvider>
```

- [ ] **Step 3: Verify**

Run `npm run dev`, open the landing page, and scroll past the hero. The "Hablemos →" button should appear in the bottom-right. Clicking it should scroll to the contact form. Scroll back to the top — button should disappear. Open devtools, check `prefers-reduced-motion: reduce` in the emulation tab, verify the button still appears/disappears (just without the transition).

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/floating-cta.tsx src/app/layout.tsx
git commit -m "feat(ux): floating Hablemos CTA appears after hero leaves viewport"
```

---

## Task 4 — Contact form: success state + stale copy

**Files:**
- Modify: `src/components/sections/contacto.tsx`

Two issues in the same file:
1. Success state says "Te respondemos pronto" with no timeline or fallback. High-intent visitors don't know what happens next.
2. "Disponibles para proyectos en 2026" will go stale. Replace with a non-dated signal.

- [ ] **Step 1: Fix the success state**

In `src/components/sections/contacto.tsx`, replace the success panel (lines 123–126):

```tsx
{status === 'success' ? (
  <div className="flex flex-col gap-4 rounded-[var(--radius)] border border-[rgba(245,237,227,0.1)] bg-[rgba(245,237,227,0.05)] p-8">
    <p className="font-heading text-xl font-bold text-cream">¡Recibido!</p>
    <p className="text-[rgba(245,237,227,0.7)]">
      Te respondemos en 24–48 h. Si no recibes confirmación, escríbenos a{' '}
      <a
        href="mailto:hola@grajoestudio.com"
        className="underline underline-offset-2 hover:text-orange-soft transition-colors"
      >
        hola@grajoestudio.com
      </a>
      .
    </p>
    <button
      type="button"
      onClick={() => setStatus('idle')}
      className="self-start text-[0.82rem] font-semibold uppercase tracking-[0.06em] text-orange-soft underline underline-offset-2 hover:text-cream transition-colors"
    >
      Enviar otro mensaje
    </button>
  </div>
) : (
```

- [ ] **Step 2: Fix the stale tagline**

In the same file, find line 117:

```tsx
<p className="mt-5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-cream/45">
  Cuenca, España · Disponibles para proyectos en 2026
</p>
```

Replace with:

```tsx
<p className="mt-5 text-[0.78rem] font-bold uppercase tracking-[0.06em] text-cream/45">
  Cuenca, España · Aceptamos proyectos ahora
</p>
```

- [ ] **Step 3: Verify**

Run `npm run dev`. Fill the contact form with valid data and submit (the actual email won't send in dev without SMTP config — that's fine, mock it by temporarily returning early from the API route or by submitting and checking the UI). Confirm:
- Success box shows the 24–48 h message with the email link
- "Enviar otro mensaje" resets the form to idle
- The tagline reads "Aceptamos proyectos ahora" in the left column

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/contacto.tsx
git commit -m "fix(ux): contact success state adds timeline/fallback; remove stale 2026 copy"
```

---

## Task 5 — Accesibilidad section: reframe from fear to value

**Files:**
- Modify: `src/components/sections/accesibilidad-eaa.tsx`

Current structure: giant "1.000.000 €" opens the section before any service description. This leads with fear-of-penalty, which may read as scare-tactic and signals "large enterprise only." The fix: lead with the actual service value ("we audit AND implement, in the same team"), then present the penalty as supporting context in a contained callout.

The `h2` is currently styled as body text (confusing semantics). It becomes a proper display heading. The stat moves into a styled callout box beneath.

- [ ] **Step 1: Rewrite the component**

Replace the entire content of `src/components/sections/accesibilidad-eaa.tsx`:

```tsx
import { FadeUp } from '@/components/animations/fade-up'
import { StaggerChildren } from '@/components/animations/stagger-children'

const SUBCARDS = [
  { id: 'auditorias',     t: 'Auditorías WCAG 2.2',    d: 'Diagnóstico completo con priorización.' },
  { id: 'remediacion',    t: 'Remediación técnica',    d: 'Implementamos los arreglos en tu base de código.' },
  { id: 'acompanamiento', t: 'Acompañamiento mensual', d: 'Para mantener el cumplimiento vivo.' },
]

export function AccesibilidadEaa() {
  return (
    <section
      id="accesibilidad"
      className="py-[clamp(4rem,9vh,7rem)]"
      aria-labelledby="accesibilidad-heading"
    >
      <div className="container">
        <FadeUp className="mx-auto mb-12 max-w-[760px] text-center">
          <span className="inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-orange-accessible">
            <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
            Accesibilidad digital
          </span>

          <h2
            id="accesibilidad-heading"
            className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.15] tracking-[-0.02em] text-earth"
          >
            Auditamos e implementamos<br className="hidden sm:block" /> en el mismo equipo, sobre el mismo código.
          </h2>

          <p className="mt-4 text-[1rem] leading-[1.7] text-earth-mid">
            Sin pasarte un PDF y un teléfono que no contesta. La{' '}
            <strong className="font-semibold text-earth">European Accessibility Act</strong>{' '}
            está en vigor desde junio de 2025 — y cumplir no tiene que ser un proyecto aparte.
          </p>

          <div className="mt-8 inline-flex flex-col items-center gap-1.5 rounded-[var(--radius)] border border-sand bg-cream-light px-8 py-5">
            <span
              className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[0.9] text-orange-accessible"
              aria-label="Un millón de euros"
            >
              1.000.000 €
            </span>
            <span className="text-[0.78rem] font-medium uppercase tracking-[0.06em] text-earth-mid">
              sanción máxima por incumplimiento
            </span>
          </div>
        </FadeUp>

        <StaggerChildren className="mx-auto grid max-w-[900px] gap-[18px] sm:grid-cols-3">
          {SUBCARDS.map((it) => (
            <div
              key={it.id}
              className="flex flex-col gap-1.5 rounded-[var(--radius)] border-[2.5px] border-earth bg-cream-light p-[20px_22px] shadow-[8px_8px_0_var(--earth)]"
            >
              <h3 className="font-heading text-[1.0625rem] font-bold leading-[1.2] text-earth">
                {it.t}
              </h3>
              <p className="text-[0.8125rem] leading-[1.7] text-earth-mid">{it.d}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
```

Key changes:
- `h2` is now a real display heading (the service value statement), properly sized
- The stat lives in a contained callout box (`bg-cream-light`, `border-sand`) — contained, not dominant
- The aria-label "Un millón de euros" moves onto the stat `<span>`, not the section heading

- [ ] **Step 2: Verify**

In the browser, scroll to the Accesibilidad section. The heading ("Auditamos e implementamos…") should read first and be the dominant typographic element. The stat box should appear below as supporting context — noticeable but not screaming. The three service cards below should be unchanged.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/accesibilidad-eaa.tsx
git commit -m "fix(ux): accesibilidad leads with service value; stat becomes supporting callout"
```

---

## Self-Review

**Spec coverage check:**
- ✅ Nav hover contrast (Task 1)
- ✅ Hero service description contrast (Task 2)
- ✅ Floating CTA for high-intent visitors (Task 3)
- ✅ Form success state clarity + stale copy (Task 4)
- ✅ Accesibilidad fear reframe (Task 5)
- ✅ Skip-to-main: already in `layout.tsx` — no task needed
- ✅ Footer `bg-black`: already maps to `--black: #1A1714` via `--color-black` in `@theme` — no task needed

**Placeholder scan:** No TBDs or vague steps. Every step contains the full changed code.

**Type consistency:** `FloatingCta` created in Task 3 and imported in Task 3 Step 2. `setStatus` used in Task 4 references the existing `useState<Status>` already in the component. No mismatches.
