import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const email = 'wertheimer.digital.services@gmail.com';

  return (
    <footer className="border-t border-slate-200 mt-16">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-semibold mb-2">{t('brand')}</h4>
          <p className="text-slate-600 max-w-sm">
            {i18n.language === 'he'
              ? 'פתרונות דיגיטליים מדידים — מאוטומציה ועד BI — עם השפעה עסקית ברורה.'
              : 'Measurable digital solutions — from automation to BI — with clear business impact.'}
          </p>
        </div>
        <div>
          <h5 className="font-medium mb-3">{t('footer.quick')}</h5>
          <ul className="space-y-2">
            <li><a className="hover:text-primary" href="/#services">{t('nav.services')}</a></li>
            <li><a className="hover:text-primary" href="/#process">{t('nav.process')}</a></li>
            <li><a className="hover:text-primary" href="/#about">{t('nav.about')}</a></li>
            {/*<li><a className="hover:text-primary" href="/#tech">{t('nav.tech')}</a></li>*/}
            <li><a className="hover:text-primary" href="/contact">{t('nav.contact')}</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-3">{t('footer.email')}</h5>
          <a className="text-primary hover:underline break-all" href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        © <span>{new Date().getFullYear()}</span> {t('brand')} — {t('footer.rights')}
      </div>
    </footer>
  );
}
