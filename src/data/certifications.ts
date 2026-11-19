export interface Certification {
  /** Filename inside public/certs/. */
  file: string;
  /** Official certification name. Kept language-neutral. */
  name: string;
  /** Year the certification was earned. */
  earnedYear: number;
}

/**
 * Certificate PDFs visitors can open. Add a record here when a file is placed
 * in public/certs/.
 */
/** Keep an exam code such as PL-400 on one line. */
export const certificationLabel = (name: string): string =>
  name.replace(/([A-Za-z]{2,})-(\d{2,})/g, '$1\u2011$2');

export const certifications: readonly Certification[] = [
  {
    file: 'PL-400_PowerPlatformDeveloperAssociate.pdf',
    name: 'Microsoft Certified: Power Platform Developer Associate (PL-400)',
    earnedYear: 2024,
  },
];
