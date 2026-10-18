import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";
import { QrCode } from "@/components/ui/qr-code";
import { contactUrl, site, zaloDisplay, zaloUrl } from "@/config/site";

export function Offer() {
  return (
    <section id="uu-dai" className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid items-center gap-10 rounded-3xl border border-line bg-white p-6 shadow-sm md:grid-cols-[1.4fr_1fr] md:p-8">
        <div>
          <p className="text-sm font-semibold text-primary">Có cái này cho anh em</p>
          <h2 className="mt-1 text-3xl font-extrabold leading-tight text-ink md:text-4xl">
            Định cấy thì nhắn mình lấy mã giảm <span className="whitespace-nowrap text-primary">{site.discount}</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed">
            <p>
              Cấy tóc không rẻ đâu anh em. Tính ra mỗi nang cũng tầm 27 nghìn, nên bớt được {site.discount} là đỡ được
              kha khá rồi.
            </p>
            <p>
              Mình cấy ở {site.clinic}. Ai định cấy ở đây thì nhắn Zalo cho mình, mình gửi mã. Tiện thì hỏi luôn mấy
              cái đang lăn tăn: có đau không, phải kiêng gì, rụng sốc ra sao... Cái gì mình trải qua rồi thì mình kể
              hết.
            </p>
          </div>
          <div className="mt-6 inline-flex flex-col rounded-xl border-2 border-dashed border-primary bg-primary-soft/50 px-6 py-4">
            <span className="text-xs text-muted">Mã giảm {site.discount}</span>
            <span className="text-xl font-extrabold tracking-wide text-primary">
              {site.referralCode || "Nhắn Zalo là mình gửi"}
            </span>
          </div>
          <ol className="mt-6 space-y-2 text-sm">
            <Step n={1}>Nhắn Zalo cho mình, hoặc quét cái QR bên cạnh cho nhanh.</Step>
            <Step n={2}>Mình gửi mã. Có gì thắc mắc cứ hỏi, mình trả lời khi rảnh tay.</Step>
            <Step n={3}>Lúc đặt lịch tư vấn ở phòng khám thì đọc mã là được giảm.</Step>
          </ol>
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
          >
            <FontAwesomeIcon icon={faCommentDots} />
            {zaloUrl ? `Nhắn Zalo ${zaloDisplay}` : "Nhắn TikTok nhận mã"}
          </a>
          <p className="mt-2 text-xs text-muted">Chỉ hỏi thôi cũng được, chưa cấy cũng không sao.</p>
          <p className="mt-6 border-l-2 border-primary/30 pl-3 text-xs leading-relaxed text-muted">
            Nói thẳng cho minh bạch: anh em dùng mã thì phòng khám có trả mình hoa hồng giới thiệu. Anh em vẫn được giảm
            đủ {site.discount}. Mình chỉ giới thiệu đúng chỗ mình đã cấy, tóc thật trên đầu mình đây, anh em kéo lên xem
            ảnh từng mốc là thấy.
          </p>
        </div>
        <div className="w-full max-w-xs justify-self-center rounded-2xl border border-line bg-white p-5 text-center">
          <QrCode value={contactUrl} label="Mã QR để nhắn tin nhận mã giảm giá" className="w-full" />
          <p className="mt-3 text-xs text-muted">
            {zaloUrl
              ? "Mở camera điện thoại quét là vào Zalo của mình"
              : `Quét để mở TikTok ${site.tiktokHandle}`}
          </p>
        </div>
      </div>
    </section>
  );
}

function Step({ n, children }: { n: number; children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-white">
        {n}
      </span>
      <span className="pt-0.5">{children}</span>
    </li>
  );
}
