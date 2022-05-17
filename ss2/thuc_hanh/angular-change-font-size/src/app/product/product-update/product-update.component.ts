import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";



@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  categories: Category[] = [];
  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router:Router,
              private categoryService: CategoryService,) {
    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   this.id = +paramMap.get('id');
    //   const product = this.getProduct(this.id);
    //   this.productForm = new FormGroup({
    //     id: new FormControl(product.id),
    //     name: new FormControl(product.name),
    //     price: new FormControl(product.price),
    //     description: new FormControl(product.description),
    //   });
    // });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit(): void {
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
        category: new FormControl(product.category.id)
      });
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    product.category = {
      id: product.category
    };
    this.productService.updateProduct(id, product).subscribe(() => {
      alert('Cập nhật thành công');
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(categoires => {
      this.categories = categoires;
    });
  }
}
