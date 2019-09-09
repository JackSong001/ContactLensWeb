import { Injectable } from '@angular/core';
import { Product } from '../../data/model/product';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  getProduct(name: string): Observable<Product> {
    return this.http.get<Product>(`/api/product/${name}`);
  }
}
