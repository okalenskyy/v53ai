# V53 AI Cluster · NODUM AI — Brand & Typography Style Guide
## For Claude Document Generation

**Version:** 1.0  
**Date:** May 2026  
**Classification:** Internal — Design System Reference

---

## 1. LOGO ASSETS

### V53 AI Cluster
| Format | Path | Use Case | Dimensions (aspect) |
|--------|------|----------|---------------------|
| PNG    | `logo_V53.png`   | PPTX, Word, general | 400×160 px — **2.5:1** |
| SVG    | `logo_V53.svg`   | HTML, scalable use  | Scalable |

**Logo clear space:** Minimum 0.5× logo height on all sides.  
**Logo brand colours (from file):**  
- V mark: `#3C72CA` (cobalt blue)  
- 53 stroke: `#46CAF0` (sky blue)  

**In PPTX — recommended sizes:**
```
Cover / header:   w: 1.55", h: 0.62"   (sizing: contain)
Slide footer:     w: 1.2",  h: 0.48"   (sizing: contain)
```

### NODUM AI Competence Hub
| Format | Path | Use Case | Dimensions (aspect) |
|--------|------|----------|---------------------|
| PNG    | `logo_NODUM.png` | PPTX, Word, general | 400×105 px — **3.8:1** |
| SVG    | `logo_Nodum.svg` | HTML, scalable use  | Scalable |

**In PPTX — recommended sizes:**
```
Cover / header:   w: 2.5",  h: 0.66"   (sizing: contain)
Slide footer:     w: 2.0",  h: 0.53"   (sizing: contain)
```

**Logo usage rules:**
- Never place on coloured backgrounds without checking contrast
- Never stretch, recolour or add drop shadows to logos
- On navy backgrounds: use white/light version if available, or ensure sufficient contrast
- Preferred pairing: V53 left · NODUM right · separated by subtle rule

---

## 2. COLOUR PALETTE

### Primary Palette
```
Navy      #002D4A    rgb(0, 45, 74)      — Authority, headers, dark panels
Amber     #F58E3C    rgb(245, 142, 60)   — Accent, rules, CTAs, data callouts
```

### Background / Surface Hierarchy
```
Cloud White   #F7F8FA    — Slide/page ground (primary background)
Pure White    #FFFFFF    — Card fill, text areas
Warm Grey     #EBECEE    — Card borders, subtle surface dividers
Grid Line     #DDE1E7    — Table rules, subtle separators
```

### Text Hierarchy
```
Near-Black    #0D1B2A    — Display headings (maximum weight)
Navy          #002D4A    — Body text, sub-headings
Slate         #8A9BB0    — Captions, secondary labels, footnotes
Navy Dim      #C5CDD6    — Decorative rules, disabled states
Mid Navy      #1A4A6B    — Sub-headings, supporting text
```

### Accent / Functional
```
Amber Pale    #FDF0E4    — Amber-tinted card backgrounds
Dark Teal     #006B78    — Only for external ecosystem partner nodes (inherited)
```

### FORBIDDEN COLOURS
```
❌  Teal    #0091A0  — Not permitted anywhere in the design system
❌  Indigo  #5C4999  — Not permitted anywhere in the design system
❌  Any warm-neutral background (cream, beige, off-white yellows)
```

### Logo Brand Blues (reference only — for colour matching)
```
V53 Cobalt    #3C72CA    — Do not use in slides; for logo matching reference only
V53 Sky       #46CAF0    — Do not use in slides; for logo matching reference only
```

---

## 3. TYPOGRAPHY

### Font Stack
```
Display / Headers:   Trebuchet MS   (Bold)
Body / Data:         Calibri        (Regular / Bold)
Fallback:            Arial          (system fallback)
```

### Type Scale — PPTX (points)

| Role              | Font         | Size    | Weight | Colour       | Notes |
|-------------------|--------------|---------|--------|--------------|-------|
| Cover Title       | Trebuchet MS | 50–54pt | Bold   | `#0D1B2A`    | Split into 2 lines if needed |
| Section Divider   | Trebuchet MS | 48–52pt | Bold   | `#FFFFFF`    | On navy panel |
| Slide Title       | Trebuchet MS | 32–36pt | Bold   | `#0D1B2A`    | |
| Card Title        | Trebuchet MS | 14–16pt | Bold   | `#002D4A`    | |
| Body Text         | Calibri      | 10–12pt | Regular| `#444444`    | lineSpacing 1.35–1.5× |
| Body Emphasis     | Calibri      | 10–12pt | Bold   | `#002D4A`    | |
| Caption / Label   | Calibri      | 7.5–9pt | Regular| `#8A9BB0`    | Spaced caps for labels |
| Badge Text        | Calibri      | 6.5–7pt | Bold   | `#FFFFFF`    | charSpacing: 2pt, ALL CAPS |
| Data Stat Number  | Trebuchet MS | 24–32pt | Bold   | `#002D4A`    | |
| Data Stat Label   | Calibri      | 7.5–8pt | Regular| `#8A9BB0`    | Below amber rule |
| Eyebrow Label     | Calibri      | 7.5pt   | Bold   | `#8A9BB0`    | charSpacing: 2.5pt, ALL CAPS |
| Amber Rule Text   | Calibri      | 9–10pt  | Bold   | `#002D4A`    | On amber strip |
| Footer / Legal    | Calibri      | 7.5–8pt | Regular| `#C5CDD6`    | |

### Type Scale — Word Documents (points)

| Role              | Font         | Size    | Weight | Colour |
|-------------------|--------------|---------|--------|--------|
| Document Title    | Trebuchet MS | 28–32pt | Bold   | `#0D1B2A` |
| Chapter Heading   | Trebuchet MS | 20–22pt | Bold   | `#002D4A` |
| Section Heading   | Trebuchet MS | 14–16pt | Bold   | `#002D4A` |
| Sub-heading       | Calibri      | 12pt    | Bold   | `#1A4A6B` |
| Body Text         | Calibri      | 11pt    | Regular| `#444444` |
| Caption           | Calibri      | 9pt     | Regular| `#8A9BB0` |
| Table Header      | Calibri      | 10pt    | Bold   | `#FFFFFF` on `#002D4A` |
| Table Body        | Calibri      | 10pt    | Regular| `#002D4A` |
| Footer            | Calibri      | 8pt     | Regular| `#C5CDD6` |

### Char Spacing Rules
```
Badge labels:      charSpacing: 2pt     (ALL CAPS, navy bg, white text)
Eyebrow labels:    charSpacing: 2.5pt   (slate colour, positioned above title)
Section titles:    charSpacing: 0–0.5pt (natural tracking)
```

---

## 4. LAYOUT SYSTEM

### Slide Dimensions
```
Presentation:  10" × 5.625"  (16:9, standard widescreen)
Safe margins:  0.45" all sides
Content zone:  9.1" × 4.73"  (x: 0.45, y: 0.35, w: 9.1)
```

### Grid
```
1-column:   x: 0.45   w: 9.1
2-column:   Left  x: 0.45  w: 4.4 | Right x: 5.1   w: 4.4
2-col alt:  Left  x: 0.45  w: 5.55| Right x: 6.3   w: 3.2
3-column:   Each  w: 2.9–3.0, gaps: 0.12–0.15"
4-column:   Each  w: 2.22–2.25, gaps: 0.1"
Column gap: 0.12–0.15" (consistent)
```

### Vertical Rhythm
```
Badge top:        y: 0.28–0.35"
Title top:        y: 0.60–0.68"
Amber rule:       y: title_y + 0.55–0.62"  (immediately below title)
Eyebrow text:     y: rule_y + 0.08"
Content start:    y: 1.40–1.78"
Content gap:      0.10–0.15" between cards
Footer zone:      y: 5.28–5.42"
```

---

## 5. COMPONENT LIBRARY

### 5.1 Section Badge
```
Shape:     Rectangle (NO border radius — ultra-crisp)
Fill:      #002D4A (navy)
Border:    none
Size:      w: 1.5–1.8", h: 0.24–0.26"
Position:  x: 0.45, y: 0.28–0.35
Text:      ALL CAPS · charSpacing: 2pt · fontSize: 6.5–7pt · white · centered

PptxGenJS:
  slide.addShape("rect", { x:0.45, y:0.28, w:1.6, h:0.25,
    fill:{ color:"002D4A" }, line:{ color:"002D4A" } });
  slide.addText("SECTION NAME", {
    x:0.45, y:0.28, w:1.6, h:0.25,
    fontSize:6.5, bold:true, charSpacing:2,
    color:"FFFFFF", align:"center", valign:"middle", margin:0 });
```

### 5.2 Amber Hairline Rule
```
Shape:     Rectangle (ultra-thin horizontal stripe)
Fill:      #F58E3C (amber)
Border:    #F58E3C
Size:      h: 0.022–0.028" (≈ 2px at 96dpi)  w: varies
Position:  Directly below slide title, or as card section divider

PptxGenJS:
  slide.addShape("rect", { x:0.45, y:1.28, w:1.2, h:0.025,
    fill:{ color:"F58E3C" }, line:{ color:"F58E3C" } });
```

**Usage rules:**
- Title underline: w = 1.0–1.4" (short — NOT full width)
- Card internal divider: w = card_width − 0.4"
- Never use as header/footer bar (that is "AI slop")
- Maximum 3 amber rules visible per slide

### 5.3 White Card
```
Fill:    #FFFFFF
Border:  { color:"DDE1E7", pt:1 }
Shadow:  { type:"outer", blur:12, offset:4, angle:130, color:"000000", opacity:0.07 }
Radius:  0  (sharp corners — no border radius)

PptxGenJS:
  slide.addShape("rect", { x, y, w, h,
    fill:{ color:"FFFFFF" },
    line:{ color:"DDE1E7", pt:1 },
    shadow:{ type:"outer", blur:12, offset:4, angle:130, color:"000000", opacity:0.07 }
  });
```

**Top accent rule on card (optional):**
```
  slide.addShape("rect", { x, y, w, h:0.025,
    fill:{ color:"002D4A" }, line:{ color:"002D4A" } });
```

### 5.4 Navy Authority Block
```
Fill:    #002D4A (navy)
Border:  #002D4A
Shadow:  same as white card
Usage:   Cover right panel · CapEx/KPI hero boxes · closing left panel

— Use sparingly: max 1–2 per presentation for maximum contrast impact
```

### 5.5 Data Stat Box
```
Structure:
  1. White card (sharp corners, 1pt grid-line border, shadow)
  2. Number:  Trebuchet MS, 24–32pt, bold, navy #002D4A, centered
  3. Amber rule: h:0.022, w: card_w × 0.4, centered horizontally
  4. Label: Calibri, 7.5–8pt, slate #8A9BB0, centered, below rule

PptxGenJS — stat box function:
  function statBox(slide, value, label, x, y, w, h) {
    slide.addShape("rect", { x, y, w, h,
      fill:{color:"FFFFFF"}, line:{color:"DDE1E7", pt:1}, shadow:mk() });
    slide.addText(value, {
      x:x+0.08, y:y+0.10, w:w-0.16, h:h*0.52,
      fontSize:26, bold:true, fontFace:"Trebuchet MS",
      color:"002D4A", align:"center", valign:"middle", margin:0 });
    slide.addShape("rect", {   // amber rule
      x:x+w*0.3, y:y+h*0.62, w:w*0.4, h:0.022,
      fill:{color:"F58E3C"}, line:{color:"F58E3C"} });
    slide.addText(label, {
      x:x+0.08, y:y+h*0.67, w:w-0.16, h:h*0.30,
      fontSize:7.5, color:"8A9BB0", align:"center",
      lineSpacingMultiple:1.2, margin:0 });
  }
```

### 5.6 Amber Accent Strip (Cover diagonal / section marker)
```
Shape:    Rectangle, full width, h: 0.06"
Fill:     #F58E3C
Position: y: 0 (very top of slide) — cover slides only
Usage:    One stripe at slide top as amber accent, NOT as header bar
```

### 5.7 Item Row (bullet replacement)
```
PptxGenJS — amber dash + navy text:
  slide.addText([
    { text:"— ", options:{ color:"F58E3C", bold:true } },
    { text:"Item text here", options:{ color:"002D4A" } },
  ], { x, y, w, h, fontSize:10.5, margin:0 });
```

### 5.8 Amber-Tinted Card (callout / note)
```
Fill:    #FDF0E4 (amber pale)
Border:  { color:"F58E3C", pt:1 }
Usage:   Co-funding notes, important callouts, footnotes
```

### 5.9 Bottom Navy Strip (slide footer)
```
Shape:    Rectangle, x:0, y:5.28, w:10, h:0.35
Fill:     #002D4A
Usage:    Key stat strip, impact numbers at slide bottom
Text:     Calibri 13pt bold amber (#F58E3C) for value, 7.5pt slate for label
```

### 5.10 Connector Lines (ecosystem diagrams)
```
line: { color:"C5CDD6", width:0.8, dashType:"sysDash" }
Usage: Connecting nodes in network/ecosystem diagrams
```

---

## 6. COVER SLIDE TEMPLATE

```
Layout:
  Left panel (62%):   Pure white #FFFFFF, w: 6.2"
  Right panel (38%):  Navy #002D4A, w: 3.8"
  Top amber stripe:   h: 0.06", full width, amber #F58E3C

Left panel content:
  V53 logo:     x:0.55, y:0.38, w:1.55, h:0.58  (contain)
  Amber rule:   x:0.55, y:1.05, w:0.9,  h:0.025
  Eyebrow:      x:0.55, y:1.12  7.5pt charSpacing:2.5 slate #8A9BB0
  Title line 1: x:0.55, y:1.42  50pt Trebuchet MS bold #0D1B2A
  Title line 2: x:0.55, y:2.08  50pt Trebuchet MS bold #0D1B2A
  Subtitle:     x:0.55, y:2.84  13.5pt Calibri #1A4A6B
  Stat boxes:   y:3.72, 3 boxes across left panel
  Date/place:   x:0.55, y:5.28  8pt Calibri slate

Right panel content:
  NODUM logo:   x:6.45, y:0.55, w:3.3, h:0.75  (contain)
  Amber rule:   x:6.45, y:1.50, w:3.1, h:0.025  navy-dim
  Label:        x:6.45, y:1.62  9pt Calibri charSpacing:1.5 slate
  Pillar list:  x:6.45, y:2.10  amber left-bars (0.025" rect) + white text 11.5pt
  Footer:       x:6.45, y:5.22  8pt italic slate "infra enabling AI"
```

---

## 7. INTERIOR SLIDE TEMPLATE

```
Slide background:   #F7F8FA  (cloud white)
Safe zone:          x:0.45, y:0.28, w:9.1

Standard structure:
  1. Badge:          x:0.45, y:0.28,  w:1.6, h:0.25   (navy rect, white caps)
  2. Slide title:    x:0.45, y:0.60,  w:9.1, h:0.62   (32–36pt Trebuchet bold near-black)
  3. Amber rule:     x:0.45, y:1.26,  w:1.2, h:0.025  (short — not full width)
  4. Sub-label:      x:0.45, y:1.38,  w:9.1, h:0.27   (10.5pt Calibri slate)
  5. Content area:   y: 1.60–5.20    (cards, columns, charts)
  6. Footer zone:    y: 5.28–5.60    (amber strip, logos, or stat bar)
```

---

## 8. CLOSING SLIDE TEMPLATE

```
Background: #FFFFFF (pure white — contrasts with interior slides)

Left navy panel:   x:0, y:0, w:4.0, h:5.625  fill:#002D4A
  Amber stripe:    x:0, y:0, w:4.0, h:0.06   fill:#F58E3C
  V53 logo:        x:0.35, y:0.40, w:1.6, h:0.6    (contain)
  NODUM logo:      x:0.35, y:1.15, w:2.5, h:0.66   (contain)
  Navy rule:       x:0.35, y:2.00, w:3.3, h:0.025  color:#304A60
  Headline:        x:0.35, y:2.18  32pt Trebuchet bold white
  Amber rule:      x:0.35, y:4.30, w:3.3, h:0.025  amber
  Contact:         x:0.35, y:4.42  9pt Calibri slate
  Tagline:         x:0.35, y:5.22  8pt italic "#405A6A"

Right content panel:  x:4.35, y:0, w:5.65
  Section title:   x:4.35, y:0.42  14pt bold navy
  Amber rule:      x:4.35, y:0.85  full right-panel width
  Action rows:     Amber left-bar (0.04" rect) + large number + title + description
```

---

## 9. PPTXGENJS CODE CONSTANTS

```javascript
// ── Colour Palette ────────────────────────────────────────
const P = {
  navy:      "002D4A",   // Primary authority
  amber:     "F58E3C",   // Accent / decorative
  white:     "FFFFFF",   // Card fill / text on dark
  warmGrey:  "EBECEE",   // Surface dividers
  cloud:     "F7F8FA",   // Slide background
  nearBlack: "0D1B2A",   // Display headings
  slate:     "8A9BB0",   // Secondary text / labels
  navyDim:   "C5CDD6",   // Muted rules / disabled
  navyMid:   "1A4A6B",   // Sub-elements
  amberPale: "FDF0E4",   // Amber-tinted card bg
  gridLine:  "DDE1E7",   // Borders / table rules
  darkTeal:  "006B78",   // Ecosystem partner nodes only
};

// ── Shadow ────────────────────────────────────────────────
const mk = () => ({
  type:"outer", blur:12, offset:4, angle:130,
  color:"000000", opacity:0.07
});

// ── Amber Hairline Rule ───────────────────────────────────
function hRule(slide, x, y, w, color) {
  slide.addShape("rect", {
    x, y, w, h:0.025,
    fill:{ color: color || P.amber },
    line:{ color: color || P.amber }
  });
}

// ── Section Badge ─────────────────────────────────────────
function badge(slide, text, x, y) {
  slide.addShape("rect", {
    x, y, w:1.6, h:0.25,
    fill:{ color:P.navy }, line:{ color:P.navy }
  });
  slide.addText(text.toUpperCase(), {
    x, y, w:1.6, h:0.25,
    fontSize:6.5, bold:true, charSpacing:2,
    color:P.white, align:"center", valign:"middle", margin:0
  });
}

// ── White Card ────────────────────────────────────────────
function cardRect(slide, x, y, w, h, accentColor) {
  slide.addShape("rect", {
    x, y, w, h,
    fill:{ color:P.white },
    line:{ color:P.gridLine, pt:1 },
    shadow:mk()
  });
  if (accentColor) {
    slide.addShape("rect", {       // top accent rule
      x, y, w, h:0.025,
      fill:{ color:accentColor }, line:{ color:accentColor }
    });
  }
}

// ── Data Stat Box ─────────────────────────────────────────
function statBox(slide, value, label, x, y, w, h) {
  slide.addShape("rect", {
    x, y, w, h,
    fill:{ color:P.white },
    line:{ color:P.gridLine, pt:1 },
    shadow:mk()
  });
  slide.addText(value, {
    x:x+0.08, y:y+0.10, w:w-0.16, h:h*0.52,
    fontSize:26, bold:true, fontFace:"Trebuchet MS",
    color:P.navy, align:"center", valign:"middle", margin:0
  });
  slide.addShape("rect", {         // amber rule below number
    x:x+w*0.3, y:y+h*0.62, w:w*0.4, h:0.022,
    fill:{ color:P.amber }, line:{ color:P.amber }
  });
  slide.addText(label, {
    x:x+0.08, y:y+h*0.67, w:w-0.16, h:h*0.30,
    fontSize:7.5, color:P.slate, align:"center",
    lineSpacingMultiple:1.2, margin:0
  });
}

// ── Item Row (amber dash + text) ──────────────────────────
function itemRow(slide, text, x, y, w, fontSize) {
  slide.addText([
    { text:"— ", options:{ color:P.amber, bold:true } },
    { text:text,  options:{ color:P.navy } },
  ], { x, y, w, h:0.32, fontSize:fontSize||10.5, margin:0 });
}

// ── Logo Placement (PptxGenJS) ────────────────────────────
// V53 logo — cover left panel
slide.addImage({ path:"logo_V53.png",
  x:0.55, y:0.38, w:1.55, h:0.58,
  sizing:{ type:"contain", w:1.55, h:0.58 } });

// NODUM logo — cover right panel
slide.addImage({ path:"logo_NODUM.png",
  x:6.45, y:0.55, w:3.3, h:0.75,
  sizing:{ type:"contain", w:3.3, h:0.75 } });

// V53 logo — slide footer (small)
slide.addImage({ path:"logo_V53.png",
  x:8.25, y:0.22, w:1.4, h:0.55,
  sizing:{ type:"contain", w:1.4, h:0.55 } });
```

---

## 10. HTML/CSS VARIABLES (for web documents)

```css
:root {
  /* Brand colours */
  --color-navy:       #002D4A;
  --color-amber:      #F58E3C;
  --color-white:      #FFFFFF;
  --color-cloud:      #F7F8FA;
  --color-warm-grey:  #EBECEE;
  --color-near-black: #0D1B2A;
  --color-slate:      #8A9BB0;
  --color-navy-dim:   #C5CDD6;
  --color-navy-mid:   #1A4A6B;
  --color-amber-pale: #FDF0E4;
  --color-grid-line:  #DDE1E7;

  /* Logo brand blues — reference only */
  --logo-v53-cobalt:  #3C72CA;
  --logo-v53-sky:     #46CAF0;

  /* Typography */
  --font-display: "Trebuchet MS", Arial, sans-serif;
  --font-body:    "Calibri", Arial, sans-serif;

  /* Type scale */
  --text-cover:   52px;
  --text-h1:      36px;
  --text-h2:      22px;
  --text-h3:      16px;
  --text-body:    14px;
  --text-caption: 11px;
  --text-badge:   10px;

  /* Spacing */
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  40px;

  /* Shadows */
  --shadow-card: 0 4px 12px rgba(0,0,0,0.07);

  /* Amber rule */
  --rule-amber: 2px solid #F58E3C;
  --rule-amber-thin: 1px solid #F58E3C;
}

/* Badge component */
.badge {
  display: inline-block;
  background: var(--color-navy);
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: var(--text-badge);
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 4px 10px;
  /* border-radius: 0 — NO radius, ultra-crisp */
}

/* Card component */
.card {
  background: var(--color-white);
  border: 1px solid var(--color-grid-line);
  box-shadow: var(--shadow-card);
  /* border-radius: 0 — sharp corners */
}

/* Amber rule */
.amber-rule {
  height: 2px;
  background: var(--color-amber);
  border: none;
  width: 120px; /* short — never full width */
}

/* Data stat */
.stat-value {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 700;
  color: var(--color-navy);
}
.stat-label {
  font-size: 11px;
  color: var(--color-slate);
}
```

---

## 11. WORD DOCUMENT STYLE TOKENS

```
Page background:  White (no coloured page background)
Page margins:     Top/Bottom: 1.0"   Left/Right: 1.25"
Gutter:           0" (no gutter binding)

Heading 1:  Trebuchet MS 22pt Bold  #002D4A   Space before: 18pt  Space after: 6pt
Heading 2:  Trebuchet MS 16pt Bold  #002D4A   Space before: 12pt  Space after: 4pt
Heading 3:  Calibri 12pt Bold       #1A4A6B   Space before: 8pt   Space after: 2pt
Normal:     Calibri 11pt Regular    #444444   Line spacing: 1.15  Space after: 6pt
Caption:    Calibri 9pt Regular     #8A9BB0   Italic
Footer:     Calibri 8pt Regular     #C5CDD6

Table header row:  Calibri 10pt Bold white on #002D4A
Table body rows:   Alternating white / #F7F8FA
Table border:      #DDE1E7, 0.5pt

Bullet character:  — (em dash, amber #F58E3C) or standard disc in navy
```

---

## 12. USAGE RULES SUMMARY

### DO
- Use Trebuchet MS Bold for all display headings (34pt+ in PPTX)
- Use short amber hairline rules (w ≤ 1.4") under slide titles
- Keep backgrounds to cloud white (#F7F8FA) for slides, white for cards
- Use navy authority blocks sparingly (maximum 1–2 per deck)
- Place V53 logo top-left of content area on all slides
- Use generous negative space — at least 0.45" margins
- Keep badge text in ALL CAPS with 2pt character spacing
- Use amber "—" dash as list bullet replacement
- Apply 0.07 opacity outer shadow to all cards

### DON'T
- ❌ Use teal (#0091A0) or indigo (#5C4999) anywhere
- ❌ Use cream, beige, or warm-neutral backgrounds
- ❌ Use full-width amber bars as header or footer strips
- ❌ Add border-radius to any shapes (all corners are sharp)
- ❌ Mix font families beyond Trebuchet MS + Calibri
- ❌ Use amber for large fill areas (cards, panels) — amber is for rules & accents only
- ❌ Place logos on coloured backgrounds without contrast check
- ❌ Use the V53/NODUM brand blues (#3C72CA, #46CAF0) in slide elements
- ❌ Use more than 3 amber rules per slide
- ❌ Use italic for anything except taglines and captions

---

## 13. ACCESSIBILITY

```
Minimum contrast ratios (WCAG AA):
  Navy #002D4A on White:       21.1:1  ✅ Exceeds
  White on Navy #002D4A:       21.1:1  ✅ Exceeds
  Amber #F58E3C on White:       3.1:1  ⚠️  Large text only (18pt+)
  Slate #8A9BB0 on White:       3.2:1  ⚠️  Captions only (acceptable)
  Near-black #0D1B2A on Cloud:  17.5:1 ✅ Exceeds
  Navy #002D4A on Cloud:        16.8:1 ✅ Exceeds

Amber (#F58E3C) MUST NOT be used for body text — accent and decoration only.
```

---

## 14. QUICK REFERENCE CARD

```
╔══════════════════════════════════════════════════════════════╗
║         V53 · NODUM  —  BRAND QUICK REFERENCE               ║
╠══════════════════════════════════════════════════════════════╣
║  BACKGROUNDS       Cloud White  #F7F8FA  (slides)            ║
║                    Pure White   #FFFFFF  (cards/pages)       ║
║  PRIMARY TEXT      Near-Black   #0D1B2A  (display)          ║
║                    Navy         #002D4A  (body)              ║
║  ACCENT            Amber        #F58E3C  (rules, CTAs)      ║
║  SECONDARY TEXT    Slate        #8A9BB0  (labels, captions)  ║
║  BORDERS           Grid Line    #DDE1E7  (cards)             ║
╠══════════════════════════════════════════════════════════════╣
║  DISPLAY FONT      Trebuchet MS  Bold   34–52pt              ║
║  BODY FONT         Calibri       Reg    10–12pt              ║
║  BADGE             Calibri Bold  6.5pt  ALL CAPS  2pt space  ║
╠══════════════════════════════════════════════════════════════╣
║  V53 LOGO          logo_V53.png   aspect 2.5:1               ║
║  NODUM LOGO        logo_NODUM.png aspect 3.8:1               ║
╠══════════════════════════════════════════════════════════════╣
║  ❌ NO teal  ❌ NO indigo  ❌ NO rounded corners              ║
║  ❌ NO full-width amber bars  ❌ NO cream backgrounds         ║
╚══════════════════════════════════════════════════════════════╝
```

---

*V53 AI Cluster · NODUM AI Competence Hub*  
*Style Guide v1.0 · May 2026 · infra enabling AI*
