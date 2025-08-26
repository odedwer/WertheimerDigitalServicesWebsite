import i18n from '../i18n';

export default function LanguageToggle() {
  const toggle = () => {
    const next = i18n.language === 'he' ? 'en' : 'he';
    i18n.changeLanguage(next);
  };
  const label = i18n.t('nav.lang');
  return (
    <button onClick={toggle} className="btn-ghost text-sm">
      {label}
    </button>
  );
}
