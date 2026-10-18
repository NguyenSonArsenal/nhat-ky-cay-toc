import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { posts } from "@/content/posts";

// 10 câu hỏi hay gặp nhất, lấy từ FAQ của các bài viết (sửa câu trả lời trong content/posts/index.ts).
const TOP = [
  "Cấy tóc có đau không?",
  "Cấy tóc tự thân là gì?",
  "Cấy tóc bao nhiêu tiền một nang?",
  "Cấy tóc xong có phải nghỉ làm không?",
  "Sau cấy tóc bao lâu được đội mũ bảo hiểm?",
  "Sau cấy tóc bao lâu thì tự gội đầu được?",
  "Rụng sốc sau cấy tóc kéo dài bao lâu?",
  "Rụng sốc có phải là cấy hỏng không?",
  "Sau cấy tóc bao lâu thì tóc mọc lại?",
  "Bao lâu thì tóc cấy nhìn ổn?",
];

// Câu nào trùng ở nhiều bài thì lấy bài mới nhất
const faqs = TOP.flatMap((q) => {
  const post = [...posts].sort((a, b) => b.date.localeCompare(a.date)).find((p) => p.faq.some((f) => f.q === q));
  const item = post?.faq.find((f) => f.q === q);
  return post && item ? [{ ...item, slug: post.slug }] : [];
});

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <section id="hoi-dap" className="mx-auto max-w-6xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SectionHeading title="Câu hỏi thường gặp" />
      <div className="mt-8 divide-y divide-line border-y border-line">
        {faqs.map((f, i) => (
          <details key={f.q} className="group py-3">
            <summary className="flex cursor-pointer list-none items-start gap-4 [&::-webkit-details-marker]:hidden">
              <span className="w-7 shrink-0 text-xl leading-7 font-bold text-primary">{i + 1}</span>
              <span className="flex-1 text-[17px] leading-7 font-semibold text-ink group-hover:text-primary">{f.q}</span>
              <span className="text-xl leading-7 text-ink transition group-open:rotate-45">+</span>
            </summary>
            <div className="mt-3 pl-11 text-[16px] leading-relaxed">
              <p>{f.a}</p>
              <Link
                href={`/bai-viet/${f.slug}`}
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Đọc bài chi tiết <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
              </Link>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
