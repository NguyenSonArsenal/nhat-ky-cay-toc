import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { formatDate } from "@/lib/post-source";
import { PinnedBadge } from "@/components/post/post-grid";
import { ViewCount } from "@/components/post/view-count";
import { listedPosts } from "@/lib/tags";

export function Posts() {
  return (
    <section id="kinh-nghiem" className="mx-auto max-w-6xl px-4 pb-12">
      <SectionHeading title="Bài viết mới nhất" />
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listedPosts()
          .slice(0, 6)
          .map((p) => (
            <Link
              key={p.slug}
              href={`/bai-viet/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="relative block aspect-video overflow-hidden bg-paper">
                <Image
                  src={p.cover}
                  alt={p.coverAlt}
                  fill
                  sizes="(min-width: 1024px) 370px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover object-[50%_30%] transition duration-300 group-hover:scale-105"
                />
                {p.pinned && <PinnedBadge />}
              </span>
              <span className="flex flex-1 flex-col p-5">
                <span className="flex items-center justify-between gap-2 text-[11px]">
                  <span className="rounded-full bg-primary-soft px-2 py-0.5 font-semibold text-primary">
                    {p.category}
                  </span>
                  <span className="flex gap-3 text-muted">
                    <ViewCount slug={p.slug} />
                    {formatDate(p.date)}
                  </span>
                </span>
                <span className="mt-3 flex-1 font-semibold leading-snug text-ink group-hover:text-primary">
                  {p.title}
                </span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                  Đọc bài{" "}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-[9px]"
                  />
                </span>
              </span>
            </Link>
          ))}
      </div>
      <Link
        href="/bai-viet"
        className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
      >
        Xem tất cả bài viết{" "}
        <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
      </Link>
    </section>
  );
}
