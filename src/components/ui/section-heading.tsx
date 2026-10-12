export function SectionHeading({ title, sub }: { title: string; sub: string }) {
  return (
    <div>
      <span aria-hidden className="mb-3 block h-1 w-10 rounded-full bg-primary" />
      <h2 className="text-2xl font-bold text-ink md:text-3xl">{title}</h2>
      <p className="mt-2 text-sm text-muted">{sub}</p>
    </div>
  );
}
