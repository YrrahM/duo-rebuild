// src/messages/home.ts
export type Locale = 'es' | 'en' | 'zh';

export const HOME_MESSAGES: Record<
  Locale,
  { aria: string; alt: string; title: string; subtitle1: string; subtitle2: string; cta: string; sr: string }
> = {
  es: {
    aria: 'Sección principal',
    alt: 'Profesional sonriendo usando una laptop',
    title: 'Aprende inglés con confianza',
    subtitle1: 'Ofrezco cursos personalizados de inglés',
    subtitle2: 'para profesionales hispanohablantes.',
    cta: 'Más información',
    sr: 'Héroe con imagen de fondo y texto de bienvenida',
  },
  en: {
    aria: 'Main hero section',
    alt: 'Professional smiling while using a laptop',
    title: 'Learn English with confidence',
    subtitle1: 'I offer personalized English courses',
    subtitle2: 'for Spanish-speaking professionals.',
    cta: 'Learn more',
    sr: 'Hero section with background image and welcome text',
  },
  zh: {
    aria: '主视觉区域',
    alt: '正在使用笔记本电脑的专业人士',
    title: '自信学英语',
    subtitle1: '为西语职场人士提供个性化英语课程，',
    subtitle2: '内容贴近工作与沟通场景。',
    cta: '了解更多',
    sr: '带背景图与欢迎文案的主视觉区域',
  },
};
