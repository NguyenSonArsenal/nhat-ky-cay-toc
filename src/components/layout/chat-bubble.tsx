import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zaloUrl } from "@/config/site";

// Nút chat Zalo nổi ở góc phải dưới, chỉ trên desktop (điện thoại đã có thanh nút dưới đáy).
export function ChatBubble() {
  if (!zaloUrl) return null;
  return (
    <a
      href={zaloUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-6 bottom-[4.25rem] z-40 hidden items-center gap-2 rounded-lg border border-primary/25 bg-white py-1.5 pr-4 pl-1.5 text-sm font-semibold text-ink shadow-lg transition hover:border-primary hover:bg-primary-soft hover:text-primary md:inline-flex"
    >
      <span className="grid h-7 w-7 place-items-center rounded-md bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-white">
        <FontAwesomeIcon icon={faCommentDots} />
      </span>
      Chat Zalo với mình
    </a>
  );
}
