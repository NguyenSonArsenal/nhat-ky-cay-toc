// Thông tin chung của site. Ô nào để trống ("" hoặc null) sẽ hiện "Đang cập nhật".
export const site = {
  name: "Nhật Ký Cấy Tóc",
  tagline: "Nhật ký cấy tóc của một người làm công ăn lương",
  author: "Sơn",
  nickname: "Sơn Arsenal",
  surgeryDate: "27/04/2026",
  currentMonth: 6,
  nextUpdate: "27/10/2026",

  clinic: "Phòng khám bác sĩ Duy Thành",
  doctor: "Bác sĩ Duy Thành",
  discount: "3 triệu",
  tiktok: "https://www.tiktok.com/@nguyensonarsenal",
  tiktokHandle: "@nguyensonarsenal",
  tiktokVideos: 106,
  facebook: "https://www.facebook.com/nguyensonarsenal.10",
  zaloPhone: "0964047698",

  // TODO: điền khi có thông tin
  grafts: 2450,
  referralCode: "", // để trống: khách nhắn tin để nhận mã
  youtube: "",
};

export const PENDING = "Đang cập nhật";

export const zaloUrl = site.zaloPhone ? `https://zalo.me/${site.zaloPhone}` : "";

// 0964047698 -> 0964 047 698
export const zaloDisplay = site.zaloPhone.replace(/^(\d{4})(\d{3})(\d+)$/, "$1 $2 $3");

// Kênh nhận mã ưu đãi: ưu tiên Zalo, chưa có thì dùng TikTok
export const contactUrl = zaloUrl || site.tiktok;
