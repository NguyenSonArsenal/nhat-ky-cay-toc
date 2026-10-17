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
            Chào mọi người, mình là {site.author} đi cấy tóc đây
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed">
            <p>
              Mình là một người bị hói chữ M, hói khá nặng, gần chục năm trời. Đi đâu ra đường mình cũng tự ti lắm, lúc
              nào cũng phải có mũ bên mình. Một hôm lướt TikTok, mình biết đến cấy tóc tự thân: dùng tóc phía sau gáy
              của chính mình để cấy lên vùng rụng phía trước. Sau rất nhiều đắn đo, trăn trở và đi làm tiết kiệm tiền,
              ngày {site.surgeryDate} mình quyết định đi cấy tóc tự thân.
            </p>
            <p>
              Với mình cấy tóc là một khoản không nhỏ. Tính ra mỗi nang tầm 27 nghìn, nên mấy ngày đầu gội đầu cũng phải
              nhẹ tay. Chưa được đội mũ bảo hiểm thì mình đi xe bus thay taxi cho tiết kiệm. Mình vẫn ở trọ, vẫn đi làm,
              trời đổ mưa thì vẫn lao ra chạy lúa cùng mọi người.
            </p>
            <p>
              Sau khi cấy, ngày nào mình cũng đi xem review của người khác, mà để xem được trọn một hành trình từ đầu đến
              cuối thì rất khó. Nên mình gom hết nhật ký của mình về một chỗ: có ảnh, có video từng mốc, cả lúc ổn lẫn
              lúc thảm, để anh em tự xem và tự quyết.
            </p>
            <p>Anh em đang lăn tăn chuyện tóc thì cứ nhắn mình. Chưa cấy cũng được, hỏi thôi cũng được.</p>
          </div>
          <Link
            href="/ve-minh"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Đọc thêm về mình <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
