---
name: "Magazine Bold"
slug: "magazine-bold"
schema: "freedesignmd/v2"
description: "Loud tabloid grotesque with a hot red accent: Anton headlines in caps, Archivo text, yellow highlighter and black rules. For pop culture, fashion weeklies and celebrity news."
source: "https://freedesignmd.com/system/magazine-bold"
aesthetic: "expressive"
industry: "media"
default_mode: "light"
fonts:
  display: "Anton"
  body: "Archivo"
  mono: "Space Mono"
  google_fonts_url: "https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap"
colors:
  light:
    background: "#fffdf6"
    foreground: "#0a0a0a"
    card: "#ffffff"
    cardForeground: "#0a0a0a"
    muted: "#f0ecdc"
    mutedForeground: "#55524a"
    primary: "#e0002b"
    primaryForeground: "#ffffff"
    secondary: "#ffe500"
    secondaryForeground: "#0a0a0a"
    accent: "#ffe500"
    accentForeground: "#0a0a0a"
    border: "#0a0a0a"
    input: "#0a0a0a"
    ring: "#e0002b"
    destructive: "#b30020"
    destructiveForeground: "#ffffff"
    success: "#0f7a3a"
    successForeground: "#ffffff"
    warning: "#ffb800"
    warningForeground: "#0a0a0a"
  dark:
    background: "#0a0a0a"
    foreground: "#fffdf6"
    card: "#161616"
    cardForeground: "#fffdf6"
    muted: "#232323"
    mutedForeground: "#b4b1a6"
    primary: "#ff3b5c"
    primaryForeground: "#0a0a0a"
    secondary: "#ffe500"
    secondaryForeground: "#0a0a0a"
    accent: "#ffe500"
    accentForeground: "#0a0a0a"
    border: "#fffdf6"
    input: "#fffdf6"
    ring: "#ffe500"
    destructive: "#ff5a5a"
    destructiveForeground: "#0a0a0a"
    success: "#4ade80"
    successForeground: "#0a0a0a"
    warning: "#ffb800"
    warningForeground: "#0a0a0a"
chart:
  light: ["#e0002b", "#0a0a0a", "#ffb800", "#0f7a3a", "#2a4fd6"]
  dark: ["#ff3b5c", "#fffdf6", "#ffe500", "#4ade80", "#7aa2ff"]
type:
  display: { font: display, size: 144, size_mobile: 81, leading: 0.95, weight: 400, tracking: "-0.01em", uppercase: true }
  h1: { font: display, size: 80, size_mobile: 54, leading: 0.98, weight: 400, tracking: "0em", uppercase: true }
  h2: { font: display, size: 44, size_mobile: 35, leading: 1.02, weight: 400, tracking: "0.005em", uppercase: true }
  h3: { font: display, size: 26, size_mobile: 26, leading: 1.1, weight: 400, tracking: "0.01em", uppercase: true }
  body: { font: body, size: 17, size_mobile: 17, leading: 1.55, weight: 400, tracking: "0em" }
  small: { font: body, size: 14, size_mobile: 14, leading: 1.45, weight: 500, tracking: "0em" }
  label: { font: mono, size: 12, size_mobile: 12, leading: 1.2, weight: 700, tracking: "0.06em", uppercase: true }
  mono: { font: mono, size: 13, size_mobile: 13, leading: 1.5, weight: 400, tracking: "0em" }
spacing: [4, 8, 12, 16, 24, 32, 40, 56, 72, 96]
radius: { sm: "0", md: "0", lg: "0", xl: "0", full: "9999px" }
shadow:
  light:
    sm: "2px 2px 0 #0a0a0a"
    md: "4px 4px 0 #0a0a0a"
    lg: "8px 8px 0 #0a0a0a"
  dark:
    sm: "2px 2px 0 #ff3b5c"
    md: "4px 4px 0 #ff3b5c"
    lg: "8px 8px 0 #ff3b5c"
motion:
  duration_ms: { instant: 60, fast: 100, base: 160, slow: 280 }
  easing: { standard: "cubic-bezier(0.2, 0, 0, 1)", out: "cubic-bezier(0.1, 0.9, 0.2, 1)", in: "cubic-bezier(0.7, 0, 1, 1)" }
  reveal: { distance_px: 16, stagger_ms: 30 }
layout: { max_width: 1240, columns: 12, gutter: 20, section_y: 64, section_y_mobile: 40, measure: "60ch" }
---

# Magazine Bold, DESIGN.md

> Loud tabloid grotesque with a hot red accent: Anton headlines in caps, Archivo text, yellow highlighter and black rules. For pop culture, fashion weeklies and celebrity news.

## How to use this file

1. Save this file as `DESIGN.md` in the project root and paste the `tokens.css` block (section 10) into your global stylesheet, or import `https://freedesignmd.com/system/magazine-bold.css`, which also contains every component class.
2. **Claude Code:** add `Before any UI work, read @DESIGN.md and use only its tokens and component recipes.` to `CLAUDE.md`.
3. **Cursor:** create `.cursor/rules/design.mdc` with `alwaysApply: true` and the line `Follow @DESIGN.md for every color, font, radius, shadow, spacing and duration.`
4. **Lovable:** paste section 10 into `src/index.css` and add this file to Project Knowledge; ask for changes by role name (`primary`, `muted-foreground`), never by hex.
5. Default mode is **light**: dark mode is `class="dark"` on `<html>` (both modes are fully specified). Use semantic names only (`bg-primary`, `text-muted-foreground`, `.btn-primary`, `var(--radius-lg)`); if a value is not in this file, it does not belong in the UI.

## 1. Overview & personality

Magazine Bold is a newsstand cover shouting across the aisle. Anton sets every headline in condensed caps at up to 144px, packed at 0.95 leading; Archivo carries standfirsts and body at 17px; Space Mono tags every story with a serial and a time. Paper is bright `#fffdf6`, ink is pure `#0a0a0a`, and the accent is hot red `#e0002b` for bylines, kickers and the main action, backed by a highlighter yellow `#ffe500` used as a text-marker behind key words. Rules are thick (3px), corners are square, and buttons carry a hard offset shadow so they feel stuck on. Dark mode is the night edition: black paper with a pinker `#ff3b5c`.

**At a glance**

- Aesthetic: Bold & expressive · Industry: Media · Default mode: light
- Type: Anton (display) · Archivo (body) · Space Mono (mono)
- Brand color (`primary`): `#e0002b` light · `#ff3b5c` dark, on primary, text is `#ffffff` / `#0a0a0a`
- Corners: 0 / 0 / 0 / 0 · Container 1240px · Base motion 160ms

**Signature moves**

- Anton headlines in uppercase at up to 144px with 0.95 leading, often overlapping photos
- Highlighter yellow `secondary` swipes behind two or three key words per headline
- 3px black rules and hard offset shadows (4px 4px) on buttons and cards
- Hot-red kickers in mono caps (`EXCLUSIVE / 09:41`) above each story
- Rotated -2 degree sticker badges on covers (`NEW`, `LEAKED`) in red with white type

## 2. Color

Roles follow shadcn/ui naming, so `primary` is always the brand / main-action color and `foreground` is always body text. Every text pair below is WCAG AA (≥ 4.5:1) in both modes.

### Light mode (`:root`)

| Role | CSS variable | Value | Contrast | Usage |
|---|---|---|---|---|
| `background` | `--background` | `#fffdf6` |  | Page canvas |
| `foreground` | `--foreground` | `#0a0a0a` | 19.45:1 on background | Body text and headings on background |
| `card` | `--card` | `#ffffff` |  | Cards, panels, popovers |
| `cardForeground` | `--card-foreground` | `#0a0a0a` | 19.80:1 on card | Text on card |
| `muted` | `--muted` | `#f0ecdc` |  | Subtle fills: table headers, code, skeletons |
| `mutedForeground` | `--muted-foreground` | `#55524a` | 6.59:1 on muted | Secondary text, captions, placeholders |
| `primary` | `--primary` | `#e0002b` |  | Brand color: primary buttons, links, focus, active states |
| `primaryForeground` | `--primary-foreground` | `#ffffff` | 4.99:1 on primary | Text and icons on primary |
| `secondary` | `--secondary` | `#ffe500` |  | Secondary buttons and quiet fills |
| `secondaryForeground` | `--secondary-foreground` | `#0a0a0a` | 15.52:1 on secondary | Text on secondary |
| `accent` | `--accent` | `#ffe500` |  | Hover and selected backgrounds (rows, menu items, ghost buttons) |
| `accentForeground` | `--accent-foreground` | `#0a0a0a` | 15.52:1 on accent | Text on accent |
| `border` | `--border` | `#0a0a0a` |  | Dividers and card outlines |
| `input` | `--input` | `#0a0a0a` |  | Input borders |
| `ring` | `--ring` | `#e0002b` |  | Focus ring |
| `destructive` | `--destructive` | `#b30020` |  | Errors and destructive actions |
| `destructiveForeground` | `--destructive-foreground` | `#ffffff` | 7.15:1 on destructive | Text on destructive |
| `success` | `--success` | `#0f7a3a` |  | Positive status |
| `successForeground` | `--success-foreground` | `#ffffff` | 5.43:1 on success | Text on success |
| `warning` | `--warning` | `#ffb800` |  | Caution status |
| `warningForeground` | `--warning-foreground` | `#0a0a0a` | 11.42:1 on warning | Text on warning |
| `chart-1…5` | `--chart-1…5` | `#e0002b` `#0a0a0a` `#ffb800` `#0f7a3a` `#2a4fd6` | | Data series, in this order |

### Dark mode (`.dark`)

| Role | CSS variable | Value | Contrast | Usage |
|---|---|---|---|---|
| `background` | `--background` | `#0a0a0a` |  | Page canvas |
| `foreground` | `--foreground` | `#fffdf6` | 19.45:1 on background | Body text and headings on background |
| `card` | `--card` | `#161616` |  | Cards, panels, popovers |
| `cardForeground` | `--card-foreground` | `#fffdf6` | 17.78:1 on card | Text on card |
| `muted` | `--muted` | `#232323` |  | Subtle fills: table headers, code, skeletons |
| `mutedForeground` | `--muted-foreground` | `#b4b1a6` | 7.32:1 on muted | Secondary text, captions, placeholders |
| `primary` | `--primary` | `#ff3b5c` |  | Brand color: primary buttons, links, focus, active states |
| `primaryForeground` | `--primary-foreground` | `#0a0a0a` | 5.69:1 on primary | Text and icons on primary |
| `secondary` | `--secondary` | `#ffe500` |  | Secondary buttons and quiet fills |
| `secondaryForeground` | `--secondary-foreground` | `#0a0a0a` | 15.52:1 on secondary | Text on secondary |
| `accent` | `--accent` | `#ffe500` |  | Hover and selected backgrounds (rows, menu items, ghost buttons) |
| `accentForeground` | `--accent-foreground` | `#0a0a0a` | 15.52:1 on accent | Text on accent |
| `border` | `--border` | `#fffdf6` |  | Dividers and card outlines |
| `input` | `--input` | `#fffdf6` |  | Input borders |
| `ring` | `--ring` | `#ffe500` |  | Focus ring |
| `destructive` | `--destructive` | `#ff5a5a` |  | Errors and destructive actions |
| `destructiveForeground` | `--destructive-foreground` | `#0a0a0a` | 6.47:1 on destructive | Text on destructive |
| `success` | `--success` | `#4ade80` |  | Positive status |
| `successForeground` | `--success-foreground` | `#0a0a0a` | 11.36:1 on success | Text on success |
| `warning` | `--warning` | `#ffb800` |  | Caution status |
| `warningForeground` | `--warning-foreground` | `#0a0a0a` | 11.42:1 on warning | Text on warning |
| `chart-1…5` | `--chart-1…5` | `#ff3b5c` `#fffdf6` `#ffe500` `#4ade80` `#7aa2ff` | | Data series, in this order |

## 3. Typography

Load fonts with:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap" />
```

| Role | Font | Size (390px → 1440px) | Line height | Weight | Tracking | Style | Class |
|---|---|---|---|---|---|---|---|
| `display` | Anton | 81px → 144px | 0.95 | 400 | -0.01em | uppercase | `.type-display` |
| `h1` | Anton | 54px → 80px | 0.98 | 400 | 0em | uppercase | `.type-h1` |
| `h2` | Anton | 35px → 44px | 1.02 | 400 | 0.005em | uppercase | `.type-h2` |
| `h3` | Anton | 26px | 1.1 | 400 | 0.01em | uppercase | `.type-h3` |
| `body` | Archivo | 17px | 1.55 | 400 | 0em | – | `.type-body` |
| `small` | Archivo | 14px | 1.45 | 500 | 0em | – | `.type-small` |
| `label` | Space Mono | 12px | 1.2 | 700 | 0.06em | uppercase | `.type-label` |
| `mono` | Space Mono | 13px | 1.5 | 400 | 0em | – | `.type-mono` |

- `h1`–`h3` elements map to the roles of the same name; `display` is for one hero headline per page.
- Fluid sizes use `clamp()` between the two values (see `--type-*-size` in tokens.css).
- Only the weights in this table are loaded; never use other weights.

## 4. Spacing & layout

Spacing is a 4px scale. Use these steps only (`--space-N` = N × 4px):

| Token | `--space-1` | `--space-2` | `--space-3` | `--space-4` | `--space-6` | `--space-8` | `--space-10` | `--space-14` | `--space-18` | `--space-24` |
|---|---|---|---|---|---|---|---|---|---|---|
| px | 4 | 8 | 12 | 16 | 24 | 32 | 40 | 56 | 72 | 96 |

- Container: max 1240px, 20px side gutters (`.container`).
- Grid: 12 columns, 20px gap.
- Sections: 64px vertical padding on desktop, 40px on mobile (`.section`).
- Long text: max 60ch per line (`.prose`).
- Cover grid: one 8-column lead story with a 144px headline beside a 4-column stack of 3 teasers.
- Stories are separated by 3px black rules; sections by a 12px red bar.
- Tight rhythm: 64px between sections, 24px between teasers, no decorative air.

## 5. Shape & elevation

| Radius | Value | Use |
|---|---|---|
| `--radius-sm` | 0 | badges, checkboxes, small chips |
| `--radius-md` | 0 | buttons, inputs, tabs (= shadcn `--radius`) |
| `--radius-lg` | 0 | cards, panels, menus |
| `--radius-xl` | 0 | dialogs, hero media, large surfaces |
| `--radius-full` | 9999px | avatars, pills, toggles |

| Shadow | Mode | Value |
|---|---|---|
| `--shadow-sm` | light | `2px 2px 0 #0a0a0a` |
| `--shadow-md` | light | `4px 4px 0 #0a0a0a` |
| `--shadow-lg` | light | `8px 8px 0 #0a0a0a` |
| `--shadow-sm` | dark | `2px 2px 0 #ff3b5c` |
| `--shadow-md` | dark | `4px 4px 0 #ff3b5c` |
| `--shadow-lg` | dark | `8px 8px 0 #ff3b5c` |

`sm` = resting card · `md` = hover / raised · `lg` = dialogs and popovers. Nothing else casts a shadow.

## 6. Motion

**Slap.** Elements land with a fast 160ms ease-out and a 16px drop, while buttons physically press: on hover they shift 2px toward their offset shadow, on press they sit flat on it. Stickers snap in at -2 degrees. Everything is quick and a little aggressive.

| Token | Value | Use |
|---|---|---|
| `--duration-instant` | 60ms | press feedback, toggles |
| `--duration-fast` | 100ms | hover, focus, color changes |
| `--duration-base` | 160ms | menus, tabs, popovers, cards lifting |
| `--duration-slow` | 280ms | dialogs and scroll reveals |
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | state changes |
| `--ease-out` | `cubic-bezier(0.1, 0.9, 0.2, 1)` | entrances and reveals |
| `--ease-in` | `cubic-bezier(0.7, 0, 1, 1)` | exits |

- Scroll reveal (`.reveal` → `.reveal.is-in` via IntersectionObserver): rise 16px and fade over `--duration-slow` with `--ease-out`; siblings stagger by 30ms (`--reveal-index`).
- Use no durations other than the four above.
- `prefers-reduced-motion: reduce` → no transforms, reveals show immediately (included in tokens.css).

## 7. Components

Every component reads only variables from section 10, so light and dark mode work with no extra code. These are the exact rules (also in `https://freedesignmd.com/system/magazine-bold.css`). In React/shadcn projects, put the same declarations on the matching shadcn component variants.

### Button

```html
<button class="btn btn-primary">Save</button>  <!-- btn-secondary · btn-outline · btn-ghost -->
```

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  padding: 0 24px;
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-radius: 0;
  border: 3px solid var(--foreground);
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  transition: background-color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard);
}
.btn-primary {
  background: var(--primary);
  color: var(--primary-foreground);
  box-shadow: var(--shadow-md);
}
.btn-primary:hover:not(:disabled) {
  transform: translate(2px, 2px);
  box-shadow: var(--shadow-sm);
}
.btn-primary:active:not(:disabled) {
  transform: translate(4px, 4px);
  box-shadow: 0 0 0 transparent;
}
.btn-secondary {
  background: var(--secondary);
  color: var(--secondary-foreground);
  box-shadow: var(--shadow-md);
}
.btn-secondary:hover:not(:disabled) {
  transform: translate(2px, 2px);
  box-shadow: var(--shadow-sm);
}
.btn-secondary:active:not(:disabled) {
  transform: translate(4px, 4px);
  box-shadow: 0 0 0 transparent;
}
.btn-outline {
  background: var(--background);
  color: var(--foreground);
}
.btn-outline:hover:not(:disabled) {
  background: var(--foreground);
  color: var(--background);
}
.btn-outline:active:not(:disabled) {
  background: var(--foreground);
  color: var(--background);
  transform: translate(2px, 2px);
}
.btn-ghost {
  background: transparent;
  color: var(--foreground);
  border-color: transparent;
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 4px;
}
.btn-ghost:hover:not(:disabled) {
  background: var(--accent);
  color: var(--accent-foreground);
}
.btn-ghost:active:not(:disabled) {
  background: var(--accent);
  color: var(--accent-foreground);
  transform: translate(2px, 2px);
}
.btn:focus-visible {
  outline: 3px solid var(--ring);
  outline-offset: 3px;
}
.btn:disabled, .btn[aria-disabled="true"] {
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
}
```

### Input

```html
<input class="input" placeholder="you@company.com" />  <!-- aria-invalid="true" for errors -->
```

```css
.input {
  display: block;
  width: 100%;
  height: 48px;
  padding: 0 14px;
  font-family: var(--font-sans);
  font-size: 16px;
  color: var(--foreground);
  background: var(--card);
  border: 3px solid var(--input);
  border-radius: 0;
  outline: none;
  transition: border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard), background-color var(--duration-fast) var(--ease-standard);
}
.input::placeholder {
  color: var(--muted-foreground);
  opacity: 1;
}
.input:hover:not(:disabled):not(:focus) {
  border-color: var(--primary);
}
.input:focus, .input:focus-visible {
  border-color: var(--ring);
  box-shadow: var(--shadow-md);
}
.input[aria-invalid="true"] {
  border-color: var(--destructive);
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--destructive) 22%, transparent);
}
.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: var(--muted);
}
```

### Card

```html
<article class="card">…</article>  <!-- add card-interactive when the whole card is a link -->
```

```css
.card {
  background: var(--card);
  color: var(--card-foreground);
  border: 3px solid var(--border);
  border-radius: 0;
  box-shadow: var(--shadow-md);
  padding: 20px;
  transition: border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out), background-color var(--duration-base) var(--ease-out);
}
.card-interactive:hover {
  transform: translate(2px, 2px);
  box-shadow: var(--shadow-sm);
}
```

### Badge

```html
<span class="badge badge-soft" data-tone="success">Paid</span>  <!-- badge-solid · badge-outline; tones: primary (default) · success · warning · destructive -->
```

```css
.badge {
  --tone: var(--primary);
  --tone-foreground: var(--primary-foreground);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 24px;
  padding: 0 10px;
  border-radius: 0;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1;
  white-space: nowrap;
}
.badge[data-tone="success"] {
  --tone: var(--success);
  --tone-foreground: var(--success-foreground);
}
.badge[data-tone="warning"] {
  --tone: var(--warning);
  --tone-foreground: var(--warning-foreground);
}
.badge[data-tone="destructive"] {
  --tone: var(--destructive);
  --tone-foreground: var(--destructive-foreground);
}
.badge-solid {
  background: var(--tone);
  color: var(--tone-foreground);
  border: 1px solid var(--tone);
}
.badge-soft {
  background: color-mix(in oklab, var(--tone) 24%, var(--card));
  color: var(--foreground);
  border: 1px solid color-mix(in oklab, var(--tone) 40%, transparent);
}
.badge-outline {
  background: transparent;
  color: var(--foreground);
  border: 1px solid var(--border);
}
```

### Navigation bar

```html
<nav class="nav"><a class="nav-link" aria-current="page">Home</a><a class="nav-link">Docs</a></nav>
```

```css
.nav {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 64px;
  padding: 0 24px;
  background: var(--background);
  border-bottom: 3px solid var(--foreground);
}
.nav-link {
  padding: 6px 12px;
  border-radius: 0;
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--muted-foreground);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-standard), background-color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard);
}
.nav-link:hover {
  color: var(--primary-foreground);
  background: var(--primary);
}
.nav-link[aria-current="page"] {
  color: var(--background);
  background: var(--foreground);
}
```

### Tabs

```html
<div class="tabs" role="tablist"><button class="tab" role="tab" aria-selected="true">Overview</button>…</div>
```

```css
.tabs {
  display: flex;
  gap: 8px;
}
.tab {
  height: 44px;
  padding: 0 16px;
  border: 2px solid var(--foreground);
  border-radius: 0;
  background: var(--card);
  color: var(--foreground);
  cursor: pointer;
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: color var(--duration-base) var(--ease-standard), background-color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard);
}
.tab:hover:not([aria-selected="true"]) {
  background: var(--accent);
  color: var(--accent-foreground);
}
.tab[aria-selected="true"] {
  background: var(--foreground);
  color: var(--background);
  box-shadow: 4px 4px 0 var(--primary);
}
```

### Table

```html
<table class="table"><thead><tr><th>…</th></tr></thead><tbody><tr><td>…</td></tr></tbody></table>
```

```css
.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
  font-variant-numeric: tabular-nums;
}
.table th {
  text-align: left;
  height: 40px;
  padding: 0 16px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: var(--foreground);
  color: var(--background);
}
.table td {
  height: 48px;
  padding: 0 16px;
  border-bottom: 3px solid var(--border);
  color: var(--foreground);
  transition: background-color var(--duration-fast) var(--ease-standard);
}
.table tbody tr:hover td {
  background: var(--accent);
  color: var(--accent-foreground);
}
```

### Dialog / modal

```html
<div class="dialog-overlay"><div class="dialog" role="dialog" aria-modal="true">…</div></div>
```

```css
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10,10,10,0.7);
  display: grid;
  place-items: center;
  padding: 24px;
}
.dialog {
  width: min(540px, 100%);
  background: var(--card);
  color: var(--card-foreground);
  border: 4px solid var(--border);
  border-radius: 0;
  box-shadow: var(--shadow-lg);
  padding: 28px;
}
```

### Text link

```html
<a class="link" href="…">Read more</a>
```

```css
.link {
  color: var(--foreground);
  text-decoration: underline;
  text-decoration-color: var(--primary);
  text-decoration-thickness: 3px;
  text-underline-offset: 3px;
  transition: color var(--duration-fast) var(--ease-standard), text-decoration-color var(--duration-fast) var(--ease-standard);
}
.link:hover {
  background: var(--accent);
  color: var(--accent-foreground);
}
```

## 8. Imagery & iconography

**Imagery.** High-contrast flash photography, cropped tight and tilted slightly, with halftone or duotone treatments in red and black. Headlines overlap faces and edges on purpose. Cutout stars on flat yellow or red color blocks are encouraged; soft, airy stock photography is not.

**Icons.** Chunky 2.5px square-cap line icons at 24px in black, or solid glyphs in red inside a 3px black outline. Stickers (star bursts, arrows, `NEW` flashes) are drawn as flat polygons with a hard shadow.

## 9. Do / Don't

**Do**

- Set headlines in Anton uppercase and let them overlap imagery
- Highlight two or three key words per headline with a yellow `secondary` swipe
- Use 3px black rules and hard offset shadows for every container
- Tag each story with a red mono kicker and a timestamp
- Keep body copy at 17px Archivo; keep everything else loud

**Don't**

- Don't soften: no blur, no gradients, no rounded corners
- Don't use red for anything but kickers, stickers and the main action
- Don't set body or captions in Anton; its caps are for headlines only
- Don't use light-gray borders; rules are full black (or ivory in dark mode)
- Don't use more than one sticker per card

## 10. tokens.css

Drop-in, shadcn/ui-compatible. Works with Tailwind v4 as-is (the `@theme inline` block creates `bg-primary`, `text-muted-foreground`, `font-heading`, `text-display`, `rounded-ui-lg`, `shadow-ui-md`…). Plain CSS projects can ignore the `@theme` block.

```css
/* Magazine Bold, tokens.css
 * https://freedesignmd.com/system/magazine-bold
 * shadcn/ui-compatible variables. Light on :root, dark on .dark.
 * Default mode: light.
 */
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap");

:root {
  --font-display: "Anton", Impact, 'Arial Narrow Bold', sans-serif;
  --font-sans: "Archivo", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-mono: "Space Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --type-display-size: clamp(81px, 57.60px + 6.000vw, 144px);
  --type-display-leading: 0.95;
  --type-display-weight: 400;
  --type-display-tracking: -0.01em;
  --type-h1-size: clamp(54px, 44.34px + 2.476vw, 80px);
  --type-h1-leading: 0.98;
  --type-h1-weight: 400;
  --type-h1-tracking: 0em;
  --type-h2-size: clamp(35px, 31.66px + 0.857vw, 44px);
  --type-h2-leading: 1.02;
  --type-h2-weight: 400;
  --type-h2-tracking: 0.005em;
  --type-h3-size: 26px;
  --type-h3-leading: 1.1;
  --type-h3-weight: 400;
  --type-h3-tracking: 0.01em;
  --type-body-size: 17px;
  --type-body-leading: 1.55;
  --type-body-weight: 400;
  --type-body-tracking: 0em;
  --type-small-size: 14px;
  --type-small-leading: 1.45;
  --type-small-weight: 500;
  --type-small-tracking: 0em;
  --type-label-size: 12px;
  --type-label-leading: 1.2;
  --type-label-weight: 700;
  --type-label-tracking: 0.06em;
  --type-mono-size: 13px;
  --type-mono-leading: 1.5;
  --type-mono-weight: 400;
  --type-mono-tracking: 0em;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-14: 56px;
  --space-18: 72px;
  --space-24: 96px;
  --radius: 0;
  --radius-sm: 0;
  --radius-md: 0;
  --radius-lg: 0;
  --radius-xl: 0;
  --radius-full: 9999px;
  --duration-instant: 60ms;
  --duration-fast: 100ms;
  --duration-base: 160ms;
  --duration-slow: 280ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-out: cubic-bezier(0.1, 0.9, 0.2, 1);
  --ease-in: cubic-bezier(0.7, 0, 1, 1);
  --reveal-distance: 16px;
  --reveal-stagger: 30ms;
  --container-max: 1240px;
  --gutter: 20px;
  --section-y: 64px;
  --section-y-mobile: 40px;
  --measure: 60ch;
  --background: #fffdf6;
  --foreground: #0a0a0a;
  --card: #ffffff;
  --card-foreground: #0a0a0a;
  --muted: #f0ecdc;
  --muted-foreground: #55524a;
  --primary: #e0002b;
  --primary-foreground: #ffffff;
  --secondary: #ffe500;
  --secondary-foreground: #0a0a0a;
  --accent: #ffe500;
  --accent-foreground: #0a0a0a;
  --border: #0a0a0a;
  --input: #0a0a0a;
  --ring: #e0002b;
  --destructive: #b30020;
  --destructive-foreground: #ffffff;
  --success: #0f7a3a;
  --success-foreground: #ffffff;
  --warning: #ffb800;
  --warning-foreground: #0a0a0a;
  --chart-1: #e0002b;
  --chart-2: #0a0a0a;
  --chart-3: #ffb800;
  --chart-4: #0f7a3a;
  --chart-5: #2a4fd6;
  --shadow-sm: 2px 2px 0 #0a0a0a;
  --shadow-md: 4px 4px 0 #0a0a0a;
  --shadow-lg: 8px 8px 0 #0a0a0a;
}

.dark {
  --background: #0a0a0a;
  --foreground: #fffdf6;
  --card: #161616;
  --card-foreground: #fffdf6;
  --muted: #232323;
  --muted-foreground: #b4b1a6;
  --primary: #ff3b5c;
  --primary-foreground: #0a0a0a;
  --secondary: #ffe500;
  --secondary-foreground: #0a0a0a;
  --accent: #ffe500;
  --accent-foreground: #0a0a0a;
  --border: #fffdf6;
  --input: #fffdf6;
  --ring: #ffe500;
  --destructive: #ff5a5a;
  --destructive-foreground: #0a0a0a;
  --success: #4ade80;
  --success-foreground: #0a0a0a;
  --warning: #ffb800;
  --warning-foreground: #0a0a0a;
  --chart-1: #ff3b5c;
  --chart-2: #fffdf6;
  --chart-3: #ffe500;
  --chart-4: #4ade80;
  --chart-5: #7aa2ff;
  --shadow-sm: 2px 2px 0 #ff3b5c;
  --shadow-md: 4px 4px 0 #ff3b5c;
  --shadow-lg: 8px 8px 0 #ff3b5c;
}

/* Tailwind v4: utilities like bg-primary, text-muted-foreground, font-heading, text-display, rounded-ui-lg, shadow-ui-md */
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-success: var(--success);
  --color-success-foreground: var(--success-foreground);
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --font-heading: var(--font-display);
  --font-body: var(--font-sans);
  --font-code: var(--font-mono);
  --radius-ui-sm: var(--radius-sm);
  --radius-ui-md: var(--radius-md);
  --radius-ui-lg: var(--radius-lg);
  --radius-ui-xl: var(--radius-xl);
  --text-display: var(--type-display-size);
  --text-display--line-height: var(--type-display-leading);
  --text-display--letter-spacing: var(--type-display-tracking);
  --text-display--font-weight: var(--type-display-weight);
  --text-h1: var(--type-h1-size);
  --text-h1--line-height: var(--type-h1-leading);
  --text-h1--letter-spacing: var(--type-h1-tracking);
  --text-h1--font-weight: var(--type-h1-weight);
  --text-h2: var(--type-h2-size);
  --text-h2--line-height: var(--type-h2-leading);
  --text-h2--letter-spacing: var(--type-h2-tracking);
  --text-h2--font-weight: var(--type-h2-weight);
  --text-h3: var(--type-h3-size);
  --text-h3--line-height: var(--type-h3-leading);
  --text-h3--letter-spacing: var(--type-h3-tracking);
  --text-h3--font-weight: var(--type-h3-weight);
  --text-body: var(--type-body-size);
  --text-body--line-height: var(--type-body-leading);
  --text-body--letter-spacing: var(--type-body-tracking);
  --text-body--font-weight: var(--type-body-weight);
  --text-small: var(--type-small-size);
  --text-small--line-height: var(--type-small-leading);
  --text-small--letter-spacing: var(--type-small-tracking);
  --text-small--font-weight: var(--type-small-weight);
  --text-label: var(--type-label-size);
  --text-label--line-height: var(--type-label-leading);
  --text-label--letter-spacing: var(--type-label-tracking);
  --text-label--font-weight: var(--type-label-weight);
  --text-mono: var(--type-mono-size);
  --text-mono--line-height: var(--type-mono-leading);
  --text-mono--letter-spacing: var(--type-mono-tracking);
  --text-mono--font-weight: var(--type-mono-weight);
  --shadow-ui-sm: var(--shadow-sm);
  --shadow-ui-md: var(--shadow-md);
  --shadow-ui-lg: var(--shadow-lg);
}

@layer base {
  body {
    background: var(--background);
    color: var(--foreground);
    font-family: var(--font-sans);
    font-size: var(--type-body-size);
    line-height: var(--type-body-leading);
    font-weight: var(--type-body-weight);
    letter-spacing: var(--type-body-tracking);
    -webkit-font-smoothing: antialiased;
  }
  .type-display {
    font-family: var(--font-display);
    font-size: var(--type-display-size);
    line-height: var(--type-display-leading);
    font-weight: var(--type-display-weight);
    letter-spacing: var(--type-display-tracking);
    text-transform: uppercase;
  }
  .type-h1 {
    font-family: var(--font-display);
    font-size: var(--type-h1-size);
    line-height: var(--type-h1-leading);
    font-weight: var(--type-h1-weight);
    letter-spacing: var(--type-h1-tracking);
    text-transform: uppercase;
  }
  .type-h2 {
    font-family: var(--font-display);
    font-size: var(--type-h2-size);
    line-height: var(--type-h2-leading);
    font-weight: var(--type-h2-weight);
    letter-spacing: var(--type-h2-tracking);
    text-transform: uppercase;
  }
  .type-h3 {
    font-family: var(--font-display);
    font-size: var(--type-h3-size);
    line-height: var(--type-h3-leading);
    font-weight: var(--type-h3-weight);
    letter-spacing: var(--type-h3-tracking);
    text-transform: uppercase;
  }
  .type-body {
    font-family: var(--font-sans);
    font-size: var(--type-body-size);
    line-height: var(--type-body-leading);
    font-weight: var(--type-body-weight);
    letter-spacing: var(--type-body-tracking);
  }
  .type-small {
    font-family: var(--font-sans);
    font-size: var(--type-small-size);
    line-height: var(--type-small-leading);
    font-weight: var(--type-small-weight);
    letter-spacing: var(--type-small-tracking);
  }
  .type-label {
    font-family: var(--font-mono);
    font-size: var(--type-label-size);
    line-height: var(--type-label-leading);
    font-weight: var(--type-label-weight);
    letter-spacing: var(--type-label-tracking);
    text-transform: uppercase;
  }
  .type-mono {
    font-family: var(--font-mono);
    font-size: var(--type-mono-size);
    line-height: var(--type-mono-leading);
    font-weight: var(--type-mono-weight);
    letter-spacing: var(--type-mono-tracking);
  }
  h1 {
    font-family: var(--font-display);
    font-size: var(--type-h1-size);
    line-height: var(--type-h1-leading);
    font-weight: var(--type-h1-weight);
    letter-spacing: var(--type-h1-tracking);
    text-transform: uppercase;
  }
  h2 {
    font-family: var(--font-display);
    font-size: var(--type-h2-size);
    line-height: var(--type-h2-leading);
    font-weight: var(--type-h2-weight);
    letter-spacing: var(--type-h2-tracking);
    text-transform: uppercase;
  }
  h3 {
    font-family: var(--font-display);
    font-size: var(--type-h3-size);
    line-height: var(--type-h3-leading);
    font-weight: var(--type-h3-weight);
    letter-spacing: var(--type-h3-tracking);
    text-transform: uppercase;
  }
  code, kbd, samp, pre {
    font-family: var(--font-mono);
  }
  ::selection {
    background: var(--primary);
    color: var(--primary-foreground);
  }
  .container {
    width: 100%;
    max-width: var(--container-max);
    margin-inline: auto;
    padding-inline: var(--gutter);
  }
  .section {
    padding-block: var(--section-y);
  }
  .prose {
    max-width: var(--measure);
  }
  .reveal {
    opacity: 0;
    transform: translateY(var(--reveal-distance));
    transition: opacity var(--duration-slow) var(--ease-out), transform var(--duration-slow) var(--ease-out);
    transition-delay: calc(var(--reveal-index, 0) * var(--reveal-stagger));
  }
  .reveal.is-in {
    opacity: 1;
    transform: none;
  }
  @media (prefers-reduced-motion: reduce) {
    .reveal { opacity: 1; transform: none; transition: none; }
    *, *::before, *::after { transition-duration: 0s !important; animation-duration: 0s !important; animation-iteration-count: 1 !important; }
  }
}
```

Tailwind v3:

```js
// tailwind.config.js, Tailwind v3 (v4 users: the @theme block in tokens.css does this)
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "card": { DEFAULT: "var(--card)", foreground: "var(--card-foreground)" },
        "muted": { DEFAULT: "var(--muted)", foreground: "var(--muted-foreground)" },
        "primary": { DEFAULT: "var(--primary)", foreground: "var(--primary-foreground)" },
        "secondary": { DEFAULT: "var(--secondary)", foreground: "var(--secondary-foreground)" },
        "accent": { DEFAULT: "var(--accent)", foreground: "var(--accent-foreground)" },
        "border": "var(--border)",
        "input": "var(--input)",
        "ring": "var(--ring)",
        "destructive": { DEFAULT: "var(--destructive)", foreground: "var(--destructive-foreground)" },
        "success": { DEFAULT: "var(--success)", foreground: "var(--success-foreground)" },
        "warning": { DEFAULT: "var(--warning)", foreground: "var(--warning-foreground)" },
        chart: { 1: "var(--chart-1)", 2: "var(--chart-2)", 3: "var(--chart-3)", 4: "var(--chart-4)", 5: "var(--chart-5)" },
      },
      fontFamily: { heading: ["var(--font-display)"], body: ["var(--font-sans)"], code: ["var(--font-mono)"] },
      borderRadius: { "ui-sm": "var(--radius-sm)", "ui-md": "var(--radius-md)", "ui-lg": "var(--radius-lg)", "ui-xl": "var(--radius-xl)" },
      boxShadow: { "ui-sm": "var(--shadow-sm)", "ui-md": "var(--shadow-md)", "ui-lg": "var(--shadow-lg)" },
      transitionDuration: { instant: "var(--duration-instant)", fast: "var(--duration-fast)", base: "var(--duration-base)", slow: "var(--duration-slow)" },
      transitionTimingFunction: { standard: "var(--ease-standard)", out: "var(--ease-out)", in: "var(--ease-in)" },
      maxWidth: { container: "var(--container-max)", measure: "var(--measure)" },
    },
  },
};
```

Dependencies: `lucide-react`
