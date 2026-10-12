import { faFacebookF, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionHeading } from "@/components/ui/section-heading";
import { PENDING, site, zaloDisplay, zaloUrl } from "@/config/site";

const platforms = [
  { name: "TikTok", note: "Video từ những ngày đầu", href: site.tiktok, icon: faTiktok },
  { name: "Zalo", note: zaloDisplay ? `Nhắn mình: ${zaloDisplay}` : "", href: zaloUrl, icon: faCommentDots },
  { name: "Facebook", note: "Kết bạn với mình", href: site.facebook, icon: faFacebookF },
  { name: "YouTube", note: "Video dài theo mốc", href: site.youtube, icon: faYoutube },
];

export function Follow() {
  return (
    <section id="lien-he" className="mx-auto max-w-6xl px-4 pb-24">
      <SectionHeading
        title="Ghé chơi với mình nhé"
        sub="Tuần nào mình cũng lên 1–2 video. Có gì thắc mắc cứ nhắn, mình sẽ trả lời."
      />
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {platforms.map((p) => {
          const inner = (
            <>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft">
                <FontAwesomeIcon icon={p.icon} className="text-xl text-primary" />
              </span>
              <span className="mt-3 text-xl font-extrabold text-ink">{p.name}</span>
              <span className="text-xs text-muted">{p.href ? p.note : PENDING}</span>
            </>
          );
          const cls = "flex flex-col rounded-2xl border border-line bg-white px-5 py-5";
          return p.href ? (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cls} transition hover:-translate-y-1 hover:border-primary hover:shadow-md`}
            >
              {inner}
            </a>
          ) : (
            <div key={p.name} className={`${cls} opacity-60`}>
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
