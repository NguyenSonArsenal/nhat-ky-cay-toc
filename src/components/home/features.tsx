import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactUrl, site } from "@/config/site";

const cover = (id: string) => `/images/tiktok/${id}.jpg`;

// Ảnh bìa video TikTok thật của chủ trang; position để khung cắt giữ được mặt.
const cards = [
  {
    href: "/#hanh-trinh",
    image: cover("7692857707140812052"),
    day: "Ngày 155",
    position: "50% 26%",
    title: "Tóc qua từng mốc",
    text: "Ảnh thật từ ngày 5 đến hôm nay, cả lúc ổn lẫn lúc thảm nhất. Bấm vào là xem được video.",
  },
  {
    href: "/bai-viet",
    image: cover("7636370492471151892"),
    day: "Ngày 8",
    position: "50% 52%",
    title: "Kinh nghiệm thật",
    text: "Cấy có đau không, rụng sốc, gội đầu, đội mũ bảo hiểm... toàn chuyện mình tự trải qua.",
  },
  {
    href: contactUrl,
    image: cover("7654014804973243668"),
    day: "Ngày 55",
    position: "50% 80%",
    title: "Tặng mã giảm giá khi đi cấy tóc",
    text: `Cấy tóc không rẻ, bớt được đồng nào hay đồng đó. Nhắn mình để nhận mã ưu đãi giảm giá ${site.discount}, trừ trực tiếp vào chi phí cấy tóc tại ${site.clinic}.`,
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading title="Hành trình của mình sẽ có những gì" sub="Mọi thứ mình biết về cấy tóc, gom về một chỗ cho anh em đỡ phải đi tìm." />
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {cards.map(({ href, image, day, position, title, text }) => (
          <article
            key={title}
            className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative aspect-[4/3] bg-primary-soft">
              <Image
                src={image}
                alt={`${site.nickname}, ${day.toLowerCase()} sau cấy tóc`}
                fill
                sizes="(min-width: 768px) 360px, 90vw"
                className="object-cover"
                style={{ objectPosition: position }}
              />
              <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink">
                <FontAwesomeIcon icon={faTiktok} />
                {day}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed">{text}</p>
              <Link
                href={href}
                {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-md border border-primary bg-white px-3.5 py-2 text-xs font-semibold text-primary hover:bg-primary-soft"
              >
                Xem thêm <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
