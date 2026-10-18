import { faFacebookF, faTiktok } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faCommentDots,
  faHeadset,
  faPhone,
  faSeedling,
  faShieldHeart,
  faTicket,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PostGrid } from "@/components/post/post-grid";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { QrCode } from "@/components/ui/qr-code";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactUrl, site, zaloUrl } from "@/config/site";
import { milestones } from "@/content/milestones";
import { sortedPosts } from "@/lib/tags";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: `Nhắn ${site.nickname} để hỏi chuyện cấy tóc, chăm sóc sau cấy, rụng sốc. Hỏi thôi cũng được, chưa cấy cũng không sao.`,
};

// Bố cục tham khảo caubethoathoi.com/ho-tro: lời mời nhắn tin, các kênh liên hệ,
// anh em có thể hỏi gì, ảnh từng mốc và bài viết, rồi QR Zalo ở cuối.
// Mọi chi tiết lấy từ nhật ký thật của chủ trang, không thêm thắt.

type Channel = { href: string; label: string; value: string; icon: IconDefinition | null; external: boolean };

const channels: Channel[] = [
  { href: zaloUrl, label: "Zalo", value: "Nhắn tin cho mình", icon: null, external: true },
  { href: site.zaloPhone ? `tel:${site.zaloPhone}` : "", label: "Điện thoại", value: "Gọi cho mình", icon: faPhone, external: false },
  { href: site.facebook, label: "Facebook", value: site.nickname, icon: faFacebookF, external: true },
  { href: site.tiktok, label: "TikTok", value: site.tiktokHandle, icon: faTiktok, external: true },
].filter((c) => c.href);

const topics = [
  {
    icon: faSeedling,
    title: "Trước khi cấy",
    text: "Mình đã đắn đo, trăn trở và đi làm tiết kiệm tiền rất lâu mới quyết. Anh em đang phân vân thì cứ hỏi, mình kể lại mình đã nghĩ gì.",
  },
  {
    icon: faShieldHeart,
    title: "Chăm sóc sau cấy",
    text: "Gội đầu nhẹ tay thế nào, bong vảy có sao không, bao giờ đội lại mũ bảo hiểm... toàn chuyện mình tự trải qua.",
  },
  {
    icon: faHeadset,
    title: "Lúc rụng sốc",
    text: "Tóc rụng trắng hai bên, có hôm mình chẳng dám ra đường. Anh em đang ở giai đoạn này thì nhắn mình, nói chuyện cho đỡ lo.",
  },
  {
    icon: faTicket,
    title: "Mã giảm giá",
    text: `Anh em định cấy ở ${site.clinic}, nơi mình đã cấy, thì nhắn mình để nhận mã giảm ${site.discount}.`,
  },
];

export default function ContactPage() {
  const photos = milestones.filter((m) => m.image).slice(-4);

  return (
    <>
      {/* Lời mời nhắn tin */}
      <section className="bg-gradient-to-b from-primary-soft via-paper to-page">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-12 pb-16 md:grid-cols-[1.2fr_1fr] md:pt-16">
          <div>
            <Breadcrumb className="text-primary" items={[{ label: "Trang chủ", href: "/" }, { label: "Liên hệ" }]} />
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
              Có gì lăn tăn <span className="text-primary">cứ nhắn mình</span>
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink">
              Mình là {site.author}, cấy tóc tự thân {site.grafts.toLocaleString("vi-VN")} nang ngày {site.surgeryDate}.
              Anh em đang tính cấy, vừa cấy xong hay đang rụng sốc, nhắn mình để mình chia sẻ những gì mình đã trải qua.
              Chưa cấy cũng được, hỏi thôi cũng được.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-primary bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
              >
                <FontAwesomeIcon icon={faCommentDots} />
                Nhắn Zalo cho mình
              </a>
              {site.zaloPhone && (
                <a
                  href={`tel:${site.zaloPhone}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-primary bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
                >
                  <FontAwesomeIcon icon={faPhone} />
                  Gọi cho mình
                </a>
              )}
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-full border-8 border-white shadow-xl">
            <Image src="/images/avatar.jpg" alt={site.nickname} fill sizes="320px" className="object-cover" loading="eager" />
          </div>
        </div>
      </section>

      {/* Các kênh liên hệ */}
      <section className="mx-auto max-w-6xl px-4">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                {...(c.external && { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary-soft text-lg text-primary transition group-hover:bg-primary group-hover:text-white">
                  {c.icon ? <FontAwesomeIcon icon={c.icon} /> : <span className="text-[11px] font-extrabold">Zalo</span>}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold tracking-wide text-muted uppercase">{c.label}</span>
                  <span className="block truncate font-bold text-ink group-hover:text-primary">{c.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Anh em có thể hỏi gì */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeading title="Anh em có thể hỏi mình những gì" />
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((t) => (
            <li key={t.title} className="rounded-2xl border border-line bg-white p-6">
              <FontAwesomeIcon icon={t.icon} className="text-2xl text-primary" />
              <h3 className="mt-4 text-lg font-bold text-ink">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{t.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          Mình không phải bác sĩ. Chuyện chuyên môn anh em nên hỏi bác sĩ nơi mình cấy, mình chỉ kể trải nghiệm của mình.
        </p>
      </section>

      {/* Ảnh từng mốc */}
      <section className="bg-paper py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading title="Tóc mình qua từng mốc" />
            <Link href="/#hanh-trinh" className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:underline sm:inline-flex">
              Xem đủ các mốc <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
            </Link>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {photos.map((m) => (
              <li key={m.label} className="rounded-2xl bg-white p-2 pb-3 shadow-sm">
                <span className="relative block aspect-[3/4] overflow-hidden rounded-xl bg-paper">
                  <Image src={m.image!} alt={`Tóc ${m.label.toLowerCase()} sau cấy`} fill sizes="(min-width: 768px) 270px, 45vw" className="object-cover" />
                </span>
                <p className="mt-2 flex items-baseline justify-between px-1">
                  <span className="font-bold text-ink">{m.label}</span>
                  <span className="text-xs text-muted">{m.date}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bài viết mới */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading title="Bài viết mới của mình" />
          <Link href="/bai-viet" className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:underline sm:inline-flex">
            Xem tất cả <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
          </Link>
        </div>
        <div className="mt-10">
          <PostGrid posts={sortedPosts().slice(0, 3)} />
        </div>
      </section>

      {/* QR Zalo */}
      {zaloUrl && (
        <section className="px-4 pb-16">
          <div className="mx-auto grid max-w-4xl items-center gap-8 rounded-3xl border border-line bg-white p-6 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.2)] md:grid-cols-[1fr_220px] md:p-8">
            <div>
              <h2 className="text-2xl font-bold text-ink md:text-3xl">Quét mã để nhắn Zalo cho mình</h2>
              <p className="mt-3 leading-relaxed">
                Mở camera điện thoại quét mã bên cạnh là vào Zalo của mình.
              </p>
              <a
                href={zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
              >
                <FontAwesomeIcon icon={faCommentDots} />
                Nhắn Zalo cho mình
              </a>
            </div>
            <div className="mx-auto w-full max-w-[220px] rounded-2xl border border-line p-3">
              <QrCode value={zaloUrl} label="Mã QR mở Zalo của mình" className="w-full" />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
