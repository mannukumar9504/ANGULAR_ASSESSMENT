import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ModalService } from '../../modal/modal.service';
import { MatSnackBar} from '@angular/material/snack-bar'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ForumAnswerService } from './forum-answer.service';

@Component({
  selector: 'app-forum-answer',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './forum-answer.component.html',
  styleUrl: './forum-answer.component.css'
})
export class ForumAnswerComponent implements OnInit {
  sub: any;
  userInfo: any = '';
  list:any = [];
constructor( private shareService: ModalService, 
  private route: Router,
  private apiService: ForumAnswerService,
  private snackbar: MatSnackBar) {}
ngOnInit() {
 this.sub = this.shareService.currentData.subscribe((data:any) => {
    if(!data?.userInfo) {
      this.snackbar.open("plese provide required value!",'',{duration: 1000});
      this.route.navigate(['']);
    }
    this.userInfo = data['userInfo'];
    this.list = data["list"] ? JSON.parse(data['list']): [];
  })
}
ngOnDestroy() {
  this.sub.unsubscribe();
}

saveList(list: any) {
  let body = {questions: list};
  const obs = this.apiService.addtQuestions(body).subscribe((data:any) => {
    obs.unsubscribe();
  }, (error) => {
    //to do
  })
 return true;
}
}
