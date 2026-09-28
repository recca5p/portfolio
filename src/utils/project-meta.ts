import type { Project } from '../types/project';
import type { Lang } from '../i18n/utils';

/** Meta description built only from tags that appear on the project records. */
export const projectMetaDescription = (projects: Project[], lang: Lang): string => {
  const tags = [...new Set(projects.flatMap((project) => project.tags))];
  const prefix =
    lang === 'en'
      ? 'Selected projects by Tan Phat Vo. Technologies on this page: '
      : 'Dự án tiêu biểu của Võ Tấn Phát. Công nghệ trên trang này: ';
  const chosen: string[] = [];

  for (const tag of tags) {
    const next = [...chosen, tag].join(', ');
    if (`${prefix}${next}.`.length > 160 && chosen.length > 0) break;
    chosen.push(tag);
  }

  return `${prefix}${chosen.join(', ')}.`;
};
