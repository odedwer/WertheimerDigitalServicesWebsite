export async function sendContact({ email, subject, content, recaptchaToken }) {
  const url = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  if (!url || !apiKey) {
    throw new Error('Missing API configuration. Ensure REACT_APP_API_URL and REACT_APP_API_KEY are set.');
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    },
    body: JSON.stringify({ email, subject, content, recaptchaToken })
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed with status ${res.status}`);
  }

  return res.json().catch(() => ({}));
}
