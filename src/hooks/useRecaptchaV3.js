import { useCallback, useEffect, useState } from 'react';

const SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

export default function useRecaptchaV3() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!SITE_KEY) {
      console.warn('Missing REACT_APP_RECAPTCHA_SITE_KEY');
      return;
    }
    // if grecaptcha already present
    if (window.grecaptcha && window.grecaptcha.execute) {
      setReady(true);
      return;
    }
    // inject script
    const id = 'recaptcha-v3';
    if (document.getElementById(id)) {
      const check = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.execute) {
          clearInterval(check);
          setReady(true);
        }
      }, 100);
      return () => clearInterval(check);
    }
    const s = document.createElement('script');
    s.id = id;
    s.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    s.async = true;
    s.defer = true;
    s.onload = () => setReady(true);
    document.head.appendChild(s);
  }, []);

  const execute = useCallback(async (action = 'contact') => {
    if (!ready || !window.grecaptcha) return null;
    try {
      const token = await window.grecaptcha.execute(SITE_KEY, { action });
      return token;
    } catch (e) {
      console.error('reCAPTCHA execution failed', e);
      return null;
    }
  }, [ready]);

  return { ready, execute };
}
