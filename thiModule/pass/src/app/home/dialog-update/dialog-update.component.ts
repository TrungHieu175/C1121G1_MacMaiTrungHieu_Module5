import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BaiDangService} from "../../services/bai-dang.service";
import {Router} from "@angular/router";
import {DanhMucService} from "../../services/danh-muc.service";
import {DanhMuc} from "../../model/danhMuc";
@Component({
  selector: 'app-bai-dang-update',
  templateUrl: './bai-dang-update.component.html',
  styleUrls: ['./bai-dang-update.component.css']
})
export class BaiDangUpdateComponent implements OnInit {
  baiDangForm: FormGroup;
  danhMucs: DanhMuc[];
  constructor(private fb: FormBuilder,
              private baiDangService: BaiDangService,
              private router: Router,
              private danhMucService: DanhMucService,
              @Inject(MAT_DIALOG_DATA) public updateData : any,
              private dialogRef : MatDialogRef<BaiDangUpdateComponent>) {
    this.getAllDanhMucs();
  }

  ngOnInit(): void {
    this.baiDangForm = this.fb.group({
      id: ['', [Validators.required]],
      tieuDe: ['', [Validators.required]],
      danhMuc: [''],
      vungMien: [''],
      banLa: [''],
      huong: [''],
      tinhTrang: [''],
      diaChi: ['', [Validators.required]],
      dienTich: ['', [Validators.required,]],
      gia: ['', [Validators.required,]],
      noiDung: ['', [Validators.required]],
      hinhAnh: [''],
    })

    if(this.updateData){
      this.baiDangForm.controls['id'].setValue(this.updateData.id);
      this.baiDangForm.controls['tieuDe'].setValue(this.updateData.tieuDe);
      this.baiDangForm.controls['danhMuc'].setValue(this.updateData.danhMuc.id);
      this.baiDangForm.controls['vungMien'].setValue(this.updateData.vungMien.id);
      this.baiDangForm.controls['banLa'].setValue(this.updateData.banLa);
      this.baiDangForm.controls['huong'].setValue(this.updateData.huong.id);
      this.baiDangForm.controls['tinhTrang'].setValue(this.updateData.tinhTrang);
      this.baiDangForm.controls['diaChi'].setValue(this.updateData.diaChi);
      this.baiDangForm.controls['dienTich'].setValue(this.updateData.dienTich);
      this.baiDangForm.controls['gia'].setValue(this.updateData.gia);
      this.baiDangForm.controls['noiDung'].setValue(this.updateData.noiDung);
      this.baiDangForm.controls['hinhAnh'].setValue(this.updateData.hinhAnh);
    }
  }

  get tieuDe() {
    return this.baiDangForm.get('tieuDe');
  }
  get danhMuc() {
    return this.baiDangForm.get('danhMuc');
  }
  get vungMien() {
    return this.baiDangForm.get('vungMien');
  }
  get banLa() {
    return this.baiDangForm.get('banLa');
  }
  get huong() {
    return this.baiDangForm.get('huong');
  }
  get tinhTrang() {
    return this.baiDangForm.get('tinhTrang');
  }
  get diaChi() {
    return this.baiDangForm.get('diaChi');
  }
  get dienTich() {
    return this.baiDangForm.get('dienTich');
  }
  get gia() {
    return this.baiDangForm.get('gia');
  }
  get noiDung() {
    return this.baiDangForm.get('noiDung');
  }
  get hinhAnh() {
    return this.baiDangForm.get('hinhAnh');
  }

  getAllDanhMucs(){
    this.danhMucService.getAllDanhMucs().subscribe(
      (response)=>{ this.danhMucs = response.data;},
      (error)=>{ alert('FAILED')}
    )
  }
  compareFnDanhMuc(c1: DanhMuc, c2: DanhMuc): boolean{
    // console.log(c1 && c2 ? c1.id == c2.id : c1 == c2);
    // return c1 && c2 ? c1.id == c2.id : c1 == c2;
    return c1.id == c2.id;
  };

  luuBaiDang() {
    if (this.baiDangForm.valid){
      console.log(this.baiDangForm.value);
      this.baiDangService.putBaiDang(this.updateData.id, this.baiDangForm.value).subscribe(
        (response)=>{
          alert('OK');
          this.baiDangForm.reset();
          this.dialogRef.close('update');
        },
        (error)=>{ alert('Failed') }
      );
    } else {
      alert('Failed');
    }
  }
}
