"use client";

/* ════════════════════════════════════════════════════════════════════
   Swiper gallery — chép từ component <x-swiper-gallery> của dự án banghang.net
   (resources/views/components/swiper-gallery.blade.php + public/js/frontend/swiper-gallery.js).
   Ảnh chính + thumbnail + next/prev + đếm ảnh (fraction) + autoplay,
   bấm ảnh hoặc nút Zoom thì mở lightbox toàn màn bằng Fancybox.
   Cùng phiên bản thư viện: Swiper 11.1.14, Fancybox 5.0.36. CSS ở globals.css (.sw-gallery).
   ════════════════════════════════════════════════════════════════════ */

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRef, useState, useSyncExternalStore, type CSSProperties } from "react";
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const noopSubscribe = () => () => {};

export type GalleryImage = {
  src: string;
  caption?: string; // chú thích RIÊNG của ảnh; trống thì dùng caption chung
  position?: string; // object-position để khung cắt giữ đúng chỗ cần xem
};

export function SwiperGallery({
  images,
  autoplay = 0, // số GIÂY tự chạy slide (0 = tắt)
  loopMode = false, // lặp vô hạn
  ratio = "16 / 9", // tỉ lệ khung ảnh chính (--media-ratio)
  caption = "", // chú thích chung cho lightbox
  priority = false,
}: {
  images: GalleryImage[];
  autoplay?: number;
  loopMode?: boolean;
  ratio?: string;
  caption?: string;
  priority?: boolean;
}) {
  const [thumbs, setThumbs] = useState<SwiperType | null>(null);
  const main = useRef<SwiperType | null>(null);
  const slides = images.filter((i) => i.src);

  // Swiper gọi new Date() lúc khởi tạo, Next không cho chạy lúc render trên server.
  // Nên trên server chỉ hiện ảnh đầu giữ chỗ, lên trình duyệt mới dựng Swiper.
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);

  if (slides.length === 0) return null;

  if (!mounted) {
    return (
      <div className="sw-gallery" style={{ "--media-ratio": ratio } as CSSProperties}>
        <div className="sw-main relative">
          <Image
            src={slides[0].src}
            alt={slides[0].caption || caption}
            fill
            sizes="(min-width: 768px) 520px, 100vw"
            className="object-cover"
            style={{ objectPosition: slides[0].position }}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
          />
        </div>
        {slides.length > 1 && <div className="sw-thumbs h-[62px] max-md:h-[46px]" />}
      </div>
    );
  }

  // Lightbox toàn màn bằng Fancybox (toolbar, thumbnail, đếm ảnh, zoom)
  const openFancybox = (startIndex = 0) =>
    Fancybox.show(
      slides.map((s) => ({ src: s.src, type: "image" as const, caption: s.caption || caption })),
      { startIndex },
    );

  return (
    <div className="sw-gallery" style={{ "--media-ratio": ratio } as CSSProperties}>
      {/* Ảnh chính */}
      <Swiper
        className="sw-main"
        modules={[Autoplay, Navigation, Pagination, Thumbs]}
        loop={loopMode}
        spaceBetween={0}
        navigation={slides.length > 1}
        pagination={{ type: "fraction" }} // hiển thị "1 / 5"
        autoplay={autoplay > 0 ? { delay: autoplay * 1000, disableOnInteraction: false } : false}
        thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
        onSwiper={(s) => (main.current = s)}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={s.src}>
            {/* Swiper preventClicks tự chặn click sau khi kéo nên không bị mở nhầm khi swipe */}
            <Image
              src={s.src}
              alt={s.caption || caption}
              fill
              sizes="(min-width: 768px) 520px, 100vw"
              style={{ objectPosition: s.position }}
              loading={priority && i === 0 ? "eager" : "lazy"}
              onClick={() => openFancybox(i)}
            />
          </SwiperSlide>
        ))}
        {/* Nút Zoom góc dưới-trái → mở lightbox tại ảnh đang xem */}
        <button
          type="button"
          className="sw-zoom-btn"
          onClick={(e) => {
            e.stopPropagation();
            openFancybox(main.current?.realIndex ?? 0);
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlassPlus} /> Zoom
        </button>
      </Swiper>

      {/* Thumbnail phía dưới (chỉ khi > 1 ảnh) */}
      {slides.length > 1 && (
        <Swiper
          className="sw-thumbs"
          modules={[FreeMode, Thumbs]}
          onSwiper={setThumbs}
          slidesPerView="auto"
          spaceBetween={8}
          freeMode
          watchSlidesProgress
        >
          {slides.map((s) => (
            <SwiperSlide key={s.src}>
              <Image src={s.src} alt={s.caption || caption} fill sizes="88px" style={{ objectPosition: s.position }} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
