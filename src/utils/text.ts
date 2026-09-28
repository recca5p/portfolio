/** Turn a spaced hyphen or dash in a date range into an en dash. */
export const formatRange = (text: string): string =>
  text.replace(/\s+[\u2013\u2014-]\s+/g, '\u2013');

/** Keep prose on a hyphen. Date ranges are handled separately with formatRange. */
export const formatProse = (text: string): string => text.replace(/\s*\u2014\s*/g, ' - ');
