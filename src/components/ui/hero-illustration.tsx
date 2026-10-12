// Minh hoạ nét vẽ tay ở hero: tóc mọc dần qua từng tháng.

const bars = [30, 48, 72, 102, 138, 178];

export function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 290" className={className} role="img" aria-label="Tóc mọc dần qua từng tháng">
      <g fill="none" stroke="#1c1213" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {bars.map((h, i) => {
          const x = 36 + i * 50;
          const top = 250 - h;
          return (
            <g key={i}>
              <rect
                x={x}
                y={top}
                width="34"
                height={h}
                rx="4"
                className={i === bars.length - 1 ? "fill-primary" : "fill-primary-soft"}
              />
              {/* sợi tóc trên mỗi cột, càng về sau càng nhiều */}
              {Array.from({ length: i + 1 }, (_, k) => {
                const sx = x + 6 + (k * 22) / Math.max(i, 1);
                return <path key={k} d={`M${sx} ${top} q 4 -8 -1 -16`} strokeWidth="2.2" />;
              })}
            </g>
          );
        })}
        <path d="M18 250 H342" />
        <path d="M40 196 C 110 180 190 128 296 40" strokeDasharray="2 8" />
        <path d="M280 40 L298 38 L294 56" />
      </g>
      <g className="fill-primary">
        <path d="M322 70 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3z" />
        <path d="M60 120 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2z" />
      </g>
      <g fill="#7a6a6b" fontSize="12" fontWeight="600" textAnchor="middle">
        {bars.map((_, i) => (
          <text key={i} x={53 + i * 50} y="274">
            T{i + 1}
          </text>
        ))}
      </g>
    </svg>
  );
}
