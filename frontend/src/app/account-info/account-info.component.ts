import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserInfo, State } from '../../data/model/product';
import { STATES } from '../../data/model/state-list';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  states: State[] = STATES;
  @Input() isRegister = '';
  @Output() loadingChange = new EventEmitter<boolean>();

  accountForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required, Validators.minLength(5)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    bod: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    receive: new FormControl(''),
  });

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      const email = JSON.parse(localStorage.getItem('user'));
      this.userService.account(email).subscribe(resp => {
        this.setForm(resp);
      });
    }
  }

  private setForm(data: UserInfo) {
    this.accountForm.setValue({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      country: data.country,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
      phone: data.phone,
      bod: (new Date(data.bod)).toISOString(),
      gender: data.gender,
      receive: data.receive,
    });
  }

  updateUserInfo() {
    // this.showInfo = false;
    this.loadingChange.emit(true);
    const value = this.accountForm.value;
    const date = new Date(value.bod);
    const receiveValue = value.receive ? true : false;
    const userInfo: UserInfo = {
      email: value.email,
      password: value.password,
      firstName: value.firstName,
      lastName: value.lastName,
      country: value.country,
      address: value.address,
      city: value.city,
      state: value.state,
      zip: value.zip,
      phone: value.phone,
      bod: date.getTime(),
      gender: value.gender,
      receive: receiveValue,
    };
    setTimeout(() => {
      this.userService.addUser(value.email, userInfo).subscribe(resp => {
        console.log(resp);
        if (resp) {
          localStorage.setItem('user', JSON.stringify(resp.email));
        }
        this.loadingChange.emit(false);
        if (this.isRegister) {
          this.router.navigate(['/login']);
        } else {
          this.ngOnInit();
        }
      }, error => {
        console.log(error);
      });
      console.log('timeout!');
    }, 2000);

  }
}
