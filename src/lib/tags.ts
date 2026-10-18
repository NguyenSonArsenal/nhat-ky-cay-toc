import { posts } from "@/content/posts";
import { getPinned } from "@/lib/database";
import { slugify } from "@/lib/slugify";

// Tag của bài viết: "Chăm sóc sau cấy" -> /bai-viet/tag/cham-soc-sau-cay
export const tagHref = (tag: string) => `/bai-viet/tag/${slugify(tag)}`;

// Bài mới nhất lên trên
export const sortedPosts = () => [...posts].sort((a, b) => b.date.localeCompare(a.date));

// Danh sách hiển thị: bài ghim lên đầu (theo thứ tự trong data/database.json), còn lại mới nhất trước
export function listedPosts(list = sortedPosts()) {
  const pinned = getPinned().filter((s) => list.some((p) => p.slug === s));
  return [
    ...pinned.map((s) => ({ ...list.find((p) => p.slug === s)!, pinned: true })),
    ...list.filter((p) => !pinned.includes(p.slug)).map((p) => ({ ...p, pinned: false })),
  ];
}

// Mọi tag kèm số bài, nhiều bài lên trước
export function allTags() {
  const count = new Map<string, number>();
  for (const p of posts) for (const t of p.tags) count.set(t, (count.get(t) ?? 0) + 1);
  return [...count].map(([name, total]) => ({ name, slug: slugify(name), total })).sort((a, b) => b.total - a.total);
}

export const findTag = (slug: string) => allTags().find((t) => t.slug === slug);

export const postsByTag = (slug: string) => sortedPosts().filter((p) => p.tags.some((t) => slugify(t) === slug));
