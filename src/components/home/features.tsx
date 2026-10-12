import { faBookOpen, faCalendarCheck, faChevronRight, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/config/site";

const cards = [
  {
    href: "/#hanh-trinh",
    icon: faCalendarCheck,
    title: "Tóc qua từng mốc",
    text: "Ảnh thật từ ngày 5 đến hôm nay, cả lúc ổn lẫn lúc thảm nhất. Bấm vào là xem được video.",
  },
  {
    href: "/#kinh-nghiem",
    icon: faBookOpen,
    title: "Kinh nghiệm thật",
    text: "Cấy có đau không, rụng sốc, gội đầu, đội mũ bảo hiểm... toàn chuyện mình tự trải qua.",
  },
  {
    href: "/#uu-dai",
    icon: faTicket,
    title: `Mã giảm ${site.discount}`,
    text: `Cấy tóc không rẻ, bớt được đồng nào hay đồng đó. Nhắn mình để nhận mã giảm ${site.discount} tại ${site.clinic}.`,
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading title="Ở đây có gì?" sub="Mọi thứ mình biết về cấy tóc, gom về một chỗ cho anh em đỡ phải đi tìm." />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cards.map(({ href, icon, title, text }) => (
          <article
            key={title}
            className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="grid aspect-[16/9] place-items-center bg-primary-soft">
              <FontAwesomeIcon icon={icon} className="text-6xl text-primary" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed">{text}</p>
              <Link
                href={href}
                className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-xs font-semibold text-white hover:bg-primary-dark"
              >
                Xem liền <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
