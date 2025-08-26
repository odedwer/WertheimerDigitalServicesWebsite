import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CTAButton({ to = '/contact', children, className = '', ...props }) {
  return (
    <a href={to} className={`btn-primary ${className}`} {...props}>
      <span>{children}</span>
      <ArrowRightIcon className="size-5" aria-hidden="true" />
    </a>
  );
}
