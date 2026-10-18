// Danh sách bài viết. Nội dung bài nằm trong file <slug>.mdx cùng thư mục.
// Mọi chi tiết trong bài lấy từ caption và ảnh bìa video TikTok @nguyensonarsenal.

export type Faq = { q: string; a: string };

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  category: string;
  tags: string[]; // hiện ở trang Blog
  cover: string;
  coverAlt: string;
  tldr: string[];
  faq: Faq[];
};

const cover = (id: string) => `/images/tiktok/${id}.jpg`;

export const posts: PostMeta[] = [
  {
    slug: "17-tuoi-va-32-tuoi",
    title: "Năm 17 tuổi và năm 32 tuổi: 15 năm tóc mình đã rụng thế nào",
    description:
      "Ảnh năm 2011 lúc 17 tuổi tóc còn dày, đến năm 32 tuổi hói chữ M phải đội mũ đi đâu cũng vậy. Câu chuyện đằng sau bài mình ghim trên TikTok.",
    date: "2026-10-19",
    category: "Kinh nghiệm",
    tags: ["Hói chữ M", "Tâm lý", "Trước khi cấy"],
    cover: cover("7623467146458254612"),
    coverAlt: "Sơn năm 17 tuổi, năm 2011, tóc còn dày",
    tldr: [
      "Năm 2011 mình 17 tuổi, tóc còn dày.",
      "Mười lăm năm sau, năm 32 tuổi, mình hói chữ M, ra đường lúc nào cũng có mũ.",
      "Tấm ảnh này là lý do mình tiết kiệm tiền và đi cấy tóc ngày 27/04/2026.",
    ],
    faq: [
      {
        q: "Hói chữ M có phải rụng một lúc là hói ngay không?",
        a: "Với mình thì không. Tóc rụng dần qua nhiều năm, đến lúc nhìn lại ảnh cũ mới giật mình. Nguyên nhân cụ thể của từng người anh em nên hỏi bác sĩ.",
      },
    ],
  },
  {
    slug: "32-tuoi-co-nen-cay-toc",
    title: "32 tuổi rồi, có nên cấy tóc không? Câu mình hỏi 5 ngày trước khi cấy",
    description:
      "Năm ngày trước khi cấy tóc, mình đăng ảnh vùng hói chữ M lên TikTok và hỏi: 32 tuổi rồi có nên cấy tóc không? Đây là lúc đó mình nghĩ gì và đã quyết thế nào.",
    date: "2026-10-19",
    category: "Kinh nghiệm",
    tags: ["Trước khi cấy", "Hói chữ M", "Tâm lý"],
    cover: cover("7631538114208550165"),
    coverAlt: "Sơn 32 tuổi vén tóc lộ vùng hói chữ M, 5 ngày trước khi cấy",
    tldr: [
      "Ngày 22/04/2026 mình đăng ảnh vùng hói chữ M lên TikTok hỏi có nên cấy không.",
      "Mình sợ đau, sợ tốn tiền mà không lên, nên đắn đo rất lâu.",
      "Năm ngày sau mình đi cấy tự thân 2.450 nang.",
    ],
    faq: [
      {
        q: "32 tuổi có nên cấy tóc không?",
        a: "Mình 32 tuổi và đã cấy tự thân 2.450 nang. Có nên hay không thì tuỳ tình trạng tóc và tài chính của từng người, anh em nên hỏi bác sĩ và xem nhật ký của người đã cấy trước khi quyết.",
      },
    ],
  },
  {
    slug: "tuan-dau-sau-cay-toc",
    title: "Tháng đầu sau cấy tóc: từ ngày 5 đến ngày 29 mình đã trải qua những gì",
    description:
      "Nhật ký thật tháng đầu sau cấy tóc: tự chăm sóc ở nhà, gội đầu nhẹ tay, chưa được đội mũ bảo hiểm phải đi xe bus, bong vảy, ngứa đầu và tóc con bắt đầu rơi.",
    date: "2026-10-11",
    category: "Kinh nghiệm",
    tags: ["Tháng đầu", "Chăm sóc sau cấy", "Gội đầu", "Mino"],
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
    tags: ["Rụng sốc", "PRP", "Tâm lý"],
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
    tags: ["Tóc mọc lại", "Kết quả", "Dầu gội"],
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
  {
    slug: "cay-toc-co-dau-khong",
    title: "Cấy tóc có đau không? Trải nghiệm của một người sợ đau",
    description: "Cấy tóc có đau không? Mình là người sợ đau, cấy tóc tự thân 2.450 nang ngày 27/04/2026, và đây là cảm nhận thật của mình.",
    date: "2026-10-18",
    category: "Kinh nghiệm",
    tags: ["Trước khi cấy", "Kiến thức"],
    cover: cover("7635082230238383380"),
    coverAlt: "Vùng cấy tóc ngày thứ 5 sau cấy",
    tldr: [
      "Có đau nhẹ, người sợ đau như mình vẫn chịu được.",
      "Cách gây tê mỗi phòng khám một kiểu, nên hỏi bác sĩ trước.",
      "Phần khó nhất với mình là chờ tóc mọc, không phải lúc cấy.",
    ],
    faq: [
      { q: "Cấy tóc có đau không?", a: "Với một người sợ đau như mình thì có đau nhẹ, nhưng vẫn chịu được. Cách gây tê cụ thể anh em hỏi bác sĩ nơi mình cấy." },
    ],
  },
  {
    slug: "cay-toc-tu-than-la-gi",
    title: "Cấy tóc tự thân là gì? Mình hiểu đơn giản thế này",
    description: "Cấy tóc tự thân là lấy tóc sau gáy của chính mình cấy lên vùng hói phía trước. Mình kể lại theo cách hiểu của người đã cấy 2.450 nang.",
    date: "2026-10-18",
    category: "Kinh nghiệm",
    tags: ["Kiến thức", "Hói chữ M"],
    cover: cover("7683528982536506644"),
    coverAlt: "Tóc ngày 132 sau cấy tóc tự thân, tóc lên ổn định",
    tldr: [
      "Cấy tóc tự thân là dùng tóc sau gáy của chính mình cấy lên vùng rụng phía trước.",
      "Cấy xong tóc ở vùng cấy sẽ rụng một đợt rồi mới mọc lại.",
      "Kỹ thuật cụ thể anh em hỏi bác sĩ, mình chỉ kể trải nghiệm.",
    ],
    faq: [
      { q: "Cấy tóc tự thân là gì?", a: "Theo cách mình hiểu, đó là dùng tóc phía sau gáy của chính mình để cấy lên vùng rụng phía trước. Muốn hiểu kỹ về kỹ thuật thì anh em hỏi bác sĩ." },
    ],
  },
  {
    slug: "hoi-chu-m-co-nen-cay-toc",
    title: "Hói chữ M gần 10 năm, mình đã quyết định cấy tóc như thế nào",
    description: "Hói chữ M gần chục năm, ra đường luôn phải đội mũ. Đây là chuyện mình đắn đo, tiết kiệm tiền rồi quyết định đi cấy tóc tự thân.",
    date: "2026-10-18",
    category: "Kinh nghiệm",
    tags: ["Hói chữ M", "Trước khi cấy"],
    cover: "/images/avatar.jpg",
    coverAlt: "Sơn Arsenal, người viết nhật ký cấy tóc",
    tldr: [
      "Mình hói chữ M khá nặng gần chục năm, ra đường luôn phải có mũ.",
      "Biết đến cấy tóc tự thân qua TikTok, đắn đo rất lâu và đi làm tiết kiệm tiền rồi mới cấy.",
      "Có nên cấy hay không thì anh em tự tìm hiểu kỹ và hỏi bác sĩ.",
    ],
    faq: [
      { q: "Hói chữ M có nên cấy tóc không?", a: "Mình không trả lời thay anh em được. Mình hói chữ M gần chục năm và đã chọn cấy tự thân. Anh em nên xem nhật ký của người đã cấy, hỏi bác sĩ và tính chuyện tiền nong cho kỹ." },
    ],
  },
  {
    slug: "chi-phi-cay-toc",
    title: "Mỗi nang tóc 27 nghìn: mình đã tính tiền cấy tóc như thế nào",
    description: "Chi phí cấy tóc với một người làm công ăn lương: mỗi nang tầm 27 nghìn, mình cấy 2.450 nang và đã tiết kiệm từng đồng như thế nào.",
    date: "2026-10-17",
    category: "Kinh nghiệm",
    tags: ["Chi phí", "Trước khi cấy"],
    cover: cover("7647373551804140821"),
    coverAlt: "Tóc ngày 40 sau cấy tóc",
    tldr: [
      "Tính ra mỗi nang tóc của mình tầm 27 nghìn.",
      "Mình cấy 2.450 nang, phải đi làm tiết kiệm một thời gian mới đủ.",
      "Cấy ở Phòng khám bác sĩ Duy Thành thì nhắn mình lấy mã giảm 3 triệu.",
    ],
    faq: [
      { q: "Cấy tóc bao nhiêu tiền một nang?", a: "Với mình, tính ra mỗi nang tầm 27 nghìn. Giá mỗi nơi mỗi khác, anh em nên hỏi thẳng phòng khám." },
    ],
  },
  {
    slug: "goi-dau-sau-cay-toc",
    title: "Gội đầu sau cấy tóc: mình đã gội nhẹ tay thế nào",
    description: "Gội đầu sau cấy tóc thế nào cho khỏi rớt nang? Kinh nghiệm thật của mình từ ngày 5 tự chăm sóc tại nhà đến ngày 8 gội mà run tay.",
    date: "2026-10-17",
    category: "Kinh nghiệm",
    tags: ["Gội đầu", "Chăm sóc sau cấy", "Tháng đầu"],
    cover: cover("7636370492471151892"),
    coverAlt: "Gội đầu cẩn thận ngày 8 sau cấy tóc",
    tldr: [
      "Mấy ngày đầu mình theo lịch chăm sóc ở phòng khám, ngày 5 mới tự chăm sóc tại nhà.",
      "Gội từ từ, nhẹ tay hết mức, vì mỗi nang tầm 27 nghìn.",
      "Cách gội cụ thể làm đúng hướng dẫn của nơi mình cấy.",
    ],
    faq: [
      { q: "Sau cấy tóc bao lâu thì tự gội đầu được?", a: "Mình theo lịch chăm sóc ở phòng khám mấy ngày đầu, đến ngày 5 mới tự chăm sóc tại nhà. Mốc của từng người anh em hỏi phòng khám nơi mình cấy." },
    ],
  },
  {
    slug: "bong-vay-sau-cay-toc",
    title: "Bong vảy sau cấy tóc: ngày 12 mình đã hoảng thế nào",
    description: "Bong vảy sau cấy tóc có sao không? Nhật ký ngày 12 đến 17 của mình: vảy bong nhiều, rụng theo cả tóc, sợ rụng nang, rồi tóc con vẫn mọc đều.",
    date: "2026-10-17",
    category: "Kinh nghiệm",
    tags: ["Tháng đầu", "Chăm sóc sau cấy"],
    cover: cover("7639266117839555861"),
    coverAlt: "Ngày 17 sau cấy tóc, cả ngày soi tóc",
    tldr: [
      "Ngày 12 vảy bong nhiều, rụng theo cả tóc làm mình hoảng.",
      "Ngày 14 vẫn soi gương mỗi ngày, có hôm stress vì sợ rụng nang.",
      "Ngày 17 tóc con vẫn mọc đều, mình mới thở phào.",
    ],
    faq: [
      { q: "Bong vảy sau cấy tóc có bình thường không?", a: "Mình bị bong vảy nhiều khoảng ngày 12 đến 14, sau đó tóc con vẫn mọc đều. Thấy lo thì anh em hỏi ngay phòng khám nơi mình cấy." },
    ],
  },
  {
    slug: "doi-mu-bao-hiem-sau-cay-toc",
    title: "Sau cấy tóc bao lâu thì được đội mũ bảo hiểm?",
    description: "Sau cấy tóc bao lâu được đội mũ bảo hiểm? Ngày 11 mình vẫn chưa được đội nên chuyển sang đi xe bus, đến ngày 58 mình đã đội lại.",
    date: "2026-10-16",
    category: "Kinh nghiệm",
    tags: ["Mũ bảo hiểm", "Tháng đầu", "Đi làm"],
    cover: cover("7637338948250930452"),
    coverAlt: "Đi xe bus thay taxi ngày 11 sau cấy tóc",
    tldr: [
      "Mới cấy chưa được đội mũ bảo hiểm, mình chuyển sang xe bus.",
      "Ngày 58 mình đã đội lại và quay video cách đội để bảo vệ vùng cấy.",
      "Mốc chính xác mỗi người khác nhau, hỏi bác sĩ trước khi đội.",
    ],
    faq: [
      { q: "Sau cấy tóc bao lâu được đội mũ bảo hiểm?", a: "Ngày 11 mình vẫn chưa được đội nên đi xe bus. Đến ngày 58 thì mình đã đội lại. Mốc chính xác cho từng người anh em nên hỏi bác sĩ nơi mình cấy." },
    ],
  },
  {
    slug: "di-lam-sau-cay-toc",
    title: "Sau cấy tóc có phải nghỉ làm không? Chuyện thật của mình",
    description: "Sau cấy tóc có phải nghỉ làm lâu không? Mình vẫn ở trọ, vẫn đi làm, ngày 22 ra đường chẳng ai biết mới cấy, kể cả lúc rụng sốc vẫn đi làm.",
    date: "2026-10-16",
    category: "Kinh nghiệm",
    tags: ["Đi làm", "Tháng đầu"],
    cover: cover("7650498975174364436"),
    coverAlt: "Ngày 47 sau cấy tóc, rụng trắng hai bên",
    tldr: [
      "Sau cấy mình vẫn ở trọ, vẫn đi làm, chỉ là phải đi xe bus.",
      "Ngày 22 ra đường không nói chắc chẳng ai biết mình mới cấy.",
      "Lúc rụng sốc có hôm chẳng dám ra đường, nhưng mình vẫn đi làm mỗi ngày.",
    ],
    faq: [
      { q: "Cấy tóc xong có phải nghỉ làm không?", a: "Mình vẫn đi làm sau cấy, chỉ là chưa đội được mũ bảo hiểm nên phải đi xe bus. Nghỉ bao lâu cho hợp công việc thì anh em hỏi bác sĩ trước khi xếp lịch cấy." },
    ],
  },
  {
    slug: "dung-minoxidil-sau-cay-toc",
    title: "Dùng minoxidil (mino) sau cấy tóc: mình bắt đầu từ ngày 29",
    description: "Ngày 29 sau cấy, lúc tóc con rơi nhiều hơn, mình bắt đầu dùng mino dạng xịt. Kể thật lúc mới dùng và vì sao nên hỏi bác sĩ trước.",
    date: "2026-10-16",
    category: "Kinh nghiệm",
    tags: ["Mino", "Tháng đầu"],
    cover: cover("7643834446566657301"),
    coverAlt: "Dùng mino ngày 29 sau cấy tóc",
    tldr: [
      "Ngày 29 tóc con rơi nhiều hơn, mình bắt đầu dùng mino dạng xịt.",
      "Mình có quay video cách mình xịt để anh em tham khảo.",
      "Mino là thuốc, dùng hay không phải hỏi bác sĩ.",
    ],
    faq: [
      { q: "Sau cấy tóc có nên dùng minoxidil không?", a: "Mình dùng mino dạng xịt từ ngày 29. Mino là thuốc, nên dùng hay không, dùng loại nào anh em phải hỏi bác sĩ." },
    ],
  },
  {
    slug: "tiem-prp-sau-cay-toc",
    title: "Tiêm PRP sau cấy tóc: mình tiêm lần 1 vào ngày 55",
    description: "Ngày 55 sau cấy, giữa giai đoạn rụng sốc, mình đi tiêm PRP lần 1 để hỗ trợ nang tóc. Đây là lúc đó tóc mình thế nào và chuyện sau đó.",
    date: "2026-10-15",
    category: "Kinh nghiệm",
    tags: ["PRP", "Rụng sốc"],
    cover: cover("7654014804973243668"),
    coverAlt: "Tiêm PRP lần 1 ngày 55 sau cấy tóc",
    tldr: [
      "Ngày 55, giữa lúc rụng sốc, mình tiêm PRP lần 1 để hỗ trợ nang tóc.",
      "Ngày 85 mình mới thấy tóc con xuất hiện.",
      "Có nên tiêm hay không tuỳ mỗi người, hỏi bác sĩ.",
    ],
    faq: [
      { q: "Có cần tiêm PRP sau cấy tóc không?", a: "Mình tiêm PRP lần 1 vào ngày 55 để hỗ trợ nang tóc. Có nên tiêm hay không thì tuỳ tình trạng từng người, anh em nên hỏi bác sĩ." },
    ],
  },
  {
    slug: "sau-cay-toc-2-thang",
    title: "Tóc sau cấy 2 tháng: nhìn còn thưa hơn cả trước khi cấy",
    description: "Tóc cấy sau 2 tháng trông thế nào? Ảnh thật ngày 60 của mình: đang rụng sốc, nhìn còn thưa hơn cả lúc chưa cấy, và chuyện sau đó.",
    date: "2026-10-15",
    category: "Kinh nghiệm",
    tags: ["Rụng sốc", "Mốc thời gian"],
    cover: cover("7660401265397992725"),
    coverAlt: "Tóc ngày 72 sau cấy, hai bên chữ M vẫn trọc",
    tldr: [
      "Tròn 2 tháng, tóc mình nhìn còn thưa hơn cả trước khi cấy.",
      "Lúc này đang giữa giai đoạn rụng sốc.",
      "Khoảng 25 ngày sau, ngày 85, tóc con bắt đầu xuất hiện.",
    ],
    faq: [
      { q: "Sau cấy tóc 2 tháng trông thế nào?", a: "Với mình, ngày 60 nhìn còn thưa hơn cả trước khi cấy vì đang rụng sốc. Đến ngày 85 tóc con mới bắt đầu xuất hiện." },
    ],
  },
  {
    slug: "stress-sau-cay-toc",
    title: "Stress sau cấy tóc: mình đã qua giai đoạn tụt mood thế nào",
    description: "Rụng sốc làm mình stress đến mức chẳng dám ra đường. Đây là những gì đã giúp mình qua giai đoạn tụt mood sau cấy tóc.",
    date: "2026-10-15",
    category: "Kinh nghiệm",
    tags: ["Tâm lý", "Rụng sốc"],
    cover: cover("7651847477615709460"),
    coverAlt: "Ngày 50 sau cấy tóc, giai đoạn tụt mood",
    tldr: [
      "Ngày 40 đến 50 mình stress đến mức chẳng dám ra đường.",
      "Vẫn đi làm mỗi ngày và xem nhật ký người khác giúp mình đỡ hơn.",
      "Tin nhắn động viên của anh em giúp nhiều hơn mình nghĩ.",
    ],
    faq: [
      { q: "Làm sao để bớt stress khi rụng sốc sau cấy tóc?", a: "Với mình là vẫn đi làm mỗi ngày, bớt soi gương, xem nhật ký của người khác và đọc tin nhắn động viên. Nếu lo về tóc thì hỏi bác sĩ nơi mình cấy." },
    ],
  },
  {
    slug: "sau-cay-toc-3-thang",
    title: "Tóc sau cấy 3 tháng: ngày 85 mình thấy tóc con đầu tiên",
    description: "Sau cấy tóc 3 tháng tóc mọc chưa? Với mình, ngày 72 vẫn trọc hai bên, ngày 85 tóc con mới xuất hiện và ngày 90 mọc rõ hơn.",
    date: "2026-10-14",
    category: "Kinh nghiệm",
    tags: ["Tóc mọc lại", "Mốc thời gian"],
    cover: cover("7665310951930858773"),
    coverAlt: "Tóc con xuất hiện ngày 85 sau cấy",
    tldr: [
      "Ngày 72 hai bên chữ M vẫn trọc, chưa có dấu hiệu gì.",
      "Ngày 85 tóc con xuất hiện, ngày 90 mọc rõ hơn.",
      "Đang ở tháng 2, tháng 3 mà chưa thấy gì thì cứ bình tĩnh.",
    ],
    faq: [
      { q: "Sau cấy tóc 3 tháng tóc mọc chưa?", a: "Với mình, ngày 85 mới thấy tóc con xuất hiện, ngày 90 mọc rõ hơn. Mỗi người nhanh chậm khác nhau." },
    ],
  },
  {
    slug: "choi-the-thao-sau-cay-toc",
    title: "Chơi thể thao sau cấy tóc: ngày 95 mình chơi lại",
    description: "Sau cấy tóc bao lâu thì chơi thể thao được? Ngày 95, khi tóc con vừa nhú, mình chơi thể thao cường độ cao trở lại. Đây là cảm giác của mình.",
    date: "2026-10-14",
    category: "Kinh nghiệm",
    tags: ["Thể thao", "Tóc mọc lại"],
    cover: cover("7668341258640755988"),
    coverAlt: "Ngày 95 sau cấy tóc, tóc con đang lên",
    tldr: [
      "Ngày 95, tóc con vừa nhú, mình chơi thể thao cường độ cao trở lại.",
      "Sau gần 2 tháng rụng sốc, tâm trạng mình lên hẳn.",
      "Bao lâu thì vận động mạnh được, anh em hỏi bác sĩ.",
    ],
    faq: [
      { q: "Sau cấy tóc bao lâu thì chơi thể thao được?", a: "Mình chơi thể thao cường độ cao trở lại vào ngày 95. Mốc này của mình, còn với anh em thì phải hỏi bác sĩ nơi mình cấy." },
    ],
  },
  {
    slug: "doi-dau-goi-sau-cay-toc",
    title: "Đổi dầu gội sau cấy tóc: ngày 105 mình thấy đỡ bết, giảm rụng",
    description: "Ngày 105 sau cấy, tóc mọc rõ hơn hẳn và mình đổi sang loại dầu gội khác, dùng thấy đỡ bết và giảm rụng. Kể thật trải nghiệm của mình.",
    date: "2026-10-13",
    category: "Kinh nghiệm",
    tags: ["Dầu gội", "Tóc mọc lại"],
    cover: cover("7672782720128306452"),
    coverAlt: "Đổi dầu gội ngày 105 sau cấy tóc",
    tldr: [
      "Ngày 105 tóc mọc rõ hơn hẳn, mình đổi sang loại dầu gội khác.",
      "Mình dùng thấy đỡ bết và giảm rụng, sản phẩm để trong video ngày 105.",
      "Mỗi người hợp một loại, cứ thử rồi tự cảm nhận.",
    ],
    faq: [
      { q: "Sau cấy tóc nên dùng dầu gội gì?", a: "Tháng đầu mình gội theo hướng dẫn của phòng khám. Ngày 105 mình đổi sang loại khác, thấy đỡ bết và giảm rụng. Mỗi người hợp một loại, giai đoạn đầu thì nên hỏi phòng khám trước khi đổi." },
    ],
  },
  {
    slug: "sau-cay-toc-5-thang",
    title: "Tóc sau cấy 5 tháng: ảnh thật ngày 155 của mình",
    description: "Cấy tóc sau 5 tháng trông thế nào? Ngày 132 tóc lên ổn định, ngày 148 lên rất nhanh, ngày 155 mình thấy đã khá ổn. Kèm ảnh thật.",
    date: "2026-10-13",
    category: "Kinh nghiệm",
    tags: ["Kết quả", "Mốc thời gian"],
    cover: cover("7688753879156034836"),
    coverAlt: "Tóc ngày 148 sau cấy, hơn 5 tháng",
    tldr: [
      "Ngày 132 tóc lên ổn định.",
      "Ngày 148 tóc lên rất nhanh, ngày 155 mình thấy đã khá ổn.",
      "Mốc tiếp theo là tròn 6 tháng, ngày 27/10/2026.",
    ],
    faq: [
      { q: "Sau cấy tóc 5 tháng trông thế nào?", a: "Với mình, ngày 155 tóc đã lên khá ổn, khác hẳn ảnh ngày 60. Mình vẫn đang chờ tóc dài và dày thêm." },
    ],
  },
  {
    slug: "vi-sao-minh-quay-nhat-ky-cay-toc",
    title: "Review cấy tóc thật: vì sao mình quay nhật ký hơn 100 video",
    description: "Muốn xem review cấy tóc từ đầu đến cuối rất khó, nên mình tự quay nhật ký cấy tóc trên TikTok, đến giờ hơn 106 video, cả lúc ổn lẫn lúc thảm.",
    date: "2026-10-12",
    category: "Kinh nghiệm",
    tags: ["Review", "Tâm lý"],
    cover: cover("7666708171423042837"),
    coverAlt: "Nhật ký cấy tóc ngày 90 trên TikTok",
    tldr: [
      "Sau cấy, ngày nào mình cũng xem review của người khác.",
      "Khó tìm được một hành trình trọn vẹn, nên mình tự quay, đến giờ hơn 106 video.",
      "Trang này gom hết lại để anh em tự xem và tự quyết.",
    ],
    faq: [
      { q: "Xem review cấy tóc thật ở đâu?", a: "Mình quay nhật ký cấy tóc trên TikTok @nguyensonarsenal từ những ngày đầu, và gom ảnh, video từng mốc về trang này." },
    ],
  },
];

// Bài đang viết, chưa có nội dung (cần số liệu thật)
export const upcomingPosts = ["Cấy tóc hết bao nhiêu tiền? Mình kể hết"];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
