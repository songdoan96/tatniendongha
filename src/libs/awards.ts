export interface AwardType {
  name: AwardNameType;
  title: string;
  money?: string;
  qty?: number;
}

export type AwardNameType =
  | "khuyenkhich"
  | "giaiba"
  | "giainhi"
  | "giainhat"
  | "congdoan"
  | "giamdoc"
  | "giaiphu"
  | "giaiphu1"
  | "khachhang1"
  | "khachhang2"
  | "khachhang3"
  | "khachhang4"
  | "khachhang5"
  | "dacbiet"
  | "aurora";

export const awards: AwardType[] = [
  { name: "khuyenkhich", title: "giải khuyến khích", money: "500.000đ/giải", qty: 30 },
  { name: "giaiba", title: "giải ba", money: "1.000.000đ/giải", qty: 3 },
  { name: "giainhi", title: "giải nhì", money: "1.500.000đ/giải", qty: 2 },
  { name: "giainhat", title: "giải nhất", money: "2.000.000đ/giải", qty: 1 },
  { name: "congdoan", title: "giải công đoàn", money: "500.000đ/giải", qty: 10 },
  { name: "aurora", title: "giải KH AURORA", money: "1.000.000đ/giải", qty: 10 },
  // { name: "giamdoc", title: "giải giám đốc", money: "1.000.000đ/giải" },
  { name: "khachhang1", title: "giải khách hàng" },
  { name: "khachhang2", title: "giải khách hàng" },
  { name: "khachhang3", title: "giải khách hàng" },
  { name: "khachhang4", title: "giải khách hàng" },
  { name: "khachhang5", title: "giải khách hàng" },
  { name: "giaiphu", title: "giải phụ" },
  { name: "giaiphu1", title: "giải phụ" },
  { name: "dacbiet", title: "giải đặc biệt", money: "3.000.000đ/giải", qty: 1 },
];
export const LOCALSTORAGE_BLACKLIST_KEY = "blacklist";
