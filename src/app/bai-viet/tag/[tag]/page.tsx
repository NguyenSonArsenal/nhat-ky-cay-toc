import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostGrid } from "@/components/post/post-grid";
import { allTags, findTag, listedPosts, postsByTag } from "@/lib/tags";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return allTags().map((t) => ({ tag: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/bai-viet/tag/[tag]">): Promise<Metadata> {
  const tag = findTag((await params).tag);
  if (!tag) return {};
  return { title: `Tag: ${tag.name}`, description: `Các bài viết về ${tag.name.toLowerCase()} trong nhật ký cấy tóc.` };
}

export default async function TagPage({ params }: PageProps<"/bai-viet/tag/[tag]">) {
  const { tag: slug } = await params;
  const tag = findTag(slug);
  if (!tag) notFound();

  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 pb-12 md:pt-16">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          Tag: <span className="text-primary">{tag.name}</span>
        </h1>
        <Link href="/bai-viet/tag" className="text-sm font-medium text-muted hover:text-primary">
          Xem tất cả tag
        </Link>
      </div>
      <p className="mt-2 text-sm text-muted">{tag.total} bài viết</p>
      <div className="mt-8">
        <PostGrid posts={listedPosts(postsByTag(slug))} paginate />
      </div>
    </section>
  );
}
