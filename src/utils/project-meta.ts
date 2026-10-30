import type { Project } from '../types/project';
import type { Lang } from '../i18n/utils';

/** One sentence for the project index. Tags stay in the page, not in this summary. */
export const projectMetaDescription = (projects: Project[], lang: Lang): string => {
  const count = projects.length;
  return lang === 'en'
    ? `Tan Phat Vo's ${count} projects in banking and energy, plus logistics and manufacturing, including .NET, Go and Java systems.`
    : `${count} dự án của Võ Tấn Phát về ngân hàng và năng lượng, cùng logistics và sản xuất, gồm hệ thống .NET, Go và Java.`;
};
