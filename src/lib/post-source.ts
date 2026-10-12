import { readFileSync } from "node:fs";
import path from "node:path";
import { slugify } from "@/lib/slugify";

export type TocItem = { id: string; text: string; level: 2 | 3 };

const postPath = (slug: string) => path.join(process.cwd(), "src", "content", "posts", `${slug}.mdx`);

// Đọc file .mdx lúc build để làm mục lục và tính thời gian đọc
function source(slug: string) {
  return readFileSync(postPath(slug), "utf8");
}

// Bỏ cú pháp markdown trong heading: **đậm**, [chữ](link)
const plain = (s: string) => s.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[(.+?)\]\(.+?\)/g, "$1").trim();

export function getToc(slug: string): TocItem[] {
  return source(slug)
    .split(/\r?\n/)
    .map((line) => /^(#{2,3})\s+(.+)$/.exec(line))
    .filter((m): m is RegExpExecArray => m !== null)
    .map((m) => {
      const text = plain(m[2]);
      return { id: slugify(text), text, level: m[1].length as 2 | 3 };
    });
}

export function getReadingMinutes(slug: string) {
  const words = source(slug)
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

// "2026-10-11" -> "11/10/2026"
export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}
