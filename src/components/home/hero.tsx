import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { SwiperGallery } from "@/components/ui/swiper-gallery";
import { site } from "@/config/site";
import { milestones } from "@/content/milestones";

// Ảnh bìa video TikTok từng mốc, lấy từ milestones (ảnh thật của chủ trang).
const gallery = milestones
  .filter((m) => m.image)
  .map((m) => ({ src: m.image!, caption: `${m.label} sau cấy (${m.date}): ${m.stage}` }));

export function Hero() {
  return (
    <section id="trang-chu" className="bg-gradient-to-b from-primary-soft via-paper to-page">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-16 md:grid-cols-[1.15fr_1fr] md:pt-12 md:pb-32">
        <div className="min-w-0">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1 text-xs font-semibold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Đang ở tháng thứ {site.currentMonth} sau cấy
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
            Hành trình cấy tóc <span className="text-primary">của {site.author}</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed font-medium text-ink md:text-lg">
            Mình đã thoát hói thành công nhờ phương pháp cấy tóc tự thân {site.grafts.toLocaleString("vi-VN")} nang.
            Mình chia sẻ lại quá trình cấy tóc để lan tỏa năng lượng tích cực đến những anh em đồng hói, những người đã
            và đang quan tâm đến việc cấy tóc, hay đang tự ti vì không có tóc. Mong anh em có lại mái tóc trên đầu để
            trông trẻ hơn, tự tin hơn, và không còn nhiều mặc cảm trong cuộc sống.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#hanh-trinh"
              className="inline-flex items-center gap-2 rounded-lg border border-primary bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
            >
              Xem tóc mình từng mốc
            </Link>
            <a
              href={site.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
            >
              <FontAwesomeIcon icon={faTiktok} />
              Xem video TikTok
            </a>
          </div>
        </div>
        <div className="mx-auto w-full min-w-0 max-w-md rounded-2xl border border-line bg-white p-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)]">
          <SwiperGallery images={gallery} autoplay={5} loopMode ratio="4 / 5" caption="Nhật ký cấy tóc" priority />
        </div>
      </div>
    </section>
  );
}
