import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { InteriorProductComponent } from './all-products/interior-product/interior-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCategoriesComponent,
    AllProductsComponent,
    NavbarComponent,
    InteriorProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
