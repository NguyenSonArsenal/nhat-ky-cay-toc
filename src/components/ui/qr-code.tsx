import QRCode from "qrcode";

// QR vẽ bằng SVG lúc build, không gọi dịch vụ ngoài.
export function QrCode({ value, label, className = "" }: { value: string; label: string; className?: string }) {
  const { modules } = QRCode.create(value, { errorCorrectionLevel: "M" });
  const size = modules.size;
  const margin = 2;
  let path = "";
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (modules.get(x, y)) path += `M${x + margin} ${y + margin}h1v1h-1z`;
    }
  }
  const box = size + margin * 2;
  return (
    <svg viewBox={`0 0 ${box} ${box}`} className={className} role="img" aria-label={label} shapeRendering="crispEdges">
      <rect width={box} height={box} fill="#fff" />
      <path d={path} fill="#0d0d0d" />
    </svg>
  );
}
