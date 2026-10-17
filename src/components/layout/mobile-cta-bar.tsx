import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactUrl, zaloUrl } from "@/config/site";

// Thanh nút cố định ở đáy màn hình, chỉ hiện trên điện thoại.
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] backdrop-blur md:hidden">
      <div className="flex gap-3">
        <a
          href={contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-white"
        >
          <FontAwesomeIcon icon={faCommentDots} />
          {zaloUrl ? "Nhắn Zalo" : "Nhắn TikTok"}
        </a>
      </div>
    </div>
  );
}
