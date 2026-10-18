import { getPost } from "@/content/posts";
import { addView } from "@/lib/database";

// POST /api/views/<slug> → tăng 1 lượt đọc, trả về { views }
export async function POST(_req: Request, ctx: RouteContext<"/api/views/[slug]">) {
  const { slug } = await ctx.params;
  if (!getPost(slug)) return Response.json({ error: "Không có bài này" }, { status: 404 });
  return Response.json({ views: await addView(slug) });
}
