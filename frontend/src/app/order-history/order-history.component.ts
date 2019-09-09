import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../service/orders.service';
import { OrderInfo, Order, OrderList } from '../../data/model/product';
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  dataSource: Order[];
  orderList: OrderList[];
  displayedColumns: string[] = ['img', 'name', 'bc', 'pwr', 'qty', 'price'];


  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      const email = JSON.parse(localStorage.getItem('user'));
      this.ordersService.getOrderList(email).subscribe((resp: OrderList[]) => {
        if (resp) {
          this.orderList = resp;
        }
      });
    }
  }

}
