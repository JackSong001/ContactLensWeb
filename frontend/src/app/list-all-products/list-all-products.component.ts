import { Component, OnInit } from '@angular/core';
import { Product } from '../../data/model/product';
import { ProductServiceService } from 'src/data/service/product-service.service';

@Component({
  selector: 'app-list-all-products',
  templateUrl: './list-all-products.component.html',
  styleUrls: ['./list-all-products.component.css']
})
export class ListAllProductsComponent implements OnInit {
  acuvue: Product[];
  airOptix: Product[];
  dailies: Product[];
  bauschLomb: Product[];
  cooperVision: Product[];
  freshLook: Product[];
  products: Product[] = [];

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe( resp => {
      this.getProducts(resp);
    });
  }

  getProducts(productList: Product[]) {
    this.acuvue = productList.filter( item => item.brand === 'Acuvue');
    this.airOptix = productList.filter( item => item.brand === 'AIR OPTIX');
    this.dailies = productList.filter( item => item.brand === 'DAILIES');
    this.bauschLomb = productList.filter( item => item.brand === 'Bausch & Lomb');
    this.cooperVision = productList.filter( item => item.brand === 'CooperVision');
    this.freshLook = productList.filter( item => item.brand === 'FreshLook');
  }
}
