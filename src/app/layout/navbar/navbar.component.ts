import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  selectedCategory = 'none';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToProductCategory(category: any): void {
    this.router.navigate([`/product-categorys`, category]);
  }

}
