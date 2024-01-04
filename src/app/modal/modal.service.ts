import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }
  private data = new BehaviorSubject("");
  currentData = this.data.asObservable();

  setData(data: any) {
    this.data.next(data);
}
}
