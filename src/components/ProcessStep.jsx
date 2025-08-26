export default function ProcessStep({ index, title, desc }) {
  return (
    <div className="relative pl-8 rtl:pl-0 rtl:pr-8">
      <div className="absolute left-0 rtl:left-auto rtl:right-0 top-1.5 w-5 h-5 rounded-full bg-primary"></div>
      <h4 className="font-semibold">{index}. {title}</h4>
      <p className="text-slate-600">{desc}</p>
    </div>
  );
}
