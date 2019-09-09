import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../data/model/product';

// a bread-crumb navigation
@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {
  @Input() productInfo: Product;
  @Input() type = '';
  name = '';
  brand = '';
  typeList: string[] = [];

  constructor() {
  }

  ngOnInit() {
    if (this.productInfo) {
      this.typeList = this.productInfo.type;
      this.name = this.productInfo.name;
      this.brand = this.productInfo.brand;
    }
  }

}
