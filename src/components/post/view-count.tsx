"use client";

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

type Views = Record<string, number>;

// Các thẻ bài hiện cùng lúc dùng chung một lần gọi /api/views; sang trang khác thì gọi lại
// để không hiện số cũ (bài mới thêm vẫn có số đúng).
let allViews: Promise<Views> | null = null;
const loadViews = () => {
  if (!allViews) setTimeout(() => (allViews = null), 1000);
  return (allViews ??= fetch("/api/views", { cache: "no-store" })
    .then((r): Promise<Views> => (r.ok ? r.json() : Promise.resolve({})))
    .catch((): Views => ({})));
};

// Bài đã đếm trong lần mở trang này (React dev chạy effect 2 lần, tránh cộng đôi)
const counted = new Map<string, Promise<number>>();

const format = (n: number) => `${n.toLocaleString("vi-VN")} lượt xem`;

// Số lượt đọc trên thẻ bài
export function ViewCount({ slug, className = "" }: { slug: string; className?: string }) {
  const [views, setViews] = useState<number | null>(null);
  useEffect(() => {
    let alive = true;
    loadViews().then((v) => alive && setViews(v[slug] ?? 0));
    return () => {
      alive = false;
    };
  }, [slug]);
  return <Label views={views} className={className} />;
}

// Trong trang bài viết: mỗi lần mở bài thì cộng 1 lượt rồi hiện số mới
export function ViewTracker({ slug, className = "" }: { slug: string; className?: string }) {
  const [views, setViews] = useState<number | null>(null);
  useEffect(() => {
    let alive = true;
    if (!counted.has(slug)) {
      counted.set(
        slug,
        fetch(`/api/views/${slug}`, { method: "POST" })
          .then((r) => r.json() as Promise<{ views?: number }>)
          .then((d) => d.views ?? 0)
          .catch(() => 0),
      );
    }
    counted.get(slug)!.then((n) => alive && setViews(n));
    return () => {
      alive = false;
    };
  }, [slug]);
  return <Label views={views} className={className} />;
}

function Label({ views, className }: { views: number | null; className: string }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <FontAwesomeIcon icon={faEye} className="text-[0.85em]" />
      {views === null ? "… lượt xem" : format(views)}
    </span>
  );
}
