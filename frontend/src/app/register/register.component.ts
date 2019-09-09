import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loading = false;
  constructor() { }

  ngOnInit() {
  }
  onLoading(event: boolean) {
    console.log(event);
    this.loading = event;
  }
}
