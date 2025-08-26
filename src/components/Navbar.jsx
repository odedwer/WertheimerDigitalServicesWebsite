import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import logo from '../assets/logo.svg';

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto flex items-center justify-between py-3">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="WDS" className="h-8 w-auto" />
          <span className="font-semibold">{t('brand')}</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="/#services" className="hover:text-primary">{t('nav.services')}</a>
          <a href="/#process" className="hover:text-primary">{t('nav.process')}</a>
          <a href="/#about" className="hover:text-primary">{t('nav.about')}</a>
          <a href="/#tech" className="hover:text-primary">{t('nav.tech')}</a>
          <a href="/#faq" className="hover:text-primary">{t('nav.faq')}</a>
          <a href="/contact" className="btn-ghost">{t('nav.contact')}</a>
          <LanguageToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <a href="/contact" className="btn-ghost">{t('nav.contact')}</a>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
