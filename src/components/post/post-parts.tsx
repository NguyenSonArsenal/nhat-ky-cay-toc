import { faFacebookF, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faBolt, faChevronDown, faCommentDots, faListUl, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import type { Faq, PostMeta } from "@/content/posts";
import { contactUrl, site, zaloUrl } from "@/config/site";
import type { TocItem } from "@/lib/post-source";

// Mục lục, mở sẵn, bấm để thu gọn (không cần JavaScript)
export function Toc({ items }: { items: TocItem[] }) {
  return (
    <details open className="group rounded-2xl border border-primary/15 bg-primary-soft/70 px-6 py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2 text-xl font-bold text-primary">
          <FontAwesomeIcon icon={faListUl} className="text-base" />
          Mục lục bài viết
        </span>
        <FontAwesomeIcon icon={faChevronDown} className="text-sm text-primary transition group-open:rotate-180" />
      </summary>
      <ol className="mt-4 space-y-2.5 text-[15px]">
        {items.map((t) => (
          <li key={t.id} className={t.level === 3 ? "pl-5" : ""}>
            <a href={`#${t.id}`} className="font-medium text-body hover:text-primary">
              {t.text}
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}

export function Tldr({ points }: { points: string[] }) {
  return (
    <section className="mt-8 rounded-2xl border-l-4 border-primary bg-white px-6 py-5 shadow-sm">
      <h2 className="flex items-center gap-2 text-xl font-bold text-primary">
        <FontAwesomeIcon icon={faBolt} className="text-base" />
        Tóm tắt nhanh
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-[16px] leading-relaxed marker:text-primary">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </section>
  );
}

// Câu hỏi đánh số, bấm để mở câu trả lời
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <section id="faq" className="mt-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-ink md:text-[28px]">Câu hỏi anh em hay hỏi</h2>
      <div className="divide-y divide-line border-y border-line">
        {items.map((f, i) => (
          <details key={f.q} className="group py-3">
            <summary className="flex cursor-pointer list-none items-start gap-4 [&::-webkit-details-marker]:hidden">
              <span className="text-2xl leading-none font-bold text-primary">{i + 1}</span>
              <span className="flex-1 text-[17px] font-semibold text-ink">{f.q}</span>
              <span className="text-xl leading-none text-ink transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 pl-10 text-[16px] leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function AuthorBox() {
  const socials = [
    { href: site.tiktok, label: "TikTok", icon: faTiktok },
    { href: site.facebook, label: "Facebook", icon: faFacebookF },
    { href: zaloUrl, label: "Zalo", icon: faCommentDots },
  ].filter((s) => s.href);
  return (
    <section className="mt-10 grid items-center gap-6 rounded-3xl bg-gradient-to-br from-primary-soft to-paper p-6 md:grid-cols-[1fr_auto] md:p-10">
      <div>
        <p className="text-3xl font-extrabold text-primary">{site.nickname}</p>
        <div className="mt-3 flex gap-3 text-ink">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="hover:text-primary">
              <FontAwesomeIcon icon={s.icon} />
            </a>
          ))}
        </div>
        <p className="mt-3 text-[15px] leading-relaxed">
          Mình là {site.author}, cấy tóc ngày {site.surgeryDate}. Mình làm seri nhật ký này để chia sẻ với những anh em
          đang cùng cảnh rụng tóc như mình: cấy xong tóc ra sao, lúc ổn lúc thảm thế nào, mình kể hết. Mình không phải
          bác sĩ, chỉ là người đã trải qua. Anh em có gì lăn tăn cứ nhắn mình nhé.
        </p>
        <a
          href={contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-lg border border-primary bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
        >
          <FontAwesomeIcon icon={faCommentDots} />
          Chat Zalo với mình
        </a>
      </div>
      <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-52 md:w-52">
        <Image src="/images/avatar.jpg" alt={site.nickname} fill sizes="208px" className="object-cover" />
      </div>
    </section>
  );
}

export function RelatedSidebar({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="space-y-6 lg:sticky lg:top-24">
      {posts.length > 0 && (
        <div className="rounded-3xl bg-gradient-to-b from-primary-soft to-paper p-6">
          <p className="text-2xl font-bold text-primary">Bài viết liên quan</p>
          <ul className="mt-5 space-y-4">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/bai-viet/${p.slug}`} className="group flex items-center gap-3">
                  <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white">
                    <Image src={p.cover} alt={p.coverAlt} fill sizes="64px" className="object-cover" />
                  </span>
                  <span className="text-[15px] leading-snug font-medium text-ink group-hover:text-primary">{p.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="rounded-3xl border-2 border-dashed border-primary bg-white p-6 text-center">
        <FontAwesomeIcon icon={faTicket} className="text-3xl text-primary" />
        <p className="mt-2 text-lg font-extrabold text-ink">
          Mã giảm <span className="text-primary">{site.discount}</span>
        </p>
        <p className="mt-1 text-sm">
          Anh em định cấy ở {site.clinic}, nơi mình đã cấy, thì nhắn mình để nhận mã. Mã trừ trực tiếp vào chi phí cấy
          tóc.
        </p>
        <a
          href={contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-primary bg-white px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary-soft"
        >
          <FontAwesomeIcon icon={faCommentDots} />
          Nhắn mình lấy mã
        </a>
      </div>
    </div>
  );
}
