import type { Metadata } from "next";
import { faArrowLeft, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AuthorBox, FaqList, RelatedSidebar, Tldr, Toc } from "@/components/post/post-parts";
import { ShareButtons } from "@/components/post/share-buttons";
import { ViewTracker } from "@/components/post/view-count";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { site } from "@/config/site";
import { getPost, posts } from "@/content/posts";
import { formatDate, getReadingMinutes, getToc } from "@/lib/post-source";
import { sortedPosts } from "@/lib/tags";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/bai-viet/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description, images: [post.cover], type: "article" },
  };
}

export default async function PostPage({ params }: PageProps<"/bai-viet/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Body } = await import(`@/content/posts/${slug}.mdx`);
  const toc = getToc(slug);
  // Bài liên quan: ưu tiên bài chung nhiều tag nhất, lấy 4 bài
  const related = posts
    .filter((p) => p.slug !== slug)
    .map((p) => ({ p, shared: p.tags.filter((t) => post.tags.includes(t)).length }))
    .sort((x, y) => y.shared - x.shared || y.p.date.localeCompare(x.p.date))
    .slice(0, 4)
    .map((x) => x.p);

  // Dữ liệu cấu trúc cho Google: bài viết + FAQ
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      image: post.cover,
      author: { "@type": "Person", name: site.nickname, url: site.tiktok },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <article className="mx-auto max-w-6xl px-4 pt-6 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <BackToList className="mb-5" />

      {/* Banner */}
      <header className="relative isolate flex min-h-[340px] items-end overflow-hidden rounded-3xl md:min-h-[420px]">
        <Image src={post.cover} alt={post.coverAlt} fill priority sizes="(min-width: 1152px) 1152px, 100vw" className="-z-20 object-cover" />
        <div className="post-banner-overlay absolute inset-0 -z-10 bg-gradient-to-t from-primary-dark via-primary/80 to-primary/10" />
        <div className="post-banner-text w-full p-6 text-white md:p-8">
          <Breadcrumb
            className="text-white/85"
            items={[{ label: "Trang chủ", href: "/" }, { label: "Blog", href: "/bai-viet" }, { label: post.title }]}
          />
          <h1 className="mt-3 max-w-4xl text-3xl leading-tight font-extrabold md:text-[42px]">{post.title}</h1>
        </div>
      </header>

      {/* Tác giả + chia sẻ */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line py-6">
        <div className="flex items-center gap-3 text-sm">
          <span className="relative h-9 w-9 overflow-hidden rounded-full">
            <Image src="/images/avatar.jpg" alt={site.nickname} fill sizes="36px" className="object-cover" />
          </span>
          <span className="font-semibold text-primary">{site.nickname}</span>
          <span className="text-muted">•</span>
          <time dateTime={post.date} className="text-muted">
            {formatDate(post.date)}
          </time>
          <span className="text-muted">•</span>
          <span className="text-muted">{getReadingMinutes(slug)} phút đọc</span>
          <span className="text-muted">•</span>
          <ViewTracker slug={slug} className="text-muted" />
        </div>
        <ShareButtons />
      </div>

      <div className="mt-6 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          <Toc items={toc} />
          <Tldr points={post.tldr} />
          <div className="mt-8">
            <Body />
          </div>
          <PrevNext slug={slug} />
          <FaqList items={post.faq} />
          <AuthorBox />
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <BackToList />
            <ShareButtons />
          </div>
        </div>
        <aside>
          <RelatedSidebar posts={related} />
        </aside>
      </div>
    </article>
  );
}

function BackToList({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/bai-viet"
      className={`inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary-soft ${className}`}
    >
      <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
      Quay lại danh sách bài viết
    </Link>
  );
}

// Bài trước = bài cũ hơn, bài tiếp = bài mới hơn (theo ngày đăng)
function PrevNext({ slug }: { slug: string }) {
  const list = sortedPosts();
  const i = list.findIndex((p) => p.slug === slug);
  const prev = list[i + 1];
  const next = list[i - 1];
  if (!prev && !next) return null;
  const card = "group flex flex-col gap-1 rounded-2xl border border-line bg-white p-4 transition hover:border-primary";
  return (
    <nav aria-label="Bài trước và bài tiếp" className="mt-12 grid gap-4 sm:grid-cols-2">
      {prev ? (
        <Link href={`/bai-viet/${prev.slug}`} className={card}>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
            <FontAwesomeIcon icon={faChevronLeft} className="text-[10px]" /> Bài trước
          </span>
          <span className="leading-snug font-semibold text-ink group-hover:text-primary">{prev.title}</span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
      {next && (
        <Link href={`/bai-viet/${next.slug}`} className={`${card} sm:items-end sm:text-right`}>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
            Bài tiếp <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
          </span>
          <span className="leading-snug font-semibold text-ink group-hover:text-primary">{next.title}</span>
        </Link>
      )}
    </nav>
  );
}
