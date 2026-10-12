import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Khung giữ chỗ cho ảnh thật. Khi có ảnh, thay bằng next/image.
export function PhotoSlot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-line bg-white/70 p-3 text-center text-xs text-muted ${className}`}
    >
      <FontAwesomeIcon icon={faCamera} className="text-xl opacity-60" />
      <span>{label}</span>
    </div>
  );
}
