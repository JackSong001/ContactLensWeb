import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Product } from '../data/model/product';
import { ProductService } from './service/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eco-website';
  showDropdown = '';
  options: Product[] = [];
  myControl = new FormControl();
  filteredOptions: Observable<Product[]>;

  constructor(private router: Router, private productService: ProductService) {
    this.productService.getAllProducts().subscribe(resp => {
      this.options = resp;
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.options.slice())
        );
    }, error => {
      console.log(error);
    });
  }
  displayFn(product?: Product): string | undefined {
    return product ? product.name : undefined;
  }

  private _filter(name: string): Product[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  accountLogin() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/account']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  searchResult() {
    if (!this.myControl.value.name) {
      return;
    }
    this.router.navigate(['/products', this.myControl.value.name]);
  }
}
