# Wertheimer Digital Services — Website

A production-ready marketing site for **Wertheimer Digital Services** built with **Vite + React + TailwindCSS**, bilingual (Hebrew default + English toggle), responsive, animated, and deployed on **AWS Amplify**. Contact form posts to an AWS Lambda endpoint and is protected by **reCAPTCHA v3**.

## Features
- **Hebrew (default) + English** with client-side language toggle, RTL/LTR direction switching.
- Modern, cool color palette (indigo/cyan), light mode (dark-mode ready).
- Smooth reveal animations with Framer Motion.
- Sections: Hero, Services, Process, About, Capabilities, Tech Stack, FAQ, CTA.
- **Contact page** → POST JSON to Lambda with `x-api-key` header.
- reCAPTCHA v3 (token sent as `recaptchaToken`).
- Clean, accessible Tailwind UI components.

## Folder structure
```
wertheimer-digital-services/
├─ amplify.yml
├─ index.html
├─ package.json
├─ postcss.config.js
├─ README.md
├─ tailwind.config.js
├─ vite.config.js
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ App.jsx
   ├─ index.css
   ├─ main.jsx
   ├─ assets/
│  │  └─ logo.svg
   ├─ components/
│  │  ├─ CTAButton.jsx
│  │  ├─ FeatureCard.jsx
│  │  ├─ Footer.jsx
│  │  ├─ LanguageToggle.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ ProcessStep.jsx
│  │  ├─ Reveal.jsx
│  │  └─ TechBadge.jsx
   ├─ hooks/
│  │  ├─ useDocumentDirection.js
│  │  └─ useRecaptchaV3.js
   ├─ i18n/
│  │  ├─ en.json
│  │  ├─ he.json
│  │  └─ index.js
   ├─ pages/
│  │  ├─ Contact.jsx
│  │  ├─ Home.jsx
│  │  └─ ThankYou.jsx
   └─ utils/
      └─ api.js
```

## Tech
- **React 18**, **Vite 5**, **TailwindCSS 3**
- **react-router-dom** for routing
- **i18next + react-i18next** for multilingual
- **Framer Motion** for reveal animations
- **Heroicons** for icons

## Environment variables (AWS Amplify)
Set these in Amplify Hosting (Build settings → Environment variables):

- `REACT_APP_API_URL` — Your API Gateway/Lambda endpoint (POST).
- `REACT_APP_API_KEY` — API key to send in `x-api-key` header.
- `REACT_APP_RECAPTCHA_SITE_KEY` — reCAPTCHA v3 site key.
