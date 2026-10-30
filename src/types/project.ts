/** A bilingual text value */
export interface BilingualText {
  en: string;
  vi: string;
}

/** Company metadata attached to a project card */
export interface ProjectCompany {
  name: BilingualText;
  url?: string;
  description: BilingualText;
}

/** A public source linked from a project or job */
export interface SourceLink {
  label: BilingualText;
  url: string;
}

/** A single project entry from projects.json */
export interface Project {
  id: string;
  title: BilingualText;
  role: BilingualText;
  period?: BilingualText;
  teamSize?: number;
  engagement?: BilingualText;
  /** Full project notes. The archive renders these; homepage cards use description. */
  highlights?: BilingualText[];
  company: ProjectCompany;
  description: BilingualText;
  sources?: SourceLink[];
  tags: string[];
}
