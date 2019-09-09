import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { products } from '../model/product-list';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  getProduct(name: string): Observable<Product> {
    return this.http.get<Product>(`/api/product/${name}`);
  }
}
