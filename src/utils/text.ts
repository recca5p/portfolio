/** Turn a spaced hyphen or dash in a date range into an en dash. */
export const formatRange = (text: string): string =>
  text.replace(/\s+[\u2013\u2014-]\s+/g, '\u2013');

/** Keep prose on a hyphen. Date ranges are handled separately with formatRange. */
export const formatProse = (text: string): string => text.replace(/\s*\u2014\s*/g, ' - ');

/** Team size as a phrase. Titles keep their own dashes and do not use formatProse. */
export const teamSizeLabel = (
  teamSize: number | undefined,
  lang: 'en' | 'vi',
  soloLabel: string
): string | undefined => {
  if (teamSize === 1) return soloLabel;
  if (typeof teamSize !== 'number') return undefined;
  return lang === 'en' ? `Team of ${teamSize}` : `Nhóm ${teamSize} người`;
};
