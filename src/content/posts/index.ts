// Danh sách bài viết. Nội dung bài nằm trong file <slug>.mdx cùng thư mục.
// Mọi chi tiết trong bài lấy từ caption và ảnh bìa video TikTok @nguyensonarsenal.

export type Faq = { q: string; a: string };

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  category: string;
  cover: string;
  coverAlt: string;
  tldr: string[];
  faq: Faq[];
};

const cover = (id: string) => `/images/tiktok/${id}.jpg`;

export const posts: PostMeta[] = [
  {
    slug: "tuan-dau-sau-cay-toc",
    title: "Tháng đầu sau cấy tóc: từ ngày 5 đến ngày 29 mình đã trải qua những gì",
    description:
      "Nhật ký thật tháng đầu sau cấy tóc: tự chăm sóc ở nhà, gội đầu nhẹ tay, chưa được đội mũ bảo hiểm phải đi xe bus, bong vảy, ngứa đầu và tóc con bắt đầu rơi.",
    date: "2026-10-11",
    category: "Kinh nghiệm",
    cover: cover("7635082230238383380"),
    coverAlt: "Vùng cấy tóc ngày thứ 5 sau cấy",
    tldr: [
      "Mấy ngày đầu mình theo lịch chăm sóc ở phòng khám, đến ngày 5 mới tự chăm sóc ở nhà.",
      "Gội đầu phải từ từ, nhẹ tay. Mỗi nang tóc tính ra khoảng 27 nghìn nên rớt sợi nào là tiếc sợi đó.",
      "Mới cấy chưa được đội mũ bảo hiểm, mình chuyển sang đi xe bus cho tiết kiệm.",
      "Ngày 12 bong vảy nhiều làm mình hoảng, nhưng đến ngày 17 tóc con vẫn mọc đều.",
      "Từ ngày 22 tóc con bắt đầu rụng lác đác, ngày 29 thì rơi nhiều hơn.",
    ],
    faq: [
      {
        q: "Sau cấy tóc bao lâu thì được đội mũ bảo hiểm?",
        a: "Ngày 11 mình vẫn chưa được đội nên phải đi xe bus. Đến ngày 58 thì mình đã đội lại và có quay video cách đội để bảo vệ vùng cấy. Mốc chính xác cho từng người anh em nên hỏi bác sĩ nơi mình cấy.",
      },
      {
        q: "Gội đầu sau cấy tóc thế nào?",
        a: "Mấy ngày đầu mình theo lịch ở phòng khám, đến ngày 5 mới tự chăm sóc ở nhà. Khi tự gội thì mình gội từ từ, thật nhẹ tay. Cách gội cụ thể anh em làm theo hướng dẫn của phòng khám nơi mình cấy.",
      },
      {
        q: "Cấy tóc có đau không?",
        a: "Với một người sợ đau như mình thì có đau nhẹ, nhưng vẫn chịu được.",
      },
    ],
  },
  {
    slug: "rung-soc-sau-cay-toc",
    title: "Rụng sốc sau cấy tóc: 2 tháng mình stress nhất, kể thật từng ngày",
    description:
      "Giai đoạn rụng sốc sau cấy tóc qua nhật ký thật: rụng lác đác từ ngày 22, rụng trắng hai bên ngày 47, thưa hơn cả trước khi cấy ở ngày 60, tiêm PRP và ngày 85 tóc con mới xuất hiện.",
    date: "2026-10-11",
    category: "Kinh nghiệm",
    cover: cover("7656013842639752468"),
    coverAlt: "Tóc ngày 60 sau cấy, giai đoạn rụng sốc",
    tldr: [
      "Ngày 22 tóc con bắt đầu rụng lác đác, ngày 29 rơi nhiều hơn.",
      "Ngày 40 đến 52 là lúc rụng nhiều nhất: rụng trắng hai bên, có hôm mình chẳng dám ra đường.",
      "Ngày 55 mình tiêm PRP lần 1 để hỗ trợ nang tóc.",
      "Ngày 60 nhìn còn thưa hơn cả trước khi cấy, ngày 72 hai bên chữ M vẫn trọc.",
      "Ngày 85 mới thấy tóc con xuất hiện. Chậm, nhưng có tín hiệu.",
    ],
    faq: [
      {
        q: "Rụng sốc sau cấy tóc kéo dài bao lâu?",
        a: "Với mình, tóc con bắt đầu rụng lác đác từ ngày 22, rụng nhiều nhất khoảng ngày 40 đến 60, và đến ngày 85 mới thấy tóc con mọc lại. Mỗi người mỗi khác, anh em nên hỏi bác sĩ nơi mình cấy.",
      },
      {
        q: "Rụng sốc có phải là cấy hỏng không?",
        a: "Lúc đó mình cũng sợ y như vậy. Nhưng với mình, sau giai đoạn rụng thì tóc mọc lại từ ngày 85 và đến ngày 155 đã lên khá ổn. Nếu lo thì anh em cứ hỏi thẳng bác sĩ để yên tâm.",
      },
      {
        q: "Có cần tiêm PRP sau cấy tóc không?",
        a: "Mình tiêm PRP lần 1 vào ngày 55 để hỗ trợ nang tóc. Có nên tiêm hay không thì tuỳ tình trạng từng người, anh em nên hỏi bác sĩ.",
      },
    ],
  },
  {
    slug: "toc-moc-lai-sau-cay-toc",
    title: "Tóc mọc lại sau cấy: từ ngày 85 đến ngày 155 trông như thế nào",
    description:
      "Nhật ký tóc mọc lại sau cấy tóc: ngày 85 thấy tóc con, ngày 105 mọc rõ hơn hẳn, ngày 132 tóc lên ổn định, ngày 155 hơn 5 tháng tóc lên rõ. Kèm ảnh thật từng mốc.",
    date: "2026-10-11",
    category: "Kinh nghiệm",
    cover: cover("7692857707140812052"),
    coverAlt: "Tóc ngày 155 sau cấy",
    tldr: [
      "Ngày 85 thấy tóc con xuất hiện, ngày 90 mọc rõ hơn.",
      "Ngày 95 có tí tóc con là mình đi chơi thể thao lại, tâm trạng lên hẳn.",
      "Ngày 105 tóc mọc rõ hơn hẳn giai đoạn rụng. Mình đổi dầu gội, thấy đỡ bết và giảm rụng.",
      "Ngày 132 tóc lên ổn định, ngày 148 lên rất nhanh.",
      "Ngày 155, hơn 5 tháng, mình thấy tóc đã lên khá ổn. Mốc tiếp theo là tháng 6.",
    ],
    faq: [
      {
        q: "Sau cấy tóc bao lâu thì tóc mọc lại?",
        a: "Với mình là khoảng ngày 85 mới thấy tóc con xuất hiện, ngày 90 thì mọc rõ hơn. Mỗi người nhanh chậm khác nhau.",
      },
      {
        q: "Bao lâu thì tóc cấy nhìn ổn?",
        a: "Mình thấy ổn từ khoảng ngày 132 đến 155, tức là hơn 4 đến 5 tháng. Mình vẫn đang chờ tóc dài và dày thêm, và sẽ cập nhật tiếp đến tròn 1 năm.",
      },
    ],
  },
];

// Bài đang viết, chưa có nội dung (cần số liệu thật)
export const upcomingPosts = ["Cấy tóc hết bao nhiêu tiền? Mình kể hết"];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
