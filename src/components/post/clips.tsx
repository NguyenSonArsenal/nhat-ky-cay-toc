import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import type { ReactNode } from "react";

const tiktokVideo = (id: string) => `https://www.tiktok.com/@nguyensonarsenal/video/${id}`;

// Dùng trong MDX: <Clips><Clip id="..." day="Ngày 40" /></Clips>
export function Clips({ children }: { children: ReactNode }) {
  return <div className="not-prose my-8 grid grid-cols-2 gap-4 sm:grid-cols-3">{children}</div>;
}

export function Clip({ id, day, caption }: { id: string; day: string; caption?: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-white">
      <a href={tiktokVideo(id)} target="_blank" rel="noopener noreferrer" className="group relative block aspect-[3/4]">
        <Image
          src={`/images/tiktok/${id}.jpg`}
          alt={`${day} sau cấy tóc${caption ? `: ${caption}` : ""}`}
          fill
          sizes="(min-width: 640px) 220px, 45vw"
          className="object-cover"
        />
        <span className="absolute right-2 bottom-2 grid h-8 w-8 place-items-center rounded-full bg-primary text-xs text-white shadow transition group-hover:scale-110">
          <FontAwesomeIcon icon={faPlay} />
        </span>
      </a>
      <figcaption className="px-3 py-2 text-xs">
        <span className="font-bold text-primary">{day}</span>
        {caption && <span className="text-muted"> · {caption}</span>}
      </figcaption>
    </figure>
  );
}

// Trích nguyên văn caption video (day giữ lại trong MDX để biết câu của ngày nào, không hiện ra)
export function Quote({ children }: { day?: string; children: ReactNode }) {
  return (
    <blockquote className="my-6 rounded-r-2xl border-l-4 border-primary bg-primary-soft/60 px-5 py-4">
      <p className="text-[15px] italic leading-relaxed text-ink">“{children}”</p>
    </blockquote>
  );
}
