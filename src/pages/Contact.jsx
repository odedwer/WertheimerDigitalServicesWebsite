import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useRecaptchaV3 from '../hooks/useRecaptchaV3';
import { sendContact } from '../utils/api';

export default function Contact() {
  const { t } = useTranslation();
  const nav = useNavigate();
  const { ready, execute } = useRecaptchaV3();

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const valid = email && subject && content && !sending;

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!valid) return;
    setSending(true);
    try {
      const recaptchaToken = ready ? await execute('contact') : null;
      const payload = { email, subject, content, recaptchaToken };
      await sendContact(payload);
      nav('/thank-you');
    } catch (err) {
      console.error(err);
      setError(t('contact.error'));
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="container py-16">
      <h1 className="section-title">{t('contact.title')}</h1>
      <p className="section-subtitle mt-2">{t('contact.subtitle')}</p>

      <form onSubmit={onSubmit} className="mt-8 max-w-2xl">
        <div className="grid gap-5">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">{t('contact.emailLabel')}</label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="subject">{t('contact.subjectLabel')}</label>
            <input
              id="subject"
              type="text"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder=""
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">{t('contact.messageLabel')}</label>
            <textarea
              id="message"
              required
              rows={6}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {error && <div className="text-red-600">{error}</div>}

          <button type="submit" disabled={!valid} className="btn-primary w-full sm:w-auto">
            {sending ? '...' : t('contact.submit')}
          </button>

          <p className="text-xs text-slate-500">{t('contact.policy')}</p>
        </div>
      </form>
    </section>
  );
}
