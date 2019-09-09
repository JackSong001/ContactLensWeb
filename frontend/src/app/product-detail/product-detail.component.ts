import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product, OrderInfo, Order } from 'src/data/model/product';
import { ProductService } from '../service/product.service';
// import { ProductServiceService } from 'src/data/service/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: Product;
  relatedProds: Product[];
  pwr = ['-0.50', '-0.75', '-1.00', '-1.25',
         '-1.50', '-1.75', '-2.00', '-2.25',
         '-2.50', '-2.75', '-3.00', '-3.25',
         '-3.50', '-3.75', '-4.00', '-4.25',
         '-4.50', '-4.75', '-5.00', '-5.25',
         '-5.50', '-5.75', '-6.00', '-6.50',
         '-7.00', '-7.50', '-8.00', '-8.50',
         '-9.00', '-9.50', '-10.00', '-10.50',
         '-11.00', '-11.50', '-12.00'];
  qty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selected = '';
  order: OrderInfo = {
    name : '',
    price: 0,
    rBC: '',
    rQTY: 0,
    rPWR: '',
    lBC: '',
    lQTY: 0,
    lPWR: '',
    img: ''
  };

  rBC: string;
  rQTY: number;
  rPWR: string;
  lBC: string;
  lQTY: number;
  lPWR: string;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.productService.getProduct(params.name).subscribe( resp => {
        this.product = resp;
        this.order.name = this.product.name;
        this.order.price = this.product.dealPrice ? this.product.dealPrice : this.product.fullPrice;
        this.order.img = this.product.img[0];
        this.getRelatedProd(resp.type);
      });
    });
  }

  getRelatedProd(type: string[]) {
    this.productService.getAllProducts().subscribe( resp => {
      const list = resp.filter( prod => prod.type.includes(type[0]));
      this.relatedProds = [
        list[this.getRandomInt(list.length)],
        list[this.getRandomInt(list.length)],
        list[this.getRandomInt(list.length)]
      ];
    });
  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  setValue(order: OrderInfo, name: string, event: string|number){
    order[name] = event;
  }

  addToCart() {
    this.order.lBC = this.lBC;
    this.order.lPWR = this.lPWR;
    this.order.lQTY = this.lQTY;
    this.order.rBC = this.rBC;
    this.order.rPWR = this.rPWR;
    this.order.rQTY = this.rQTY;
    const lOrder: Order = {
      name: this.order.name,
      bc: this.order.lBC,
      qty: this.order.lQTY,
      pwr: this.order.lPWR,
      price: this.order.price,
      img: this.order.img
    };
    const rOrder: Order = {
      name: this.order.name,
      bc: this.order.rBC,
      qty: this.order.rQTY,
      pwr: this.order.rPWR,
      price: this.order.price,
      img: this.order.img
    };
    this.setLocalStorage(lOrder);
    this.setLocalStorage(rOrder);
    this.router.navigate(['/cart']);

  }

  private setLocalStorage(order: Order) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if ( cart && cart.length > 0) {
      localStorage.removeItem('cart');
      cart.push(order);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.setItem('cart', JSON.stringify([order]));
    }
  }
}
