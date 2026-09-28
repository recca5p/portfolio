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
    fontSize: 'clamp(2.75rem, 7vw, 6rem)'
    fontWeight: 650
    lineHeight: 0.92
    letterSpacing: '-0.04em'
  heading:
    fontFamily: 'Manrope Variable, Avenir Next, sans-serif'
    fontSize: 'clamp(2rem, 4vw, 3.25rem)'
    fontWeight: 650
    lineHeight: 1.05
    letterSpacing: '-0.04em'
  body:
    fontFamily: 'Manrope Variable, Avenir Next, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 'normal'
  meta:
    fontFamily: 'JetBrains Mono Variable, SFMono-Regular, monospace'
    fontSize: '0.75rem'
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: '0.04em'
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
buttons. JetBrains Mono is reserved for dates, stack lines, and the three
recorded result figures. Teal is the only accent: primary buttons, current
links, and list markers.

The signature is the hero photograph of infrastructure cabling, paired with
the name set large. Everything else is a reading layout: a short background, a
skills disclosure, a job list, education, three project previews, and contact.
Do not add a second visual stunt.

This file records the system after the refinement pass. It keeps the incumbent
palette, typefaces, and radius. It drops the all-caps eyebrow, the repeated
scroll-reveal, and the clamped project text.

## Colors

The normative values are the CSS variables in `src/styles/global.css`. The
Tailwind `primary-*` scale matches the same teal and is only for the skip
link. Do not introduce a second palette, a gradient wash, or pure black.

Body and muted text on `page` and `surface` are above WCAG AA. Accent text is
for short metadata, not long paragraphs. Primary button ink is `#071310` on
teal, which clears AA at button size.

## Typography

One sans family. The name is the only display line, capped at 6rem with
tracking no tighter than -0.04em. Section headings step down to at most
3.25rem. Body copy stays near 65 to 75 characters.

Job titles and section labels use sentence case or the official job title.
Do not put a tracked uppercase label above a heading. Mono is for data the
reader compares or copies: periods, stack tokens, result figures.

## Layout

Left-aligned, asymmetric columns. The hero is copy plus the photograph. Later
sections pin a heading beside the content from 900px up. Project previews use
one featured record and a stack, not a row of equal cards.

The archive is a list, not a card grid. Full project text is visible. Skills
use native `details`. Contact rows are a definition-style list. Respect
`env(safe-area-inset-*)` on the header and the bottom of the page.

## Elevation & Depth

Surfaces step from `page` to `surface` to `surface-raised`. Separators are
1px lines in `line` or `line-strong`. The hero image may carry a soft
offset shadow. Do not use glow, glass panels, or hard offset shadows. The
sticky header may blur only so content scrolling under it stays readable, and
it falls back to a solid fill when the reader prefers reduced transparency.

## Shapes

Controls, cards, the menu, and the hero image share `--radius` (0.875rem).
The mark in the header uses a smaller radius cut from that token, not a
second shape language.

## Components

Primary and secondary buttons share height, radius, and a 160ms color
transition. Pressed buttons scale to 0.97. Hover lift on project cards is
limited to fine pointers. The only entrance motion is a single opacity and
translate on the hero copy, about 400ms, ease-out. The photograph does not
animate, so the largest image can paint immediately.

`prefers-reduced-motion` removes that entrance and the press and hover
transforms. It does not blank the page.

Focus is a 2px accent outline with offset, using `:focus-visible`. The skip
link becomes visible on focus. The current language is marked with
`aria-current` and an underline, not color alone.

## Do's and Don'ts

Do keep English and Vietnamese on the same facts. Do show project write-ups
in the HTML without a hover or a line clamp. Do leave a source TODO instead of
inventing a metric.

Do not add gradient blobs, section numbers, scroll cues, pill clouds, or a
second accent color. Do not put an eyebrow label above the name. Do not
repeat the same fade-up on every section. Do not animate the hero image.
