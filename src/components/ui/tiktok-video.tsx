"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState, type ReactNode } from "react";

// Mở video TikTok ngay trên trang bằng trình phát nhúng chính thức của TikTok.
// Không dẫn link ra TikTok để người xem ở lại trang. iframe chỉ được tạo khi mở, để trang không phải tải video từ đầu.
export function TikTokVideo({
  url,
  title,
  className,
  children,
}: {
  url: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const id = url.split("/video/")[1]?.split(/[/?]/)[0];

  const show = () => {
    setOpen(true);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();

  // Trình phát TikTok mặc định tắt tiếng. Khi nó báo sẵn sàng thì gửi lệnh bật tiếng và phát
  // (người xem vừa bấm mở nên trình duyệt cho phép phát có tiếng).
  const frame = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    if (!open) return;
    const send = (type: string) =>
      frame.current?.contentWindow?.postMessage({ type, "x-tiktok-player": true }, "https://www.tiktok.com");
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://www.tiktok.com" || e.source !== frame.current?.contentWindow) return;
      let data = e.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          return;
        }
      }
      if (data?.type === "onPlayerReady") {
        send("unMute");
        send("play");
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [open]);

  if (!id) return null;

  return (
    <>
      <button type="button" onClick={show} className={`cursor-pointer ${className ?? ""}`} aria-label={`Xem video: ${title}`}>
        {children}
      </button>
      <dialog
        ref={dialog}
        onClose={() => setOpen(false)}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto w-[min(92vw,360px,45vh)] overflow-visible bg-transparent p-0 backdrop:bg-black/70"
      >
        {open && (
          <div className="relative">
            <button
              type="button"
              onClick={close}
              aria-label="Đóng video"
              className="absolute -top-11 right-0 grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-white text-ink shadow hover:text-primary"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black">
              <iframe
                ref={frame}
                src={`https://www.tiktok.com/player/v1/${id}?autoplay=1&rel=0&description=0&music_info=0`}
                title={title}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
