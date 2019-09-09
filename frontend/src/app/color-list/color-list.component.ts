import { Component, OnInit } from '@angular/core';
import { Product } from 'src/data/model/product';
import { ProductServiceService } from 'src/data/service/product-service.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {
  products: Product[] = [];
  constructor( private productService: ProductServiceService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe( resp => {
      this.products = resp.filter( prod => prod.type.includes('Color'));
    });
  }
}
