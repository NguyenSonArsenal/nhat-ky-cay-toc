import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AuthorBox, FaqList, RelatedSidebar, Tldr, Toc } from "@/components/post/post-parts";
import { ShareButtons } from "@/components/post/share-buttons";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { site } from "@/config/site";
import { getPost, posts } from "@/content/posts";
import { formatDate, getReadingMinutes, getToc } from "@/lib/post-source";

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
  const related = posts.filter((p) => p.slug !== slug);

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
    <article className="mx-auto max-w-6xl px-4 pt-6 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Banner */}
      <header className="relative isolate flex min-h-[340px] items-end overflow-hidden rounded-3xl md:min-h-[420px]">
        <Image src={post.cover} alt={post.coverAlt} fill priority sizes="(min-width: 1152px) 1152px, 100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary-dark via-primary/80 to-primary/10" />
        <div className="w-full p-6 text-white md:p-12">
          <Breadcrumb
            className="text-white/85"
            items={[{ label: "Trang chủ", href: "/" }, { label: post.category, href: "/#kinh-nghiem" }, { label: post.title }]}
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
        </div>
        <ShareButtons />
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          <Toc items={toc} />
          <Tldr points={post.tldr} />
          <div className="mt-8">
            <Body />
          </div>
          <FaqList items={post.faq} />
          <AuthorBox />
          <div className="mt-8">
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
