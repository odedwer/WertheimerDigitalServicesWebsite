import { CpuChipIcon, Cog6ToothIcon, CursorArrowRaysIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const ICONS = {
  web: CursorArrowRaysIcon,
  ops: Cog6ToothIcon,
  digit: CpuChipIcon,
  metrics: ChartBarIcon
};

export default function FeatureCard({ icon = 'web', title, desc }) {
  const Icon = ICONS[icon] || CursorArrowRaysIcon;
  return (
    <div className="card p-6 h-full">
      <div className="mb-4 inline-flex rounded-lg bg-slate-100 p-3">
        <Icon className="size-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}
