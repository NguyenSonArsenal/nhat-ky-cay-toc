import type { Metadata } from "next";
import Link from "next/link";
import { PostGrid } from "@/components/post/post-grid";
import { site } from "@/config/site";
import { upcomingPosts } from "@/content/posts";
import { listedPosts } from "@/lib/tags";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Blog",
  description: `Tất cả bài viết trong nhật ký cấy tóc của ${site.nickname}: tháng đầu sau cấy, rụng sốc, tóc mọc lại, kể thật từng mốc.`,
};

// Trang danh sách bài viết, bố cục tham khảo tkdodo.eu/blog/all.
export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 pb-12 md:pt-16">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">Blog</h1>
        <Link href="/bai-viet/tag" className="text-sm font-medium text-muted hover:text-primary">
          Xem tất cả tag
        </Link>
      </div>
      <div className="mt-8">
        <PostGrid posts={listedPosts()} upcoming={upcomingPosts} paginate />
      </div>
    </section>
  );
}
