import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

export default function CTAButton({ to = '/contact', children, className = '', ...props }) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'he';

  return (
    <a href={to} className={`btn-primary ${className}`} {...props}>
      <span>{children}</span>
      {isRtl ? (
        <ArrowLeftIcon className="size-5" aria-hidden="true" />
      ) : (
        <ArrowRightIcon className="size-5" aria-hidden="true" />
      )}
    </a>
  );
}
