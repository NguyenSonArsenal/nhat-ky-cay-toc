import { readFileSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

// "Database" của trang: file data/database.json trong source.
//   pinned: slug các bài ghim lên đầu (tối đa 3, giống TikTok ghim 3 video), theo đúng thứ tự trong file
//   views:  { "<slug>": số lượt xem }. Mỗi bài có số khởi đầu ngẫu nhiên 500–5.000 (bài mới chưa có
//           số thì nhận số khởi đầu ở lần xem đầu tiên), sau đó mỗi lần mở bài cộng thêm 1.
// Chỉ dùng trên server. Lưu ý: hosting dạng serverless không giữ được file giữa các lần deploy;
// khi đó cần chuyển sang database thật.
const FILE = path.join(process.cwd(), "data", "database.json");
export const MAX_PINNED = 3;

export type Database = { pinned: string[]; views: Record<string, number> };

const parse = (raw: string): Database => {
  const db = JSON.parse(raw) as Partial<Database>;
  return { pinned: db.pinned ?? [], views: db.views ?? {} };
};

async function readDb(): Promise<Database> {
  try {
    return parse(await readFile(FILE, "utf8"));
  } catch {
    return { pinned: [], views: {} };
  }
}

// Bài ghim: đọc lúc dựng trang (sửa file xong thì dựng lại trang để thấy thay đổi)
export function getPinned(): string[] {
  try {
    return parse(readFileSync(FILE, "utf8")).pinned.slice(0, MAX_PINNED);
  } catch {
    return [];
  }
}

export async function readViews() {
  return (await readDb()).views;
}

const initialViews = () => 500 + Math.floor(Math.random() * 4501);

// Ghi lần lượt từng yêu cầu một, để hai người đọc cùng lúc không ghi đè số của nhau
let queue: Promise<unknown> = Promise.resolve();

export function addView(slug: string): Promise<number> {
  const job = queue.then(async () => {
    const db = await readDb();
    db.views[slug] = (db.views[slug] ?? initialViews()) + 1;
    await writeFile(FILE, JSON.stringify(db, null, 2) + "\n", "utf8");
    return db.views[slug];
  });
  queue = job.catch(() => {});
  return job;
}
