import { useAppStore } from '../lib/store';

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.dashboard': 'Dashboard',
    'nav.settings': 'Settings',
    'nav.integrations': 'Integrations',
    'nav.workspace': 'Workspace',
    'nav.help': 'Help',
    'nav.admin': 'Admin',
    
    // Landing Page
    'hero.title': 'Empower Your Local Brand with Digital Clarity',
    'hero.subtitle': 'Get actionable insights, automated reporting, and AI-powered recommendations to grow your business in the digital landscape.',
    'hero.cta': 'Start Free Trial',
    'hero.watch_demo': 'Watch Demo',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.view': 'View',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.continue': 'Continue',
    
    // Dashboard
    'dashboard.welcome': 'Welcome back',
    'dashboard.overview': 'Overview',
    'dashboard.insights': 'AI Insights',
    'dashboard.alerts': 'Alerts',
    'dashboard.suggestions': 'Suggestions',
  },
  ar: {
    // Navigation (Arabic translations)
    'nav.home': 'الرئيسية',
    'nav.features': 'المميزات',
    'nav.pricing': 'التسعير',
    'nav.contact': 'اتصل بنا',
    'nav.login': 'دخول',
    'nav.signup': 'التسجيل',
    'nav.dashboard': 'لوحة التحكم',
    'nav.settings': 'الإعدادات',
    'nav.integrations': 'التكاملات',
    'nav.workspace': 'مساحة العمل',
    'nav.help': 'المساعدة',
    'nav.admin': 'الإدارة',
    
    // Landing Page
    'hero.title': 'قوّي علامتك التجارية المحلية بالوضوح الرقمي',
    'hero.subtitle': 'احصل على رؤى قابلة للتنفيذ وتقارير تلقائية وتوصيات مدعومة بالذكاء الاصطناعي لتنمية أعمالك في المشهد الرقمي.',
    'hero.cta': 'ابدأ النسخة التجريبية المجانية',
    'hero.watch_demo': 'شاهد العرض التوضيحي',
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'خطأ',
    'common.success': 'نجح',
    'common.cancel': 'إلغاء',
    'common.save': 'حفظ',
    'common.delete': 'حذف',
    'common.edit': 'تعديل',
    'common.view': 'عرض',
    'common.back': 'رجوع',
    'common.next': 'التالي',
    'common.previous': 'السابق',
    'common.continue': 'متابعة',
    
    // Dashboard
    'dashboard.welcome': 'مرحباً بعودتك',
    'dashboard.overview': 'نظرة عامة',
    'dashboard.insights': 'رؤى الذكاء الاصطناعي',
    'dashboard.alerts': 'التنبيهات',
    'dashboard.suggestions': 'الاقتراحات',
  }
} as const;

export type TranslationKey = keyof typeof translations.en;

export function useTranslation() {
  const language = useAppStore((state) => state.language);
  
  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key;
  };
  
  return { t, language };
}