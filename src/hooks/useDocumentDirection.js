import { useEffect } from 'react';
import i18n from '../i18n';

export default function useDocumentDirection() {
  useEffect(() => {
    const update = () => {
      const lang = i18n.language || 'he';
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
      try { localStorage.setItem('lang', lang); } catch (e) {}
    };
    update();
    i18n.on('languageChanged', update);
    return () => i18n.off('languageChanged', update);
  }, []);
}
