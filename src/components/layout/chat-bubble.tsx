import { faFacebookF, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { site, zaloUrl } from "@/config/site";

// Cụm nút liên hệ nổi bên phải màn hình (giống caubethoathoi.com nhưng đặt bên phải):
// Zalo, TikTok, Facebook, gọi điện. Có vòng sóng lan ra để gây chú ý, rê chuột hiện nhãn.
// Font Awesome không có icon Zalo nên nút Zalo ghi chữ.
const contacts = [
  { href: zaloUrl, label: "Chat Zalo với mình", icon: null, external: true },
  { href: site.tiktok, label: "Xem TikTok của mình", icon: faTiktok, external: true },
  { href: site.facebook, label: "Kết bạn Facebook", icon: faFacebookF, external: true },
  { href: site.zaloPhone ? `tel:${site.zaloPhone}` : "", label: "Gọi cho mình", icon: faPhone, external: false },
].filter((c) => c.href);

export function ChatBubble() {
  return (
    <ul className="fixed right-3 bottom-[8.5rem] z-40 flex flex-col gap-3 md:right-6 md:bottom-[4.5rem]">
      {contacts.map((c, i) => (
        <li key={c.label}>
          <a
            href={c.href}
            aria-label={c.label}
            {...(c.external && { target: "_blank", rel: "noopener noreferrer" })}
            className="group relative grid h-12 w-12 place-items-center rounded-full border-2 border-primary bg-white text-lg text-primary shadow-lg transition hover:bg-primary-soft"
          >
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full bg-primary opacity-30 motion-reduce:hidden"
              style={{ animationDuration: "2s", animationDelay: `${i * 0.4}s` }}
            />
            <span className="relative">
              {c.icon ? <FontAwesomeIcon icon={c.icon} /> : <span className="text-[11px] font-extrabold">Zalo</span>}
            </span>
            <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow transition group-hover:opacity-100 md:block">
              {c.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
