/** Supported languages */
export const languages = {
  en: 'English',
  vi: 'Tiếng Việt',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

import { en } from './en';
import { vi } from './vi';

export const ui = { en, vi } as const;

export type Translations = typeof ui[Lang];

/**
 * Extracts the active language from a URL pathname.
 * Falls back to `defaultLang` when no match is found.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment in ui) return segment as Lang;
  return defaultLang;
}

/**
 * Returns a typed translation lookup function for the given language.
 * Supports dot-notation keys (e.g. 'nav.home').
 * Returns arrays/objects as-is for complex values.
 */
export function useTranslations(lang: Lang) {
  return function t(key: string): string | string[] | Record<string, unknown> {
    const keys = key.split('.');
    let value: unknown = ui[lang];
    for (const k of keys) {
      if (value == null || typeof value !== 'object') return key;
      value = (value as Record<string, unknown>)[k];
    }
    return (value ?? key) as string | string[] | Record<string, unknown>;
  };
}
