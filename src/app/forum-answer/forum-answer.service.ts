import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumAnswerService {
 url = 'http://localhost:3000/api/v1';
  constructor(private http: HttpClient) { }
/**
 * function to get the question list
 * @returns 
 */
  getHome(): Observable<any> {
    return this.http.get<any>(`${this.url}/home`);
  }
  /**
   * function to add questions
   * @param list 
   * @returns 
   */
  addtQuestions(list: any): Observable<any> {
    return this.http.post<any>(`${this.url}/question/add`, list);
  }
}
