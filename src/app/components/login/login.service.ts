import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000/api/v1';
  constructor(private http: HttpClient) { }
/**
 * function for user login
 * @returns 
 */
  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, data);
  }
  /**
   * function to register an user
   * @param list 
   * @returns 
   */
  registerUser(list: any): Observable<any> {
    console.log("url===>",this.url);
    return this.http.post<any>(`${this.url}/register/user`, list);
  }
}
