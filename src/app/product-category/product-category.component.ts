import { Product } from './../shared/models/product.model';
import { ProductService } from './../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, pluck, switchMap } from 'rxjs';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  categoryTitle$: Observable<string>;
  products$: Observable<Product[]>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.categoryTitle$ = this.route.params.pipe(pluck('category'));
    this.products$ =
      this.route.params
        .pipe(
          pluck('category'),
          switchMap((category) => this.productService.queryProductList(category)),
          map((products) => products.map((product) => ( { ...product, photo: `/assets/img/${product.photo}`})) )
        );
  }

  ngOnInit(): void {


  }

}
