import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { posts } from "@/content/posts";
import { allTags, tagHref } from "@/lib/tags";

// /sitemap.xml: danh sách mọi trang để Google biết web có những gì
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, site.url).toString();
  const newest = posts.reduce((d, p) => (p.date > d ? p.date : d), "");
  return [
    { url: url("/"), lastModified: newest, changeFrequency: "weekly", priority: 1 },
    { url: url("/bai-viet"), lastModified: newest, changeFrequency: "weekly", priority: 0.9 },
    { url: url("/ve-minh"), changeFrequency: "monthly", priority: 0.6 },
    { url: url("/lien-he"), changeFrequency: "yearly", priority: 0.5 },
    ...posts.map((p) => ({ url: url(`/bai-viet/${p.slug}`), lastModified: p.date, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...allTags().map((t) => ({ url: url(tagHref(t.name)), changeFrequency: "weekly" as const, priority: 0.4 })),
  ];
}
