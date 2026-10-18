import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { ViewCount } from "@/components/post/view-count";
import { Pagination } from "@/components/ui/pagination";
import { PhotoSlot } from "@/components/ui/photo-slot";
import type { PostMeta } from "@/content/posts";
import { formatDate, getReadingMinutes } from "@/lib/post-source";
import { tagHref } from "@/lib/tags";

const grid = "grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3";

// Lưới bài viết kiểu tkdodo.eu/blog: ảnh bìa, ngày + thời gian đọc, tiêu đề, tag.
// paginate: chia trang ở dưới lưới (trang Blog, trang tag); bỏ trống thì hiện hết.
export function PostGrid({
  posts,
  upcoming = [],
  paginate = false,
}: {
  posts: (PostMeta & { pinned?: boolean })[];
  upcoming?: string[];
  paginate?: boolean;
}) {
  const items = [
    ...posts.map((p, i) => <PostCard key={p.slug} post={p} eager={i < 3} />),
    ...upcoming.map((title) => <UpcomingCard key={title} title={title} />),
  ];

  if (paginate) return <Pagination items={items} className={grid} />;
  return <ul className={grid}>{items}</ul>;
}

function PostCard({ post: p, eager }: { post: PostMeta & { pinned?: boolean }; eager: boolean }) {
  return (
    <li className="group rounded-2xl p-2 ring-1 ring-transparent transition hover:bg-white hover:ring-primary/30">
      <Link href={`/bai-viet/${p.slug}`} className="block">
        <span className="relative block aspect-[3/2] overflow-hidden rounded-xl bg-paper">
          <Image
            src={p.cover}
            alt={p.coverAlt}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
            className="object-cover object-[50%_30%] transition duration-300 group-hover:scale-105"
            loading={eager ? "eager" : "lazy"}
          />
          {p.pinned && <PinnedBadge />}
        </span>
        <span className="mt-3 flex justify-between gap-2 text-sm text-muted">
          <span>{formatDate(p.date)}</span>
          <ViewCount slug={p.slug} />
          <span>{getReadingMinutes(p.slug)} phút đọc</span>
        </span>
        <span className="mt-1.5 block text-lg leading-snug font-bold text-ink group-hover:text-primary">{p.title}</span>
      </Link>
      <p className="mt-2 text-xs text-muted">
        {p.tags.map((t, j) => (
          <span key={t}>
            {j > 0 && ", "}
            <Link href={tagHref(t)} className="hover:text-primary hover:underline">
              {t}
            </Link>
          </span>
        ))}
      </p>
    </li>
  );
}

function UpcomingCard({ title }: { title: string }) {
  return (
    <li className="p-2 opacity-70">
      <PhotoSlot label="Sắp có" className="aspect-[3/2] w-full" />
      <span className="mt-3 block text-sm text-muted">Đang viết</span>
      <span className="mt-1.5 block text-lg leading-snug font-bold text-ink">{title}</span>
    </li>
  );
}

// Nhãn "Đã ghim" ở góc ảnh, giống video ghim trên TikTok
export function PinnedBadge() {
  return (
    <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-md bg-primary px-2 py-0.5 text-xs font-semibold text-white shadow">
      <FontAwesomeIcon icon={faThumbtack} className="text-[10px]" />
      Đã ghim
    </span>
  );
}
