import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-forum-answer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forum-answer.component.html',
  styleUrl: './forum-answer.component.css'
})
export class ForumAnswerComponent implements OnInit {
  sub: any;
  userInfo: any = '';
  list:any = [];
constructor( private shareService: ModalService, private route: Router) {}
ngOnInit() {
 this.sub = this.shareService.currentData.subscribe((data:any) => {
    if(!data?.userInfo) {
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
