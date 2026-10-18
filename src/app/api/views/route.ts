import { readViews } from "@/lib/database";

// GET /api/views → { "<slug>": số lượt đọc, ... }
export async function GET() {
  return Response.json(await readViews(), { headers: { "Cache-Control": "no-store" } });
}
