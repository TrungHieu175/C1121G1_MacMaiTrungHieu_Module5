import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {BaiDangService} from "../../services/bai-dang.service";
import {DanhMucService} from "../../services/danh-muc.service";
import {DanhMuc} from "../../model/danhMuc";

@Component({
  selector: 'app-bai-dang-create',
  templateUrl: './bai-dang-create.component.html',
  styleUrls: ['./bai-dang-create.component.css']
})
export class BaiDangCreateComponent implements OnInit {
  baiDangForm: FormGroup;
  danhMucs: DanhMuc[];

  constructor(private fb: FormBuilder,
              private baiDangService: BaiDangService,
              private router: Router,
              private danhMucService: DanhMucService,
  ) {
    this.getAllDanhMucs();
  }

  ngOnInit(): void {
    this.baiDangForm = this.fb.group({
      tieuDe: ['', [Validators.required]],
      danhMuc: [''],
      vungMien: [''],
      banLa: [''],
      huong: [''],
      tinhTrang: [''],
      diaChi: ['', [Validators.required]],
      dienTich: ['', [Validators.required]],
      gia: ['', [Validators.required]],
      noiDung: ['', [Validators.required]],
      hinhAnh: [''],
    })
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





  themMoi() {
    if (this.baiDangForm.valid){
      console.log(this.baiDangForm.value);
      this.baiDangService.postBaiDang(this.baiDangForm.value).subscribe(
        (response)=>{
          alert('OK');
          this.router.navigateByUrl('/baiDang');
        },
        (error)=>{ alert('FAILED')}
      )
    } else {
      console.log('a')
      if (this.diaChi.value == '') {
        this.diaChi.setErrors({empty: 'Vong long khong de trong!'})
      }
      if (this.dienTich.value == '') {
        this.dienTich.setErrors({empty: 'Vong long khong de trong!'})
      }
      if (this.tieuDe.value == '') {
        this.tieuDe.setErrors({empty: 'Vong long khong de trong!'})
      }
      if (this.noiDung.value == '') {
        this.noiDung.setErrors({empty: 'Vong long khong de trong!'})
      }
      if (this.gia.value == '') {
        this.gia.setErrors({empty: 'Vong long khong de trong!'})
      }
      this.router.navigateByUrl('/baiDang/create');
    }

  }

  getAllDanhMucs(){
    this.danhMucService.getAllDanhMucs().subscribe(
      (response)=>{ this.danhMucs = response.data;},
      (error)=>{ alert('FAILED')}
    )
  }

}
