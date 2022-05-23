import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DanhMucService} from "../services/danh-muc.service";
import {BaiDangService} from "../services/bai-dang.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {BaiDang} from "../model/baiDang";
import {BaiDangUpdateComponent} from "./dialog-update/dialog-update.component";
import {BaiDangDeleteComponent} from "./dialog-delete/dialog-delete.component";
@Component({
  selector: 'app-bai-dang',
  templateUrl: './bai-dang.component.html',
  styleUrls: ['./bai-dang.component.css']
})
export class BaiDangComponent implements OnInit {
  baiDangList: BaiDang[] = [];
  searchForm: FormGroup;
  pageNumber: number = 0;
  first: boolean = true;
  totalPages: any;
  last: boolean;
  sortValue: string = '';
  constructor(public dialog: MatDialog,
              private danhMucService: DanhMucService,
              private baiDangService: BaiDangService,
              private fb: FormBuilder) {


  }

  ngOnInit(): void {
    this.getAllBaiDangs('','','', '');
    this.searchForm = this.fb.group({
      giaSearch: ['']
    })
  }

  getAllBaiDangs(dienTich: string, gia: string, huong: string, sort: string) {
    this.baiDangService.getAllBaiDangs(this.pageNumber,dienTich,gia,huong, sort).subscribe(
      (response) => {
        this.first = response.first;
        this.totalPages = response.totalPages;
        this.totalPages = Array(this.totalPages).fill(1).map((x, i) => i + 1); //[1, 2, 3, 4, 5]
        this.last = (response.pageable.offset + response.pageable.pageSize) >= response.totalElements;
        this.baiDangList = response.content;
      },
      (error) => {
        alert('FAILED');
      },
    )
  }

  search() {
    if (isNaN(this.searchForm.value.dienTichSearch) || this.searchForm.value.dienTichSearch.trim == '') {
      this.searchForm.get('dienTichSearch').setErrors({number: 'Ban phai nhap so!'})
    }
    if (isNaN(this.searchForm.value.huongSearch) || this.searchForm.value.huongSearch.trim == '') {
      this.searchForm.get('huongSearch').setErrors({number: 'Ban phai nhap so!'})
    }
    if (isNaN(this.searchForm.value.giaSearch) || this.searchForm.value.giaSearch.trim == '') {
      this.searchForm.get('giaSearch').setErrors({number: 'Ban phai nhap so!'})
    }
    this.getAllBaiDangs(this.searchForm.value.dienTichSearch,this.searchForm.value.giaSearch,this.searchForm.value.huongSearch, '')
  }

  updateBaiDang(row: any) {
    this.dialog.open(BaiDangUpdateComponent, {
      width: '60%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value === 'update') {
        this.getAllBaiDangs('','','','');
      }
    })
  }

  deleteBaiDang(row: any) {
    this.dialog.open(BaiDangDeleteComponent, {
      width: '60%',
      data: row
    }).afterClosed().subscribe(value => {
      if (value === 'close') {
        this.getAllBaiDangs('','','','');
      }
    })
  }

  next() {
    this.pageNumber++;
    this.getAllBaiDangs(this.searchForm.value.dienTichSearch,this.searchForm.value.giaSearch,this.searchForm.value.huongSearch,this.sortValue)
  }

  previous() {
    this.pageNumber--;
    this.getAllBaiDangs(this.searchForm.value.dienTichSearch,this.searchForm.value.giaSearch,this.searchForm.value.huongSearch,this.sortValue)
  }

  getBaiDangPaging(index: any) {
    this.pageNumber = index - 1;
    this.getAllBaiDangs(this.searchForm.value.dienTichSearch,this.searchForm.value.giaSearch,this.searchForm.value.huongSearch,this.sortValue)
  }

  refresh() {
    this.searchForm.reset();
    this.ngOnInit();
  }


  sort(value: string) {
    this.sortValue = value
    this.getAllBaiDangs(this.searchForm.value.dienTichSearch,this.searchForm.value.giaSearch,this.searchForm.value.huongSearch,this.sortValue)

  }
}
