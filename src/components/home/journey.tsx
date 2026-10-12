import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { PhotoSlot } from "@/components/ui/photo-slot";
import { SectionHeading } from "@/components/ui/section-heading";
import { PENDING, site } from "@/config/site";
import { milestones } from "@/content/milestones";

const stats = [
  { label: "Ngày cấy", value: site.surgeryDate },
  site.grafts
    ? { label: "Số nang", value: `${site.grafts.toLocaleString("vi-VN")} nang` }
    : { label: "Video TikTok", value: `${site.tiktokVideos}+ video` },
  { label: "Phòng khám", value: site.clinic || PENDING },
  { label: "Mốc tiếp theo", value: `Tháng ${site.currentMonth} · ${site.nextUpdate}` },
];

export function Journey() {
  return (
    <section id="hanh-trinh" className="mx-auto max-w-6xl px-4 pb-20">
      <SectionHeading
        title="Tóc mình qua từng mốc"
        sub={`Ảnh cắt từ video TikTok của mình. Đang ở tháng thứ ${site.currentMonth}, mốc tiếp theo cập nhật ngày ${site.nextUpdate}.`}
      />
      <dl className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-line bg-paper px-4 py-3">
            <dt className="text-xs text-muted">{s.label}</dt>
            <dd className="mt-1 font-bold text-primary">{s.value}</dd>
          </div>
        ))}
      </dl>
      <ol className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {milestones.map((m) => (
          <li
            key={m.label}
            className={`relative flex flex-col rounded-2xl border bg-white p-3 ${
              m.status === "next" ? "border-primary ring-2 ring-primary-soft" : "border-line"
            } ${m.status === "upcoming" ? "opacity-60" : ""}`}
          >
            {m.status === "next" && (
              <span className="absolute -top-2.5 left-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-white">
                Sắp cập nhật
              </span>
            )}
            {m.image ? (
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-paper">
                <Image
                  src={m.image}
                  alt={`Tóc ${m.label.toLowerCase()} sau cấy: ${m.stage.toLowerCase()}`}
                  fill
                  sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 45vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <PhotoSlot
                label={m.status === "next" ? `Cập nhật ${m.date}` : "Chưa tới mốc"}
                className="aspect-[3/4] w-full"
              />
            )}
            <p className="mt-3 flex items-baseline justify-between gap-2">
              <span className="font-bold text-ink">{m.label}</span>
              <span className="text-xs text-muted">{m.date}</span>
            </p>
            <p className="mt-1 text-sm font-medium">{m.stage}</p>
            {m.note && <p className="mt-1 text-xs italic leading-relaxed text-muted">“{m.note}”</p>}
            {m.video && (
              <a
                href={m.video}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-semibold text-primary hover:underline"
              >
                <FontAwesomeIcon icon={faPlay} className="text-[10px]" />
                Xem video
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
