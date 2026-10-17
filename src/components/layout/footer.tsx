import { faFacebookF, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Logo } from "@/components/layout/header";
import { site, zaloUrl } from "@/config/site";

const isExternal = (href: string) => href.startsWith("http");

const columns = [
  {
    title: "Hành trình",
    links: [
      { href: "/#hanh-trinh", label: "Tóc qua từng mốc" },
      { href: "/ve-minh", label: "Về mình" },
    ],
  },
  {
    title: "Kiến thức",
    links: [
      { href: "/bai-viet/tuan-dau-sau-cay-toc", label: "Tháng đầu sau cấy" },
      { href: "/bai-viet/rung-soc-sau-cay-toc", label: "Rụng sốc sau cấy" },
      { href: "/bai-viet/toc-moc-lai-sau-cay-toc", label: "Tóc mọc lại sau cấy" },
    ],
  },
  {
    title: "Liên hệ",
    links: [
      { href: zaloUrl, label: "Nhắn Zalo" },
      { href: site.facebook, label: "Facebook" },
      { href: site.tiktok, label: "TikTok" },
    ].filter((l) => l.href),
  },
];

const socials = [
  { href: site.tiktok, label: "TikTok", icon: faTiktok },
  { href: site.facebook, label: "Facebook", icon: faFacebookF },
  { href: zaloUrl, label: "Zalo", icon: faCommentDots },
].filter((s) => s.href);

export function Footer() {
  return (
    <footer className="border-t border-line bg-white pb-24 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.3fr_repeat(3,1fr)]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted">{site.tagline}.</p>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-primary transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <FontAwesomeIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="mb-3 font-semibold text-ink">{col.title}</p>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    {...(isExternal(l.href) && { target: "_blank", rel: "noopener noreferrer" })}
                    className="hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 border-t border-line px-4 py-6 text-xs text-muted md:grid-cols-[1fr_2fr]">
        <p>
          © 2026 <span className="font-semibold text-primary">{site.name}</span>
          <br />
          Mọi quyền được bảo lưu
        </p>
        <p>
          <strong className="text-ink">Lưu ý:</strong> Trang này là trải nghiệm của riêng mình, không thay thế tư vấn
          của bác sĩ. Tóc và chất tóc mỗi người sẽ khác nhau, nên sẽ có
          những câu chuyện khác nhau.
        </p>
      </div>
    </footer>
  );
}
