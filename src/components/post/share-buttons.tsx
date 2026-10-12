"use client";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const btn =
  "grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-primary/25 bg-white text-primary transition hover:border-primary hover:bg-primary hover:text-white";

// Chia sẻ bài: Facebook và sao chép link (lấy URL hiện tại của trình duyệt)
export function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const shareFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "noopener,noreferrer,width=600,height=500");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // trình duyệt chặn clipboard thì bỏ qua
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 text-sm text-body">Chia sẻ bài này</span>
      <button type="button" onClick={shareFacebook} aria-label="Chia sẻ lên Facebook" className={btn}>
        <FontAwesomeIcon icon={faFacebookF} />
      </button>
      <button type="button" onClick={copyLink} aria-label="Sao chép link bài viết" className={btn}>
        <FontAwesomeIcon icon={copied ? faCheck : faLink} />
      </button>
      {copied && <span className="text-xs font-medium text-primary">Đã sao chép</span>}
    </div>
  );
}
