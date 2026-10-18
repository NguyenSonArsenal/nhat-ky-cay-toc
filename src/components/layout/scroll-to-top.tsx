"use client";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

// Nút cuộn lên đầu trang ở góc phải dưới, hiện khi đã cuộn xuống một đoạn.
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Lên đầu trang"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-4 bottom-24 z-40 grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-primary bg-white text-sm text-primary shadow-lg transition hover:bg-primary-soft md:right-6 md:bottom-6 ${
        visible ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}
