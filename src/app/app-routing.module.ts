import { InteriorProductComponent } from './all-products/interior-product/interior-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [
  {
    path: 'product-categorys',
    component: ProductCategoriesComponent,
  },
  {
    path: 'all-products',
    children: [
      {
        path: '',
        component: AllProductsComponent,
      },
      {
        path: ':productId',
        component: InteriorProductComponent,
      },
    ]
  },
  {
    path: '',
    redirectTo: '/product-categorys',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
