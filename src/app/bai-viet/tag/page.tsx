import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { allTags, tagHref } from "@/lib/tags";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Tất cả tag",
  description: "Các chủ đề trong nhật ký cấy tóc: chăm sóc sau cấy, rụng sốc, tóc mọc lại...",
};

export default function TagsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 pb-12 md:pt-16">
      <Breadcrumb className="text-primary" items={[{ label: "Blog", href: "/bai-viet" }, { label: "Tag" }]} />
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">Tất cả tag</h1>
      <ul className="mt-8 flex flex-wrap gap-3">
        {allTags().map((t) => (
          <li key={t.slug}>
            <Link
              href={tagHref(t.name)}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
            >
              {t.name}
              <span className="rounded-full bg-primary-soft px-2 text-xs text-primary">{t.total}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
