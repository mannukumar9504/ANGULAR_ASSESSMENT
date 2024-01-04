import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ModalService } from '../modal/modal.service';
import {MatSnackBar} from '@angular/material/snack-bar'
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-forum-answer',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './forum-answer.component.html',
  styleUrl: './forum-answer.component.css'
})
export class ForumAnswerComponent implements OnInit {
  sub: any;
  userInfo: any = '';
  list:any = [];
constructor( private shareService: ModalService, 
  private route: Router,
  private snackbar: MatSnackBar) {}
ngOnInit() {
 this.sub = this.shareService.currentData.subscribe((data:any) => {
    if(!data?.userInfo) {
      this.snackbar.open("plese provide required value!");
      this.route.navigate(['']);
    }
    this.userInfo = data['userInfo'];
    this.list = data["list"] ? JSON.parse(data['list']): [];
  })
}
ngOnDestroy() {
  this.sub.unsubscribe();
}
}
