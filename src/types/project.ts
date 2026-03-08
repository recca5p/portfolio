/** A bilingual text value */
export interface BilingualText {
    en: string;
    vi: string;
}

/** Company metadata attached to a project card */
export interface ProjectCompany {
    name: string;
    url: string;
    description: BilingualText;
}

/** A single project entry from projects.json */
export interface Project {
    title: BilingualText;
    role: BilingualText;
    teamSize: number;
    company: ProjectCompany;
    description: BilingualText;
    tags: string[];
    /** Raw SVG string for the project icon */
    icon: string;
}
