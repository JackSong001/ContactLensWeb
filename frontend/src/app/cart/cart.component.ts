import { Component, OnInit } from '@angular/core';
import { OrderInfo, Order, OrderList } from '../../data/model/product';
import { Router } from '@angular/router';
import { OrdersService } from '../service/orders.service';

// shopping cart, get info from localstorage
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dataSource: Order[];
  // displayedColumns: string[] = ['img', 'name', 'lbc', 'lpwr', 'lqty', 'rbc', 'rpwr', 'rqty', 'price', 'delete'];
  displayedColumns: string[] = ['img', 'name', 'bc', 'pwr', 'qty', 'price', 'delete'];
  cart: Order[] = JSON.parse(localStorage.getItem('cart'));
  totlePrice = 0.0;
  loading = false;

  constructor(public router: Router, private ordersService: OrdersService) { }

  ngOnInit() {
    if (localStorage.getItem('cart')) {
      this.dataSource = this.cart.slice();
    }
  }

  removeOne(id: number) {
    const temp = this.dataSource.slice();
    temp.splice(id, 1);
    this.dataSource = temp;
    localStorage.setItem('cart', JSON.stringify(this.dataSource));
  }

  getSubTotle(): number {
    let subTotle = 0.00;
    this.dataSource.forEach(item => subTotle += (item.price * item.qty));
    return subTotle;
  }

  getTotle(): number {
    this.totlePrice = this.getSubTotle() + 10.50;
    return this.totlePrice;
  }

  checkOut() {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (!userInfo) {
      this.router.navigate(['/login']);
    } else {
      setTimeout(() => {
        this.loading = true;
        this.order(userInfo);
    }, 2000);
    }

  }

  private order(userEmail: string) {
    const date = new Date();
    const orderList: OrderList = {
      email: userEmail,
      date: date.getTime(),
      price: this.totlePrice,
      orders: this.dataSource,
    };
    this.ordersService.addOrder(orderList).subscribe(resp => {
      if (resp) {
        localStorage.removeItem('cart');
        this.loading = false;
        this.router.navigate(['/account']);
      }
    }, error => {
      this.loading = false;
      console.log(error);
    });
  }
}
