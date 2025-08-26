import { useTranslation } from 'react-i18next';

export default function ThankYou() {
  const { t } = useTranslation();
  return (
    <section className="container py-24 text-center">
      <h1 className="text-3xl font-semibold mb-3">{t('thankyou.title')}</h1>
      <p className="text-slate-600 mb-8">{t('thankyou.body')}</p>
      <a href="/" className="btn-ghost">{t('thankyou.button')}</a>
    </section>
  );
}
