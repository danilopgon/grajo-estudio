---
name: Grajo Estudio
description: Boutique web studio from Cuenca — honest craft, human code, accessible by default.
colors:
  cream: "#F5EDE3"
  cream-light: "#FAF6F1"
  sand: "#E8DDD0"
  earth: "#3D3229"
  earth-mid: "#5C4D3C"
  orange: "#E8724A"
  orange-hover: "#D4603A"
  orange-soft: "#F2A47C"
  orange-accessible: "#8B3A1E"
  orange-accessible-hover: "#6E2E16"
  ochre: "#C4953A"
  black: "#1A1714"
  white: "#FFFDF9"
typography:
  display:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  sm: "10px"
  base: "16px"
  pill: "50px"
spacing:
  xs: "6px"
  sm: "14px"
  md: "24px"
  lg: "clamp(2rem, 5vw, 4rem)"
  section: "clamp(4rem, 8vh, 7rem)"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.orange-hover}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.earth}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "40px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.earth}"
    rounded: "{rounded.pill}"
    padding: "0"
  card:
    backgroundColor: "{colors.cream-light}"
    textColor: "{colors.earth}"
    rounded: "{rounded.base}"
    padding: "24px"
  badge-accent:
    backgroundColor: "rgba(232,114,74,0.1)"
    textColor: "{colors.orange}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
---

# Design System: Grajo Estudio

## 1. Overview

**Creative North Star: "The Cuencan Press"**

This system is a cultural gazette that learned to build websites. It inherits the editorial warmth of small-press publishing — composed layouts, typographic authority, unhurried rhythm — and applies that sensibility to digital craft. The palette is terracotta, earth, and cream: not a metaphor for Cuenca, but the actual soil under it. The grain texture at `opacity: 0.025` isn't decoration; it is the surface.

Neo-brutalist structure anchors the interactive layer: hard 4px shadows on buttons press and shift like a physical stamp. Soft clay shadows on resting cards recall worn leather bindings. The tension between those two shadow modes — the stamp and the clay — is where the personality lives. Neither is decorative. Both communicate state and surface type.

This system explicitly rejects: flashy scroll experiments, SaaS startup aesthetics (gradients, floating 3D, particle fields), overdesigned hero sections that perform creativity, and anything generic enough to belong to a template agency. If a designer could look at a new screen and say "AI made that" without hesitation, it has failed.

**Key Characteristics:**
- Editorial over promotional — layouts breathe; information is not crammed
- Tactile surfaces — two distinct shadow modes (stamp vs. clay) communicate surface type
- Typography carries the weight — DM Serif Display is the prestige voice; Bricolage Grotesque is the working voice
- Terracotta palette, light mode only — warmth is the project's geography, not a mood board choice
- Accessibility is structural — `--orange-accessible` (#8B3A1E) for all text on light; never `--orange` (#E8724A)

## 2. Colors: The Terracotta Stack

A warm, earthy palette with a single terracotta accent family. The stack reads surface-to-core: Castilian Linen at the top, Cuencan Earth at the bottom.

### Primary
- **Terracotta Signal** (`#E8724A`): The brand's visual pulse. Decorative and display use only — watermarks, large italic headers, service numbering, badge fills. Never for body text. Its 2.9:1 contrast ratio on cream is insufficient for any text at any size.
- **Terracotta Signal hover** (`#D4603A`): Interactive state for decorative orange elements and button hover.

### Secondary
- **Sienna Ink** (`#8B3A1E`): The text-safe terracotta. 6.1:1 on cream — WCAG AA. All orange-toned text on light backgrounds uses this value, never `#E8724A`. Also: focus rings, active link states.
- **Sienna Ink deep** (`#6E2E16`): Hover state for Sienna Ink text links.
- **Pale Terracotta** (`#F2A47C`): Soft accent for dark-surface use only — section labels, sub-headings within earth-colored sections, interactive states on dark bg. Never on light bg text.
- **Golden Ochre** (`#C4953A`): Warm secondary accent. Decorative blobs, subtle depth variation.

### Neutral
- **Castilian Linen** (`#F5EDE3`): Page background. Sets the entire light-mode atmosphere.
- **Parchment** (`#FAF6F1`): Elevated surface — cards, popovers, sections above the page level.
- **Dry Sand** (`#E8DDD0`): Borders, dividers, muted input strokes. The threshold between surfaces.
- **Cuencan Earth** (`#3D3229`): Primary text, dark section backgrounds, neo-shadow color. The system's load-bearing dark.
- **Warm Walnut** (`#5C4D3C`): Secondary and body text. Slightly lighter than Earth; reads well at body size without harshness.
- **Espresso Black** (`#1A1714`): Footer background and deep overlays. Used in single-surface contexts only.
- **Paper White** (`#FFFDF9`): Button text on orange. Warm near-white; never pure `#FFFFFF`.

### Named Rules
**The Orange Two-Face Rule.** `#E8724A` and `#8B3A1E` are the same conceptual color at different contrast levels. Use `#E8724A` only when the element is purely decorative. Use `#8B3A1E` the moment any text needs to be read. Never mix them in the same typographic context.

**The Grain Rule.** The `body::after` SVG noise overlay (`opacity: 0.08`, `mix-blend-mode: multiply`) is always present. It is part of the surface — multiply blending means bright grain patches disappear and dark patches deepen the cream, like analog film grain. Do not build component screenshots or previews without it.

## 3. Typography: Three Voices, One Register

**Display Font:** DM Serif Display (400, normal + italic)
**Heading Font:** Bricolage Grotesque (variable weight)
**Body Font:** Instrument Sans (variable weight)

**Character:** DM Serif Display speaks for the studio — it belongs to headings and the prestige display layer. Bricolage Grotesque organizes and labels. Instrument Sans describes and converses. The three roles are not interchangeable.

### Hierarchy
- **Display** (400, `clamp(3rem, 7vw, 6rem)`, line-height 1.03, tracking −0.02em): Section and hero headings. DM Serif Display only. Italic `<em class="not-italic">` inside display text uses the italic font cut while preserving visual weight.
- **Headline** (700, `clamp(1.4rem, 2.5vw, 1.75rem)`, line-height 1.2, tracking −0.015em): Sub-section and card headings. Bricolage Grotesque.
- **Title** (600–700, `0.875rem–1rem`, line-height 1.3, tracking −0.005em): Card headings, named items in lists. Bricolage Grotesque.
- **Body** (400, `1.05rem`, line-height 1.75): All prose. Instrument Sans. Cap at 65–75ch.
- **Label** (700, `0.75rem`, line-height 1.4, tracking +0.12em, uppercase): Section eyebrow labels, form field labels. Instrument Sans. Light bg: Sienna Ink (`#8B3A1E`). Dark bg: Pale Terracotta (`#F2A47C`).
- **Micro** (700, `0.69rem–0.82rem`, tracking +0.06em–+0.12em, uppercase): Footer metadata, status tags. Instrument Sans.

### Named Rules
**The Display Monopoly Rule.** DM Serif Display belongs to headings and decorative display text only. Navigation, captions, labels, and body copy are prohibited.

**The Italic Signal Rule.** Italic is a Cuencan Press editorial device — it marks the human moment inside a statement. Reserve italics for deliberate rhetorical emphasis. Never for decoration or to convey urgency.

## 4. Elevation

This system uses a **hybrid vocabulary**: soft clay shadows for resting surfaces, hard neo-shadows for interactive elements. The two are never interchangeable. The header uses neither — it relies on backdrop-blur and a thin sand border for layer separation.

Clay shadows encode **materiality** — cards feel like objects resting on linen. Neo-shadows encode **interactivity** — buttons feel like stamps that press down under a finger.

### Shadow Vocabulary
- **Clay** (`box-shadow: 8px 8px 16px rgba(61,50,41,0.12), -2px -2px 8px rgba(255,253,249,0.7)`): Cards and passive containers at rest. The counter-shadow vector is required — without it the effect collapses to a flat drop shadow.
- **Clay hover** (`box-shadow: 6px 6px 12px rgba(61,50,41,0.18), -1px -1px 6px rgba(255,253,249,0.8)` + `transform: translateY(-3px)`): Tightened shadow, elevated position.
- **Neo-shadow** (`box-shadow: 4px 4px 0 #3D3229`): Buttons and interactive chips at rest. Hard, zero blur — the brutalist stamp.
- **Neo-shadow pressed** (`box-shadow: 2px 2px 0 #3D3229` + `transform: translate(2px, 2px)`): Button pressed state. The translate must exactly equal the shadow reduction.

### Named Rules
**The Two-Shadow Rule.** Clay and neo-shadow coexist, never on the same element. If it is an action (button, chip), it is neo. If it is a content container (card, panel), it is clay. If you cannot decide, it is neo.

## 5. Components

### Buttons
The pill CTA is the system's primary action object. It behaves like a physical stamp: offset at rest, pressed on interaction.

- **Shape:** Pill (50px radius). No square or standard-rounded buttons for brand CTAs.
- **Primary (grajo-primary):** Terracotta Signal background (`#E8724A`), Paper White text (`#FFFDF9`), Cuencan Earth border (2.5px), neo-shadow at rest. Hover: `translate(2px, 2px)` + shadow shrinks to `2px 2px`. Height 40px, padding 0 28px.
- **Secondary (grajo-secondary):** Paper White background, Cuencan Earth text and border, same neo-shadow press behavior.
- **Ghost (grajo-ghost):** Transparent, no border, no shadow, inline arrow suffix (`→`). Hover: text shifts to Sienna Ink. Padding 0 — aligns to text baseline.
- **Focus:** 3px ring at `rgba(139,58,30,0.5)`. Always visible.
- **Disabled:** `opacity: 0.5`, `pointer-events: none`.

### Badges / Tags
- **Accent:** `rgba(232,114,74,0.1)` fill, Terracotta Signal text (`#E8724A`), pill shape. Used only for non-critical category labels — decorative orange is acceptable here because size and context mark it as a tag, not body text.

### Cards
The clay card is the primary content container — a physical object on the linen surface.

- **Corner Style:** 16px radius.
- **Background:** Parchment (`#FAF6F1`).
- **Border:** Cuencan Earth, 2.5px.
- **Shadow:** Clay. Hover lifts 3px and tightens.
- **Padding:** 24px default; 12px for `size="sm"`.
- **Rule:** Cards are never nested.

### Inputs / Fields
Form fields live on dark-earth backgrounds. Semi-transparent to preserve the dark-section atmosphere.

- **Style:** `rgba(245,237,227,0.08)` fill, `rgba(245,237,227,0.15)` border, 10px radius, 16px horizontal / 13.6px vertical padding.
- **Placeholder:** `rgba(245,237,227,0.35)`.
- **Focus:** Border shifts to Terracotta Signal (`#E8724A`). No ring — the border is the signal.
- **Error:** Border `#f87171`; per-field error message in `0.75rem` red below the input.
- **Labels:** Uppercase, 0.82rem, Instrument Sans Bold, tracking +0.06em, Pale Terracotta (`#F2A47C`).

### Navigation
Fixed, cream-tinted backdrop-blur header. Sand border for layer separation — no shadow.

- **Background:** `rgba(245,237,227,0.88)` + `backdrop-blur: 16px`.
- **Links:** Instrument Sans, 0.92rem, medium weight, Cuencan Earth. Hover: Sienna Ink.
- **Brand:** Bricolage Grotesque, 1.35rem, extrabold, tracking −0.02em. Logo blended with `mix-blend-multiply`.
- **Desktop CTA:** `grajo-primary` pill, `hidden md:inline-flex`.

### Dark Section (Signature Pattern)
The inverted earth-surface pattern. Used in Contacto and the hero services card.

- **Background:** Cuencan Earth (`#3D3229`).
- **Primary text:** Castilian Linen (`#F5EDE3`). Secondary text at `cream/70`.
- **Labels:** Pale Terracotta (`#F2A47C`) — the only orange acceptable on dark.
- **Watermark:** Italic "g" in DM Serif Display, Terracotta Signal at `opacity: 0.18`. Prestige dark containers only.

## 6. Do's and Don'ts

### Do:
- **Do** use `--orange-accessible` (`#8B3A1E`) for any orange text on light backgrounds, at any size.
- **Do** apply the full neo-shadow press: `translate(2px, 2px)` reduces the shadow offset by exactly 2px in both directions.
- **Do** include both clay shadow vectors — the counter-shadow (`-2px -2px 8px rgba(255,253,249,0.7)`) is what lifts the card; omitting it produces a flat drop shadow.
- **Do** use `not-italic` on `<em>` inside display headings — the italic font cut is the device, not the semantic signal.
- **Do** check `prefers-reduced-motion` in every GSAP animation and reveal elements immediately when the preference is set.
- **Do** use `clamp()` for all section spacing and heading sizes. Fixed `px` is prohibited for section-level layout.
- **Do** use `<a className={cn(buttonVariants({...}))}>` for anchor CTAs. `<Button render={<a>}>` is a Base UI pattern that does not exist in this stack.
- **Do** use Sienna Ink for focus rings on light backgrounds — the `--ring` token already maps to `#8B3A1E`.

### Don't:
- **Don't** use `#E8724A` (Terracotta Signal) for any functional text on light backgrounds. It fails WCAG AA at 2.9:1. Its text-safe twin is `#8B3A1E`.
- **Don't** activate dark mode. `.dark` tokens exist as shadcn scaffolding; they are not in use and must not be enabled.
- **Don't** use gradient text (`background-clip: text` with a gradient fill). Prohibited. Emphasis is weight or size.
- **Don't** build overdesigned hero sections: no particle fields, no large animated 3D objects, no scroll-jacking for spectacle. The core anti-reference.
- **Don't** use SaaS startup aesthetics — blue gradient backgrounds, floating 3D shapes, purple/teal schemes, fake "innovation" copy.
- **Don't** use flashy scroll-driven animation for show. Cinematic restraint is the reference. A creative dev agency portfolio reel is the anti-reference.
- **Don't** nest cards. A card inside a card is always wrong — find a different hierarchy pattern.
- **Don't** use Tailwind opacity or transform classes as GSAP initial state. They conflict with GSAP's CSS variable system. Use `gsap.set(el, { opacity: 0, y: 40 })` inside the effect.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards or list items. Rewrite with full borders, background tints, or leading numbers.
- **Don't** use `--orange-soft` (`#F2A47C`) on light cream backgrounds for text. It belongs exclusively on dark-earth surfaces.
- **Don't** use `rem` or fixed `px` for section-level vertical spacing. `clamp()` is the only acceptable unit for sections.
