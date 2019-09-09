import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../data/model/product';

@Component({
  selector: 'app-list-one-type',
  templateUrl: './list-one-type.component.html',
  styleUrls: ['./list-one-type.component.css']
})
export class ListOneTypeComponent implements OnInit {
  @Input() products: Product[] = [];
  priceChecked = false;
  nameChecked = false;
  sortBy = 'name';
  constructor() {
  }

  ngOnInit() {
  }
  sortByPrice() {
    this.products.sort((a: Product, b: Product) => {
      return (a.fullPrice - b.fullPrice);
    });
  }

  sortByName() {
    this.products.sort((a: Product, b: Product) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  sortProduct(type: string) {
    this.sortBy = type;
    console.log(type);
    switch (type) {
      case 'price': this.sortByPrice();
                    break;
      case 'name': this.sortByName();
                   break;
      default:
        this.products = this.products.slice();

    }
  }
}
