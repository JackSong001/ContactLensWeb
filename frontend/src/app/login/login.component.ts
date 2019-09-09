import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userExist = true;
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  logIn(form: NgForm) {
    this.userExist = true;
    const email = form.value.email;
    const password = form.value.password;
    this.userService.getUser(email, password).subscribe(result => {
      localStorage.setItem('user', JSON.stringify(result.email));
      this.router.navigate(['/account']);
    }, error => {
      this.userExist = false;
      console.log(error);
    });
  }

  register() {
    console.log('register');
    this.router.navigate(['/register']);
  }
}
