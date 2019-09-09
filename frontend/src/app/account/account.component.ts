import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserInfo } from '../../data/model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user = '';
  loading = false;
  constructor(private router: Router, private userService: UserService){}

  ngOnInit() {
    if (localStorage.getItem('user')) {
      const email = JSON.parse(localStorage.getItem('user'));
      this.userService.account(email).subscribe(resp => {
        this.user = resp.firstName;
      });
    }

  }
  signOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  onLoading(event: boolean) {
    console.log(event);
    this.loading = event;
  }

}
