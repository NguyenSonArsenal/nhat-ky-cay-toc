"use client";

/* ════════════════════════════════════════════════════════════════════
   Phân trang — làm theo hàng chân bảng "Danh sách nhân sự" của crm-tan-long
   (DataTables pagingType "full_numbers", style ở public/css/datatables-theme.css):
       "Hiển thị 12/21"  ................  « ‹ 1 2 › »
   Khác bản gốc: cố định số bài mỗi trang (không có ô chọn), trang đang xem chỉ viền
   + nền nhạt, không tô đặc màu đỏ. Trang đang xem ghi lên URL (?trang=2) để bấm
   Quay lại vẫn đúng trang.
   ════════════════════════════════════════════════════════════════════ */

import { useRef, useSyncExternalStore, type ReactNode } from "react";

// Trang đang xem đọc thẳng từ URL (?trang=2). Trên server chưa có URL nên coi là trang 1.
const URL_EVENT = "pagination-url";
const subscribe = (cb: () => void) => {
  window.addEventListener("popstate", cb);
  window.addEventListener(URL_EVENT, cb);
  return () => {
    window.removeEventListener("popstate", cb);
    window.removeEventListener(URL_EVENT, cb);
  };
};

export function Pagination({
  items,
  className,
  perPage = 12,
}: {
  items: ReactNode[];
  className?: string;
  perPage?: number;
}) {
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => "");
  const page = Math.max(1, Number(new URLSearchParams(search).get("trang")) || 1);
  const top = useRef<HTMLDivElement>(null);
  const pages = Math.max(1, Math.ceil(items.length / perPage));
  const current = Math.min(page, pages);
  const start = (current - 1) * perPage;
  const shown = items.slice(start, start + perPage);

  const go = (n: number) => {
    const url = new URL(window.location.href);
    if (n > 1) url.searchParams.set("trang", String(n));
    else url.searchParams.delete("trang");
    window.history.replaceState(null, "", url);
    window.dispatchEvent(new Event(URL_EVENT));
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={top} className="scroll-mt-28">
      <ul className={className}>{shown}</ul>

      {pages > 1 && (
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <p className="text-sm font-medium text-muted">
            Hiển thị {shown.length}/{items.length}
          </p>
          <nav aria-label="Phân trang" className="flex flex-wrap items-center gap-1">
            <PageButton label="Trang đầu" disabled={current === 1} onClick={() => go(1)}>
              «
            </PageButton>
            <PageButton label="Trang trước" disabled={current === 1} onClick={() => go(current - 1)}>
              ‹
            </PageButton>
            {pageList(current, pages).map((n, i) =>
              n === null ? (
                <span key={`gap-${i}`} className="px-1 text-sm text-muted">
                  …
                </span>
              ) : (
                <PageButton key={n} label={`Trang ${n}`} active={n === current} onClick={() => go(n)}>
                  {n}
                </PageButton>
              ),
            )}
            <PageButton label="Trang sau" disabled={current === pages} onClick={() => go(current + 1)}>
              ›
            </PageButton>
            <PageButton label="Trang cuối" disabled={current === pages} onClick={() => go(pages)}>
              »
            </PageButton>
          </nav>
        </div>
      )}
    </div>
  );
}

function PageButton({
  children,
  label,
  active = false,
  disabled = false,
  onClick,
}: {
  children: ReactNode;
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={`inline-flex h-8 min-w-8 cursor-pointer items-center justify-center rounded-lg border px-2.5 text-sm transition disabled:pointer-events-none disabled:opacity-35 ${
        active
          ? "border-primary bg-primary-soft font-bold text-primary"
          : "border-line bg-white font-medium text-ink hover:border-primary hover:text-primary"
      }`}
    >
      {children}
    </button>
  );
}

// Dãy số trang như DataTables full_numbers: tối đa 7 ô, chỗ bị lược hiện "…"
function pageList(current: number, pages: number): (number | null)[] {
  if (pages <= 7) return Array.from({ length: pages }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, null, pages];
  if (current >= pages - 3) return [1, null, pages - 4, pages - 3, pages - 2, pages - 1, pages];
  return [1, null, current - 1, current, current + 1, null, pages];
}
