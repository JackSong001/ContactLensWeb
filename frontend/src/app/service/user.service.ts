import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { UserInfo } from '../../data/model/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(email: string, password: string): Observable<UserInfo> {
    return this.http.get<UserInfo>(`/api/login/${email}/${password}`);
  }

  addUser(email: string, userInfo: UserInfo): Observable<UserInfo>  {
    return this.http.put<UserInfo>( `/api/register/${email}`, userInfo);
  }

  account(email: string): Observable<UserInfo> {
    return this.http.get<UserInfo>(`/api/account/${email}`);
  }
}
