// Các mốc hành trình, lấy từ video TikTok @nguyensonarsenal.
// Ghi chú là lời trong caption video. Cập nhật `status` mỗi khi qua một mốc.
// done: đã qua, next: mốc sắp tới, upcoming: còn xa
export type MilestoneStatus = "done" | "next" | "upcoming";

export type Milestone = {
  label: string;
  date: string;
  stage: string;
  note: string;
  status: MilestoneStatus;
  image?: string; // ảnh trong public/
  video?: string; // link video TikTok của mốc này
};

const video = (id: string) => `https://www.tiktok.com/@nguyensonarsenal/video/${id}`;
const cover = (id: string) => `/images/tiktok/${id}.jpg`;

export const milestones: Milestone[] = [
  {
    label: "Ngày 5",
    date: "02/05/2026",
    stage: "Ngày đầu tự chăm sóc tại nhà",
    note: "Vùng cấy khô hơn nhiều rồi nên cũng yên tâm hơn chút.",
    status: "done",
    image: cover("7635082230238383380"),
    video: video("7635082230238383380"),
  },
  {
    label: "Ngày 29",
    date: "25/05/2026",
    stage: "Tóc con bắt đầu rơi",
    note: "Tóc con đã rơi nhiều hơn. Mình bắt đầu dùng mino.",
    status: "done",
    image: cover("7643834446566657301"),
    video: video("7643834446566657301"),
  },
  {
    label: "Ngày 60",
    date: "27/06/2026",
    stage: "Rụng sốc, thưa nhất",
    note: "Tròn 2 tháng, nhìn còn thưa hơn cả trước khi cấy.",
    status: "done",
    image: cover("7656013842639752468"),
    video: video("7656013842639752468"),
  },
  {
    label: "Ngày 90",
    date: "26/07/2026",
    stage: "Tóc con nhú lên",
    note: "Cuối cùng cũng thấy tóc con mọc rõ hơn rồi.",
    status: "done",
    image: cover("7666708171423042837"),
    video: video("7666708171423042837"),
  },
  {
    label: "Ngày 105",
    date: "11/08/2026",
    stage: "Mọc rõ hơn hẳn",
    note: "Nhìn khác hẳn giai đoạn rụng trước đó.",
    status: "done",
    image: cover("7672782720128306452"),
    video: video("7672782720128306452"),
  },
  {
    label: "Ngày 132",
    date: "09/09/2026",
    stage: "Tóc lên ổn định",
    note: "Mong tóc sẽ mọc dài và dày hơn nữa.",
    status: "done",
    image: cover("7683528982536506644"),
    video: video("7683528982536506644"),
  },
  {
    label: "Ngày 155",
    date: "04/10/2026",
    stage: "Hơn 5 tháng",
    note: "Mình thấy vút vút các kiểu được rồi.",
    status: "done",
    image: cover("7692857707140812052"),
    video: video("7692857707140812052"),
  },
  { label: "Tháng 6", date: "27/10/2026", stage: "Mốc nửa năm", note: "", status: "next" },
  { label: "Tháng 9", date: "27/01/2027", stage: "Tóc dày và dài hơn", note: "", status: "upcoming" },
  { label: "Tháng 12", date: "27/04/2027", stage: "Tròn 1 năm", note: "", status: "upcoming" },
];
