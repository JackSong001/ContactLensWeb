import { Component, OnInit, Input } from '@angular/core';
import {Product } from '../../data/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() isType = false;

  ngOnInit() {
  }
}
