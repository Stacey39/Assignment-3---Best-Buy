import { ProductService } from './../shared/services/product.service';
import { Product } from './../shared/models/product.model';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private productService: ProductService
  ) {
    this.products$ = this.productService.queryProductList().pipe(map((products) => products.map((product) => ({ ...product,  photo: `/assets/img/${product.photo}`}))));
  }

  ngOnInit(): void {}

}
