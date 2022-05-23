import {DanhMuc} from "./danhMuc";

export interface BaiDang {
  id: number,
  tieuDe: string,
  danhMuc: DanhMuc,
  vungMien: String,
  banLa: number,
  huong: String,
  tinhTrang: number,
  diaChi: string,
  dienTich: number,
  gia: number,
  noiDung: string,
  hinhAnh: string
}
