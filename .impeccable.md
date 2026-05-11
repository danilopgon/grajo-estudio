# Grajo Estudio — Design Context

## Design Context

### Users
Small regional businesses, cultural institutions, nonprofits, and organisations that want craft and honesty over volume and templates. They arrive with a real project, some scepticism of generic agencies, and a need for a studio that understands both technical rigour and human context. Their job: find someone trustworthy who will handle the whole digital experience coherently — not fragment it across vendors.

### Brand Personality
**Three words: Honest · Crafted · Grounded**

Grajo is a small technical-creative boutique — two people who come from social work, graphic design, communication, and transmedia narrative, now building digital products and experiences. The voice is direct, personal, and unpretentious. It uses restraint as a signal of quality. It does not chase trends or perform innovation. The emotional goal is **trust + inspiration + down-to-earth**: visitors should feel relief ("finally someone sane") combined with quiet confidence in the studio's capabilities.

The core positioning is: **"a boutique technical studio with creative sensitivity"** — not "an audiovisual studio that also does websites". Development, accessibility, UX/UI, digital identity, rescue/refactor work, automation, and selected audiovisual/narrative work all coexist within one coherent ecosystem. The audiovisual side is an extension of how Grajo thinks about digital experiences, not a competing identity.

### Aesthetic Direction

**Visual tone:** Warm brutalism. Neo-brutalist structure (hard shadows, solid borders) softened by an organic, earthy palette, grain texture, and editorial typographic sensibility. The design should feel **tactile and handmade** — like a well-produced cultural publication, not a SaaS dashboard or agency portfolio reel.

**References that resonate:**
- **Blackie Books** → editorial warmth, cultural feel, human tone, tactile design
- **Penguin Books / literary publishing** → typography-first hierarchy, calm considered layouts
- **A24** → narrative pacing, atmosphere, restraint — atmosphere over spectacle
- **Linear** → clarity, precision, product-first minimalism
- **Stripe / Vercel** → technical communication with strong visual rhythm
- **Locomotive / Studio Freight** → elegant, cinematic motion without excess

**Anti-references (explicitly avoid):**
- Trendy "creative dev agency" with flashy scroll experiments
- SaaS startup aesthetics (blue gradients, floating 3D shapes, particle fields)
- Excessive 3D, loud colour gradients, or fake innovation language
- Overdesigned hero sections that perform creativity
- Corporate, templated, or interchangeable agency sites

**Atmosphere:** Cuenca, Spain — quieter, grounded. Not metropolitan bustle. Not coastal brightness. The earthy palette (cream, sand, earth brown, terracotta, ochre) already encodes this. Grain texture and clay shadows reinforce the tactile quality. This atmosphere should subtly exist without being thematic wallpaper.

**Light mode only.** Dark mode tokens exist as shadcn defaults but are not used.

### Design Principles

1. **Editorial over agency.** Layouts, spacing, and typographic hierarchy should feel like a well-designed cultural publication. Information should breathe. Sections read as composed, not filled. DM Serif Display is the prestige voice; Bricolage Grotesque and Instrument Sans support it — never compete.

2. **Restraint is the craft signal.** Fewer elements, executed precisely. Intentional whitespace is not absence — it communicates confidence. Every decorative element must earn its place: the grain texture, the feather motif, the italic "g" watermark. Nothing decorative by default.

3. **Technical and human speak the same language.** Code precision and narrative warmth are not opposites — they are the same thing applied to different materials. Design decisions should never let one register overwhelm the other. A section about WCAG compliance should feel as human as the manifesto.

4. **Motion reveals; it never performs.** Every animation should reveal content, guide attention, or reinforce rhythm. GSAP/Lenis smoothness is present but quiet. Parallax, stagger, and scroll-linked effects should feel like the page breathing, not showing off. Always honour `prefers-reduced-motion`.

5. **Accessibility is foundational, not a feature.** WCAG 2.2 AA minimum on all new work. `--orange-accessible` (#8B3A1E, 6.1:1 on cream) for any text that carries meaning. Semantic HTML first. Focus states visible and intentional. Never sacrifice contrast for aesthetics.

---

## Token Reference

### Palette
| Token | Hex | Role |
|---|---|---|
| `--cream` | `#F5EDE3` | Page background |
| `--cream-light` | `#FAF6F1` | Card / section background |
| `--sand` | `#E8DDD0` | Borders, muted surfaces |
| `--earth` | `#3D3229` | Primary text, dark bg, neo-shadow colour |
| `--earth-mid` | `#5C4D3C` | Secondary / body text |
| `--orange` | `#E8724A` | Brand accent — large decorative text only |
| `--orange-soft` | `#F2A47C` | Subtle accent on dark bg |
| `--orange-accessible` | `#8B3A1E` | **All text on light bg** — 6.1:1 on cream |
| `--ochre` | `#C4953A` | Accent variation |
| `--black` | `#1A1714` | Deep dark |
| `--white` | `#FFFDF9` | Button text on orange bg |

### Typography
| Variable | Font | Role |
|---|---|---|
| `--font-display` | DM Serif Display | Hero headings, manifesto numbers, large display |
| `--font-heading` | Bricolage Grotesque | Section labels, card headings, UI type |
| `--font-body` | Instrument Sans | Body copy, captions, form fields |

### Surface treatments
- `.clay` — soft neumorphic shadow for cards on cream bg
- `.neo-shadow` — `4px 4px 0 var(--earth)` hard shadow; the primary "brutalist" card treatment
- `.border-neo` — `2.5px solid var(--earth)` border
- Grain texture overlay: `body::after`, `opacity: 0.025`, SVG fractal noise
- `--radius: 16px` base; `--radius-sm: 10px`; `--radius-pill: 50px`

---

## Positioning Notes (for copy & section design)

- **Primary identity:** Boutique technical studio (frontend, digital products, accessibility, UX/UI, digital identity, rescue/refactor, automation)
- **Secondary/integrated:** Visual narrative and motion — part of how Grajo thinks about digital experiences, not a competing service line
- Avoid over-emphasising the audiovisual side; it should feel integrated, not foregrounded
- "Rescate técnico" (technical rescue) is a real differentiator — refactors, MVPs, inherited codebases, AI code reviews
- Accessibility is both a core service and a lived value — it appears in the product, not just the pitch
