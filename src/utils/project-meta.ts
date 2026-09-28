import type { Project } from '../types/project';
import type { Lang } from '../i18n/utils';

/** One sentence for the project index. Tags stay in the page, not in this summary. */
export const projectMetaDescription = (projects: Project[], lang: Lang): string => {
  const count = projects.length;
  return lang === 'en'
    ? `Tan Phat Vo's ${count} projects in banking, logistics, manufacturing, and oil and gas, including Go, gRPC, and .NET systems.`
    : `${count} dự án của Võ Tấn Phát về ngân hàng, logistics, sản xuất và dầu khí, gồm hệ thống Go, gRPC và .NET.`;
};
