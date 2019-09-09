import { Component, OnInit } from '@angular/core';
import { Product } from 'src/data/model/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

// list all products filter by brand
@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  products: Product[] = [];
  brand = '';

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.route.params.subscribe( params => {
      this.brand = params.name;
    });
   }

  ngOnInit() {
    this.productService.getAllProducts().subscribe( resp => {
      this.products = resp.filter(prod => prod.brand === this.brand);
    });
  }
}
