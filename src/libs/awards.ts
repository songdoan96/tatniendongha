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
  | "giaiphu2"
  | "giaiphu3"
  | "giaiphu4"
  | "giaiphu5"
  | "giaiphu6"
  | "giaiphu7"
  | "giaiphu8"
  | "giaiphu9"
  | "dacbiet";

export const awards: AwardType[] = [
  { name: "khuyenkhich", title: "giải khuyến khích", money: "500.000đ/giải", qty: 30 },
  { name: "giaiba", title: "giải ba", money: "1.000.000đ/giải", qty: 3 },
  { name: "giainhi", title: "giải nhì", money: "1.500.000đ/giải", qty: 2 },
  { name: "giainhat", title: "giải nhất", money: "2.000.000đ/giải", qty: 1 },
  { name: "congdoan", title: "giải công đoàn", money: "500.000đ/giải", qty: 10 },
  // { name: "giamdoc", title: "giải giám đốc", money: "1.000.000đ/giải" },
  { name: "dacbiet", title: "giải đặc biệt", money: "3.000.000đ/giải", qty: 1 },
  { name: "giaiphu", title: "giải phụ" },
  { name: "giaiphu1", title: "giải phụ" },
  { name: "giaiphu2", title: "giải phụ" },
  { name: "giaiphu3", title: "giải phụ" },
  { name: "giaiphu4", title: "giải phụ" },
  { name: "giaiphu5", title: "giải phụ" },
  { name: "giaiphu6", title: "giải phụ" },
  { name: "giaiphu7", title: "giải phụ" },
  { name: "giaiphu8", title: "giải phụ" },
  { name: "giaiphu9", title: "giải phụ" },
];
export const LOCALSTORAGE_BLACKLIST_KEY = "blacklist";
