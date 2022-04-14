import { Product } from './../../shared/models/product.model';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { pluck, switchMap, map } from 'rxjs';

@Component({
  selector: 'app-interior-product',
  templateUrl: './interior-product.component.html',
  styleUrls: ['./interior-product.component.scss']
})
export class InteriorProductComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.product$ =
        this.route.params
          .pipe(
            pluck('productId'),
            switchMap((productId) => this.productService.getProductById(+productId)),
            map((product) => ( { ...product, photo: `/assets/img/${product.photo}`}))
          )
  }

  ngOnInit(): void {
  }

}
