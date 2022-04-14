import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { InteriorProductComponent } from './all-products/interior-product/interior-product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductCategoriesComponent,
    AllProductsComponent,
    NavbarComponent,
    InteriorProductComponent,
    ProductCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
