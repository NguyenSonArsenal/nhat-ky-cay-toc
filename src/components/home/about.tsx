import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

// Mọi chi tiết ở đây lấy từ caption video TikTok của chủ trang, không thêm thắt.
export function About() {
  return (
    <section id="ve-minh" className="-mt-16 px-4">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-3xl border border-line bg-white p-6 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)] md:grid-cols-[1fr_1.25fr] md:p-12">
        <div className="relative aspect-square w-full max-w-sm justify-self-center overflow-hidden rounded-3xl border-4 border-white shadow-[8px_8px_0_0_var(--primary)]">
          <Image
            src="/images/avatar.jpg"
            alt={`${site.nickname}, người viết ${site.name}`}
            fill
            sizes="(min-width: 768px) 384px, 90vw"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-ink md:text-3xl">
            Mình là ai mà <span className="text-primary">viết trang này?</span>
          </h2>
          <p className="mt-2 font-semibold text-ink">Người thật, tóc thật, chuyện thật.</p>
          <div className="mt-5 space-y-4 text-sm leading-relaxed">
            <p>
              Mình là {site.author}, một người bình thường như bao anh em khác. Với mình cấy tóc là một khoản không
              nhỏ: tính ra mỗi nang tóc khoảng 27 nghìn, nên mấy hôm đầu gội đầu cũng phải nhẹ tay, rớt sợi nào là
              tiếc sợi đó.
            </p>
            <p>
              Sau cấy mình vẫn đi làm, vẫn ở phòng trọ, trời đổ mưa thì vẫn lao ra chạy lúa cùng mọi người. Mới cấy
              chưa được đội mũ bảo hiểm thì mình đi xe bus cho tiết kiệm, chứ đi taxi thì xót tiền lắm.
            </p>
            <p>
              Giai đoạn rụng sốc, tóc rụng trắng hai bên, có hôm chẳng dám ra đường. Nhưng cuộc sống không cho dừng
              lại, nên mình vẫn đi làm và quay video đều, đến giờ được hơn {site.tiktokVideos} video.
            </p>
            <p>
              Mình không phải bác sĩ. Đây chỉ là trải nghiệm của một người bình thường, để anh em có thêm góc nhìn thật
              trước khi bỏ tiền.
            </p>
          </div>
          <p className="mt-6 font-script text-3xl text-primary">{site.nickname}</p>
          <p className="text-sm font-semibold text-ink">
            Cấy tóc ngày {site.surgeryDate} ·{" "}
            <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="hover:underline">
              <FontAwesomeIcon icon={faTiktok} className="mr-1" />
              {site.tiktokHandle}
            </a>
          </p>
          <Link
            href="/ve-minh"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Đọc thêm về mình <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
