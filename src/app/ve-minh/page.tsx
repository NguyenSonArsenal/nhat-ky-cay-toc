import { faChevronRight, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { contactUrl, site } from "@/config/site";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: "Về mình",
  description: `${site.nickname}: người bình thường cấy tóc ngày ${site.surgeryDate} và quay nhật ký trên TikTok từ những ngày đầu.`,
};

const cover = (id: string) => `/images/tiktok/${id}.jpg`;

// Mọi chi tiết trong trang này lấy từ caption và ảnh bìa video TikTok của chủ trang.
export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-soft via-paper to-[#fffaf8]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-12 pb-28 md:grid-cols-[1.1fr_1fr] md:pt-16">
          <div>
            <Breadcrumb className="text-primary" items={[{ label: "Trang chủ", href: "/" }, { label: "Về mình" }]} />
            <h1 className="mt-4 text-4xl font-extrabold text-primary md:text-5xl">{site.nickname}</h1>
            <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-ink">
              Người bình thường cấy tóc ngày {site.surgeryDate} <span className="text-primary/50">|</span> Quay nhật ký
              cấy tóc trên TikTok <span className="text-primary/50">|</span> Fan Arsenal
            </p>
            <a
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25 hover:bg-primary-dark"
            >
              <FontAwesomeIcon icon={faCommentDots} />
              Chat Zalo với mình
            </a>
          </div>
          <div className="relative mx-auto flex w-full max-w-md justify-center">
            <figure className="relative z-10 w-1/2 -rotate-3 rounded-2xl bg-white p-2 pb-3 shadow-xl">
              <span className="relative block aspect-[3/4] overflow-hidden rounded-xl">
                <Image src={cover("7635082230238383380")} alt="Tóc ngày 5 sau cấy" fill sizes="220px" className="object-cover" priority />
              </span>
              <figcaption className="mt-2 text-center text-sm font-bold text-ink">Ngày 5</figcaption>
            </figure>
            <figure className="relative z-20 -ml-6 mt-10 w-1/2 rotate-3 rounded-2xl bg-white p-2 pb-3 shadow-xl">
              <span className="relative block aspect-[3/4] overflow-hidden rounded-xl">
                <Image src={cover("7692857707140812052")} alt="Tóc ngày 155 sau cấy" fill sizes="220px" className="object-cover" priority />
              </span>
              <figcaption className="mt-2 text-center text-sm font-bold text-primary">Ngày 155</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Lá thư */}
      <section className="-mt-16 px-4">
        <div className="mx-auto max-w-4xl rounded-3xl border border-line bg-white p-6 text-[17px] leading-[1.8] shadow-[0_10px_40px_-20px_rgba(0,0,0,0.2)] md:p-14">
          <p className="font-semibold text-ink">Chào anh em,</p>
          <p className="mt-4">
            Mình là {site.author}, trên TikTok là {site.nickname}. Mình không phải bác sĩ, cũng không phải người của
            phòng khám. Mình chỉ là một người bị hói chữ M, và ngày {site.surgeryDate} mình quyết định đi cấy tóc tự
            thân.
          </p>

          <div className="mt-8 grid items-start gap-8 md:grid-cols-[240px_1fr]">
            <div className="relative mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-2xl shadow-[6px_6px_0_0_var(--primary)]">
              <Image src="/images/avatar.jpg" alt={site.nickname} fill sizes="240px" className="object-cover" />
            </div>
            <div className="space-y-4">
              <p>
                Từ những ngày đầu sau cấy, mình quay nhật ký đều đặn, đến giờ đã hơn {site.tiktokVideos} video. Có ngày
                vui vì thấy tóc con nhú lên, có ngày tụt mood vì tóc rụng trắng hai bên, chẳng dám ra đường.
              </p>
              <p>
                Với mình cấy tóc là một khoản không nhỏ. Tính ra mỗi nang tầm 27 nghìn, nên mấy ngày đầu gội đầu cũng
                phải nhẹ tay. Chưa được đội mũ bảo hiểm thì mình đi xe bus thay taxi cho tiết kiệm. Mình vẫn ở trọ, vẫn
                đi làm, trời đổ mưa thì vẫn lao ra chạy lúa cùng mọi người.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <p>
              Sau khi cấy, ngày nào mình cũng đi xem review của người khác, mà để xem được trọn một hành trình từ đầu
              đến cuối thì rất khó. Nên mình gom hết nhật ký của mình về một chỗ: có ảnh, có video từng mốc, cả lúc ổn
              lẫn lúc thảm, để anh em tự xem và tự quyết.
            </p>
            <p>Anh em đang lăn tăn chuyện tóc thì cứ nhắn mình. Chưa cấy cũng được, hỏi thôi cũng được.</p>
          </div>

          <div className="mt-10 text-right">
            <p className="font-script text-4xl text-primary">{site.nickname}</p>
            <p className="text-sm text-muted italic">Người viết {site.name}</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-line pt-8">
            <Link
              href="/#hanh-trinh"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              Xem tóc mình từng mốc <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
            </Link>
            <Link
              href="/#kinh-nghiem"
              className="inline-flex items-center gap-2 rounded-lg border border-primary bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
            >
              Đọc kinh nghiệm của mình
            </Link>
          </div>
        </div>
      </section>

      {/* Chuyện ngoài lề */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <p className="font-bold text-ink italic">Chuyện ngoài lề,</p>
        <p className="mt-3 text-[16px] leading-relaxed italic">
          Ngoài chuyện tóc thì mình là fan Arsenal, nên tên TikTok mới là {site.nickname}. Mùa này vừa chờ tóc mọc vừa
          xem Arsenal vào chung kết C1 sau 20 năm, nên kênh của mình thỉnh thoảng có vài video lạc đề, anh em thông cảm
          nhé. Cảm ơn anh em đã xem, thả tim và nhắn tin cho mình. Có bạn nhắn “Cười nhiều lên. Tóc sẽ tốt hơn từng
          ngày.” Cảm ơn anh em nhiều.
        </p>
      </section>
    </>
  );
}
