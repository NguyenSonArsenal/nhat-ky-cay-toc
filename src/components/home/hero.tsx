import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { HeroIllustration } from "@/components/ui/hero-illustration";
import { site } from "@/config/site";

export function Hero() {
  return (
    <section id="trang-chu" className="bg-gradient-to-b from-primary-soft via-paper to-[#fffaf8]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-14 pb-24 md:grid-cols-[1.15fr_1fr] md:pt-20 md:pb-32">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1 text-xs font-semibold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Đang ở tháng thứ {site.currentMonth} sau cấy
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
            Nhật ký cấy tóc thật của mình, <span className="text-primary">kể từng ngày một</span>
          </h1>
          <p className="mt-5 text-lg font-medium text-ink md:text-xl">
            Không phải phòng khám, cũng chẳng phải người nổi tiếng. Mình là {site.author}, cấy tóc ngày{" "}
            {site.surgeryDate} và quay video từ đó đến giờ.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed">
            Tóc rụng trắng hai bên, có hôm chẳng dám ra đường, rồi tóc con mọc lại. Có gì mình kể nấy, anh em xem rồi
            tự quyết nhé.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#hanh-trinh"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 hover:bg-primary-dark"
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
        <HeroIllustration className="mx-auto w-full max-w-md" />
      </div>
    </section>
  );
}
