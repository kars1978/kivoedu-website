# KivoEdu Website — UI Design System

**Read this before making any UI changes to the website.**

---

## Visual Identity

Dark-mode-only. Deep navy/near-black backgrounds with subtle radial glow accents in cyan, blue, green, and amber. Glassmorphism cards. Everything is space-efficient, clean, and premium-feeling — never dense or corporate.

---

## Color Tokens

All colors must come from these CSS custom properties defined in `app/globals.css`. **Never hardcode colors.**

| Token | Value | Use |
|---|---|---|
| `--bg` | `#070a12` | Page background |
| `--bg-deep` | `#050812` | Deeper background variant |
| `--panel` | `rgba(13,19,32,0.78)` | Card/panel backgrounds |
| `--panel-strong` | `rgba(17,27,44,0.86)` | Elevated panel backgrounds |
| `--line` | `rgba(196,217,255,0.13)` | Subtle borders |
| `--line-strong` | `rgba(196,217,255,0.25)` | Stronger borders |
| `--text` | `#f4f7fb` | Primary text |
| `--muted` | `#afbad0` | Secondary / body text |
| `--soft` | `#78859b` | Tertiary / placeholder text |
| `--cyan` | `#4fd1c5` | Cyan accent |
| `--blue` | `#79a7ff` | Blue accent |
| `--green` | `#7ee787` | Green accent |
| `--orange` | `#ffb86b` | Orange accent |
| `--accent` | `#ffd166` | Gold/yellow primary accent |
| `--accent-ink` | `#171101` | Text on gold backgrounds |
| `--max` | `1180px` | Max content width |
| `--shadow` | `0 30px 90px rgba(0,0,0,0.34)` | Elevation shadow |

---

## Typography

Font: **Geist Sans** (`var(--font-geist-sans)`), fallback `Inter, system-ui, sans-serif`.
Headings use `letter-spacing: 0`. Body uses `line-height: 1.7–1.76`.

Use `clamp()` for all heading sizes so they scale fluidly:

| Element | `font-size` | `line-height` |
|---|---|---|
| `h1` | `clamp(2.55rem, 4.8vw, 4.35rem)` | `1.0` |
| `h2` | `clamp(2.2rem, 3.8vw, 3.6rem)` | `1.04–1.06` |
| `h3` | `clamp(1rem, 1.4vw, 1.22rem)` | `1.25–1.3` |
| Body / `p` | `clamp(0.96rem, 1.2vw, 1.14rem)` | `1.72–1.76` |
| Eyebrow kicker | `0.68–0.76rem`, weight 800, `letter-spacing: 0.12–0.14em`, uppercase | — |
| Small label | `0.72–0.82rem` | — |

Gradient text pattern (accent headlines):
```css
background: linear-gradient(135deg, #f4f7fb 8%, var(--cyan) 46%, var(--blue) 72%, var(--accent) 100%);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
```

---

## Layout & Containers

Max width: `--max` = 1180px. Use the standard container pattern throughout:

```css
/* Desktop */
width: min(var(--max), calc(100% - 48px));
margin: 0 auto;

/* Mobile (<640px) — override to 16px side margins */
width: min(var(--max), calc(100% - 32px));
```

Section vertical padding: `80–112px` desktop, `48–80px` tablet, `40–56px` mobile.  
Section separator: `border-top: 1px solid rgba(196, 217, 255, 0.1)`.

---

## Cards (Glassmorphism)

Standard dark card pattern. Do not deviate from this without a strong reason.

```css
border: 1px solid rgba(196, 217, 255, 0.12);
border-radius: 18px;                          /* use 16–28px depending on size */
background:
  linear-gradient(145deg, rgba(255,255,255,0.068), rgba(255,255,255,0.026)),
  rgba(13, 19, 32, 0.62);
box-shadow:
  inset 0 1px 0 rgba(255,255,255,0.055),
  0 14px 38px rgba(0,0,0,0.16);
backdrop-filter: blur(12px);
```

Hover state (add `transition: transform 180ms ease, border-color 180ms ease, background 180ms ease`):
```css
transform: translateY(-4px);
border-color: rgba(196, 217, 255, 0.22);
```

---

## Buttons

Two global button classes live in `app/globals.css` — use these before creating page-specific ones.

| Class | Use case |
|---|---|
| `.btn-kivo` | Primary indigo gradient pill |
| `.btn-kivo-ghost` | Ghost/secondary pill |

Both are `min-height: 48px`, `border-radius: 999px`, `font-size: 0.93rem`, `font-weight: 760`.

**On mobile**: buttons should be `width: 100%; justify-content: center` so they fill the column.

---

## Icons

Use **lucide-react exclusively** for all product icons. `strokeWidth={1.6–1.8}` is the standard weight.

Icon container pattern:
```css
width: 40–58px; height: 40–58px;
border-radius: 50% or 12–16px;
border: 1px solid color-mix(in srgb, <tint> 28%, rgba(196,217,255,0.12));
color: <tint>;
background: color-mix(in srgb, <tint> 12%, rgba(255,255,255,0.035));
box-shadow: inset 0 1px 0 rgba(255,255,255,0.075);
```

---

## Backgrounds & Glows

Section backgrounds combine radial-gradient glow accents with a dark linear-gradient base:

```css
background:
  radial-gradient(ellipse 54% 42% at 14% 10%, rgba(126,231,135,0.1), transparent),
  radial-gradient(ellipse 48% 46% at 88% 18%, rgba(255,209,102,0.08), transparent),
  linear-gradient(180deg, rgba(7,12,23,0.94), rgba(8,14,26,0.9));
```

Keep glow opacities at `0.07–0.22`. Going higher makes the page feel garish.  
The homepage uses a subtle 72×72px grid texture (`root::before`) — this is a homepage-only effect.

---

## Animations

- Hover transitions: `180ms ease` on `transform`, `border-color`, `background`, `box-shadow`.
- Ambient/floating animations: `ease-in-out infinite alternate`, duration 13–20s.
- Always add a `@media (prefers-reduced-motion: reduce)` block that disables animations and transitions.
- Use `will-change: transform` on elements with CSS animations.

---

## Sections Structure Pattern

Every page section follows this structure:

```css
.my-section {
  position: relative;
  z-index: 1;
  padding: 104px 0 112px;         /* reduce on mobile */
  overflow: hidden;
  border-top: 1px solid rgba(196, 217, 255, 0.1);
  background: <radial glows> + <linear-gradient dark>;
}
.my-section-inner {
  width: min(var(--max), calc(100% - 48px));
  margin: 0 auto;
}
```

---

## Mobile & Tablet — Required Rules

**Every new page and component must be responsive.** This is non-negotiable.

### Breakpoints

| Breakpoint | Target | Key changes |
|---|---|---|
| `max-width: 960px` | Tablet | Grids collapse to 1–2 cols; hero stacks; chrome mockups max 560px |
| `max-width: 760px` | Tablet/nav | Nav wraps to 2-row layout (already handled in `SiteNav`) |
| `max-width: 640px` | Mobile | Reduced paddings; full-width buttons; decorative chrome hidden; footer stacks |

### Mobile checklist — verify before shipping any page

- [ ] `pp-hero` (or equivalent) top padding ≤ 88px (SiteNav is ~120px on mobile, so 112px+ creates excessive whitespace)
- [ ] Section paddings overridden: `padding: 48px 0 40px` or smaller at ≤640px
- [ ] Container uses 16px side margins: `width: min(var(--max), calc(100% - 32px))`
- [ ] CTA buttons are full-width: `width: 100%; justify-content: center` at ≤640px
- [ ] Decorative browser chrome mockups have `display: none` at ≤640px (they're too wide)
- [ ] Multi-column grids (3–4 col) collapse to 1 col by 960px
- [ ] `overflow-x: hidden` on the page root to prevent horizontal scroll from glows
- [ ] `@media (prefers-reduced-motion: reduce)` block present for all animations/transitions
- [ ] Footer: `flex-direction: column; align-items: flex-start; gap: 12px` at ≤640px

### Mobile spacing scale

| Property | Desktop | Tablet (≤960px) | Mobile (≤640px) |
|---|---|---|---|
| Hero section padding | `128–136px 0 86–96px` | `104px 0 72px` | `80–88px 0 52–56px` |
| Section padding | `80–112px 0` | `64–80px 0` | `40–52px 0` |
| Container side margin | 24px each side | 24px | 16px each side |
| Card padding | `20–28px` | `18–24px` | `14–18px` |

### Grid collapse rules

```css
/* 3-col or 4-col grids → 1 col by 960px */
@media (max-width: 960px) {
  .my-grid { grid-template-columns: 1fr; }
}

/* Hero 2-col → 1 col by 960px */
@media (max-width: 960px) {
  .hero-inner { grid-template-columns: 1fr; gap: 40px; }
}
```

---

## Reusable Patterns

### Eyebrow / kicker label
```css
font-size: 0.72rem; font-weight: 820; letter-spacing: 0.13em;
text-transform: uppercase; color: var(--blue); /* or --cyan, --accent */
```

### Section heading block (centered)
```css
max-width: 720–740px; margin: 0 auto; text-align: center;
/* h2 */ font-size: clamp(2.2rem, 3.8vw, 3.6rem); color: var(--text);
/* p  */ margin: 18–20px auto 0; color: var(--muted); max-width: 620–660px;
```

### Pill badge / chip
```css
display: inline-flex; align-items: center; gap: 8px;
min-height: 34px; padding: 0 13px; border-radius: 999px;
border: 1px solid rgba(196, 217, 255, 0.2);
background: rgba(255, 255, 255, 0.045);
color: var(--muted); font-size: 0.82rem; font-weight: 740;
```

### Feature card row (icon + text)
```css
display: grid; grid-template-columns: auto minmax(0, 1fr);
gap: 13px; padding: 16px; border-radius: 16px;
/* use card glassmorphism pattern above */
```

---

## What Not to Do

- Do not hardcode any color — always use a token from `globals.css`
- Do not use fonts other than Geist Sans / Geist Mono
- Do not use any icon library other than `lucide-react`
- Do not add Tailwind utility classes for colors or spacing — this project uses CSS custom properties and scoped `<style>` blocks
- Do not ship a page without testing at 375px (iPhone SE), 768px (iPad), and 1280px
- Do not use `font-weight` values outside `400–820` — Geist supports granular weights, use them
- Do not use `px` for font sizes in new code — use `rem` or `clamp()`
