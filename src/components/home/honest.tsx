// Ba điều rút ra từ chính caption video của chủ trang.
const points = [
  {
    title: "Có đau, nhưng chịu được",
    text: "Mình là người sợ đau mà vẫn chịu được. Đau nhẹ thôi, anh em đừng lo quá.",
  },
  {
    title: "Sẽ có lúc trông thảm hơn cả trước khi cấy",
    text: "Từ ngày 40 đến ngày 60, tóc rụng trắng hai bên, nhìn còn thưa hơn lúc chưa cấy. Mình stress đến mức chẳng muốn ra đường. Đó là giai đoạn rụng sốc.",
  },
  {
    title: "Phải kiên nhẫn",
    text: "Đến ngày 85 mình mới thấy tóc con nhú lên, ngày 155 mới thấy ổn. Ai muốn đẹp ngay sau vài tuần thì cấy tóc không hợp đâu.",
  },
];

export function Honest() {
  return (
    <section id="noi-that" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl text-3xl font-bold leading-tight text-ink md:text-4xl">
            Nói thật để anh em <span className="text-primary">khỏi bất ngờ</span>
          </h2>
          <p className="max-w-xs text-sm text-muted">Mấy điều mình ước có người nói trước cho mình.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {points.map((p, i) => (
            <article key={p.title} className="rounded-2xl border-t-4 border-primary bg-white p-6 shadow-sm">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-bold text-white">{i + 1}</span>
              <h3 className="mt-4 font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
