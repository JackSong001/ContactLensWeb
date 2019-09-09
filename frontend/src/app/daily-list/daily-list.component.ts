import { Component, OnInit } from '@angular/core';
import { Product } from 'src/data/model/product';
import { ProductServiceService } from 'src/data/service/product-service.service';

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.css']
})
export class DailyListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe( resp => {
      this.products = resp.filter( prod => prod.type.includes('Daily'));
    });
  }
}
