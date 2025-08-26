import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';
import FeatureCard from '../components/FeatureCard';
import ProcessStep from '../components/ProcessStep';
import TechBadge from '../components/TechBadge';
import CTAButton from '../components/CTAButton';

export default function Home() {
  const { t } = useTranslation();
  const techItems = t('tech.items', { returnObjects: true });

  return (
    <>
      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none"
             style={{ background: 'radial-gradient(1200px 600px at 50% -10%, #A5B4FC22, transparent), radial-gradient(800px 400px at 80% 10%, #67E8F922, transparent)' }} />
        <div className="container py-16 sm:py-24 text-center">
          <Reveal>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight mb-4">{t('hero.title')}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto max-w-2xl text-slate-600 mb-8">{t('hero.subtitle')}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="flex justify-center gap-3">
              <CTAButton to="/contact">{t('hero.primary')}</CTAButton>
              <a href="#services" className="btn-ghost">{t('hero.secondary')}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-16">
        <Reveal><h2 className="section-title">{t('services.title')}</h2></Reveal>
        <Reveal delay={0.1}><p className="section-subtitle mt-2">{t('services.subtitle')}</p></Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal><FeatureCard icon="web" title={t('services.cards.web.title')} desc={t('services.cards.web.desc')} /></Reveal>
          <Reveal delay={0.1}><FeatureCard icon="ops" title={t('services.cards.ops.title')} desc={t('services.cards.ops.desc')} /></Reveal>
          <Reveal delay={0.2}><FeatureCard icon="digit" title={t('services.cards.digit.title')} desc={t('services.cards.digit.desc')} /></Reveal>
          <Reveal delay={0.3}><FeatureCard icon="metrics" title={t('services.cards.metrics.title')} desc={t('services.cards.metrics.desc')} /></Reveal>
        </div>

        <div className="mt-8">
          <CTAButton to="/contact">{t('services.cta')}</CTAButton>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-slate-50 py-16">
        <div className="container">
          <Reveal><h2 className="section-title">{t('process.title')}</h2></Reveal>
          <div className="relative mt-8 grid gap-8">
            {t('process.steps', { returnObjects: true }).map((s, idx) => (
              <Reveal delay={0.05 * idx} key={idx}>
                <ProcessStep index={idx + 1} title={s.title} desc={s.desc} />
              </Reveal>
            ))}
            <div className="absolute left-2 rtl:left-auto rtl:right-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 to-accent/40 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-16">
        <Reveal><h2 className="section-title">{t('about.title')}</h2></Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 text-lg leading-8 text-slate-700 max-w-3xl">{t('about.body')}</p>
        </Reveal>

        {/* Capabilities */}
        <div className="mt-10">
          <Reveal><h3 className="text-xl font-semibold mb-4">{t('capabilities.title')}</h3></Reveal>
          <div className="flex flex-wrap gap-2">
            {t('capabilities.items', { returnObjects: true }).map((cap, i) => (
              <Reveal delay={0.05 * i} key={i}>
                <TechBadge label={cap} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section id="tech" className="bg-slate-50 py-16">
        <div className="container">
          <Reveal><h2 className="section-title">{t('tech.title')}</h2></Reveal>
          <Reveal delay={0.1}><p className="section-subtitle mt-2">{t('tech.subtitle')}</p></Reveal>
          <div className="mt-6 flex flex-wrap gap-3">
            {techItems.map((item, i) => (
              <Reveal delay={0.04 * i} key={i}><TechBadge label={item} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container py-16">
        <Reveal><h2 className="section-title">{t('faq.title')}</h2></Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {['q1','q2','q3'].map((k, i) => (
            <Reveal delay={0.08 * i} key={k}>
              <div className="card p-6 h-full">
                <h4 className="font-semibold mb-2">{t(`faq.${k}.q`)}</h4>
                <p className="text-slate-600">{t(`faq.${k}.a`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <Reveal><h3 className="text-2xl font-semibold mb-3">{t('cta.headline')}</h3></Reveal>
          <Reveal delay={0.1}><CTAButton to="/contact">{t('cta.primary')}</CTAButton></Reveal>
        </div>
      </section>
    </>
  );
}
