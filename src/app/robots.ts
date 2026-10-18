import type { MetadataRoute } from "next";
import { site } from "@/config/site";

// /robots.txt: cho Google vào đọc cả web (trừ API), chỉ chỗ để sitemap
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
