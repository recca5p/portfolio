export const languages = {
  en: 'English',
  vi: 'Tiếng Việt',
};

export const defaultLang = 'en';

import { en } from './en';
import { vi } from './vi';

export const ui = {
  en,
  vi,
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string): any {
    const keys = key.split('.');

    let value: any = ui[lang];
    for (const k of keys) {
      if (value === undefined || value[k] === undefined) return key;
      value = value[k];
    }
    return value;
  };
}
