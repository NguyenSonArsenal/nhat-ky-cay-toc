"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// `id` là id section trên trang chủ dùng để đánh dấu khi cuộn; `page` là trang riêng (nếu có).
export const navItems = [
  { id: "trang-chu", href: "/", label: "Trang chủ" },
  { id: "ve-minh", href: "/ve-minh", label: "Về mình", page: "/ve-minh" },
  { id: "lien-he", href: "/lien-he", label: "Liên hệ", page: "/lien-he" },
  { id: "hanh-trinh", href: "/#hanh-trinh", label: "Hành trình" },
  // id trùng section "Kinh nghiệm" trên trang chủ để cuộn tới đó thì mục Blog sáng lên
  { id: "kinh-nghiem", href: "/bai-viet", label: "Blog", page: "/bai-viet" },
];

// Khoảng cách từ đỉnh màn hình để coi một section là "đang xem" (chừa chỗ cho header).
const OFFSET = 140;

// Menu tự đánh dấu mục ứng với section đang xem (trang chủ) hoặc trang đang mở.
export function NavLinks({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(navItems[0].id);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      // Section đã cuộn qua đỉnh và gần đỉnh nhất là section đang xem
      let current = navItems[0].id;
      let closest = -Infinity;
      for (const { id } of navItems) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= OFFSET && top > closest) {
          closest = top;
          current = id;
        }
      }
      setScrolled(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [isHome]);

  const active = isHome ? scrolled : navItems.find((i) => i.page && pathname.startsWith(i.page))?.id;

  return (
    <nav className={className}>
      {navItems.map(({ id, href, label }) => (
        <Link
          key={id}
          href={href}
          aria-current={active === id ? (isHome ? "location" : "page") : undefined}
          className={`shrink-0 rounded-md px-3 py-1.5 transition-colors hover:text-primary ${
            active === id ? "font-semibold text-primary" : "text-body"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
