
export async function sendContact({ email, subject, content, recaptchaToken }) {
  const base = import.meta.env.VITE_API_URL;
  if (!base) throw new Error('Missing API URL (set REACT_APP_API_URL or VITE_API_URL).');

  const url = `${base.replace(/\/$/, '')}/contact`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, // no API key, no auth headers
    body: JSON.stringify({ email, subject, content, recaptchaToken }),
    // credentials: 'omit' // default; keep cookies out
    // mode: 'cors'       // default in browsers
  });

  // Try to parse JSON either way
  const text = await res.text();
  const data = text ? (() => { try { return JSON.parse(text); } catch { return { raw: text }; } })() : null;

  if (!res.ok) {
    throw new Error(data?.error || `Request failed: ${res.status}`);
  }
  return data;
}
