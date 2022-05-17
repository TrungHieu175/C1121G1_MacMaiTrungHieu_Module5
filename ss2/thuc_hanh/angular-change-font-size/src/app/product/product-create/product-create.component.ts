import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup = new FormGroup({

    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),

  });

  categories: Category[] = [];

  constructor(private productService: ProductService, private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
  }

  // submit() {
  //   const product = this.productForm.value;
  //   this.productService.saveProduct(product);
  //   this.productForm.reset();
  //   this.router.navigate(['/product/list'])
  // }

  submit() {
    const product = this.productForm.value;
    product.category = {
      id: product.category
    };
    this.productService.saveProduct(product).subscribe(() => {
      alert('Tạo thành công');
      this.productForm.reset();
    }, e => console.log(e));
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(categoires => {
      this.categories = categoires;
    });
  }
}
