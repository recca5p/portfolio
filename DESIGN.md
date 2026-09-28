---
name: Tan Phat Vo
description: Dark editorial portfolio for a senior backend engineer.
colors:
  page: '#0b1014'
  surface: '#11181e'
  surface-raised: '#172127'
  line: '#27343b'
  line-strong: '#3b4a51'
  text: '#f1f5f3'
  muted: '#a6b2b0'
  muted-strong: '#c4cecb'
  accent: '#24bcae'
  accent-strong: '#51d8c6'
  button-ink: '#071310'
typography:
  display:
    fontFamily: 'Manrope Variable, Avenir Next, sans-serif'
    fontSize: 'clamp(2.4rem, 5.5vw, 4.25rem)'
    fontWeight: 650
    lineHeight: 0.96
    letterSpacing: '-0.04em'
    wordSpacing: '0.06em'
    token: '--font-display'
  title:
    fontFamily: 'Manrope Variable, Avenir Next, sans-serif'
    fontSize: 'clamp(1.35rem, 2.2vw, 1.85rem)'
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: '-0.03em'
    token: '--font-title'
  lead:
    fontFamily: 'Manrope Variable, Avenir Next, sans-serif'
    fontSize: '1.125rem'
    fontWeight: 650
    lineHeight: 1.4
    token: '--font-lead'
  body:
    fontFamily: 'Manrope Variable, Avenir Next, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 'normal'
    token: '--font-body'
  small:
    fontFamily: 'Manrope Variable, Avenir Next, sans-serif'
    fontSize: '0.9375rem'
    fontWeight: 650
    lineHeight: 1.5
    token: '--font-small'
  meta:
    fontFamily: 'JetBrains Mono Variable, SFMono-Regular, monospace'
    fontSize: '0.75rem'
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: '0.04em'
    token: '--font-meta'
rounded:
  control: '0.875rem'
spacing:
  section: 'clamp(4.5rem, 8vw, 7.5rem)'
  container: '80rem'
components:
  button-primary:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.button-ink}'
    rounded: '{rounded.control}'
    padding: '12px 18px'
  button-primary-hover:
    backgroundColor: '{colors.accent-strong}'
    textColor: '{colors.button-ink}'
    rounded: '{rounded.control}'
    padding: '12px 18px'
  button-secondary:
    backgroundColor: 'transparent'
    textColor: '{colors.text}'
    rounded: '{rounded.control}'
    padding: '12px 18px'
  button-secondary-hover:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    rounded: '{rounded.control}'
    padding: '12px 18px'
---

## Overview

A personal hiring page, not a product marketing site. The page is dark
graphite from the header through the footer. Manrope carries names, prose, and
buttons. JetBrains Mono is reserved for dates and stack lines. Teal is the
only accent: primary buttons, current
links, and list markers.

The signature is the name, set large, with the role, city, and current
employer on the first screen. There is no stock photograph. Everything else
is a reading layout: a short background, the job list, skill groups with the
stack visible, education, three project previews, and contact.
Do not add a second visual stunt.

This file records the system after the review remediation. It keeps the
incumbent palette, typefaces, and radius. It drops the all-caps eyebrow, the
repeated scroll-reveal, the stock hero photograph, and the clamped project
text.

## Colors

The normative values are the CSS variables in `src/styles/global.css`. The
Tailwind `primary-*` scale matches the same teal and is only for the skip
link. Do not introduce a second palette, a gradient wash, or pure black.

Body and muted text on `page` and `surface` are above WCAG AA. Accent text is
for short metadata, not long paragraphs. Primary button ink is `#071310` on
teal, which clears AA at button size.

## Typography

Six steps, and no sizes outside them. The tokens live on `:root` in
`src/styles/global.css` and in the front matter of this file.

| Token            | Size                             | Use                                 |
| ---------------- | -------------------------------- | ----------------------------------- |
| `--font-display` | `clamp(2.4rem, 5.5vw, 4.25rem)`  | Name and section headings           |
| `--font-title`   | `clamp(1.35rem, 2.2vw, 1.85rem)` | Project and degree titles           |
| `--font-lead`    | `1.125rem`                       | Role line under the name            |
| `--font-body`    | `1rem`                           | Prose, lists, and bylines           |
| `--font-small`   | `0.9375rem` (15px)               | Facts, buttons, and short labels    |
| `--font-meta`    | `0.75rem` (12px)                 | Mono dates and technology tags only |

Headings use `word-spacing: 0.06em` so tight Manrope settings, including
Vietnamese, do not crash words together. Body copy stays near 65 to 75
characters. Job titles and section labels use sentence case or the official
job title. Do not put a tracked uppercase label above a heading. Mono is for
dates and stack tokens.

## Layout

Left-aligned, asymmetric columns. The hero is type only. Later sections pin a
heading beside the content from 900px up, and those intros stick below the
header. Project previews use one featured record and a stack, not a row of
equal cards. The featured record does not stretch to fill a tall column.

The archive is a list, not a card grid. Full project text is visible. Skills
use native `details`. Contact rows are a definition-style list. Respect
`env(safe-area-inset-*)` on the header and the bottom of the page.

## Elevation & Depth

Surfaces step from `page` to `surface` to `surface-raised`. Separators are
1px lines in `line` or `line-strong`. Do not use glow, glass panels, or hard
offset shadows. The header mark is flat teal. The sticky header may blur only
so content scrolling under it stays readable, and it falls back to a solid
fill when the reader prefers reduced transparency.

## Shapes

Controls, cards, and the menu share `--radius` (0.875rem). The mark in the
header is a flat circle, not a second shape language for cards.

## Components

Primary and secondary buttons share height, radius, and a 160ms color
transition. Pressed buttons scale to 0.97. Hover lift on project cards is
limited to fine pointers. The only entrance motion is a single opacity and
translate on the hero copy, 280ms, ease-out.

`prefers-reduced-motion` removes that entrance and the press and hover
transforms. It does not blank the page.

Focus is a 2px accent outline with offset, using `:focus-visible`. The skip
link becomes visible on focus. The current language is marked with
`aria-current` and an underline, not color alone.

## Do's and Don'ts

Do keep English and Vietnamese on the same facts. Do show project write-ups
in the HTML without a hover or a line clamp. Do not invent a metric. The CV
is the source of truth when the page and the CV disagree.

Do not add gradient blobs, section numbers, scroll cues, pill clouds, or a
second accent color. Do not put an eyebrow label above the name. Do not
repeat the same fade-up on every section. Do not bring the stock server
photograph back.
